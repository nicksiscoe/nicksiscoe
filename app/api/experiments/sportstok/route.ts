import { Category, Video } from "@/app/experiments/sportstok/page";
import { NextResponse } from "next/server";

export type Sport = "baseball" | "basketball" | "football" | "hockey";
export type League =
  | "mlb"
  | "college-baseball"
  | "mens-college-basketball"
  | "nba"
  | "wnba"
  | "womens-college-basketball"
  | "college-football"
  | "nfl"
  | "nhl";
const leagueESPNIds = {
  mlb: "10",
  "college-baseball": "14",
  "mens-college-basketball": "41",
  nba: "46",
  wnba: "59",
  "womens-college-basketball": "54",
  "college-football": "23",
  nfl: "28",
  nhl: "90",
};
const getById = (obj: { [key: string]: string }, id: string) =>
  Object.keys(obj).find((key) => obj[key] === id);
const sports: { [key in Sport]: League[] } = {
  baseball: ["mlb", "college-baseball"],
  basketball: [
    "mens-college-basketball",
    "nba",
    "wnba",
    "womens-college-basketball",
  ],
  football: ["college-football", "nfl"],
  hockey: ["nhl"],
};

interface ESPNNewsListResponse {
  articles: ESPNRawArticle[];
}

interface ESPNRawArticle {
  headline: string;
  categories: Category[];
  links?: {
    api?: {
      news?: {
        href?: string;
      };
    };
  };
}

type ESPNNewsArticle = ESPNRawArticle & {
  links: {
    api: {
      news: {
        href: string;
      };
    };
  };
};

interface ESPNNewsDetailResponse {
  videos?: ESPNRawVideo[];
}

interface ESPNRawVideo {
  links?: {
    source?: {
      SD?: {
        href?: string;
      };
      href?: string;
    };
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.has("category")
    ? (JSON.parse(searchParams.get("category")!) as Category)
    : null;

  let urls: string[] = [];
  switch (category?.type) {
    case "league": {
      const league = getById(leagueESPNIds, category.leagueId.toString());
      const sport = Object.keys(sports).find((sport) =>
        sports[sport as Sport].includes(league as League)
      );
      if (sport && league) {
        urls = [
          `https://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/news?limit=20`,
        ];
      }
      break;
    }
    // case "team": {
    //   const sport = getById(sportESPNIds, category.sportId.toString());
    //   const league =
    //   if (sport && league) {
    //     urls = [
    //       `http://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/teams/${category.teamId}/news?limit=20`,
    //     ];
    //   }
    //   break;
    // }
    default: {
      urls = Object.keys(sports)
        .map((sport) => {
          const leagues = sports[sport as Sport];
          return leagues.map(
            (league) =>
              `https://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/news?limit=20`
          );
        })
        .flat(1);
      break;
    }
  }

  if (!urls.length) {
    return NextResponse.error();
  }

  const videos = (
    await Promise.all(
      urls.map(async (url) => {
        const articleRes = await fetch(url);
        const articleResponse =
          (await articleRes.json()) as ESPNNewsListResponse;
        const articles = articleResponse.articles.filter(
          (article): article is ESPNNewsArticle =>
            !!article?.links?.api?.news?.href
        );
        return (
          await Promise.all(
            articles.map(async (article) => {
              const res = await fetch(article.links.api.news.href);
              const response = (await res.json()) as ESPNNewsDetailResponse;
              const video: Video = {
                caption: article.headline,
                categories: article.categories.filter(
                  (category) => category.type !== "topic"
                ),
                urls:
                  response.videos
                    ?.map(
                      (video) =>
                        video?.links?.source?.SD?.href ||
                        video?.links?.source?.href
                    )
                    .filter((href): href is string => !!href) ?? [],
              };
              return video;
            })
          )
        ).filter((u) => !!u.urls?.length);
      })
    )
  ).flat(1);

  return NextResponse.json(
    videos
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  );
}

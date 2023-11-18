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
const sportESPNIds = {
  baseball: "1",
  basketball: "4",
  football: "20",
  hockey: "10",
};
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

interface Article {
  headline: string;
  categories: Category[];
  links: {
    api: {
      news: {
        href: string;
      };
    };
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.has("category")
    ? (JSON.parse(searchParams.get("category")!) as Category)
    : null;

  console.log(category);

  let urls: string[] = [];
  switch (category?.type) {
    case "league": {
      const league = getById(leagueESPNIds, category.leagueId.toString());
      const sport = Object.keys(sports).find((sport) =>
        sports[sport as Sport].includes(league as League)
      );
      if (sport && league) {
        urls = [
          `http://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/news?limit=20`,
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
              `http://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/news?limit=20`
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
        const articleResponse = await articleRes.json();
        const articles = articleResponse.articles.filter(
          (article: any) => !!article?.links?.api?.news?.href
        );
        return (
          await Promise.all(
            articles.map(async (article: Article) => {
              const res = await fetch(article.links.api.news.href);
              const response = await res.json();
              const video: Video = {
                caption: article.headline,
                categories: article.categories.filter(
                  (category) => category.type !== "topic"
                ),
                urls: response.videos?.map(
                  (video: any) =>
                    video?.links?.source?.SD?.href || video?.links?.source?.href
                ),
              };
              return video;
            })
          )
        ).filter((u) => !!u.urls?.length) as any[];
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

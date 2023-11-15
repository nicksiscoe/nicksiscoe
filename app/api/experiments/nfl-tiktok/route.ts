import { NextResponse } from "next/server";

function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export async function GET() {
  const urls = [
    "http://site.api.espn.com/apis/site/v2/sports/football/nfl/news?limit=20",
    "http://site.api.espn.com/apis/site/v2/sports/football/college-football/news?limit=20",
    "http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news?limit=20",
    "http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/news?limit=20",
    "http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/news?limit=20",
  ];
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
            articles.map(async (article: any) => {
              const res = await fetch(article.links.api.news.href);
              const response = await res.json();
              // console.log(response);
              return {
                caption: article.headline,
                urls: response.videos?.map(
                  (video: any) =>
                    video?.links?.source?.HD?.href ||
                    video?.links?.source?.SD?.href ||
                    video?.links?.source?.href
                ),
              };
            })
          )
        ).filter((u) => !!u.urls) as any[];
      })
    )
  ).flat(1);

  return NextResponse.json(shuffle(videos));
}

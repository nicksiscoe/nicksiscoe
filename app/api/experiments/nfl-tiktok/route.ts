import { NextResponse } from "next/server";

export async function GET() {
  const articleRes = await fetch(
    "http://site.api.espn.com/apis/site/v2/sports/football/nfl/news?limit=100"
  );
  const articleResponse = await articleRes.json();
  const articles = articleResponse.articles.filter(
    (article: any) => !!article?.links?.api?.news?.href
  );
  const videos: any[] = (
    await Promise.all(
      articles.map(async (article: any) => {
        const res = await fetch(article.links.api.news.href);
        const response = await res.json();
        console.log(response);
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

  return NextResponse.json(videos);
}

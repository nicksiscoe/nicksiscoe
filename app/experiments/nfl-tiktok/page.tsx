"use client";

import { useEffect, useState } from "react";

interface Video {
  caption: string;
  urls: string[];
}

export default function Experiments() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "http://site.api.espn.com/apis/site/v2/sports/football/nfl/news?limit=100"
      );
      const articleResponse = await res.json();
      const articles = articleResponse.articles.filter(
        (article: any) => !!article?.links?.api?.news?.href
      );
      const videos: Video[] = (
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
      ).filter((u) => !!u.urls) as Video[];
      setVideos(videos);
    })();
  }, []);

  return (
    <>
      <h1>nfl tiktok</h1>

      <hr />

      {videos?.map((video) => (
        <div key={video.caption}>
          <h4>{video.caption}</h4>
          {video.urls.map((url) => (
            <video
              key={url}
              controls
              src={url}
              style={{ width: "100%", maxWidth: "500px" }}
            />
          ))}
        </div>
      ))}
    </>
  );
}

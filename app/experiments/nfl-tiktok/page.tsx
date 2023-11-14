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
      const res = await fetch("/api/experiments/nfl-tiktok");
      const response = await res.json();
      setVideos(response);
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

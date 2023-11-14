"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.scss";

interface Video {
  caption: string;
  urls: string[];
}

export default function Experiments() {
  const [begin, setBegin] = useState(false);

  const [videos, setVideos] = useState<Video[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);
  // If scrollRef has stopped scrolling, play video that is in view
  useEffect(() => {
    if (!begin) return;

    let timeout: NodeJS.Timeout;
    const scroller = scrollRef.current;
    const handleScroll = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        const videos = Array.from(
          scrollRef.current?.querySelectorAll("video") || []
        );
        const videoInView = videos.find((video) => {
          const rect = video.getBoundingClientRect(),
            top = rect.top,
            bottom = rect.bottom;
          return top >= 0 && bottom <= window.innerHeight;
        });
        if (videoInView) {
          // pause every other video
          videos.forEach((video) => {
            if (video !== videoInView) video.pause();
          });
          videoInView.play();
        }
      }, 100);
    };
    handleScroll();
    scroller?.addEventListener("scroll", handleScroll);
    return () => scroller?.removeEventListener("scroll", handleScroll);
  }, [begin, videos]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/experiments/nfl-tiktok");
      const response = await res.json();
      setVideos(response);
    })();
  }, []);

  if (!begin) {
    return (
      <>
        <button onClick={() => setBegin(true)}>Enter →</button>
      </>
    );
  }

  return (
    <>
      <div className={styles.videos} ref={scrollRef}>
        {videos?.map((video) => (
          <div className={styles.video} key={video.caption}>
            {video.urls.map((url) => (
              <video
                playsInline
                loop
                key={url}
                src={url}
                style={{ width: "100%", maxWidth: "500px" }}
              />
            ))}
            <p>{video.caption}</p>
          </div>
        ))}
      </div>
    </>
  );
}

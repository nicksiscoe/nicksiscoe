"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.scss";

interface BaseCategory {
  id: number;
  description: string;
  uid: string;
  createDate: string;
}
export type Category = BaseCategory &
  (
    | {
        type: "league";
        sportId: number;
        leagueId: number;
        league: {
          description: string;
          id: number;
        };
      }
    | {
        type: "team";
        sportId: number;
        teamId: number;
        team: {
          description: string;
          id: number;
        };
      }
    | {
        type: "athlete";
        sportId: number;
        athleteId: number;
        athlete: {
          description: string;
          id: number;
        };
      }
    | {
        type: "topic";
        topicId: string;
        sportId: string;
      }
    | {
        type: "guid";
        guid: string;
      }
  );
export interface Video {
  caption: string;
  categories: Category[];
  urls: string[];
}

export default function SportsTok() {
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
      const videos = Array.from(
        scrollRef.current?.querySelectorAll("video") || []
      );
      const videoInView = videos.find((video) => {
        const rect = video.getBoundingClientRect(),
          top = rect.top,
          bottom = rect.bottom;
        return top >= 0 && bottom <= window.innerHeight;
      });
      timeout = setTimeout(() => {
        if (videoInView) {
          // pause every other video
          videos.forEach((video) => {
            if (video !== videoInView) {
              video.pause();
            }
          });
          videoInView.play();
        }
      }, 100);
      if (videoInView) {
        // pause every other video
        videos.forEach((video) => {
          if (video !== videoInView) {
            video.parentElement?.parentElement?.classList.remove(
              styles.playing
            );
          }
        });
        videoInView.parentElement?.parentElement?.classList.add(styles.playing);
      }
    };
    handleScroll();
    scroller?.addEventListener("scroll", handleScroll);
    return () => scroller?.removeEventListener("scroll", handleScroll);
  }, [begin, videos]);

  // Get the progress of the current playing video and update the progress bar
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // Get the video with the class of styles.playing
      const video: HTMLVideoElement | null = document.querySelector(
        `.${styles.playing} video`
      );
      if (video) {
        const progress = (video.currentTime / video.duration) * 100;
        setProgress(progress);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/experiments/sportstok");
      const response = await res.json();
      setVideos(response);
    })();
  }, []);

  if (!begin) {
    return (
      <>
        <button onClick={() => setBegin(true)}>Enter SportsTok →</button>
      </>
    );
  }

  return (
    <>
      <div className={styles.videos} ref={scrollRef}>
        {videos?.map((video) => (
          <div className={styles.video} key={video.caption}>
            <div className={styles.categories}>
              {video.categories.map((category) => (
                <p key={category.id}>{category.description}</p>
              ))}
            </div>
            {video.urls.map((url) => (
              <div key={url}>
                <video
                  playsInline
                  loop
                  key={url}
                  src={url}
                  style={{ width: "100%" }}
                />
                <progress id="progress" max="100" value={progress}>
                  Progress
                </progress>
              </div>
            ))}
            <p>{video.caption}</p>
          </div>
        ))}
      </div>
    </>
  );
}

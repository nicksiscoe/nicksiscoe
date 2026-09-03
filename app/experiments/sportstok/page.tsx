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
export interface Stack {
  name: string;
  videos: Video[];
}
export interface Video {
  caption: string;
  categories: Category[];
  urls: string[];
}

export default function SportsTok() {
  const [begin, setBegin] = useState(false);

  const [stacks, setStacks] = useState<Stack[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);
  // If scrollRef has stopped scrolling, play video that is in view
  useEffect(() => {
    if (!begin || !stacks.length) return;

    let timeout: NodeJS.Timeout;
    const scroller = scrollRef.current;
    const handleScroll = () => {
      if (timeout) clearTimeout(timeout);
      const videos: HTMLVideoElement[] = Array.from(
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
            video.closest(`.${styles.video}`)?.classList.remove(styles.playing);
          }
        });
        videoInView.closest(`.${styles.video}`)?.classList.add(styles.playing);
      }
    };
    handleScroll();
    scroller?.addEventListener("scroll", handleScroll);
    return () => scroller?.removeEventListener("scroll", handleScroll);
  }, [begin, stacks.length]);

  // Get the progress of the current playing video and update the progress bar
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // The playing class lives on the video's container, not the <video> itself.
      const video: HTMLVideoElement | null =
        scrollRef.current?.querySelector(`.${styles.playing} video`) ?? null;
      if (video && video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/experiments/sportstok");
      const response = await res.json();
      setStacks([
        {
          name: "home",
          videos: response,
        },
      ]);
    })();
  }, []);

  const onCategoryClick = async (category: Category) => {
    const res = await fetch(
      `/api/experiments/sportstok?category=${encodeURIComponent(
        JSON.stringify(category)
      )}`
    );
    const response = await res.json();
    if (!response.length) return;
    setStacks((stacks) => [
      ...stacks,
      {
        name: category.description,
        videos: response,
      },
    ]);
  };

  if (!begin) {
    return (
      <>
        <button onClick={() => setBegin(true)}>Enter SportsTok →</button>
      </>
    );
  }

  if (!stacks.length) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  const activeStack = stacks[stacks.length - 1];

  const goBack = () => {
    setStacks((prev) => prev.slice(0, prev.length - 1));
  };

  return (
    <>
      {stacks.length > 1 && (
        <button onClick={goBack}>
          ← Back to {stacks[stacks.length - 2].name}
        </button>
      )}
      <div key={activeStack.name} className={styles.videos} ref={scrollRef}>
        {activeStack.videos?.map((video) => (
          <div className={styles.video} key={video.caption}>
            <div className={styles.categories}>
              {video.categories.map((category) => (
                <div key={category.id} onClick={() => onCategoryClick(category)}>
                  <p>{category.description}</p>
                </div>
              ))}
            </div>
            {video.urls.map((url) => (
              <div key={url}>
                <video
                  autoPlay={false}
                  playsInline
                  loop
                  key={url}
                  src={url}
                  style={{ width: "100%" }}
                />
                <progress max="100" value={progress}>
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

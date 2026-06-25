"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import type { PortfolioVideo } from "@/data/portfolio";
import { getYouTubeEmbed, getYouTubeThumbnail } from "@/lib/youtube";
import { useVideoPlayback } from "./VideoPlaybackProvider";

export function VideoCard({
  video,
  playerKey,
  compact = false,
}: {
  video: PortfolioVideo;
  playerKey: string;
  compact?: boolean;
}) {
  const { activePlayerKey, playVideo } = useVideoPlayback();
  const isPlaying = activePlayerKey === playerKey;

  return (
    <article
      className={`video-card glass-panel ${compact ? "compact" : ""} ${isPlaying ? "is-playing" : ""}`}
    >
      <div className="video-aspect">
        {isPlaying ? (
          <iframe
            src={getYouTubeEmbed(video.id)}
            title={`${video.title} video player`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="video-poster"
            onClick={() => playVideo(playerKey, video.id)}
            aria-label={`Play ${video.title}`}
          >
            <Image
              src={getYouTubeThumbnail(video.id)}
              alt={`${video.title} video thumbnail`}
              fill
              sizes={
                compact
                  ? "(max-width: 620px) 78vw, (max-width: 900px) 50vw, 25vw"
                  : "(max-width: 620px) 78vw, 240px"
              }
            />
            <span className="poster-shade" />
            <span className="card-play">
              <Play aria-hidden="true" fill="currentColor" />
            </span>
          </button>
        )}
      </div>
      <div className="video-card-copy">
        <h3>{video.title}</h3>
        <p>{video.category}</p>
      </div>
    </article>
  );
}

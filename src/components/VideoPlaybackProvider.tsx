"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type VideoPlaybackContextValue = {
  activePlayerKey: string | null;
  activeVideoId: string | null;
  playVideo: (playerKey: string, videoId: string) => void;
  stopVideo: () => void;
};

const VideoPlaybackContext = createContext<VideoPlaybackContextValue | null>(
  null,
);

export function VideoPlaybackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activePlayerKey, setActivePlayerKey] = useState<string | null>(null);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const playVideo = useCallback((playerKey: string, videoId: string) => {
    setActivePlayerKey(playerKey);
    setActiveVideoId(videoId);
  }, []);

  const stopVideo = useCallback(() => {
    setActivePlayerKey(null);
    setActiveVideoId(null);
  }, []);

  const value = useMemo(
    () => ({ activePlayerKey, activeVideoId, playVideo, stopVideo }),
    [activePlayerKey, activeVideoId, playVideo, stopVideo],
  );

  return (
    <VideoPlaybackContext.Provider value={value}>
      {children}
    </VideoPlaybackContext.Provider>
  );
}

export function useVideoPlayback() {
  const context = useContext(VideoPlaybackContext);

  if (!context) {
    throw new Error(
      "useVideoPlayback must be used inside VideoPlaybackProvider",
    );
  }

  return context;
}

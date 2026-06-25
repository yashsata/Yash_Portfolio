"use client";

import {
  ArrowDown,
  Download,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Play,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { videos } from "@/data/portfolio";
import { getYouTubeEmbed, getYouTubeThumbnail } from "@/lib/youtube";
import { useVideoPlayback } from "./VideoPlaybackProvider";

const heroVideo = videos.find((video) => video.title === "Devil") ?? videos[0];
const heroPlayerKey = `hero-${heroVideo.id}`;

export function HeroSection() {
  const frameRef = useRef<HTMLDivElement>(null);
  const { activePlayerKey, playVideo } = useVideoPlayback();
  const isPlaying = activePlayerKey === heroPlayerKey;

  useEffect(() => {
    const frame = frameRef.current;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!frame || reducedMotion) return;

    let ticking = false;

    const update = () => {
      const rect = frame.getBoundingClientRect();
      const progress = Math.max(
        -1,
        Math.min(1, (window.innerHeight / 2 - rect.top) / window.innerHeight),
      );
      frame.style.setProperty("--parallax-y", `${progress * 18}px`);
      frame.style.setProperty("--parallax-scale", `${1 + progress * 0.012}`);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <p className="eyebrow">AI Director / AI Artist</p>
        <h1>
          <span>Yash Sata</span>
        </h1>
        <p className="hero-intro">
          I sit at the intersection of cinema and artificial intelligence -
          where stories are generated, directed, and crafted frame by frame
          with AI.
        </p>

        <div className="hero-actions">
          <button
            className="button button-primary"
            type="button"
            onClick={() => playVideo(heroPlayerKey, heroVideo.id)}
          >
            <Play aria-hidden="true" fill="currentColor" />
            Watch reel
          </button>
          <a
            className="button button-secondary"
            href="/Yash-Sata-Resume.pdf"
            download
          >
            <Download aria-hidden="true" />
            Download CV
          </a>
        </div>

        <address className="contact-strip">
          <a href="tel:+917045603723">
            <Phone aria-hidden="true" />
            +91 7045603723
          </a>
          <a href="mailto:satayash@gmail.com">
            <Mail aria-hidden="true" />
            satayash@gmail.com
          </a>
          <span>
            <MapPin aria-hidden="true" />
            Thane, Mumbai
          </span>
          <a
            href="https://www.linkedin.com/in/yash-sata-a4195a350"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin aria-hidden="true" />
            LinkedIn
          </a>
        </address>
      </div>

      <div className="hero-media-column">
        <div className="hero-frame-wrap" ref={frameRef}>
          <div className="hero-frame glass-panel">
            {isPlaying ? (
              <iframe
                src={getYouTubeEmbed(heroVideo.id)}
                title={`${heroVideo.title} video player`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                className="hero-poster"
                type="button"
                onClick={() => playVideo(heroPlayerKey, heroVideo.id)}
                aria-label={`Play ${heroVideo.title}`}
              >
                <Image
                  src={getYouTubeThumbnail(heroVideo.id)}
                  alt={`${heroVideo.title} video thumbnail`}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 62vw"
                />
                <span className="poster-shade" />
                <span className="play-orbit">
                  <Play aria-hidden="true" fill="currentColor" />
                </span>
                <span className="hero-video-caption">
                  <small>Featured direction</small>
                  <b>{heroVideo.title}</b>
                </span>
              </button>
            )}
          </div>
        </div>

        <div className="social-row" aria-label="Social links">
          <a
            href="https://www.youtube.com/@tseries"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <Youtube aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-sata-a4195a350"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin aria-hidden="true" />
          </a>
          <a href="mailto:satayash@gmail.com" aria-label="Email Yash Sata">
            <Mail aria-hidden="true" />
          </a>
        </div>
      </div>

      <a className="scroll-cue" href="#work">
        Scroll to explore
        <ArrowDown aria-hidden="true" />
      </a>
    </section>
  );
}

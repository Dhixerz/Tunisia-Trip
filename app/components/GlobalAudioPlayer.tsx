"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

// Audio mapping for each route.
const PAGE_AUDIO: Record<string, string> = {
  "/": "/audio/home.mp3",
  "/day1": "/audio/day1.mp3",
  "/day2": "/audio/day2.mp3",
  "/day4": "/audio/day4.mp3",
  "/day5": "/audio/day5.mp3",
  "/day6": "/audio/day6.mp3",
  "/day7": "/audio/day7.mp3",
};

export default function GlobalAudioPlayer() {
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const prevSrcRef = useRef<string>("");
  const userManuallyPaused = useRef<boolean>(false);
  const wasPlayingBeforeMedia = useRef<boolean>(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Exclude Day 3 completely as requested
  const isDay3 = pathname === "/day3" || pathname.startsWith("/day3/");

  const currentAudioSrc = PAGE_AUDIO[pathname] || "/audio/home.mp3";

  // Handle route changes and audio switching cleanly without double-plays
  useEffect(() => {
    if (isDay3) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    // Reset manual pause on route change so new page autoplays its track
    if (prevSrcRef.current !== currentAudioSrc) {
      userManuallyPaused.current = false;
      prevSrcRef.current = currentAudioSrc;
      audio.src = currentAudioSrc;
      audio.currentTime = 0;
      audio.loop = true;

      audio.muted = false;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // If browser blocked unmuted autoplay, play muted as fallback until user gesture
            audio.muted = true;
            audio
              .play()
              .then(() => {
                setIsPlaying(true);
              })
              .catch(() => {
                setIsPlaying(false);
              });
          });
      }
    }
  }, [pathname, isDay3, currentAudioSrc]);

  // Handle true user gestures (click, pointerdown, touchstart, keydown) to unmute if browser blocked unmuted playback
  useEffect(() => {
    if (isDay3) return;

    const handleUserGesture = (e: Event) => {
      const audio = audioRef.current;
      if (!audio) return;

      // If user explicitly paused the audio, NEVER force play on click
      if (userManuallyPaused.current) return;

      // If clicked on audio button, let togglePlay handle it
      if (buttonRef.current && e.target && buttonRef.current.contains(e.target as Node)) {
        return;
      }

      // If audio is currently muted due to autoplay policy fallback, unmute it
      if (audio.muted) {
        audio.muted = false;
        if (audio.paused) {
          audio
            .play()
            .then(() => {
              setIsPlaying(true);
              removeListeners();
            })
            .catch(() => {});
        } else {
          setIsPlaying(true);
          removeListeners();
        }
      }
    };

    const removeListeners = () => {
      window.removeEventListener("click", handleUserGesture, true);
      window.removeEventListener("pointerdown", handleUserGesture, true);
      window.removeEventListener("touchstart", handleUserGesture, true);
      window.removeEventListener("keydown", handleUserGesture, true);
    };

    window.addEventListener("click", handleUserGesture, { capture: true, passive: true });
    window.addEventListener("pointerdown", handleUserGesture, { capture: true, passive: true });
    window.addEventListener("touchstart", handleUserGesture, { capture: true, passive: true });
    window.addEventListener("keydown", handleUserGesture, { capture: true, passive: true });

    return () => {
      removeListeners();
    };
  }, [isDay3]);

  // Handle custom events from inline media (Rita!, Muslim Prayer, The Internet, Macarena)
  useEffect(() => {
    const handlePauseBg = () => {
      if (audioRef.current) {
        // Record whether background music was actively playing when inline media started
        // ONLY consider it active if user hasn't manually paused it!
        wasPlayingBeforeMedia.current = !audioRef.current.paused && !userManuallyPaused.current;
        if (!audioRef.current.paused) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      }
    };

    const handleResumeBg = () => {
      // ONLY resume background music if it was actively playing BEFORE inline media started AND user didn't manually pause it!
      if (
        wasPlayingBeforeMedia.current &&
        !userManuallyPaused.current &&
        audioRef.current &&
        audioRef.current.paused &&
        !isDay3
      ) {
        audioRef.current.muted = false;
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
      wasPlayingBeforeMedia.current = false;
    };

    window.addEventListener("pause-bg-music", handlePauseBg);
    window.addEventListener("resume-bg-music", handleResumeBg);

    return () => {
      window.removeEventListener("pause-bg-music", handlePauseBg);
      window.removeEventListener("resume-bg-music", handleResumeBg);
    };
  }, [isDay3]);

  if (isDay3) return null;

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false;
    if (!audio.paused) {
      userManuallyPaused.current = true;
      audio.pause();
      setIsPlaying(false);
    } else {
      userManuallyPaused.current = false;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 99999,
          pointerEvents: "auto",
        }}
      >
        <button
          ref={buttonRef}
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          title={isPlaying ? "Pause background audio" : "Play background audio"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            background: isPlaying ? "rgba(18, 18, 18, 0.88)" : "rgba(30, 30, 30, 0.75)",
            color: isPlaying ? "#34d399" : "#ffffff",
            border: isPlaying ? "1.5px solid rgba(52, 211, 153, 0.6)" : "1.5px solid rgba(255, 255, 255, 0.2)",
            boxShadow: isPlaying
              ? "0 8px 32px rgba(52, 211, 153, 0.3), 0 2px 8px rgba(0, 0, 0, 0.5)"
              : "0 8px 32px rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            cursor: "pointer",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isPlaying ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = isPlaying ? "scale(1.05)" : "scale(1)";
          }}
        >
          {isPlaying ? (
            /* Equalizer Wave / Pause Icon */
            <div style={{ display: "flex", alignItems: "center", gap: "3px", height: "18px" }}>
              <span
                style={{
                  width: "3px",
                  height: "100%",
                  backgroundColor: "#34d399",
                  borderRadius: "2px",
                  animation: "audioWave 0.8s ease-in-out infinite alternate",
                }}
              />
              <span
                style={{
                  width: "3px",
                  height: "60%",
                  backgroundColor: "#34d399",
                  borderRadius: "2px",
                  animation: "audioWave 0.8s ease-in-out infinite alternate 0.2s",
                }}
              />
              <span
                style={{
                  width: "3px",
                  height: "85%",
                  backgroundColor: "#34d399",
                  borderRadius: "2px",
                  animation: "audioWave 0.8s ease-in-out infinite alternate 0.4s",
                }}
              />
            </div>
          ) : (
            /* Play Icon ▶ */
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ marginLeft: "2px" }}
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <style jsx global>{`
          @keyframes audioWave {
            0% {
              height: 30%;
            }
            100% {
              height: 100%;
            }
          }
        `}</style>
      </div>
    </>
  );
}

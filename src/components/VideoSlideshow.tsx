import { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/VideoSlideshow.css';

export interface VideoSlide {
  src: string;
  caption?: string;
}

interface VideoSlideshowProps {
  slides: VideoSlide[];
  autoPlay?: boolean;
}

function isVideo(src: string) {
  return /\.(mp4|webm|mov|ogg)$/i.test(src);
}

const SLIDE_DURATION = 4000;

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function VideoSlideshow({ slides, autoPlay = true }: VideoSlideshowProps) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);
  const [progress, setProgress] = useState(0);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const durationsRef = useRef<number[]>(slides.map(() => SLIDE_DURATION));
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const elapsedRef = useRef(0);

  const total = slides.length;
  const hasMultiple = total > 1;

  useEffect(() => {
    slides.forEach((slide, i) => {
      const el = videoRefs.current[i];
      if (!el || !isVideo(slide.src)) return;
      if (i === index && playing) {
        el.currentTime = 0;
        el.play().catch(() => {});
      } else {
        el.pause();
      }
    });
  }, [index, playing, slides]);

  const goTo = useCallback((i: number) => {
    setIndex(((i % total) + total) % total);
    setProgress(0);
    elapsedRef.current = 0;
    startRef.current = null;
  }, [total]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (!playing) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    const tick = (t: number) => {
      if (startRef.current === null) startRef.current = t - elapsedRef.current;
      const elapsed = t - startRef.current;
      elapsedRef.current = elapsed;

      const currentIsVideo = isVideo(slides[index].src);
      const duration = currentIsVideo
        ? (durationsRef.current[index] || SLIDE_DURATION)
        : SLIDE_DURATION;

      const pct = Math.min(elapsed / duration, 1);
      setProgress(pct);

      if (pct >= 1) {
        setIndex((prevIdx) => (prevIdx + 1) % total);
        elapsedRef.current = 0;
        startRef.current = t;
        setProgress(0);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [playing, total]);

  useEffect(() => {
    if (!hasMultiple) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === ' ') { e.preventDefault(); setPlaying((p) => !p); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  return (
    <div className="slideshow">
      <div className="slideshow-frame">
        {slides.map((slide, i) => (
          isVideo(slide.src) ? (
            <video
              key={slide.src}
              ref={(el) => { videoRefs.current[i] = el; }}
              src={slide.src}
              muted
              playsInline
              loop
              onLoadedMetadata={(e) => {
                const dur = e.currentTarget.duration;
                if (dur && !Number.isNaN(dur)) {
                  durationsRef.current[i] = dur * 1000;
                }
              }}
              className={`slideshow-image ${i === index ? 'active' : ''}`}
            />
          ) : (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.caption || `Slide ${i + 1}`}
              className={`slideshow-image ${i === index ? 'active' : ''}`}
              draggable={false}
            />
          )
        ))}

        {slides[index]?.caption && (
          <div className="slideshow-caption">
            <p>{slides[index].caption}</p>
          </div>
        )}

        {hasMultiple && (
          <>
            <button onClick={prev} aria-label="Previous slide" className="slideshow-nav-btn prev">
              <span className="slideshow-nav-icon"><ChevronLeftIcon /></span>
            </button>
            
            <button onClick={next} aria-label="Next slide" className="slideshow-nav-btn next">
              <span className="slideshow-nav-icon"><ChevronRightIcon /></span>
            </button>
          </>
        )}
      </div>
      
      {hasMultiple && (
        <div className="slideshow-progress">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="slideshow-progress-track"
            >
              <div
                className="slideshow-progress-fill"
                style={{
                  width: i < index ? '100%' : i === index ? `${progress * 100}%` : '0%',
                  transition: i === index ? 'none' : 'width 200ms',
                }}
              />
            </button>
          ))}
        </div>
      )}

      <div className="slideshow-controls">
        <button onClick={() => setPlaying((p) => !p)} className="slideshow-play-btn">
          {playing ? <PauseIcon /> : <PlayIcon />}
          {playing ? 'Pause' : 'Play'}
        </button>

        {hasMultiple && (
          <span className="slideshow-counter">
            {index + 1} / {total}
          </span>
        )}
      </div>
    </div>
  );
}

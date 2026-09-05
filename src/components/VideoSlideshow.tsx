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

export default function VideoSlideshow({ slides, autoPlay = true }: VideoSlideshowProps) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = slides.length;
  const hasMultiple = total > 1;

  const goTo = useCallback((i: number) => {
    setIndex(((i % total) + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

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

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!playing) return;
 
    const currentSlide = slides[index];
    if (!isVideo(currentSlide.src)) {
      timeoutRef.current = setTimeout(() => {
        setIndex((prevIdx) => (prevIdx + 1) % total);
      }, SLIDE_DURATION);
    }
 
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, playing, total, slides]);

  useEffect(() => {
    if (!hasMultiple) return;

    const handleKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isTyping = ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
      if (isTyping) return;

      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === ' ') { e.preventDefault(); setPlaying((p) => !p); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  return (
    <div className="slideshow">
      <div className="slideshowFrame">
        {slides.map((slide, i) => (
          isVideo(slide.src) ? (
            <video
              key={slide.src}
              ref={(el) => { videoRefs.current[i] = el; }}
              src={slide.src}
              muted
              playsInline
              loop
              className={`slideshowImage ${i === index ? 'active' : ''}`}
            />
          ) : (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.caption || `Slide ${i + 1}`}
              className={`slideshowImage ${i === index ? 'active' : ''}`}
              draggable={false}
            />
          )
        ))}

        {slides[index]?.caption && (
          <div className="slideshowCaption">
            <p>{slides[index].caption}</p>
          </div>
        )}

        {hasMultiple && (
          <>
            <button onClick={prev} aria-label="Previous slide" className="slideshowNavBtn prev">
              <span className="slideshowNavIcon">
                <img src='./images/Icons/Left.png' alt='Left Icon' />
              </span>
            </button>
            
            <button onClick={next} aria-label="Next slide" className="slideshowNavBtn next">
              <span className="slideshowNavIcon">
                <img src='./images/Icons/Right.png' alt='Right Icon' />
              </span>
            </button>
          </>
        )}
      </div>

      <div className="slideshowControls">
        <button onClick={() => setPlaying((p) => !p)} className="slideshowPlayBtn">
          {playing ? 
            <img src='./images/Icons/Pause.png' alt='Pause Icon' /> : <img src='./images/Icons/Play.png' alt='Play Icon' />
          }
          {playing ? 'Pause' : 'Play'}
        </button>

        {hasMultiple && (
          <span className="slideshow-counter">{index + 1} / {total}</span>
        )}
      </div>
    </div>
  );
}

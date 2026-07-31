import { useState, useCallback } from 'react';
import '../styles/CertSlideshow.css';

export interface CertSlide {
  src: string;
  details: string;
}

interface CertSlideshowProps {
  slides: CertSlide[];
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

export default function CertSlideshow({ slides }: CertSlideshowProps) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const goTo = useCallback((i: number) => {
    setIndex(((i % total) + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  return (
    <div id='cert-container'>
      <div id='cert-viewport'>
        <div
          id='cert-track'
          style={{ transform: `translateX(calc(-${index} * (100% / 3)))` }}
        >
          {slides.map((slide, i) => (
            <div className='cert-slide' key={slide.src + i}>
              <div className='img-wrapper'>
                <img src={slide.src} alt={slide.details || `Certificate ${i + 1}`} />
              </div>
              <p>{slide.details}</p>
            </div>
          ))}
        </div>
      </div>

      <button onClick={prev} aria-label='Previous certificate' className="slideshow-nav-btn prev">
        <span className="slideshow-nav-icon"><ChevronLeftIcon /></span>
      </button>

      <button onClick={next} aria-label='Next certificate' className="slideshow-nav-btn next">
        <span className="slideshow-nav-icon"><ChevronRightIcon /></span>
      </button>
    </div>
  );
}

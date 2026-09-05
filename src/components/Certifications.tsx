import { useState, useCallback } from 'react';
import '../styles/Certifications.css';

export interface CertSlide {
  src: string;
  details: string;
}

interface CertSlideshowProps {
  slides: CertSlide[];
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
    <div id='certContainer'>
      <div id='certViewport'>
        <div id='certTrack' style={{ transform: `translateX(calc(-${index} * (100% / 3)))` }}>
          {slides.map((slide, i) => (
            <div className='certSlide' key={slide.src + i}>
              <div className='imgWrapper'>
                <img src={slide.src} alt={`Certificate ${i + 1}`} />
              </div>

              <p>{slide.details}</p>
            </div>
          ))}
        </div>
      </div>

      <button onClick={prev} aria-label="Previous certificate" className="slideshowNavBtn prev">
        <span className="slideshowNavIcon">
          <img src='./images/Icons/Left.png' alt='Left Icon' />
        </span>
      </button>
      
      <button onClick={next} aria-label="Next certificate" className="slideshowNavBtn next">
        <span className="slideshowNavIcon">
          <img src='./images/Icons/Right.png' alt='Right Icon' />
        </span>
      </button>
    </div>
  );
}

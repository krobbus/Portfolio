import { useState, useCallback, useRef } from 'react';
import { certSlides } from '../references/CertRef';

interface CertSlide {
  src: string;
  details: string;
}

export default function Certifications({ slides = certSlides }: { slides?: CertSlide[] }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex(((i % total) + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
    touchStartX.current = null;
  };

  return (
    <div id="certContainer" className="relative backdrop-blur-2xl bg-slate-900/40 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
      <div 
        id="certViewport" 
        className="overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          id="certTrack" 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className="certSlide min-w-full flex flex-col items-center justify-center p-2 space-y-4" key={slide.src + i}>
              <div className="imgWrapper max-w-2xl w-full rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-xl group">
                <img 
                  src={slide.src} 
                  alt={`Certificate ${i + 1}`} 
                  className="w-full h-auto max-h-[450px] object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <p className="text-center text-slate-300 font-medium text-sm sm:text-base max-w-xl">
                {slide.details}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <button 
          onClick={prev} 
          aria-label="Previous certificate" 
          className="p-3 rounded-full bg-white/10 border border-white/20
          hover:bg-white/20 hover:border-blue-400 text-white backdrop-blur-md transition-all duration-300 active:scale-95 cursor-pointer"
        >
          <img src="./images/Icons/Left.png" alt="Left Icon" className="w-5 h-5 invert brightness-200" />
        </button>

        <div className="flex space-x-2">
          {slides.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => goTo(dotIdx)}
              aria-label={`Go to certificate ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                dotIdx === index ? 'w-8 bg-blue-400' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>
        
        <button 
          onClick={next} 
          aria-label="Next certificate" 
          className="p-3 rounded-full bg-white/10 border border-white/20
          hover:bg-white/20 hover:border-blue-400 text-white backdrop-blur-md transition-all duration-300 active:scale-95 cursor-pointer"
        >
          <img src="./images/Icons/Right.png" alt="Right Icon" className="w-5 h-5 invert brightness-200" />
        </button>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { HeroSectionResponsive } from '../types';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface Props {
  data: HeroSectionResponsive;
  autoPlayDuration?: number;
}

const HeroSliderResponsive: React.FC<Props> = ({ data, autoPlayDuration = 8000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const startX = useRef<number>(0);
  const currentX = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  if (!data) return null;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const activeImages = isMobile ? data.mobileImages : data.desktopImages;
  const safeImages = activeImages || [];
  const totalSlides = safeImages.length;

  useEffect(() => {
    setCurrentSlide(0);
  }, [isMobile]);

  const nextSlide = useCallback(() => {
    if (totalSlides <= 1) return;
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    if (totalSlides <= 1) return;
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  useEffect(() => {
    if (totalSlides <= 1 || isDragging) return;
    const timer = setInterval(nextSlide, autoPlayDuration);
    return () => clearInterval(timer);
  }, [nextSlide, autoPlayDuration, totalSlides, isDragging]);

  // --- ARRASTRE ---
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    startX.current = clientX;
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    currentX.current = clientX;
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const distance = startX.current - currentX.current;
    const minSwipeDistance = 50;

    if (currentX.current === 0) return;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    
    startX.current = 0;
    currentX.current = 0;
  };

  const onMouseDown = (e: React.MouseEvent) => { e.preventDefault(); handleStart(e.clientX); };
  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onMouseUp = () => handleEnd();
  const onMouseLeave = () => { if (isDragging) setIsDragging(false); };
  const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);
  const onTouchEnd = () => handleEnd();

  if (totalSlides === 0) return null;

  return (
    <div 
      ref={containerRef}
      className={`relative w-full bg-gray-100 group overflow-hidden -mt-[1px] ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      
      {/* 1. SPACER */}
      <div className="invisible relative pointer-events-none z-0">
         <img src={safeImages[0]} alt="Spacer" className="w-full h-auto" />
      </div>

      {/* 2. CAPA DE TEXTO */}
      <div className="absolute inset-0 z-20 flex items-end justify-end pointer-events-none pb-12 pr-6 md:pb-24 md:pr-16">
        <div className="bg-ecogreen-blue/90 p-6 md:p-10 max-w-lg text-right pointer-events-auto shadow-lg backdrop-blur-[2px]">
          <h2 className="text-xl md:text-4xl font-bold text-[#5aef00] uppercase mb-2 leading-tight tracking-wide">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-sm md:text-xl text-white font-light italic uppercase tracking-wider leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* 3. TRACK DEL SLIDER */}
      <div className="absolute inset-0 h-full z-10 overflow-hidden">
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out will-change-transform"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {safeImages.map((imgUrl, index) => (
            <div key={`${isMobile ? 'mob' : 'desk'}-${index}`} className="min-w-full h-full relative select-none">
              <img 
                src={imgUrl} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-fill block pointer-events-none" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* 4. FLECHAS DE NAVEGACIÓN */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 text-white hover:text-ecogreen-green transition-all bg-black/20 hover:bg-black/50 rounded-full backdrop-blur-sm cursor-pointer"
          >
            <ChevronLeftIcon className="h-6 w-6 md:h-10 md:w-10" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 text-white hover:text-ecogreen-green transition-all bg-black/20 hover:bg-black/50 rounded-full backdrop-blur-sm cursor-pointer"
          >
            <ChevronRightIcon className="h-6 w-6 md:h-10 md:w-10" />
          </button>
        </>
      )}

    </div>
  );
};

export default HeroSliderResponsive;

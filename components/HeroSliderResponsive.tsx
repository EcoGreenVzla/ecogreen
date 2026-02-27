import React, { useState, useEffect, useCallback, useRef } from 'react';
import { HeroSectionResponsive } from '../types';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface Props {
  data: HeroSectionResponsive | undefined;
  autoPlayDuration?: number;
}

const HeroSliderResponsive: React.FC<Props> = ({ data, autoPlayDuration = 8000 }) => {
  // --- ESTADOS ---
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Para el loop infinito, el índice inicial debe ser 1 (la primera imagen real)
  const [currentSlide, setCurrentSlide] = useState(1);

  const startX = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const originalImages = (isMobile ? data?.mobileImages : data?.desktopImages) || [];
  
  // --- LÓGICA DE CLONACIÓN PARA LOOP INFINITO ---
  // Creamos un array: [Última, Imagen1, Imagen2, ..., ImagenN, Primera]
  const safeImages = originalImages.length > 0 
    ? [originalImages[originalImages.length - 1], ...originalImages, originalImages[0]] 
    : [];
  
  const totalOriginals = originalImages.length;

  // --- NAVEGACIÓN ---
  const nextSlide = useCallback(() => {
    if (isTransitioning || totalOriginals <= 1) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  }, [isTransitioning, totalOriginals]);

  const prevSlide = useCallback(() => {
    if (isTransitioning || totalOriginals <= 1) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  }, [isTransitioning, totalOriginals]);

  // Manejador para el "Salto Invisible" al terminar la transición
  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // Si llegamos al clon del final (índice total + 1), saltamos a la 1 real
    if (currentSlide === totalOriginals + 1) {
      setCurrentSlide(1);
    }
    // Si llegamos al clon del principio (índice 0), saltamos a la última real
    if (currentSlide === 0) {
      setCurrentSlide(totalOriginals);
    }
  };

  useEffect(() => {
    if (totalOriginals <= 1 || isDragging) return;
    const timer = setInterval(nextSlide, autoPlayDuration);
    return () => clearInterval(timer);
  }, [nextSlide, autoPlayDuration, totalOriginals, isDragging]);

  // --- ARRASTRE INTERACTIVO ---
  const handleStart = (clientX: number) => {
    if (isTransitioning) return;
    setIsDragging(true);
    startX.current = clientX;
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = startX.current - clientX;
    setDragOffset(diff);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 100; 
    if (dragOffset > threshold) {
      nextSlide();
    } else if (dragOffset < -threshold) {
      prevSlide();
    }
    setDragOffset(0);
  };

  if (!data || totalOriginals === 0) return null;

  // ============================================================
  // PANEL DE DISEÑO (MANTENIDO)
  // ============================================================
  const theme = {
    desktop: {
      textContainer: {
        position: 'absolute' as const,
        bottom: '20%',
        right: '50%',
        marginRight: '-540px',
        zIndex: 40,
        padding: '1.9em 1.5em 0.6em 1.3em',
        backgroundColor: '#092455',
        opacity: 0.8,
        textAlign: 'right' as const,
        lineHeight: '3.2em',
        borderRadius: '0',
        fontFamily: 'GotchaLight, sans-serif',
        pointerEvents: 'auto' as const,
      },
      title: { fontSize: '2.2em', color: '#5aef00', fontWeight: 'bold', letterSpacing: '2px', display: 'block' },
      subtitle: { color: '#ffffff', fontSize: '1.2em', fontStyle: 'italic', fontWeight: 'bold', marginTop: '-1.2em', display: 'block', letterSpacing: '2.5px' },
      arrows: { offset: '30px', width: '35px', height: '75px', background: 'rgba(0,0,0,0.4)', iconSize: '48px', iconThickness: '4px', zIndex: 99 }
    },
    mobile: {
      textContainer: {
        position: 'absolute' as const,
        bottom: '10%',
        left: '20%', 
        right: '5%',
        backgroundColor: '#092455',
        opacity: 0.9,
        padding: '0.6em 0.8em',
        textAlign: 'right' as const,
        borderRadius: '0',
        pointerEvents: 'auto' as const,
      },
      title: { fontSize: '1.1em', color: '#5aef00', fontWeight: 'bold', display: 'block', lineHeight: '1.1em', letterSpacing: '1.2px' },
      subtitle: { color: '#ffffff', fontSize: '0.85em', fontStyle: 'italic', fontWeight: 'bold', marginTop: '-0.1em', display: 'block', letterSpacing: '1px' },
      arrows: { offset: '10px', width: '25px', height: '45px', background: 'rgba(0, 0, 0, 0.3)', iconSize: '24px', iconThickness: '3px', zIndex: 99 }
    }
  };

  const current = isMobile ? theme.mobile : theme.desktop;

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full bg-white overflow-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      {/* 1. ESPACIADOR (Usamos la primera imagen original) */}
      <div className="invisible relative pointer-events-none">
         <img src={originalImages[0]} alt="Spacer" className="w-full h-auto" />
      </div>

      {/* 2. CAPA DE TEXTO */}
      <div className="absolute inset-0 z-20 pointer-events-none select-none">
        <div style={current.textContainer}>
          <span style={current.title}>{data.title.toUpperCase()}</span>
          {data.subtitle && (
            <span id="slider-p" style={current.subtitle}>{data.subtitle}</span>
          )}
        </div>
      </div>

      {/* 3. TRACK DE IMÁGENES (CON SOPORTE INFINITO) */}
      <div className="absolute inset-0 h-full z-10 overflow-hidden">
        <div 
          onTransitionEnd={handleTransitionEnd}
          className={`flex h-full will-change-transform ${
            isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''
          }`}
          style={{ 
            transform: `translateX(calc(-${currentSlide * 100}% - ${dragOffset}px))`,
            // Importante: quitamos la transición mientras arrastramos para suavidad total
            transitionProperty: isDragging ? 'none' : 'transform'
          }}
        >
          {safeImages.map((imgUrl, index) => (
            <div key={index} className="min-w-full h-full relative select-none">
              <img src={imgUrl} className="w-full h-full object-fill block pointer-events-none" alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* 4. FLECHAS DE NAVEGACIÓN */}
      {totalOriginals > 1 && (
        <>
          <button 
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            style={{ zIndex: current.arrows.zIndex, width: current.arrows.width, height: current.arrows.height, backgroundColor: current.arrows.background, left: current.arrows.offset, display: 'flex', borderRadius: '0' }}
            className="absolute top-1/2 -translate-y-1/2 items-center justify-center text-white transition-all hover:brightness-125 cursor-pointer border-none outline-none"
          >
            <ChevronLeftIcon style={{ width: current.arrows.iconSize, height: current.arrows.iconSize }} className={`stroke-[${current.arrows.iconThickness}]`} />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            style={{ zIndex: current.arrows.zIndex, width: current.arrows.width, height: current.arrows.height, backgroundColor: current.arrows.background, right: current.arrows.offset, display: 'flex', borderRadius: '0' }}
            className="absolute top-1/2 -translate-y-1/2 items-center justify-center text-white transition-all hover:brightness-125 cursor-pointer border-none outline-none"
          >
            <ChevronRightIcon style={{ width: current.arrows.iconSize, height: current.arrows.iconSize }} className={`stroke-[${current.arrows.iconThickness}]`} />
          </button>
        </>
      )}
    </div>
  );
};

export default HeroSliderResponsive;
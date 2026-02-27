import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GaleriaData } from '../data/galeriasData';

// Iconos integrados para independencia total
const ChevronLeftIcon = (props: any) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);
const ChevronRightIcon = (props: any) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);
const XIcon = (props: any) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const GaleriaImagenes: React.FC<{ data: GaleriaData | undefined }> = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // ============================================================
  // PANEL DE CONTROL DE ESTILOS (THEME) - TODO BAJO CONTROL
  // ============================================================
  const theme = {
    layout: {
      paddingVertical: 'py-16',
      backgroundColor: 'bg-white',
      // BOXED RESPONSIVO: 99% en móvil para aprovechar espacio, 80% en desktop para lectura técnica
      maxWidthResponsive: 'w-[99%] md:max-w-[80%]', 
    },
    typography: {
      // Tipografía general de la sección
      fontFamily: "'Open Sans', sans-serif",
      // Pesos de fuente documentados
      weightLight: 300,
      weightNormal: 400,
      weightBold: 700,
      // LEYENDA DEL MODAL (Open Sans solicitado)
      legendFontFamily: "'Open Sans', sans-serif",
      legendFontSize: 'text-lg', // Tamaño de fuente para el título en modal
      legendFontWeight: 300,    // Configurado en Light por defecto
      // Estadísticas y Contador
      statsFontSize: 'text-[14px]',
      statsTracking: 'tracking-[0.2em]',
    },
    grid: {
      gap: 'gap-8',
      columns: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    },
    card: {
      borderRadius: 'rounded-none', // Bordes rectos técnicos
      shadow: 'shadow-md',
      // DIMENSIONES DECLARADAS: Relación de aspecto mantenida con object-cover
      imageHeight: '242.4px', 
      hoverScale: 1.02,
    },
    modal: {
      overlayBg: 'bg-black/90',
      contentBg: 'bg-[#0e306f]', // Azul institucional para bloque de leyenda
      progressColor: 'bg-white',
      padding: 'p-4 md:p-6',
      borderRadius: 'rounded-lg',
    }
  };

  const handleNext = useCallback(() => {
    if (data?.items) setSelectedIndex((prev) => (prev! + 1) % data.items.length);
  }, [data?.items]);

  const handlePrev = useCallback(() => {
    if (data?.items) setSelectedIndex((prev) => (prev! - 1 + data.items.length) % data.items.length);
  }, [data?.items]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex, handleNext, handlePrev]);

  if (!data || !data.items || data.items.length === 0) return null;

  return (
    <section className={`${theme.layout.paddingVertical} ${theme.layout.backgroundColor}`} style={{ fontFamily: theme.typography.fontFamily }}>
      
      {/* 1. CONTENEDOR BOXED RESPONSIVO */}
      <div className={`container mx-auto px-6 ${theme.layout.maxWidthResponsive}`}>
        
        {/* Grid de Thumbnails */}
        <div className={`grid ${theme.grid.columns} ${theme.grid.gap}`}>
          {data.items.map((item, index) => (
            <motion.div
              key={index}
              className={`cursor-pointer overflow-hidden ${theme.card.shadow} transition-all ${theme.card.borderRadius} border border-gray-100`}
              whileHover={{ scale: theme.card.hoverScale }}
              onClick={() => setSelectedIndex(index)}
              style={{ height: theme.card.imageHeight }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* MODAL LIGHTBOX CON LEYENDA Y ESTADÍSTICAS */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-8 ${theme.modal.overlayBg}`}
              onClick={() => setSelectedIndex(null)}
            >
              
              {/* Botón Cerrar */}
              <button
                className="absolute top-4 right-4 md:top-8 md:right-8 z-[2010] p-2 text-white/50 hover:text-white transition-colors"
                onClick={() => setSelectedIndex(null)}
              >
                <XIcon className="w-10 h-10" />
              </button>

              {/* Controles de Navegación */}
              <button
                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-[2010] p-2 text-white/30 hover:text-white transition-all"
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              >
                <ChevronLeftIcon className="w-12 h-12 md:w-16 md:h-16" />
              </button>
              <button
                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-[2010] p-2 text-white/30 hover:text-white transition-all"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
              >
                <ChevronRightIcon className="w-12 h-12 md:w-16 md:h-16" />
              </button>

              {/* BLOQUE CENTRAL UNIFICADO */}
              <div 
                className={`flex flex-col w-min mx-auto shadow-2xl ${theme.modal.contentBg} ${theme.modal.padding} ${theme.modal.borderRadius}`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* FILA 1: IMAGEN EXPANDIDA */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedIndex}
                    src={data.items[selectedIndex].src}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="max-h-[60vh] md:max-h-[65vh] max-w-[80vw] md:max-w-[75vw] w-auto h-auto block object-contain rounded-sm shadow-md"
                  />
                </AnimatePresence>

                {/* FILA 2: LEYENDA Y ESTADÍSTICAS */}
                <div className="w-full flex flex-col mt-4">
                  
                  {/* Título de la Imagen (Leyenda en Open Sans) */}
                  <p 
                    className={`text-white ${theme.typography.legendFontSize} leading-snug break-words`}
                    style={{ 
                        fontFamily: theme.typography.legendFontFamily, 
                        fontWeight: theme.typography.legendFontWeight 
                    }}
                  >
                    {data.items[selectedIndex].title}
                  </p>
                  
                  {/* Barra de progreso animada */}
                  <div className="w-full h-1 bg-white/20 mt-4 overflow-hidden rounded-full">
                     <motion.div 
                        className={`h-full ${theme.modal.progressColor}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${((selectedIndex + 1) / data.items.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                     />
                  </div>

                  {/* Fila inferior: Contador y Paginación (Dots) */}
                  <div className="flex items-center justify-between w-full mt-2">
                    <span 
                        className={`text-white/40 uppercase ${theme.typography.statsFontSize} ${theme.typography.statsTracking}`}
                    >
                      {selectedIndex + 1} / {data.items.length}
                    </span>
                    
                    <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
                      {data.items.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedIndex(i)}
                          className={`h-1.5 transition-all rounded-full ${
                            selectedIndex === i 
                              ? 'w-5 bg-white' 
                              : 'w-1.5 bg-white/30 hover:bg-white/60'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* FIN BLOQUE CENTRAL UNIFICADO */}

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GaleriaImagenes;
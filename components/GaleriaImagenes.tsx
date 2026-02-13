import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GaleriaData } from '../data/galeriasData';

// Iconos integrados
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

  if (!data || !data.items || data.items.length === 0) return null;

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev! + 1) % data.items.length);
  }, [data.items.length]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev! - 1 + data.items.length) % data.items.length);
  }, [data.items.length]);

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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Grid de thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.items.map((item, index) => (
            <motion.div
              key={index}
              className="cursor-pointer overflow-hidden shadow-md hover:shadow-xl transition-all rounded-[2px] border border-gray-100"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="aspect-[1600/1067] bg-gray-50">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL LIGHTBOX */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              // Fondo general del modal (oscuro)
              className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 p-4 sm:p-8"
              onClick={() => setSelectedIndex(null)}
            >
              
              {/* CONTROLES EXTERNOS AL BLOQUE AZUL */}
              {/* Botón Cerrar */}
              <button
                className="absolute top-4 right-4 md:top-8 md:right-8 z-[2010] p-2 text-white/50 hover:text-white transition-colors"
                onClick={() => setSelectedIndex(null)}
              >
                <XIcon className="w-10 h-10" />
              </button>

              {/* Flecha Izquierda */}
              <button
                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-[2010] p-2 text-white/30 hover:text-white transition-all"
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              >
                <ChevronLeftIcon className="w-12 h-12 md:w-16 md:h-16" />
              </button>

              {/* Flecha Derecha */}
              <button
                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-[2010] p-2 text-white/30 hover:text-white transition-all"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
              >
                <ChevronRightIcon className="w-12 h-12 md:w-16 md:h-16" />
              </button>


              {/* BLOQUE CENTRAL UNIFICADO (FONDO AZUL) */}
              <div 
                className="flex flex-col w-min mx-auto bg-[#0e306f] p-4 md:p-6 rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* FILA 1: IMAGEN (Sin marco blanco) */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedIndex}
                    src={data.items[selectedIndex].src}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    // Se añadió rounded-sm para que la imagen encaje bien visualmente si se desea, 
                    // y shadow-md para profundidad sobre el azul.
                    className="max-h-[60vh] md:max-h-[65vh] max-w-[80vw] md:max-w-[75vw] w-auto h-auto block object-contain rounded-sm shadow-md"
                  />
                </AnimatePresence>

                {/* FILA 2: LEYENDA Y ESTADÍSTICAS (Dentro del bloque azul) */}
                <div className="w-full flex flex-col mt-4">
                  
                  {/* Texto */}
                  <p className="text-white text-lg font-semibold leading-snug break-words">
                    {data.items[selectedIndex].title}
                  </p>
                  
                  {/* Barra de progreso (Blanca pura) */}
                  <div className="w-full h-1 bg-white/20 mt-4 overflow-hidden rounded-full">
                     <motion.div 
                        className="h-full bg-white"
                        initial={{ width: 0 }}
                        animate={{ width: `${((selectedIndex + 1) / data.items.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                     />
                  </div>

                  {/* Fila inferior: Contador y Dots */}
                  <div className="flex items-center justify-between w-full mt-2">
                    <span className="text-white/40 text-xs font-mono tracking-widest">
                      {selectedIndex + 1} / {data.items.length}
                    </span>
                    
                    {/* Active dots blanco absoluto */}
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
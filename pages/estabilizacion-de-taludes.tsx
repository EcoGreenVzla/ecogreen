import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import { sliderData } from '../data/sliderData';

// =====================================================================
// 1. COMPONENTES DE APOYO E ICONOS (Para el Lightbox)
// =====================================================================

const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// =====================================================================
// 2. CONFIGURACIÓN DE DATOS (GALERÍA) Y ANIMACIONES
// =====================================================================

const galleryImages = [
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/1.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/10.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/11.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/12.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/13.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/14.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/15.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/16.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/17.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/18.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/19.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/2.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/3.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/4.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/5.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/6.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/7.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/8.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/9.jpg',
];

const gridContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// =====================================================================
// 3. COMPONENTES INTERNOS (GRID Y LIGHTBOX)
// =====================================================================

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <div className="mb-12">
        <h3 className="text-3xl font-bold text-left text-ecogreen-blue mb-2 uppercase tracking-wide">{title}</h3>
        <div className="w-full h-1 bg-ecogreen-green"></div>
    </div>
);

const ImageCard: React.FC<{ src: string; onClick: () => void }> = ({ src, onClick }) => (
    <motion.div
        className="group h-64 rounded-md shadow-lg overflow-hidden relative cursor-pointer"
        variants={cardVariants}
        whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={onClick}
    >
        <img
            src={src}
            alt="Proyecto de estabilización de taludes"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
    </motion.div>
);

const Lightbox: React.FC<{ images: string[]; currentIndex: number; onClose: () => void; onNext: () => void; onPrev: () => void }> = ({ images, currentIndex, onClose, onNext, onPrev }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4" onClick={onClose}>
        <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <motion.button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white z-10" whileHover={{ scale: 1.2, rotate: 90 }}>
                <XIcon className="w-8 h-8" />
            </motion.button>
            <div className="relative max-w-5xl w-full max-h-[85vh]">
                <AnimatePresence initial={false} mode="wait">
                    <motion.img key={currentIndex} src={images[currentIndex]} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="max-h-[85vh] w-auto h-auto object-contain mx-auto shadow-2xl" />
                </AnimatePresence>
            </div>
            <button onClick={onPrev} className="absolute left-2 md:left-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"><ChevronLeftIcon className="w-8 h-8" /></button>
            <button onClick={onNext} className="absolute right-2 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"><ChevronRightIcon className="w-8 h-8" /></button>
        </div>
    </motion.div>
);

// =====================================================================
// 4. COMPONENTE PRINCIPAL: EstabilizacionTaludes
// =====================================================================

const EstabilizacionTaludes: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNextImage = useCallback(() => { if (selectedImage !== null) setSelectedImage((prev) => (prev! + 1) % galleryImages.length); }, [selectedImage]);
  const handlePrevImage = useCallback(() => { if (selectedImage !== null) setSelectedImage((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length); }, [selectedImage]);

  return (
    <div className="w-full m-0 p-0">
      <title>Estabilización de Taludes | EcoGreen</title>
      <meta name="description" content="Sistemas con Geomantas EcoGreen para estabilización de taludes y soluciones ecológicas permanentes." />

      {/* --- INICIO SECCIÓN: HERO SLIDER (DINÁMICO) --- */}
      <HeroSliderResponsive data={sliderData['estabilizacion-taludes']} />
      {/* --- FIN SECCIÓN: HERO SLIDER (DINÁMICO) --- */}


      {/* --- INICIO BLOQUE: CONTENIDO TEÓRICO --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
                <img src="https://tumuro.com/media/banner-services/control-de-erosion-icon.png" alt="Icono Estabilización de Taludes" className="w-16 h-16 mr-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">Estabilización de Taludes</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
                En geotecnia es indispensable analizar la estabilidad o la posible inestabilidad de un talud a la hora de realizar un proyecto o una obra de construcción...
            </p>
             <AnimatePresence>
                {isExpanded && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden text-left">
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed pt-4 pb-8 border-t border-gray-200 mt-4">
                           <p>Las GEOMANTAS ECOGREEN son un sistema flexible para la estabilización de taludes fabricados a base de geomallas de poliéster...</p>
                           <p>Es importante resaltar que la técnica más rápida y económica en la actualidad... son las GEOMANTAS VERDES ECOGREEN.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="mt-4 text-left">
              <button onClick={() => setIsExpanded(!isExpanded)} className="bg-ecogreen-blue text-white font-bold text-sm uppercase tracking-wider transition-colors rounded-full px-6 py-3 hover:bg-ecogreen-green focus:outline-none">
                  {isExpanded ? 'Cerrar ▲' : 'Leer Mas ▼'}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* --- FIN BLOQUE: CONTENIDO TEÓRICO --- */}


      {/* --- INICIO SECCIÓN: GRID GALERÍA DE IMÁGENES --- */}
      <section className="py-16 bg-gray-50 mb-16">
        <div className="container mx-auto px-4">
            <SectionHeader title="Galería de Proyectos" />
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" variants={gridContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {galleryImages.map((src, index) => ( <ImageCard key={src} src={src} onClick={() => setSelectedImage(index)} /> ))}
            </motion.div>
        </div>
      </section>
      {/* --- FIN SECCIÓN: GRID GALERÍA DE IMÁGENES --- */}


      {/* --- INICIO BLOQUE: LÓGICA DE LIGHTBOX (MODAL) --- */}
      <AnimatePresence>
        {selectedImage !== null && ( <Lightbox images={galleryImages} currentIndex={selectedImage} onClose={() => setSelectedImage(null)} onNext={handleNextImage} onPrev={handlePrevImage} /> )}
      </AnimatePresence>
      {/* --- FIN BLOQUE: LÓGICA DE LIGHTBOX (MODAL) --- */}

    </div>
  );
};

export default EstabilizacionTaludes;
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
// 2. CONFIGURACIÓN DE DATOS Y ANIMACIONES
// =====================================================================

const galleryImages = [
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado1.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado2.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado3.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado4.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado5.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado6.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado7.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado8.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado9.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado10.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado11.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado12.jpg',
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
// 3. COMPONENTES INTERNOS (SECCIONES REUTILIZABLES)
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
        <img src={src} alt="Obra de muro de concreto armado" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </motion.div>
);

const Lightbox: React.FC<{ images: string[]; currentIndex: number; onClose: () => void; onNext: () => void; onPrev: () => void }> = ({ images, currentIndex, onClose, onNext, onPrev }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4" onClick={onClose}>
        <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <motion.button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white z-10" whileHover={{ scale: 1.2, rotate: 90 }}>
                <XIcon className="w-8 h-8" />
            </motion.button>
            <div className="relative max-w-5xl w-full max-h-[85vh]">
                <AnimatePresence initial={false}>
                    <motion.img key={currentIndex} src={images[currentIndex]} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="max-h-[85vh] w-auto h-auto object-contain mx-auto" />
                </AnimatePresence>
            </div>
            <button onClick={onPrev} className="absolute left-2 md:left-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"><ChevronLeftIcon className="w-8 h-8" /></button>
            <button onClick={onNext} className="absolute right-2 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"><ChevronRightIcon className="w-8 h-8" /></button>
        </div>
    </motion.div>
);

// =====================================================================
// 4. COMPONENTE PRINCIPAL: ConcretoArmado
// =====================================================================

const ConcretoArmado: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNextImage = useCallback(() => {
    if (selectedImage !== null) setSelectedImage((prev) => (prev! + 1) % galleryImages.length);
  }, [selectedImage]);

  const handlePrevImage = useCallback(() => {
     if (selectedImage !== null) setSelectedImage((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
  }, [selectedImage]);

  return (
    <div className="w-full m-0 p-0">
      <title>Muros de Concreto Armado | EcoGreen</title>
      <meta name="description" content="Diseño y construcción de muros de concreto armado para grandes alturas. Estabilización confiable y tradicional." />

      {/* --- INICIO SECCIÓN: HERO SLIDER DINÁMICO --- */}
      <HeroSliderResponsive data={sliderData['concreto-armado']} />
      {/* --- FIN SECCIÓN: HERO SLIDER DINÁMICO --- */}


      {/* --- INICIO BLOQUE: CONTENIDO TEÓRICO --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
                <img src="https://tumuro.com/media/banner-services/muros-de-contencion-icon.webp" alt="Icono Muros de Concreto Armado" className="w-16 h-16 mr-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">Muros de Concreto Armado</h2>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
                Los muros de concreto armado pueden diseñarse para grandes alturas, inclusive superiores a los 10,00 m. Sin embargo requieren de buena cimentación. Son económicamente viables hasta los 8,00 m de altura, pero esta técnica es una de las consideradas más simples en su proceso de construcción...
            </p>

            {/* CONTENIDO EXPANDIBLE (ACORDEÓN) */}
             <AnimatePresence>
                {isExpanded && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden text-left">
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed pt-4 pb-8 border-t border-gray-200 mt-4">
                           <p>Los muros de concreto armado están constituidos por masas relativamente grandes de concreto reforzadas con varillas o cabillas de acero. Estas estructuras son capaces de resistir los movimientos del suelo debido a la presiones de la tierra sobre el muro...</p>
                           <p>Es muy importante destacar que para el diseño estructural de todos los tipos de muros de concreto armado debe suponerse que la placa vertical del muro se encuentra totalmente empotrada en la placa de cimentación...</p>
                           <div>
                               <p className="font-bold mb-4">Las ventajas que poseen este tipo de estructuras son:</p>
                               <ul className="list-disc list-inside space-y-2 pl-4">
                                   <li>Disponibilidad de los materiales que los conforman.</li>
                                   <li>Disponibilidad de los equipos y maquinarias especializadas para su construcción.</li>
                                   <li>No requiere de mano de obra calificada.</li>
                                   <li>Son relativamente simples de construir.</li>
                                   <li>Pueden emplearse para alturas relativamente altas.</li>
                               </ul>
                           </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="mt-4 text-left">
              <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="bg-ecogreen-blue text-white font-bold text-sm uppercase tracking-wider transition-colors rounded-full px-6 py-3 hover:bg-ecogreen-green focus:outline-none"
              >
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
            
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                variants={gridContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {galleryImages.map((src, index) => (
                    <ImageCard key={src} src={src} onClick={() => setSelectedImage(index)} />
                ))}
            </motion.div>
        </div>
      </section>
      {/* --- FIN SECCIÓN: GRID GALERÍA DE IMÁGENES --- */}


      {/* --- INICIO BLOQUE: LÓGICA DE LIGHTBOX (MODAL) --- */}
      <AnimatePresence>
        {selectedImage !== null && (
            <Lightbox 
                images={galleryImages}
                currentIndex={selectedImage}
                onClose={() => setSelectedImage(null)}
                onNext={handleNextImage}
                onPrev={handlePrevImage}
            />
        )}
      </AnimatePresence>
      {/* --- FIN BLOQUE: LÓGICA DE LIGHTBOX (MODAL) --- */}

    </div>
  );
};

export default ConcretoArmado;
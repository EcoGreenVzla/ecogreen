
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// --- Icon Components (Locally defined for simplicity) ---
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

// --- Data for Gallery ---
const galleryImages = [
    'https://tumuro.com/media/pilotes-y-micropilotes/grid-pilotes-y-micropilotes/pilotes-y-micropilotes1.jpg',
    'https://tumuro.com/media/pilotes-y-micropilotes/grid-pilotes-y-micropilotes/pilotes-y-micropilotes2.jpg',
    'https://tumuro.com/media/pilotes-y-micropilotes/grid-pilotes-y-micropilotes/pilotes-y-micropilotes3.jpg',
    'https://tumuro.com/media/pilotes-y-micropilotes/grid-pilotes-y-micropilotes/pilotes-y-micropilotes4.jpg',
    'https://tumuro.com/media/pilotes-y-micropilotes/grid-pilotes-y-micropilotes/pilotes-y-micropilotes5.jpg',
    'https://tumuro.com/media/pilotes-y-micropilotes/grid-pilotes-y-micropilotes/pilotes-y-micropilotes6.jpg',
    'https://tumuro.com/media/pilotes-y-micropilotes/grid-pilotes-y-micropilotes/pilotes-y-micropilotes7.jpg',
    'https://tumuro.com/media/pilotes-y-micropilotes/grid-pilotes-y-micropilotes/pilotes-y-micropilotes8.jpg',
    'https://tumuro.com/media/pilotes-y-micropilotes/grid-pilotes-y-micropilotes/pilotes-y-micropilotes9.jpg',
];


// --- Animation Variants ---
const textVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const gridContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// --- Internal Components ---

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <div className="mb-12">
        <h3 className="text-3xl font-bold text-left text-ecogreen-blue mb-2 uppercase tracking-wide">{title}</h3>
        <div className="w-full h-1 bg-ecogreen-green"></div>
    </div>
);

interface ImageCardProps {
    src: string;
    onClick: () => void;
}
const ImageCard: React.FC<ImageCardProps> = ({ src, onClick }) => (
    <motion.div
        className="group h-64 rounded-md shadow-lg overflow-hidden relative cursor-pointer"
        variants={cardVariants}
        whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={onClick}
    >
        <img
            src={src}
            alt="Obra de pilotes y micropilotes"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
    </motion.div>
);

interface LightboxProps {
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}
const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, onClose, onNext, onPrev }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-black/50">
                <motion.div 
                    className="h-full bg-ecogreen-lime"
                    initial={{ width: '0%' }}
                    animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
            </div>
        
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <motion.button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <XIcon className="w-8 h-8" />
                </motion.button>
                
                {/* Main Image */}
                <div className="relative max-w-5xl w-full max-h-[85vh]">
                    <AnimatePresence initial={false}>
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="max-h-[85vh] w-auto h-auto object-contain mx-auto"
                            alt={`Galería de pilotes y micropilotes ${currentIndex + 1}`}
                        />
                    </AnimatePresence>
                </div>

                {/* Navigation Arrows */}
                <motion.button onClick={onPrev} className="absolute left-2 md:left-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <ChevronLeftIcon className="w-8 h-8" />
                </motion.button>
                <motion.button onClick={onNext} className="absolute right-2 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <ChevronRightIcon className="w-8 h-8" />
                </motion.button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${currentIndex === index ? 'bg-ecogreen-lime' : 'bg-white/40'}`}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};


// --- Main Page Component ---
const PilotesMicropilotes: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNextImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! + 1) % galleryImages.length);
    }
  }, [selectedImage]);

  const handlePrevImage = useCallback(() => {
     if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
    }
  }, [selectedImage]);

  return (
    <>
      <title>Pilotes y Micropilotes | EcoGreen</title>
      <meta name="description" content="Sistemas de fundación profunda y estabilización de suelos mediante pilotes hincados y micropilotes (Soil Nailing)." />

      {/* Hero Section (Static) */}
      <section className="relative w-full h-[70vh] max-h-[700px] overflow-hidden bg-gray-800">
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://tumuro.com/media/pilotes-y-micropilotes/slider/pilotes-y-micropilotes.webp')` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
            <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="bg-ecogreen-blue/70 p-6 md:p-8 text-center text-white max-w-3xl"
            >
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-ecogreen-lime uppercase drop-shadow-lg">
                    PILOTES Y MICROPILOTES
                </h1>
                <p className="mt-2 text-sm md:text-lg font-semibold uppercase tracking-wider drop-shadow-md">
                    FUNDACIONES EN SUELO FIRME.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Contenido Teórico */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
                <img src="https://tumuro.com/media/banner-services/muros-de-contencion-icon.webp" alt="Icono Pilotes y Micropilotes" className="w-16 h-16 mr-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">Pilotes y Micropilotes</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
                Los pilotes hincados son considerados estructuras enterradas que son capaces de resistir esfuerzos a flexión, estos son colocados dentro del suelo atravesando la superficie de falla. Esto quiere decir que trabajan empotradas en el suelo por debajo de la falla.
            </p>
             <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden text-left"
                    >
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed pt-4 pb-8 border-t border-gray-200 mt-4">
                           <p>Esta técnica es utilizada en ocasiones para la estabilización de deslizamientos activos poco profundos debido a que los deslizamientos profundos producen fuerzas laterales muy grandes que no pueden ser resistidas fácilmente por este método. Para evitar que los pilotes se inclinen o desprendan, deben ser enterrados o hincados en un suelo firme competente y adicionalmente es muy común la utilización de la incorporación de estructuras de concreto armado para unir las cabezas de los pilotes para mejorar la rigidez y el comportamiento general del sistema.</p>
                           <p>Hay muchos casos donde la construcción de muros es difícil debido a la imposibilidad de realizar excavaciones previas a la construcción del muro en si. En estos casos la construcción de pilas perforadas de 1,00 a 2,00 m de diámetro unidas entre sí , resulta una solución muy efectiva. El Soil Nailing es un método de refuerzo in situ que utiliza micropilotes vacíos capaces de movilizar resistencia a la tensión en los casos donde ocurra un movimiento. La diferencia de los pilotes con respecto a los micropilotes es que este último no resiste cargas laterales a flexión. Los micropilotes son conformados por cabillas de acero, vigas, tubos o cables que se introducen dentro del suelo natural o la roca blanda y luego son inyectados en perforaciones previamente realizadas. Generalmente los micropilotes son espaciados a distancias relativamente pequeñas.</p>
                           <div>
                               <p>Entre las principales ventajas de los sistemas de pilotes y pilotines se tienen:</p>
                               <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                                   <li>Disponibilidad de los materiales que los conforman.</li>
                                   <li>Disponibilidad de los equipos y maquinarias especializadas para su construcción.</li>
                                   <li>El tiempo de construcción es considerado relativamente rápido.</li>
                                   <li>Pueden construirse en sitios de difícil acceso.</li>
                                   <li>Son sistemas eficientes como elemento de refuerzo en materiales fracturados o sueltos.</li>
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

      {/* Galería de Imágenes */}
      <section className="py-16 bg-gray-50">
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

      {/* Lightbox */}
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
    </>
  );
};

export default PilotesMicropilotes;

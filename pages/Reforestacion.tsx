
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
const galleryImages = Array.from({ length: 12 }, (_, i) => `https://tumuro.com/media/reforestacion/grid-reforestacion/${i + 1}.jpg`);

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

// --- CUSTOM ImageCard for this page ---
interface ImageCardProps {
    src: string;
    onClick: () => void;
}
const ImageCard: React.FC<ImageCardProps> = ({ src, onClick }) => (
    <motion.div
        className="group flex flex-col rounded-md shadow-lg overflow-hidden w-full cursor-pointer"
        variants={cardVariants}
        whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={onClick}
    >
        <div className="h-48 overflow-hidden">
            <img
                src={src}
                alt="Proyecto de reforestación"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
        </div>
        <div className="bg-ecogreen-green flex items-center p-2 h-16">
            <div className="bg-white rounded-full p-1 mr-4 flex-shrink-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
                <img src='https://tumuro.com/media/banner-services/control-de-erosion-icon.png' alt="Icono Control de Erosión" className="h-10 w-10" />
            </div>
        </div>
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
            <div className="absolute top-0 left-0 right-0 h-1 bg-black/50">
                <motion.div 
                    className="h-full bg-ecogreen-lime"
                    initial={{ width: '0%' }}
                    animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
            </div>
        
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <motion.button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white z-10" whileHover={{ scale: 1.2, rotate: 90 }} whileTap={{ scale: 0.9 }}>
                    <XIcon className="w-8 h-8" />
                </motion.button>
                
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
                            alt={`Galería de reforestación ${currentIndex + 1}`}
                        />
                    </AnimatePresence>
                </div>

                <motion.button onClick={onPrev} className="absolute left-2 md:left-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <ChevronLeftIcon className="w-8 h-8" />
                </motion.button>
                <motion.button onClick={onNext} className="absolute right-2 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <ChevronRightIcon className="w-8 h-8" />
                </motion.button>

                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {images.map((_, index) => (
                        <div key={index} className={`w-2.5 h-2.5 rounded-full transition-colors ${currentIndex === index ? 'bg-ecogreen-lime' : 'bg-white/40'}`} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};


// --- Main Page Component ---
const Reforestacion: React.FC = () => {
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
      <title>Reforestación | EcoGreen</title>
      <meta name="description" content="Soluciones de reforestación y muros 100% verdes con Geomantas EcoGreen y vegetación estabilizadora." />

      {/* Hero Section (Static) */}
      <section className="relative w-full h-[70vh] max-h-[700px] overflow-hidden bg-gray-800">
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://tumuro.com/media/reforestacion/slide/morocha.webp')` }}
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
                    REFORESTACIÓN
                </h1>
                <p className="mt-2 text-sm md:text-lg font-semibold uppercase tracking-wider drop-shadow-md">
                    MUROS 100% VERDES.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Contenido Teórico */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
                <img src="https://tumuro.com/media/banner-services/control-de-erosion-icon.png" alt="Icono Reforestación" className="w-16 h-16 mr-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">Reforestación</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
                Desde tiempos remotos se conoce el uso de la vegetación para controlar la erosión y estabilizar taludes, con base a experiencias pasadas y métodos empíricos. A partir de los años treinta comenzó a resurgir esta práctica de manera más científica y metódica, y en la ultima década, ha venido ganando popularidad debido al mayor nivel de conciencia sobre la problemática ambiental en que se encuentra nuestro planeta en los actuales momentos y a la mayor disponibilidad de conocimiento y parámetros que le dieron credibilidad técnica a estas ideas.
            </p>
             <AnimatePresence>
                {isExpanded && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden text-left">
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed pt-4 pb-8 border-t border-gray-200 mt-4">
                           <p>En Europa a finales de la década de los sesenta se comenzó a estudiar el uso de nuevos materiales que pudiesen soportar las condiciones de humedad, acidez o alcalinidad que se encuentran dentro del suelo. Estos materiales son conocidos en la actualidad como productos geosinteticos y entre ellos se encuentran las GEOMANTAS ECOGREEN. Paralelamente el Banco Mundial, desde la década de los setenta, promueve activamente a través de la Vetiver Network, la conservación del suelo y el agua en el sector agrícola. Posteriormente a los éxitos de ese sector, los ingenieros comenzaron a estudiar algunas plantas en combinación con productos geosinteticos para controlar la erosión y lograr estabilizar taludes y terraplenes.</p>
                           <p>Producto de esas investigaciones algunos pastos como por ejemplo el Vetiver surgieron como una nueva opción para afrontar los problemas de erosión e inestabilidad de los suelos, ya sea por si solos o como complemento a soluciones de ingeniería en combinación con los productos geosinteticos. Las GEOMANTAS ECOGREEN combinadas con pastos Vetiver son la solución ideal para la reforestación óptima y la estabilización de taludes y terraplenes, tomando en cuenta la resistencia a la tracción de alto módulo de la geomanta y la resistencia a las fuerzas cortantes de los suelos permeados por las raíces que también poseen una alta resistencia a la tensión. Sin embargo dependiendo de la necesidad paisajística del proyecto, también se pueden utilizar muchos otros pastos como la gudelia, maní forrajero o flores de distintos colores para dar mayor vistosidad a la solución.</p>
                           <p>En vista que las GEOMANTAS ECOGREEN están probadas en cuanto a sus especificaciones técnicas en las aplicaciones de reforestación y control de la erosión, es importante resaltar que el éxito del sistema ecológico en su conjunto depende en gran medida de la aplicación de buenas prácticas agrícolas para obtener el máximo provecho de la planta o pasto seleccionado, debido a que esa óptima germinación aporta al suelo un masivo sistema radicular subterráneo, el fenómeno de la evapotranspiración, el abatimiento de la humedad, entre otros. También se debe tomar en cuenta el material orgánico y el análisis químico del suelo y por último pero no menos importante, el mantenimiento y riego constante de la superficie tratada.</p>
                           <p>Es importante resaltar que la técnica más económica y ecológica actualmente en la aplicación de muros de contención, son los muros de tierra reforzada, debido a que se pueden reconstruir con el mismo material de relleno fallado y poseen adicionalmente la ventaja de presentar una cobertura vegetal en su acabado final, contribuyendo con la Infraestructura Verde en la zona donde se construyen.</p>
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

export default Reforestacion;

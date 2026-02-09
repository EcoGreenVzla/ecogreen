
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
    'https://tumuro.com/media/muros-de-tierra-reforzada/grid-muros-de-tierra-reforzada/muro-de-gavion-reforzado1.webp',
    'https://tumuro.com/media/muros-de-tierra-reforzada/grid-muros-de-tierra-reforzada/muro-de-tierra-reforzada1.webp',
    'https://tumuro.com/media/muros-de-tierra-reforzada/grid-muros-de-tierra-reforzada/muro-de-tierra-reforzada10.webp',
    'https://tumuro.com/media/muros-de-tierra-reforzada/grid-muros-de-tierra-reforzada/muro-de-tierra-reforzada11.webp',
    'https://tumuro.com/media/muros-de-tierra-reforzada/grid-muros-de-tierra-reforzada/muro-de-tierra-reforzada12.webp',
    'https://tumuro.com/media/muros-de-tierra-reforzada/grid-muros-de-tierra-reforzada/muro-de-tierra-reforzada13.webp',
    'https://tumuro.com/media/muros-de-tierra-reforzada/grid-muros-de-tierra-reforzada/muro-de-tierra-reforzada2.webp',
    'https://tumuro.com/media/muros-de-tierra-reforzada/grid-muros-de-tierra-reforzada/muro-de-tierra-reforzada3.webp',
    'https://tumuro.com/media/muros-de-tierra-reforzada/grid-muros-de-tierra-reforzada/muro-de-tierra-reforzada4.webp',
    'https://tumuro.com/media/muros-de-tierra-reforzada/grid-muros-de-tierra-reforzada/muro-de-tierra-reforzada5.webp',
    'https://tumuro.com/media/muros-de-tierra-reforzada/grid-muros-de-tierra-reforzada/muro-de-tierra-reforzada6.webp',
    'https://tumuro.com/media/muros-de-tierra-reforzada/grid-muros-de-tierra-reforzada/muro-de-tierra-reforzada7.webp',
    'https://tumuro.com/media/muros-de-tierra-reforzada/grid-muros-de-tierra-reforzada/muro-de-tierra-reforzada8.webp',
    'https://tumuro.com/media/muros-de-tierra-reforzada/grid-muros-de-tierra-reforzada/muro-de-tierra-reforzada9.webp',
    'https://tumuro.com/media/muros-de-tierra-reforzada/grid-muros-de-tierra-reforzada/muro-reforzado1.webp',
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
            alt="Obra de muro de tierra reforzada"
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
                            alt={`Galería de muro de tierra reforzada ${currentIndex + 1}`}
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
const TierraReforzada: React.FC = () => {
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
      <title>Muros de Tierra Reforzada | EcoGreen</title>
      <meta name="description" content="Soluciones de alta resistencia en muros de tierra reforzada y muros verdes." />

      {/* Hero Section (Static) */}
      <section className="relative w-full h-[70vh] max-h-[700px] overflow-hidden bg-gray-800">
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://tumuro.com/media/muros-de-tierra-reforzada/slider/talud-reforzado1.webp')` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
            <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="bg-ecogreen-blue/70 p-6 md:p-8 text-center text-white max-w-2xl"
            >
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-ecogreen-lime uppercase drop-shadow-lg">
                    MUROS DE TIERRA REFORZADA
                </h1>
                <p className="mt-2 text-sm md:text-lg font-semibold uppercase tracking-wider drop-shadow-md">
                    SOLUCIONES VERDES DE ALTA RESISTENCIA.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Contenido Teórico */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
                <img src="https://tumuro.com/media/banner-services/muros-de-contencion-icon.webp" alt="Icono Muros de Tierra Reforzada" className="w-16 h-16 mr-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">Muros de Tierra Reforzada</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
                El hombre siempre ha tratado de construir en zonas consideradas valiosas debido a su estética o posición geográfica, sin embargo estas zonas no siempre cuentan con buenas cimentaciones. Por esta razón a través de los siglos se ha desarrollado el concepto de suelo reforzado es verdaderamente antiguo ya que hace 3000 años los babilonios utilizaron ramas entrelazadas de palmera para reforzar sus monumentos. También se conoce que la gran muralla china construida hace más de 2000 años, contiene secciones en donde la arcilla y la arena fueron reforzadas con ramas. También la armada británica en 1820 demostró por medio de pruebas que la presión lateral en un muro de contención podía ser reducida si el relleno era reforzado con capas horizontales de maleza, madera o lona.
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
                           <p>El sistema de muros de contención que ha tenido más éxito a nivel mundial en obras de infraestructura urbana y vial es el denominado muro de tierra reforzada o también conocido como muro verde. Este sistema soluciona el restablecimiento de las dimensiones de las vías falladas y reconstruye los deslizamientos de suelo en un período de tiempo muy corto. Este tipo de sistema de contención nació con la creación del sistema registrado “tierra armada” creado por el ingeniero francés Henry Vidal en el año 1960. Dicha técnica consiste en la inclusión de una serie de tiras metálicas que van amarradas a unas escamas de concreto prefabricadas que conforman la fachada del muro. Estas tiras metálicas son capaces de desarrollar una tensión que permiten la fricción entre el elemento y el suelo, logrando así cortar la superficie de falla dentro del relleno utilizado para conformar el volumen de tierra de contención. Sin embargo aun cuando esta técnica se ha utilizado con relativo éxito y ha tenido un buen desempeño en muchas aplicaciones en diversos países, presenta la limitante de la duración del refuerzo metálico dentro de la masa de suelo de contención, debido a que esta se encuentra expuesta a un proceso permanente de corrosión producto de las condiciones de humedad, acidez o alcalinidad que están presentes en el suelo compactado.</p>
                           <p>En Europa a finales de la década de los sesenta se comenzó a estudiar el uso de nuevos materiales que pudiesen soportar las condiciones de humedad, acidez o alcalinidad que se encuentran dentro del suelo. Estos materiales son conocidos en la actualidad como productos geosintéticos, las materias primas que los conforman son poliéster, polipropileno y polietileno en algunos casos.</p>
                           <div>
                                <p>Los muros de tierra reforzada construidos con productos geosintéticos se rigen bajo el mismo basamento teórico del sistema “tierra armada” con la diferencia que las tiras metálicas son sustituidas por geotextiles o por geomallas de diferentes tipos. Estos muros son considerados el mejor sistema de contención de la ingeniería contemporánea debido a que presentan muchas ventajas, entre las cuales se encuentran:</p>
                                <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                                    <li>Disponibilidad de los materiales geosintéticos que los conforman.</li>
                                    <li>En los casos de derrumbes o deslizamientos se puede utilizar el material fallado por lo que no se requiere de aporte de material.</li>
                                    <li>Excelente tiempo de ejecución.</li>
                                    <li>Disponibilidad de los equipos y maquinarias especializadas para su construcción.</li>
                                    <li>No requiere de mano de obra calificada.</li>
                                    <li>Son consideradas como la solución más económica.</li>
                                    <li>Es el sistema de contención que menos impacta el ambiente, ya que su fachada puede quedar completamente reforestada.</li>
                                </ul>
                           </div>
                           <p>Lo que determina que material geosintético se debe incorporar al muro de tierra reforzada, es el tipo de material de relleno que se va a utilizar para ser compactado. Esto significa que si el material de relleno a utilizar es de mayor granulometría, el geosintético ideal es una geomalla, debido a que los orificios de la geomalla se traban con las partículas gruesas generando un alto módulo de fricción entre el elemento y el suelo, a diferencia si el relleno es de granulometría fina el material ideal sería un geotextil tejido, siempre tomando en cuenta la resistencia a la tracción del producto geosintético como tal.</p>
                           <p>Es muy importante resaltar la virtud que tienen los muros de tierra reforzada en cuanto al acabado de su fachada, tomando en cuenta que existe la flexibilidad de colocarles bloques, concreto proyectado, gaviones o reforestarlos con la vegetación de la zona o cualquier otra que se quiera incorporar logrando minimizar el impacto ambiental armonizando ecológicamente el sistema de muro con el ambiente.</p>
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

export default TierraReforzada;

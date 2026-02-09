
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
    'https://tumuro.com/media/refuerzo-de-taludes-y-terraplenes/grid-refuerzo-de-taludes-y-terraplenes/1.jpg',
    'https://tumuro.com/media/refuerzo-de-taludes-y-terraplenes/grid-refuerzo-de-taludes-y-terraplenes/10.jpg',
    'https://tumuro.com/media/refuerzo-de-taludes-y-terraplenes/grid-refuerzo-de-taludes-y-terraplenes/11.jpg',
    'https://tumuro.com/media/refuerzo-de-taludes-y-terraplenes/grid-refuerzo-de-taludes-y-terraplenes/12.jpg',
    'https://tumuro.com/media/refuerzo-de-taludes-y-terraplenes/grid-refuerzo-de-taludes-y-terraplenes/13.jpg',
    'https://tumuro.com/media/refuerzo-de-taludes-y-terraplenes/grid-refuerzo-de-taludes-y-terraplenes/14.jpg',
    'https://tumuro.com/media/refuerzo-de-taludes-y-terraplenes/grid-refuerzo-de-taludes-y-terraplenes/15.jpg',
    'https://tumuro.com/media/refuerzo-de-taludes-y-terraplenes/grid-refuerzo-de-taludes-y-terraplenes/16.jpg',
    'https://tumuro.com/media/refuerzo-de-taludes-y-terraplenes/grid-refuerzo-de-taludes-y-terraplenes/17.jpg',
    'https://tumuro.com/media/refuerzo-de-taludes-y-terraplenes/grid-refuerzo-de-taludes-y-terraplenes/18.jpg',
    'https://tumuro.com/media/refuerzo-de-taludes-y-terraplenes/grid-refuerzo-de-taludes-y-terraplenes/2.jpg',
    'https://tumuro.com/media/refuerzo-de-taludes-y-terraplenes/grid-refuerzo-de-taludes-y-terraplenes/3.jpg',
    'https://tumuro.com/media/refuerzo-de-taludes-y-terraplenes/grid-refuerzo-de-taludes-y-terraplenes/4.jpg',
    'https://tumuro.com/media/refuerzo-de-taludes-y-terraplenes/grid-refuerzo-de-taludes-y-terraplenes/5.jpg',
    'https://tumuro.com/media/refuerzo-de-taludes-y-terraplenes/grid-refuerzo-de-taludes-y-terraplenes/6.jpg',
    'https://tumuro.com/media/refuerzo-de-taludes-y-terraplenes/grid-refuerzo-de-taludes-y-terraplenes/7.jpg',
    'https://tumuro.com/media/refuerzo-de-taludes-y-terraplenes/grid-refuerzo-de-taludes-y-terraplenes/8.jpg',
    'https://tumuro.com/media/refuerzo-de-taludes-y-terraplenes/grid-refuerzo-de-taludes-y-terraplenes/9.jpg',
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
                alt="Proyecto de refuerzo de taludes y terraplenes"
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
                            alt={`Galería de refuerzo de taludes y terraplenes ${currentIndex + 1}`}
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
const RefuerzoTerraplenes: React.FC = () => {
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
      <title>Refuerzo de Taludes y Terraplenes | EcoGreen</title>
      <meta name="description" content="Sistemas de contención reforestables con Geomallas EcoGreen para taludes y terraplenes." />

      {/* Hero Section (Static) */}
      <section className="relative w-full h-[70vh] max-h-[700px] overflow-hidden bg-gray-800">
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://tumuro.com/media/refuerzo-de-taludes-y-terraplenes/slider/refuerzo-de-taludes-y-terraplenes.webp')` }}
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
                    REFUERZO DE TALUDES Y TERRAPLENES
                </h1>
                <p className="mt-2 text-sm md:text-lg font-semibold uppercase tracking-wider drop-shadow-md">
                    SISTEMAS DE CONTENCIÓN REFORESTABLES.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Contenido Teórico */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
                <img src="https://tumuro.com/media/banner-services/control-de-erosion-icon.png" alt="Icono Refuerzo de Taludes y Terraplenes" className="w-16 h-16 mr-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">Refuerzo de Taludes y Terraplenes</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
                Al momento de iniciar la construcción de un terraplén, hay que tomar en cuenta los dos tipos más comunes de inestabilidad, como lo son los desprendimientos o corrimientos. Los desprendimientos o comúnmente llamados derrumbes son movimientos de suelo producidos por la falta de apoyo, debido a una escasa cantidad de terreno de soporte. En la mayoría de los casos se trata de rocas que caen por un talud, debido a la perdida del apoyo que la sustenta.
            </p>
             <AnimatePresence>
                {isExpanded && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden text-left">
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed pt-4 pb-8 border-t border-gray-200 mt-4">
                           <p>En el análisis de taludes y terraplenes de macizos rocosos, se presentan bloques de roca delimitados por un sistema tridimensional de planos de discontinuidad (fracturas, fallas, diaclasas, estratificación, etc.) Normalmente este tipo de discontinuidades son producto del tectonismo a la que fue sujeta la roca en un estado inicial de esfuerzos y dependiendo de la orientación de estas, se tendrá un patrón de fracturamiento que delimitara los bloques de roca.</p>
                           <p>Analizar la estabilidad de un talud realizado en macizos rocosos fracturados, es parte de dos procesos. El primero es analizar la estructura del corte realizado para determinar si la orientación de las discontinuidades podría resultar en inestabilidad, a lo cual se conoce como orientación desfavorable del talud con respecto a las discontinuidades. Esta determinación es realizada por medio de un análisis estereográfico de la estructura junto con la composición del talud, a lo que se denomina análisis cinemático. Ya que ha sido determinada la cinemática en la cual se tiene posibilidad de falla del talud, el segundo paso requiere un análisis de estabilidad por el método del equilibrio límite para comparar las fuerzas resistentes a la falla contra las fuerzas causantes de la falla del talud. El rango entre estos dos sistemas de fuerzas se denomina factor de seguridad.</p>
                           <p>Los corrimientos son movimientos que afectan a una gran extensión de terreno. Un tipo particular de corrimiento de tierra son los deslizamientos, que se producen cuando una gran masa de terreno o zona inestable, desliza con respecto a una zona estable, a través de una superficie o franja de terreno de pequeño espesor. Estos tipos de inestabilidad se evitan con la aplicación de conocimientos de ingeniería y las técnicas adecuadas dependiendo de cada caso. Los muros y taludes de tierra reforzada construidos con GEOMALLAS ECOGREEN son una de las soluciones mas completas en el refuerzo de taludes y terraplenes.</p>
                           <p>Las GEOMANTAS ECOGREEN para el refuerzo son utilizadas en la gran mayoría de los taludes y terraplenes proyectados en las obras de infraestructura, vialidad y desarrollo urbano. Sin embargo el estudio geotécnico debe establecer si el sitio tiene las condiciones de estabilidad suficientes para el tipo de estructura de contención a considerar en el diseño, incluyendo estabilidad general, capacidad de la fundación y de los materiales para el relleno a reforzar. Los parámetros geotécnicos deben ser representativos de las condiciones reales del suelo o roca en el sitio y para que esto ocurra se debe haber realizado una investigación geotécnica completa.</p>
                           <p>Los taludes y terraplenes reforzados con GEOMALLAS ECOGRREN se rigen bajo el mismo basamento teórico del sistema “Tierra Armada“ con la diferencia que las tiras metálicas son sustituidas con Geomallas de poliéster. Esta solución es considerada como el mejor sistema de contención de la ingeniería contemporánea debido a que presenta muchas ventajas entre las cuales se encuentran : La disponibilidad de los materiales geosinteticos que los conforman y de los equipos y maquinarias especializadas para su construcción, en muchos casos no se requiere de material de préstamo, debido a que se puede reutilizar el material fallado del mismo derrumbe o deslizamiento, son considerados como la solución mas económica por no requerir de mano de obra calificada y su construcción se logra en un excelente tiempo, y por ultimo y no menos importante es su gran ventaja en cuanto al bajo impacto ambiental, en vista que su fachada resulta completamente reforestada, armonizando ecológicamente con el medio ambiente.</p>
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

export default RefuerzoTerraplenes;

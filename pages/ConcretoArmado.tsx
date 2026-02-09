
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
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado1.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado10.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado11.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado12.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado2.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado3.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado4.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado5.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado6.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado7.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado8.jpg',
    'https://tumuro.com/media/muros-de-concreto-armado/grid-muros-de-concreto-armado/muros-de-concreto-armado9.jpg',
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
            alt="Obra de muro de concreto armado"
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
                            alt={`Galería de muro de concreto armado ${currentIndex + 1}`}
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
const ConcretoArmado: React.FC = () => {
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
      <title>Muros de Concreto Armado | EcoGreen</title>
      <meta name="description" content="Diseño y construcción de muros de concreto armado para grandes alturas. Estabilización confiable y tradicional." />

      {/* Hero Section (Static) */}
      <section className="relative w-full h-[70vh] max-h-[700px] overflow-hidden bg-gray-800">
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://tumuro.com/media/muros-de-concreto-armado/slider/muros-de-concreto-armado.webp')` }}
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
                    MUROS DE CONCRETO ARMADO
                </h1>
                <p className="mt-2 text-sm md:text-lg font-semibold uppercase tracking-wider drop-shadow-md">
                    UNA SOLUCIÓN TRADICIONAL CONFIABLE.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Contenido Teórico */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
                <img src="https://tumuro.com/media/banner-services/muros-de-contencion-icon.webp" alt="Icono Muros de Concreto Armado" className="w-16 h-16 mr-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">Muros de Concreto Armado</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
                Los muros de concreto armado pueden diseñarse para grandes alturas, inclusive superiores a los 10,00 m. Sin embargo requieren de buena cimentación. Son económicamente viables hasta los 8,00 m de altura, pero esta técnica es una de las consideradas más simples en su proceso de construcción, ya que es una práctica común en todo el mundo para la estabilización de deslizamientos de taludes y terraplenes. Su limitante principal es la dificultad que presenta el análisis de cada caso en particular ya que existen diferentes tipos de muros de concreto armado y diferentes fuerzas reales que actúan sobre cada tipo. Los procedimientos de cálculo están basados en los criterios de presiones activas utilizados en las teorías de presión de tierras de Ranking o Coulomb.
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
                           <p>Los muros de concreto armado están constituidos por masas relativamente grandes de concreto reforzadas con varillas o cabillas de acero. Estas estructuras son capaces de resistir los movimientos del suelo debido a la presiones de la tierra sobre el muro, y este a su vez se apoya en una cimentación por fuera de la masa inestable. Para diseñar este tipo de estructuras, primero se diseña la estabilidad intrínseca del muro para evitar el volcamiento o deslizamiento sobre el suelo de cimentación, luego se revisa la estabilidad general del talud o el factor de seguridad incluyendo la posibilidad de falla por debajo de la cimentación, posteriormente se procede al diseño de las secciones y los refuerzos internos que resisten los momentos y los esfuerzos cortantes, por ultimo se calcula la capacidad de soporte de la fundación.</p>
                           <p>Es muy importante destacar que para el diseño estructural de todos los tipos de muros de concreto armado debe suponerse que la placa vertical del muro se encuentra totalmente empotrada en la placa de cimentación y para el calculo de las fuerzas sobre las paredes del muro debe utilizarse las presiones de reposo. También es fundamental que en todos los casos los muros posean un sistema de drenaje detrás de su pared vertical y/o un sistema de barbacanas para aliviar las presiones hidrostáticas que genera el agua represada detrás del muro.</p>
                           <p>Entre los tipos de muros de concreto armado se encuentran los muros empotrados o también conocidos como muros en cantiliver, es decir en forma de L o T invertida, los cuales tienen una placa inclinada monolítica con otra placa en la base. Otro tipo son los muros con contrafuertes, en los cuales la placa vertical esta soportada por contrafuertes monolíticos que le aportan rigidez y ayudan a distribuir las cargas a la cimentación. También tenemos muros de concreto armado con estribos que adicionalmente a la placa vertical y de cimentación y a los contrafuertes, se construye una placa superior en posición horizontal que aumenta la rigidez y la capacidad de soportar los momentos. En mucho de los casos para lograr mejorar la resistencia al deslizamiento se colocan espolones de concreto por debajo de la placa de cimentación.</p>
                           <div>
                               <p>Las ventajas que poseen este tipo de estructuras son:</p>
                               <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                                   <li>Disponibilidad de los materiales que los conforman.</li>
                                   <li>Disponibilidad de los equipos y maquinarias especializadas para su construcción.</li>
                                   <li>No requiere de mano de obra calificada.</li>
                                   <li>Son relativamente simples de construir, utilizan los métodos convencionales de construcción.</li>
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

export default ConcretoArmado;

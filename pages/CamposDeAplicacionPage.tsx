
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
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

// --- Data ---
const sliderImages = [
    'https://tumuro.com/media/campos-de-aplicacion/slider/infraestructura-urbana.webp',

];

const erosionSystems = [
    { title: 'INFRAESTRUCTURA URBANA', href: '/campos-de-aplicacion/infraestructura-urbana', imgSrc: 'https://tumuro.com/media/campos-de-aplicacion/grid-campos-de-aplicacion/infraestructura-urbana1.webp' },
    { title: 'CONSTRUCCIÓN CIVIL', href: '/campos-de-aplicacion/construccion-civil', imgSrc: 'https://tumuro.com/media/campos-de-aplicacion/grid-campos-de-aplicacion/construccion-civil1.webp' },
    { title: 'PROTECCIÓN AMBIENTAL', href: '/campos-de-aplicacion/proteccion-ambiental', imgSrc: 'https://tumuro.com/media/campos-de-aplicacion/grid-campos-de-aplicacion/proteccion-ambiental1.webp' },
    { title: 'INDUSTRIA, PETRÓLEO Y GAS', href: '/campos-de-aplicacion/industria-petroleo-gas', imgSrc: 'https://tumuro.com/media/campos-de-aplicacion/grid-campos-de-aplicacion/industria-petroleo-y-gas1.webp' },
    { title: 'SECTOR AGRÍCOLA', href: '/campos-de-aplicacion/sector-agricola', imgSrc: 'https://tumuro.com/media/campos-de-aplicacion/grid-campos-de-aplicacion/sector-agricola1.webp' },
    { title: 'VÍAS DE COMUNICACIÓN', href: '/campos-de-aplicacion/vias-comunicacion', imgSrc: 'https://tumuro.com/media/campos-de-aplicacion/grid-campos-de-aplicacion/vias-de-comunicacion1.webp' },
    { title: 'OBRAS HIDRÁULICAS', href: '/campos-de-aplicacion/obras-hidraulicas', imgSrc: 'https://tumuro.com/media/campos-de-aplicacion/grid-campos-de-aplicacion/obras-hidraulicas1.webp' },
    { title: 'MINERÍA, GEOLOGÍA Y GEOTECNIA', href: '/campos-de-aplicacion/mineria-geotecnia', imgSrc: 'https://tumuro.com/media/campos-de-aplicacion/grid-campos-de-aplicacion/mineria-geologia-y-geotecnia1.webp' },
];

// --- Animation Variants ---
const textVariants: Variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3, ease: 'easeIn' } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  },
};

const gridContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
};

// --- Custom Internal Card Component ---
interface SystemCardProps {
  title: string;
  href: string;
  imgSrc: string;
}
const MotionLink = motion(Link);

const ErosionSystemCard: React.FC<SystemCardProps> = ({ title, href, imgSrc }) => (
    <MotionLink
        to={href}
        className="group flex flex-col rounded-md shadow-lg overflow-hidden w-full"
        variants={cardVariants}
        whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <div className="h-48 overflow-hidden">
            <img
                src={imgSrc}
                alt={`${title} background`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
        </div>
        <div className="bg-ecogreen-green flex items-center p-4">
            <div className="bg-white rounded-full p-1 mr-4 flex-shrink-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
                <img src='https://tumuro.com/media/banner-services/control-de-erosion-icon.png' alt={`${title} icon`} className="h-12 w-12" />
            </div>
            <h3 className="text-white text-base font-bold uppercase tracking-wide">{title}</h3>
        </div>
    </MotionLink>
);


const CamposDeAplicacionPage: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % sliderImages.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  }

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <>
      <title>Campos de Aplicación | EcoGreen</title>
      <meta name="description" content="Soluciones con Geomantas EcoGreen para la protección del suelo, estabilización de taludes y reforestación." />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] max-h-[700px] overflow-hidden bg-gray-800">
        <AnimatePresence>
            <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${sliderImages[currentSlide]})` }}
            />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center md:justify-end p-4 md:p-12 lg:p-24 z-10">
            <div className='flex flex-col items-center md:items-end'>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="bg-ecogreen-blue/70 p-6 md:p-8 text-center md:text-right text-white max-w-xl"
                    >
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-ecogreen-lime uppercase drop-shadow-lg">
                           CAMPOS DE APLICACIÓN
                        </h1>
                        <p className="mt-2 text-sm md:text-lg font-semibold uppercase tracking-wider drop-shadow-md">
                           INFRAESTRUCTURA VERDE.
                        </p>
                    </motion.div>
                </AnimatePresence>
                <div className='flex md:hidden mt-6 space-x-8'>
                    <motion.button onClick={prevSlide} className="text-white/80 hover:text-white transition drop-shadow-lg p-2 bg-black/20 rounded-full" whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.4)'}} whileTap={{ scale: 0.95 }} aria-label="Previous slide">
                        <ChevronLeftIcon className="h-8 w-8" />
                    </motion.button>
                    <motion.button onClick={nextSlide} className="text-white/80 hover:text-white transition drop-shadow-lg p-2 bg-black/20 rounded-full" whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.4)'}} whileTap={{ scale: 0.95 }} aria-label="Next slide">
                        <ChevronRightIcon className="h-8 w-8" />
                    </motion.button>
                </div>
            </div>
        </div>

        <motion.button onClick={prevSlide} className="hidden md:block absolute top-1/2 left-4 -translate-y-1/2 text-white/70 hover:text-white transition drop-shadow-lg z-20" whileHover={{ scale: 1.1, x: -5 }} whileTap={{ scale: 0.95 }} aria-label="Previous slide">
            <ChevronLeftIcon className="h-12 w-12 md:h-16 md:w-16" />
        </motion.button>
        <motion.button onClick={nextSlide} className="hidden md:block absolute top-1/2 right-4 -translate-y-1/2 text-white/70 hover:text-white transition drop-shadow-lg z-20" whileHover={{ scale: 1.1, x: 5 }} whileTap={{ scale: 0.95 }} aria-label="Next slide">
            <ChevronRightIcon className="h-12 w-12 md:h-16 md:w-16" />
        </motion.button>

        <div className="absolute bottom-6 left-0 right-0 z-20">
            <div className="flex items-center justify-center gap-2">
                {sliderImages.map((_, index) => (
                    <motion.button key={index} onClick={() => goToSlide(index)} className="w-3 h-3 rounded-full transition-colors" animate={currentSlide === index ? "active" : "inactive"} variants={{ active: { backgroundColor: '#54c70e', scale: 1.2 }, inactive: { backgroundColor: '#ffffff', scale: 1 } }} whileHover={{ scale: 1.3 }} transition={{ duration: 0.3 }} aria-label={`Go to slide ${index + 1}`} />
                ))}
            </div>
        </div>
      </section>

      {/* Grid de Soluciones */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="mb-12">
                <h3 className="text-3xl font-bold text-left text-ecogreen-blue mb-2 uppercase tracking-wide">Soluciones de Control de Erosión</h3>
                <div className="w-full h-1 bg-ecogreen-green"></div>
            </div>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={gridContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {erosionSystems.map((sys) => <ErosionSystemCard key={sys.title} {...sys} />)}
            </motion.div>
        </div>
      </section>
    </>
  );
};
export default CamposDeAplicacionPage;

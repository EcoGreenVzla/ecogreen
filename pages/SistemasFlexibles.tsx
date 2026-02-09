
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


// --- Data for System Grids (Linked to Navigation Menu) ---
const sistemasFlexibles = [
  { title: 'Muros de Tierra Reforzada', href: '/muros-de-contencion/sistemas-flexibles/tierra-reforzada', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-tierra-reforzada.webp' },
  { title: 'Muros de Gavión', href: '/muros-de-contencion/sistemas-flexibles/gavion', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-gavion.webp' },
  { title: 'Muros de Gavión Reforzados', href: '/muros-de-contencion/sistemas-flexibles/gavion-reforzado', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-gavion-reforzados.webp' },
  { title: 'Muros Mixtos', href: '/muros-de-contencion/sistemas-flexibles/muros-mixtos', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-mixtos.webp' },
  { title: 'Refuerzo de Taludes', href: '/muros-de-contencion/sistemas-flexibles/refuerzo-taludes', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/refuerzo-de-taludes-y-terraplenes.webp' },
];

const sliderImages = [
  'https://tumuro.com/media/sistemas-de-contencion-flexibles/slider/sistemas-de-contencion-flexibles-1.webp',
  'https://tumuro.com/media/sistemas-de-contencion-flexibles/slider/sistemas-de-contencion-flexibles-2.webp',
  'https://tumuro.com/media/sistemas-de-contencion-flexibles/slider/sistemas-de-contencion-flexibles-3.webp',
  'https://tumuro.com/media/sistemas-de-contencion-flexibles/slider/sistemas-de-contencion-flexibles-4.webp',
  'https://tumuro.com/media/sistemas-de-contencion-flexibles/slider/sistemas-de-contencion-flexibles-5.webp',
  'https://tumuro.com/media/sistemas-de-contencion-flexibles/slider/sistemas-de-contencion-flexibles-6.webp'
];

const textVariants: Variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3, ease: 'easeIn' } }
};


interface SystemCardProps {
  title: string;
  href: string;
  imgSrc: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  },
};
const MotionLink = motion(Link);

const SystemCard: React.FC<SystemCardProps> = ({ title, href, imgSrc }) => (
  <MotionLink
    to={href}
    className="group flex flex-col rounded-md shadow-lg overflow-hidden relative"
    variants={cardVariants}
    whileHover={{ y: -8, scale: 1.02, boxShadow: "0px 12px 24px rgba(0,0,0,0.15)" }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="h-64 overflow-hidden">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-ecogreen-blue py-3 px-4 flex items-center justify-center">
      <h3 className="text-white text-base font-bold uppercase tracking-wide text-center">{title}</h3>
    </div>
  </MotionLink>
);


const SistemasFlexibles: React.FC = () => {
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

  const gridContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <>
      <title>Sistemas de Contención Flexibles | EcoGreen</title>
      <meta name="description" content="Descubra nuestras soluciones en sistemas de contención flexibles, una alternativa confiable, económica y adaptable para infraestructura urbana y vial." />

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
                            SISTEMAS DE CONTENCIÓN FLEXIBLES
                        </h1>
                        <p className="mt-2 text-sm md:text-lg font-semibold uppercase tracking-wider drop-shadow-md">
                            TECNOLOGÍA A PRUEBA DE ASENTAMIENTOS.
                        </p>
                    </motion.div>
                </AnimatePresence>
                <div className='flex md:hidden mt-6 space-x-8'>
                    <motion.button
                        onClick={prevSlide}
                        className="text-white/80 hover:text-white transition drop-shadow-lg p-2 bg-black/20 rounded-full"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.4)'}}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Previous slide"
                    >
                        <ChevronLeftIcon className="h-8 w-8" />
                    </motion.button>
                    <motion.button
                        onClick={nextSlide}
                        className="text-white/80 hover:text-white transition drop-shadow-lg p-2 bg-black/20 rounded-full"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.4)'}}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Next slide"
                    >
                        <ChevronRightIcon className="h-8 w-8" />
                    </motion.button>
                </div>
            </div>
        </div>

        <motion.button
            onClick={prevSlide}
            className="hidden md:block absolute top-1/2 left-4 -translate-y-1/2 text-white/70 hover:text-white transition drop-shadow-lg z-20"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous slide"
        >
            <ChevronLeftIcon className="h-12 w-12 md:h-16 md:w-16" />
        </motion.button>
        <motion.button
            onClick={nextSlide}
            className="hidden md:block absolute top-1/2 right-4 -translate-y-1/2 text-white/70 hover:text-white transition drop-shadow-lg z-20"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next slide"
        >
            <ChevronRightIcon className="h-12 w-12 md:h-16 md:w-16" />
        </motion.button>

        <div className="absolute bottom-6 left-0 right-0 z-20">
            <div className="flex items-center justify-center gap-2">
                {sliderImages.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className="w-3 h-3 rounded-full transition-colors"
                        animate={currentSlide === index ? "active" : "inactive"}
                        variants={{
                            active: { backgroundColor: '#54c70e', scale: 1.2 },
                            inactive: { backgroundColor: '#ffffff', scale: 1 }
                        }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.3 }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
      </section>

      {/* Contenido Teórico */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
                <img src="https://tumuro.com/media/banner-services/muros-de-contencion-icon.webp" alt="Icono Sistemas Flexibles" className="w-16 h-16 mr-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">Sistemas de Contención Flexibles</h2>
            </div>
            
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed text-left">
                <p>
                    Las estructuras flexibles son aquellas que son construidas con materiales deformables. Debido a esta característica estos muros pueden adaptarse a los movimientos y asentamientos del terreno dentro de los límites aceptables, sin que esto signifique la pérdida de estabilidad o el no cumplimiento eficiente de la función para la que fueron diseñados.
                </p>
                <p>
                    Las estructuras flexibles son las que más se adaptan a las necesidades de infraestructura urbana y vial de los países, debido a que son estructuras confiables y eficientes para la contención de taludes y terraplenes construidos en las diversas aplicaciones que exige la ingeniería moderna.
                </p>
                <p>
                    Entre las principales ventajas que ofrecen las estructuras flexibles podemos enumerar:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Disponibilidad de los materiales geosintéticos que los conforman.</li>
                    <li>Excelente tiempo de ejecución.</li>
                    <li>Disponibilidad de los equipos y maquinarias especializadas para su construcción.</li>
                    <li>No requiere de mano de obra calificada.</li>
                    <li>Son consideradas como la solución más económica.</li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Grid: Sistemas Flexibles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="mb-12">
                <h3 className="text-3xl font-bold text-left text-ecogreen-blue mb-2 uppercase tracking-wide">Sistemas de Contención Flexibles</h3>
                <div className="w-full h-1 bg-ecogreen-green"></div>
            </div>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={gridContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {sistemasFlexibles.map((sys) => <SystemCard key={sys.title} {...sys} />)}
            </motion.div>
        </div>
      </section>
    </>
  );
};

export default SistemasFlexibles;

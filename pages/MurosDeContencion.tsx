
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// --- Data for System Grids (Linked to Navigation Menu) ---
const sistemasFlexibles = [
  { title: 'Muros de Tierra Reforzada', href: '/muros-de-contencion/sistemas-flexibles/tierra-reforzada', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-tierra-reforzada.webp' },
  { title: 'Muros de Gavión', href: '/muros-de-contencion/sistemas-flexibles/gavion', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-gavion.webp' },
  { title: 'Muros de Gavión Reforzados', href: '/muros-de-contencion/sistemas-flexibles/gavion-reforzado', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-gavion-reforzados.webp' },
  { title: 'Muros Mixtos', href: '/muros-de-contencion/sistemas-flexibles/muros-mixtos', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-mixtos.webp' },
  { title: 'Refuerzo de Taludes', href: '/muros-de-contencion/sistemas-flexibles/refuerzo-taludes', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/refuerzo-de-taludes-y-terraplenes.webp' },
];

const sistemasRigidos = [
  { title: 'Muros Anclados y Pantallas', href: '/muros-de-contencion/sistemas-rigidos/muros-anclados', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/muros-anclados-y-pantallas-atirantadas.webp' },
  { title: 'Muros de Concreto Armado', href: '/muros-de-contencion/sistemas-rigidos/concreto-armado', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/muros-de-concreto-armado.webp' },
  { title: 'Muros Ciclópeos', href: '/muros-de-contencion/sistemas-rigidos/muros-ciclopeos', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/muros-de-ciclopeos.webp' },
  { title: 'Pilotes y Micropilotes', href: '/muros-de-contencion/sistemas-rigidos/pilotes-micropilotes', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/pilotes-y-micropilotes.webp' },
];

const sistemasDrenaje = [
  { title: 'Sistemas de Drenaje', href: '/muros-de-contencion/sistemas-drenaje', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-drenaje/sistemas-de-drenaje.webp' },
];

const sliderImages = [
  'https://tumuro.com/media/slider/muros-de-contencion1.webp',
  'https://tumuro.com/media/slider/muros-de-contencion2.webp',
  'https://tumuro.com/media/slider/muros-de-contencion3.webp',
  'https://tumuro.com/media/slider/muros-de-contencion4.webp',
  'https://tumuro.com/media/slider/muros-de-contencion5.webp',
  'https://tumuro.com/media/slider/muros-de-contencion6.webp'
];

// --- Components ---

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
    {/* Banner Azul EcoGreen Fijo */}
    <div className="absolute bottom-0 left-0 right-0 bg-ecogreen-blue py-3 px-4 flex items-center justify-center">
      <h3 className="text-white text-base font-bold uppercase tracking-wide text-center">{title}</h3>
    </div>
  </MotionLink>
);

const MurosDeContencion: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const gridContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <>
      <title>Muros de Contención | EcoGreen</title>
      <meta name="description" content="Soluciones integrales en muros de contención flexibles, rígidos y sistemas de drenaje." />

      {/* Hero Section (Homepage Style) */}
      <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden bg-gray-900">
        <AnimatePresence mode="wait">
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
        
        {/* Overlay Oscuro */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Texto Hero Centrado */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase tracking-wider drop-shadow-xl"
            >
                MUROS DE CONTENCIÓN
            </motion.h1>
            <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl text-white font-light tracking-wide max-w-2xl drop-shadow-md"
            >
                Soluciones Verdes, Prácticas y Económicas
            </motion.p>
        </div>
      </section>

      {/* Contenido Teórico */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="flex flex-col items-center mb-8">
                <img src="https://tumuro.com/media/banner-services/muros-de-contencion-icon.webp" alt="Icono" className="w-20 h-20 mb-4" />
                <h2 className="text-3xl font-bold text-ecogreen-blue uppercase tracking-wide">Muros de Contención</h2>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Los muros de contención son estructuras construidas con el propósito de resistir las fuerzas ejercidas por la tierra contenida y transmitir esas fuerzas en forma segura a la fundación o a un sitio fuera de la masa susceptible a moverse. La finalidad de los muros de contención es proveer estabilidad contra la rotura de macizos de tierra o roca para evitar los deslizamientos causados por su peso propio o por empujes producidos por cargas externas.
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
                            <p>
                                Los muros de contención están considerados como una de las técnicas de construcción más antiguas de la humanidad. Tomando en cuenta las construcciones de piedra existentes construidas por las civilizaciones prehistóricas. Sin embargo, su estudio utilizando modelos teóricos y su dimensionamiento en bases racionales comienza a desarrollarse en el siglo XVIII, cuando Coulomb en 1773 presentó su trabajo sobre la determinación del empuje lateral aplicado por el suelo sobre una estructura de contención. Esta determinación es el paso más importante en el dimensionamiento de un muro de contención.
                            </p>
                            <p>
                                La mecánica de suelo moderna utiliza ampliamente el modelo desarrollado por Coulomb, tomando en cuenta que es una de las bases principales de los métodos corrientes de dimensionamientos de muros de contención. El análisis de un muro de contención consiste en el análisis del equilibrio del conjunto formado por el macizo de suelo y la propia estructura. Este equilibrio es afectado por las características de resistencia, deformabilidad, permeabilidad y por el peso propio de esos dos elementos, además de las condiciones que rigen la interacción entre ellos.
                            </p>
                            <p>
                                Posteriormente, en 1857 nace la teoría de Rankine, la cual se basa en las condiciones de esfuerzo en el suelo en un estado de equilibrio plástico. También se analiza la estabilidad por el método ordinario de las dovelas para taludes de suelos estratificados, propuesto por Bishop en 1955.
                            </p>
                            <p>
                                Existen varios tipos de muros de contención y cada uno de ellos tiene un método de cálculo y una geometría diferente. Estos tipos de muros los podemos clasificar en dos grandes grupos:
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 text-ecogreen-blue font-bold text-lg hover:text-ecogreen-green transition-colors flex items-center justify-center mx-auto uppercase tracking-wider"
            >
                {isExpanded ? 'Cerrar ▲' : 'Leer Más ▼'}
            </button>
        </div>
      </section>

      {/* Grid: Sistemas Flexibles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12 uppercase tracking-wide">Sistemas de Contención Flexibles</h3>
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

      {/* Grid: Sistemas Rígidos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12 uppercase tracking-wide">Sistemas de Contención Rígidos</h3>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={gridContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {sistemasRigidos.map((sys) => <SystemCard key={sys.title} {...sys} />)}
            </motion.div>
        </div>
      </section>

      {/* Grid: Sistemas Drenaje */}
      <section className="py-16 bg-gray-50 mb-16">
        <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12 uppercase tracking-wide">Sistemas de Drenaje</h3>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={gridContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {sistemasDrenaje.map((sys) => <SystemCard key={sys.title} {...sys} />)}
            </motion.div>
        </div>
      </section>
    </>
  );
};

export default MurosDeContencion;

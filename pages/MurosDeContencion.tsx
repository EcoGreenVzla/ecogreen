
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

const sistemasRigidos = [
  { title: 'Muros Anclados y Pantallas', href: '/muros-de-contencion/sistemas-rigidos/muros-anclados', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/muros-anclados-y-pantallas-atirantadas.webp' },
  { title: 'Muros de Concreto Armado', href: '/muros-de-contencion/sistemas-rigidos/concreto-armado', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/muros-de-concreto-armado.webp' },
  { title: 'Muros Ciclópeos', href: '/muros-de-contencion/sistemas-rigidos/muros-ciclopeos', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/muros-de-ciclopeos.webp' },
  { title: 'Pilotes y Micropilotes', href: '/muros-de-contencion/sistemas-rigidos/pilotes-micropilotes', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/pilotes-y-micropilotes.webp' },
];

const sistemasDrenaje = [
  { title: 'Sistemas de Drenaje', href: '/muros-de-contencion/sistemas-drenaje', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-drenaje/sistemas-de-drenaje.webp' },
];


// Imágenes para Computadora (Horizontales, una sola foto completa, NO collages)
const desktopImages = [
  'https://tumuro.com/data1/images/muros-de-contencion/combined/muros-de-contencion1.jpg',
  'https://tumuro.com/data1/images/muros-de-contencion/combined/muros-de-contencion2.jpg',
  'https://tumuro.com/data1/images/muros-de-contencion/combined/muros-de-contencion3.jpg',
  'https://tumuro.com/data1/images/muros-de-contencion/combined/muros-de-contencion4.jpg',
  'https://tumuro.com/data1/images/muros-de-contencion/combined/muros-de-contencion5.jpg',
  'https://tumuro.com/data1/images/muros-de-contencion/combined/muros-de-contencion6.jpg',
  // ... agrega las demás
];

// Imágenes para Celular (Verticales)
const mobileImages = [
  'https://tumuro.com/data3/images/muros-de-contencion/muro-de-gavion-reforzado1.png',
  'https://tumuro.com/data3/images/muros-de-contencion/muro-de-tierra-reforzada1.png',
  'https://tumuro.com/data3/images/muros-de-contencion/muro-de-gavion-reforzado2.png',
  'https://tumuro.com/data3/images/muros-de-contencion/muro-de-gavion-reforzado3.png',
  'https://tumuro.com/data3/images/muros-de-contencion/muro-de-tierra-reforzada2.png',
  'https://tumuro.com/data3/images/muros-de-contencion/muro-de-gavion-reforzado4.png',
  'https://tumuro.com/data3/images/muros-de-contencion/muro-mixto1.png',
  'https://tumuro.com/data3/images/muros-de-contencion/muro-de-gavion1.png',
  'https://tumuro.com/data3/images/muros-de-contencion/pantalla-atirantada-mixta-reticulada1.jpg',
  'https://tumuro.com/data3/images/muros-de-contencion/muro-de-tierra-reforzada3.png',
  'https://tumuro.com/data3/images/muros-de-contencion/pantalla-atirantada1.jpg',
  'https://tumuro.com/data3/images/muros-de-contencion/muro-de-tierra-reforzada4.png',
  'https://tumuro.com/data3/images/muros-de-contencion/muros-de-contencion1.png',
  'https://tumuro.com/data3/images/muros-de-contencion/muros-de-contencion2.png',
  'https://tumuro.com/data3/images/muros-de-contencion/muros-de-contencion3.png',
  // ... agrega las demás
];


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
  <motion.div
    variants={cardVariants}
    className="group flex flex-col rounded-md shadow-lg overflow-hidden relative h-full"
    whileHover={{ y: -8 }}
  >
    <Link to={href} className="flex flex-col h-full">
      <div className="h-64 overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      {/* Aplicamos font-black para que la letra no se vea delgada */}
      <div className="absolute bottom-0 left-0 right-0 bg-ecogreen-blue py-4 px-4">
        <h3 className="text-white text-base font-black uppercase tracking-tighter text-center leading-tight">
          {title}
        </h3>
      </div>
    </Link>
  </motion.div>
);

const MurosDeContencion: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // NUEVO: Estado para saber si es móvil
  const [isMobile, setIsMobile] = useState(false);

  // NUEVO: Detectar cambio de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px es el punto de quiebre estándar para tablets/móviles
    };

    // Ejecutar al inicio
    handleResize();

    // Escuchar cambios
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Elegir qué lista usar según el dispositivo
  const activeImages = isMobile ? mobileImages : desktopImages;

  // ... el resto de tus funciones (nextSlide, prevSlide) ...
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % activeImages.length);
  }, [activeImages.length]);


  const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Esto hace que las tarjetas aparezcan una tras otra
      }
    }
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activeImages.length) % activeImages.length);
  };

  // Auto-play para que rote solo como la web vieja
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);



  return (
    <>
      <title>Muros de Contención | EcoGreen</title>
      <meta name="description" content="Soluciones integrales en muros de contención flexibles, rígidos y sistemas de drenaje." />

      {/* Hero Section (Homepage Style) */}
      {/* Hero Section - Ajuste para que se vea como la versión vieja */}
      <section className="relative w-full h-[500px] md:h-[570px] overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${activeImages[currentSlide]})` }}
          />
        </AnimatePresence>

        {/* Controles de flechas (opcional, pero recomendado) */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 z-20 -translate-y-1/2 text-white/50 hover:text-white">
          <ChevronLeftIcon className="w-10 h-10" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 z-20 -translate-y-1/2 text-white/50 hover:text-white">
          <ChevronRightIcon className="w-10 h-10" />
        </button>

        {/* Contenido centrado con transparencia para replicar la segunda captura */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          {/* bg-ecogreen-blue/80 para un azul profundo pero con transparencia */}
          <div className="bg-ecogreen-blue/80 p-6 md:p-12 shadow-2xl max-w-2xl backdrop-blur-sm">
            <h1 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2">
              Muros de Contención
            </h1>
            <p className="text-ecogreen-green font-bold text-base md:text-xl uppercase">
              Soluciones Verdes, Prácticas y Económicas
            </p>
          </div>
        </div>
      </section>

      {/* Contenido Teórico */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
              <img src="https://tumuro.com/media/banner-services/muros-de-contencion-icon.webp" alt="Icono" className="w-16 h-16 mr-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">Muros de Contención</h2>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
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

      {/* Grid: Sistemas Flexibles */}
      <section className="py-16 bg-white">
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

      {/* Grid: Sistemas Rígidos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-left text-ecogreen-blue mb-2 uppercase tracking-wide">Sistemas de Contención Rígidos</h3>
            <div className="w-full h-1 bg-ecogreen-green"></div>
          </div>
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
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-left text-ecogreen-blue mb-2 uppercase tracking-wide">Sistemas de Drenaje</h3>
            <div className="w-full h-1 bg-ecogreen-green"></div>
          </div>
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

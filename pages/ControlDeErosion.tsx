
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
    'https://tumuro.com/media/control-de-erosion/sliders/rota-morocha-1.webp',
    'https://tumuro.com/media/control-de-erosion/sliders/rota-morocha-2.webp',
    'https://tumuro.com/media/control-de-erosion/sliders/rota-morocha-3.webp',
    'https://tumuro.com/media/control-de-erosion/sliders/rota-morocha-4.webp',
    'https://tumuro.com/media/control-de-erosion/sliders/rota-morocha-5.webp',
];

const erosionSystems = [
    { title: 'ESTABILIZACIÓN DE TALUDES', href: '/control-de-erosion/estabilizacion-taludes', imgSrc: 'https://tumuro.com/media/control-de-erosion/grid-control-de-erosion/morocha-izquierda.webp' },
    { title: 'REFUERZO DE TALUDES Y TERRAPLENES', href: '/control-de-erosion/refuerzo-terraplenes', imgSrc: 'https://tumuro.com/media/control-de-erosion/grid-control-de-erosion/refuerzo-de-taludes-y-terraplenes1.webp' },
    { title: 'REFORESTACIÓN', href: '/control-de-erosion/reforestacion', imgSrc: 'https://tumuro.com/media/control-de-erosion/grid-control-de-erosion/morocha-derecha.webp' },
    { title: 'CANALIZACIONES', href: '/control-de-erosion/canalizaciones', imgSrc: 'https://tumuro.com/media/control-de-erosion/grid-control-de-erosion/foto-banner-derecha-canalizaciones.webp' },
    { title: 'DIQUES Y PRESAS', href: '/control-de-erosion/diques-presas', imgSrc: 'https://tumuro.com/media/control-de-erosion/grid-control-de-erosion/morocha-derecha-diques-y-presas.webp' },
    { title: 'PROTECCIÓN DE RIBERAS', href: '/control-de-erosion/proteccion-riberas', imgSrc: 'https://tumuro.com/media/control-de-erosion/grid-control-de-erosion/morocha-izquierda-proteccion-de-riberas.webp' },
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


const ControlDeErosion: React.FC = () => {
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
      <title>Control de Erosión | EcoGreen</title>
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
                            CONTROL DE EROSIÓN
                        </h1>
                        <p className="mt-2 text-sm md:text-lg font-semibold uppercase tracking-wider drop-shadow-md">
                            LA PROTECCIÓN DEL SUELO.
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

      {/* Contenido Teórico */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
                <img src="https://tumuro.com/media/banner-services/control-de-erosion-icon.png" alt="Icono Control de Erosión" className="w-16 h-16 mr-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">CONTROL DE EROSIÓN</h2>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
                La erosión es un fenómeno que se ocasiona debido a la migración de partículas finas del suelo, principalmente producido por la acción del viento y la lluvia, siendo las zonas más susceptibles aquellas que carecen de algún tipo de vegetación en su superficie. Es considerado también, como un proceso de desgaste y transporte de sedimentos del suelo, causado por el agua de lluvia y el escurrimiento superficial, este proceso a su vez es afectado por diversos factores como el clima, el tipo de suelo, la vegetación y la topografía del terreno.
            </p>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden text-left">
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed pt-4 pb-8 border-t border-gray-200 mt-4">
                            <p>Los factores climáticos tienen un papel importante en la erosión hídrica, siendo las precipitaciones tanto en su intensidad como en su duración, el elemento desencadenante del proceso. No obstante, estas características de la lluvia y la relación que existe con la infiltración, la escorrentía y la pérdida de partículas del suelo, es muy compleja, debido a que estas pueden también ser afectadas por las características geotécnicas del suelo.</p>
                            <p>Las GEOMANTAS ECOGREEN son mantos permanentes que cumplen la función de alojar en su arreglo dimensional el material orgánico necesario para la germinación de semillas y el crecimiento de la nueva vegetación, al mismo tiempo controlan la escorrentía reduciendo la velocidad del flujo de agua, minimizando las fuerzas erosivas aplicadas sobre el suelo.</p>
                            <p>Las GEOMANTAS ECOGREEN están compuestas por fibras sintéticas de poliéster no degradables y resistentes a los rayos ultra violeta del sol, son resistentes a los agentes oxidantes y a la acción de los ácidos, y no son afectadas por los microorganismos. Es importante resaltar que a diferencia de los sistemas convencionales las GEOMANTAS ECOGREEN están diseñadas para soportar esfuerzos ejercidos sobre la superficie del talud, debido a que son fabricadas con altos módulos de resistencia a la tracción y a la fluencia. Ecológicamente son las más favorables debido a que su color verde les permite estar en armonía con la naturaleza, minimizando el impacto ambiental.</p>
                            <p>Una de las principales ventajas de las GEOMANTAS ECOGREEN es que son un sistema liviano de fácil manejo que no requiere de maquinaria pesada para su instalación. Esto trae como consecuencia el poder estabilizar taludes en zonas de difícil acceso donde para los sistemas convencionales es imposible llegar.</p>
                            <p>El sistema para control de erosión y estabilización de taludes ECOGREEN permite intervenir taludes que presentan fuertes pendientes, debido a su alto modulo de resistencia a la tracción y a la fluencia. Cabe destacar que estos taludes de mayor pendiente son los mas propensos a presentar la llamada falla de talud infinito al momento de sobre saturarse.</p>
                            <p>Las soluciones tradicionales de muros colados, pantallas atirantadas y concreto proyectados, tienen un impacto ambiental muy alto debido a que su acabado final es de concreto de color gris, que contrasta muy fuertemente con la vegetación, para esto las GEOMANTAS ECOGREEN son utilizadas como revestimiento para minimizar el impacto ambiental y ayuda a acelerar la cobertura vegetal.</p>
                            <p>Al iniciar una obra de movimiento de tierra y constituir taludes de corte y relleno, estos no pueden dejarse expuesto por mucho tiempo a los agentes erosivos hídricos y eólicos, debido a que rápidamente se erosionarían y se producirían cárcavas en toda su superficie. Para evitar este proceso erosivo se deberá instalar el sistema de GEOMANTAS ECOGREEN para proporcionar una estructura de refuerzo a las raíces y al follaje de la vegetación.</p>
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

export default ControlDeErosion;

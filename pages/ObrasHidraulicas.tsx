
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
const obrasHidraulicas = [
  { title: 'MUROS DE CONTENCIÓN', href: '/muros-de-contencion', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/muros-de-contencion-cda.webp' },
  { title: 'SISTEMA DE CONTENCIÓN FLEXIBLES', href: '/muros-de-contencion/sistemas-flexibles', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/sistemas-de-contencion-flexibles1.webp' },
  { title: 'MUROS DE TIERRA REFORZADA', href: '/muros-de-contencion/sistemas-flexibles/tierra-reforzada', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/muros-de-tierra-reforzada-cda.webp' },
  { title: 'MUROS DE GAVIÓN', href: '/muros-de-contencion/sistemas-flexibles/gavion', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/muros-de-gavion-cda.webp' },
  { title: 'MUROS DE GAVIÓN REFORZADOS', href: '/muros-de-contencion/sistemas-flexibles/gavion-reforzado', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/muros-de-gavion-reforzados-cda.webp' },
  { title: 'MUROS MIXTOS', href: '/muros-de-contencion/sistemas-flexibles/muros-mixtos', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/muros-mixtos-cda.webp' },
  { title: 'REFUERZO DE TALUDES Y TERRAPLENES', href: '/muros-de-contencion/sistemas-flexibles/refuerzo-taludes', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/refuerzo-de-taludes-y-terraplenes-cda.webp' },
  { title: 'SISTEMAS DE DRENAJE', href: '/muros-de-contencion/sistemas-drenaje', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/sistemas-de-drenaje-cda.webp' },
  { title: 'CONTROL DE EROSIÓN', href: '/control-de-erosion', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/control-de-erosion-cda.webp' },
  { title: 'ESTABILIZACIÓN DE TALUDES', href: '/control-de-erosion/estabilizacion-taludes', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/estabilizacion-de-taludes-cda.webp' },
  { title: 'REFORESTACIÓN', href: '/control-de-erosion/reforestacion', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/reforestacion-cda.webp' },
  { title: 'CANALIZACIONES', href: '/control-de-erosion/canalizaciones', imgSrc: 'https://tumuro.com/media/construccion-civil/grid-construccion-civil/canalizaciones-cda.webp' },
  { title: 'DIQUES Y PRESAS', href: '/control-de-erosion/diques-presas', imgSrc: 'https://tumuro.com/media/construccion-civil/grid-construccion-civil/diques-y-presas-cda.webp' },
  { title: 'PROTECCIÓN DE RIBERAS', href: '/control-de-erosion/proteccion-riberas', imgSrc: 'https://tumuro.com/media/industria-petroleo-y-gas/grid-industria-petroleo-y-gas/proteccion-de-riberas-cda.webp' },
  { title: 'RECONSTRUCCIÓN DE FALLAS DE BORDE', href: '', imgSrc: 'https://tumuro.com/media/industria-petroleo-y-gas/grid-industria-petroleo-y-gas/reconstruccion-de-fallas-de-borde-cda.webp' },
  { title: 'RAMPAS Y VIAS DE PENETRACIÓN', href: '', imgSrc: 'https://tumuro.com/media/industria-petroleo-y-gas/grid-industria-petroleo-y-gas/rampas-y-vias-de-penetracion-cda.webp' },
  { title: 'SEPARACIÓN Y ESTABILIZACIÓN DE SUBRASANTES', href: '', imgSrc: 'https://tumuro.com/media/industria-petroleo-y-gas/grid-industria-petroleo-y-gas/separacion-y-estabilizacion-de-subrasantes-cda.webp' },
  { title: 'REFUERZO DE TERRAPLENES SOBRE SUELOS BLANDOS', href: '', imgSrc: 'https://tumuro.com/media/industria-petroleo-y-gas/grid-industria-petroleo-y-gas/refuerzo-de-terraplenes-sobre-suelos-blandos-cda.webp' },
  { title: 'MANTENIMIENTO DE AREAS VERDES', href: '', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/mantenimiento-de-areas-verdes-cda.webp' },
];

const sliderImages = [
  'https://tumuro.com/media/obras-hidraulicas/slider/obras-hidraulicas.webp',
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


const ObrasHidraulicas: React.FC = () => {
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

  const gridContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <>
      <title>OBRAS HIDRÁULICAS | EcoGreen</title>
      <meta name="description" content="Descubra nuestras soluciones en protección ambiental, una alternativa confiable, económica y adaptable para infraestructura urbana y vial." />

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
                  OBRAS HIDRÁULICAS
                </h1>
                <p className="mt-2 text-sm md:text-lg font-semibold uppercase tracking-wider drop-shadow-md">
                  PROTECCIÓN DE CAUCES.
                </p>
              </motion.div>
            </AnimatePresence>
            <div className='flex md:hidden mt-6 space-x-8'>
              <motion.button
                onClick={prevSlide}
                className="text-white/80 hover:text-white transition drop-shadow-lg p-2 bg-black/20 rounded-full"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.4)' }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous slide"
              >
                <ChevronLeftIcon className="h-8 w-8" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                className="text-white/80 hover:text-white transition drop-shadow-lg p-2 bg-black/20 rounded-full"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.4)' }}
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">OBRAS HIDRÁULICAS
              </h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
              La geografía nacional es topográficamente muy accidentada, lo que se considera favorable para la construcción de obras hidráulicas a lo largo del territorio nacional. Las soluciones hidráulicas ECOGREEN se dividen en dos grupos: obras transversales como los diques y las presas, y obras longitudinales para la protección de riberas contra la erosión y espigones para delimitar los cauces de rio, entre otros. Este tipo de obras generalmente requieren de grandes inversiones debido a que revisten gran importancia para las comunidades, por lo que su calidad y su prolongada vida útil deben ser garantizadas en el tiempo. Para lograr cumplir con estos parámetros ECOGREEN ofrece cestas de gavión metálicas fabricadas a máquina, que representan una solución flexible que se adapta a los pequeño asentamientos diferenciales que pudiesen ocurrir en el fondo de los cauces de rio, sin que esto implique la disminución del funcionamiento eficaz de la obra. Con la utilización de las cestas de gavión metálicas ECOGREEN se reducen los costos debido a que las fundaciones convencionales con concreto y acero resultan muy caras y requieren de mayor tiempo para su construcción debido a que necesitan mayor logística operativa con respecto a sus fundación, excavaciones y operaciones de bombeo, en algunos casos también se requiere de la construcción de ataguías para encapsular e impermeabilizar el área y poder llegar al cimiento de la fundación.
            </p>
            <AnimatePresence>
              {isExpanded && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden text-left">
                  <div className="space-y-6 text-xl text-gray-700 leading-relaxed text-left">
                    <p>
                      Una ventaja de los gaviones metálicos ECOGREEN es que permiten realizar las obras sin la necesidad de realizar desvíos en los cursos de agua durante su construcción, ya que las cestas son estructuras drenantes y permeables que permiten el libre flujo del agua y que a su vez trae como consecuencia la disminución del empuje hidrostático sobre la estructura, permitiendo que funcione eficientemente sin la necesidad de someterla a soportar grandes presiones.
                    </p>
                    Los gaviones metálicos ECOGREEN son estructuras de bajo impacto ambiental. La malla hexagonal de doble torsión que la conforma poseen una gran resistencia mecánica por el formato de su constitución monolítica, y su durabilidad está garantizada por el recubrimiento galvanizado del alambre con zinc para evitar la corrosión y oxidación. Estas características cumplen con todas las normas internacionales para este tipo de producto. En algunos casos las cestas pueden suministrarse con recubrimientos de materiales plásticos como el PVC para resistir fluidos en ambientes agresivos.                        <p>
                    </p>
                    <p>
                      Otra obra de hidráulica de gran importancia son los canales que generalmente se dividen en dos dependiendo de su geometría y función: Los canales rectangulares y los canales trapezoidales. Los rectangulares son utilizados en zonas urbanas donde la sección del canal se restringe por el espacio limitado que se tiene en las grandes ciudades y muchos casos se hace necesario embaularlos en su totalidad para poder cruzar vías de comunicación sobre ellos. Los canales trapezoidales son comúnmente utilizados en zonas más rurales, donde los canales puedes estar a cielo abierto sin limitaciones de espacio. Estos son construidos para actividades de riego en el sector agrícola y en muchos casos son utilizados para recuperar y proteger cursos de agua naturales contra la erosión.                        </p>
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
      {/* Grid: Sistemas Flexibles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-left text-ecogreen-blue mb-2 uppercase tracking-wide">OBRAS HIDRÁULICAS</h3>
            <div className="w-full h-1 bg-ecogreen-green"></div>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {obrasHidraulicas.map((sys) => <SystemCard key={sys.title} {...sys} />)}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ObrasHidraulicas;

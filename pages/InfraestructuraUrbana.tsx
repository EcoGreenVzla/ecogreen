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
const insfraestructuraUrbana = [
  { title: 'MUROS DE CONTENCIÓN', href: '/muros-de-contencion/sistemas-flexibles/tierra-reforzada', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/muros-de-contencion-cda.webp' },
  { title: 'SISTEMA DE CONTENCIÓN FLEXIBLES', href: '/sistemas-de-contencion-flexibles', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/sistemas-de-contencion-flexibles1.webp' },
  { title: 'MUROS DE TIERRA REFORZADA', href: '/muros-de-contencion/muros-de-tierra-reforzada', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/muros-de-tierra-reforzada-cda.webp' },
  { title: 'MUROS DE GAVIÓN', href: '/muros-de-contencion/sistemas-flexibles/muros-de-gavion', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/muros-de-gavion-cda.webp' },
  { title: 'MUROS DE GAVIÓN REFORZADOS', href: '/muros-de-contencion/sistemas-flexibles/muros-de-gavion-reforzados', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/muros-de-gavion-reforzados-cda.webp' },
  { title: 'MUROS MIXTOS', href: '/muros-de-contencion/sistemas-flexibles/muros-mixtos', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/muros-mixtos-cda.webp' },
  { title: 'REFUERZO DE TALUDES Y TERRAPLENES', href: '/muros-de-contencion/sistemas-flexibles/refuerzo-de-taludes-y-terraplenes', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/refuerzo-de-taludes-y-terraplenes-cda.webp' },
  { title: 'SISTTEMA DE CONTENCIÓN RIGIDOS', href: '/muros-de-contencion/sistemas-de-contencion-rigidos', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/sistemas-de-contencion-rigidos13.webp' },
  { title: 'MUROS ANCLADOS Y PANTALLAS ATIRANTADAS', href: '/muros-de-contencion/muros-anclados-y-pantallas-atirantadas', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/muros-anclados-y-pantallas-atirantadas-cda.webp' },
  { title: 'MUROS DE CONCRETO ARMADO', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-concreto-armado', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/muros-de-concreto-armado-cda.webp' },
  { title: 'MUROS CICLÓPEOS', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-ciclopeos', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/muros-ciclopeos-cda.webp' },
  { title: 'PILOTES Y MICROPILOTES', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/pilotes-y-micropilotes', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/pilotes-y-micropilotes-cda.webp' },
  { title: 'SISTEMAS DE DRENAJE', href: '/muros-de-contencion/sistemas-de-drenaje', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/sistemas-de-drenaje-cda.webp' },
  { title: 'CONTROL DE EROSIÓN', href: '/control-de-erosion', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/control-de-erosion-cda.webp' },
  { title: 'ESTABILIZACIÓN DE TALUDES', href: '/control-de-erosion/estabilizacion-de-taludes', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/estabilizacion-de-taludes-cda.webp' },
  { title: 'REFORESTACIÓN', href: '/control-de-erosion/reforestacion', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/reforestacion-cda.webp' },
  { title: 'RECONSTRUCCIÓN DE FALLAS DE BORDE', href: '', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/reconstruccion-de-fallas-de-borde-cda.webp' },
  { title: 'REFUERZO DE PAVIMENTOS Y REPAVIMENTACIÓN', href: '', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/refuerzo-de-pavimentos-y-repavimentacion-cda.webp' },
  { title: 'SUBDRENAJES Y ALCANTARILLAS', href: '', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/subdrenajes-y-alcantarillas-cda.webp' },
  { title: 'ACERAS Y CAMINERIAS', href: '', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/aceras-y-caminerias-cda.webp' },
  { title: 'MANTENIMIENTO DE AREAS VERDES', href: '', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/mantenimiento-de-areas-verdes-cda.webp' },
  { title: 'JARDINES VERTICALES Y TECHOS VERDES', href: '', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/subdrenajes-y-alcantarillas-cda.webp' },


];

const sliderImages = [
  'https://tumuro.com/media/infraestructura-urbana/slider/infraestructura-urbana.webp',
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


const InfraestructuraUrbana: React.FC = () => {
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
      <title>Insfraestructura Urbana | EcoGreen</title>
      <meta name="description" content="Descubra nuestras soluciones en  la infraestructura urbana, una alternativa confiable, económica y adaptable para infraestructura urbana y vial." />

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
                  INFRAESTRUCTURA URBANA
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

      {/* Contenido Teórico */}
      <section className="py-20 bg-white">
          <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
             ECOGREEN incorpora innumerables soluciones en diferentes campos de aplicación en la infraestructura urbana. Las obras proyectadas y ejecutadas por los profesionales de la arquitectura, urbanistas, ingenieros civiles, entre muchos otros, sirven de soporte para el desarrollo de otras actividades y su necesario funcionamiento en la organización estructural de las ciudades. Los aportes de las soluciones ECOGREEN abarcan muchos sectores importantes en los que se encuentran; el sector TRANSPORTE que contempla las calles, carreteras, autopistas, vías férreas, puertos y aeropuertos. La infraestructura ENERGÉTICA que incluye las redes eléctricas, transformación, distribución y alumbrado público, calefacción urbana, refinerías, oleoductos, gasoductos, plantas eólicas, térmicas y nucleares. Infraestructura HIDRÁULICA que agrupa todas las redes de recolección y reciclaje de residuos, vertederos y rellenos sanitarios, redes de desagüe y alcantarillado, embalses, depósitos, tratamiento y distribución de agua potable. Otro sector importante es las TELECOMUNICACIONES que está conformado por las obras de telefonía fija, redes de televisión, repetidoras, centrales, fibra óptica y celdas de telefonía celular. Y por último el sector de las EDIFICACIONES que abarca las principales obras de infraestructura que se encuentran más visibles y cercanas a las comunidades, como lo son las viviendas, instituciones educativas, comercios, industria, hospitales y centros de salud, parques, etc.
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
                <p>Las grandes obras de infraestructura, muchas veces generan impactos sociales y ambientales, poniendo en riesgo la salud y el bienestar de las comunidades afectadas, por lo que precisan de exhaustivos estudios de impacto ambiental previos a su realización. Es por esto que ECOGREEN fomenta la incorporación de la INFRAESTRUCTURA VERDE, que se compone principalmente por los suelos y la vegetación, y que tiene como objetivo incorporar mayor número de áreas reforestadas y mejorar la gestión del agua de lluvia de los ambientes construidos, para lograr beneficios laterales tales como; mejorar la calidad del aire y reducir el efecto "Isla de Calor"</p>
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
      </section>
      {/* Grid: Sistemas Flexibles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-left text-ecogreen-blue mb-2 uppercase tracking-wide">Infraestructura Urbana</h3>
            <div className="w-full h-1 bg-ecogreen-green"></div>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {insfraestructuraUrbana.map((sys) => <SystemCard key={sys.title} {...sys} />)}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default InfraestructuraUrbana;

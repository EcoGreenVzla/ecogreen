

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
const mineriaYgeotecnia = [
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


const MineriaYgeotecnia: React.FC = () => {
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
      <title>MINERÍA, GEOLOGÍA Y GEOTECNIA | EcoGreen</title>
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
                  MINERÍA, GEOLOGÍA Y GEOTECNIA
                </h1>
                <p className="mt-2 text-sm md:text-lg font-semibold uppercase tracking-wider drop-shadow-md">
                  PROTECTOS DE EXPLOTACIÓN RESPONSABLES.
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
              <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">MINERÍA, GEOLOGÍA Y GEOTECNIA
              </h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
              La minería es una actividad económica del sector primario representada por la explotación o extracción de los minerales que se han acumulado en el suelo y subsuelo en forma de yacimientos. Dependiendo del tipo de mineral a extraer la actividad se divide en minería metálica (cobre, oro, plata, aluminio, plomo, hierro, mercurio, coltan, etc) que son empleados como materias primas básicas para la fabricación de una variedad de productos industriales. Mientras que la minería no metálica o también denominada de cantera y construcción (arcilla, cuarzo, zafiro, esmeralda, granito, mármol, mica, etc) son utilizados como materiales de construcción y materia prima de joyería, ornamentación, entre otros usos. Otro tipo de minería, es la extracción de los minerales energéticos o combustibles, empleados principalmente para generar energía, como por ejemplo el petróleo, gas natural y el carbón.            </p>
            <AnimatePresence>
              {isExpanded && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden text-left">
                  <div className="space-y-6 text-xl text-gray-700 leading-relaxed text-left">
                    <p>
                      Es importante resaltar que la minería es una de las actividades más antiguas de la humanidad, ya que se sabe que desde tiempos de la prehistoria el hombre ha usado diversos minerales para la fabricación de herramientas y armas. Con el pasar de los siglos se convirtió en una importante industria, que ha creado una serie de técnicas, estudios y análisis físico-quimicos con el objetivo de mejorar la exploración y explotación de los yacimientos. Por su parte las compañías o empresas mineras son las encargadas de llevarla a cabo como industria, cuya competencia depende de la producción de mineral extraído y de la calidad y cantidad del mismo. Para entenderla mejor, la actividad se divide en gran, mediana y pequeña minería, no obstante, en algunos países existe una cuarta categoría, la artesanal.                    </p>
                    Los gaviones metálicos ECOGREEN son estructuras de bajo impacto ambiental. La malla hexagonal de doble torsión que la conforma poseen una gran resistencia mecánica por el formato de su constitución monolítica, y su durabilidad está garantizada por el recubrimiento galvanizado del alambre con zinc para evitar la corrosión y oxidación. Estas características cumplen con todas las normas internacionales para este tipo de producto. En algunos casos las cestas pueden suministrarse con recubrimientos de materiales plásticos como el PVC para resistir fluidos en ambientes agresivos.                        <p>
                    </p>
                    <p>
                      Para regular la industria minera los gobiernos nacionales y las instituciones financieras internacionales han creado una serie de reformas legislativas, que busca la armonía y la estabilidad del sector productivo. Estas en su gran mayoría están enfocadas en el cuidado del medio ambiente para evitar desastres ecológicos que afecten a las comunidades. Para esto se deben seguir procedimientos ambientales de ingeniería en el área geológica que cumplen con las normativas y estándares internacionales. ECOGREEN cuenta con un departamento exclusivo en el área de geología y geotecnia que se encarga de proyectar y ejecutar planes de exploración y explotación geológico mineros que cumplen con todos los procedimientos legales establecidos mundialmente en el campo de la minería. Entre los principales procesos que se ejecutan para montar un plan de exploración y explotación minera optimo y eficaz se encuentran: la realización de estudios de suelo previos con recuperación de núcleos, levantamientos topográficos, geomática y levantamientos cartográficos, geología de superficie y levantamientos geofísicos, prospección en campo y mapas de exploración, ejecución de proyectos y montajes de plantas de explotación en minas y muy importante la certificación de muestras y categorización de los recursos minerales, para poder realizar la comercialización de la producción en el mercado internacional.
                    </p> 
                      El Banco Mundial, considera a la minería como uno de los indicadores básicos de las posibilidades de desarrollo económico de una región o país. ECOGREEN ofrece soluciones en todas las etapas de un proyecto de explotación minera, desde el inicio del plan de exploración, delimitación y evaluación de la mineralización hasta la puesta en marcha de plantas de extracción y procesamiento llave en mano.               
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
            <h3 className="text-3xl font-bold text-left text-ecogreen-blue mb-2 uppercase tracking-wide">MINERÍA, GEOLOGÍA Y GEOTECNIA</h3>
            <div className="w-full h-1 bg-ecogreen-green"></div>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {mineriaYgeotecnia.map((sys) => <SystemCard key={sys.title} {...sys} />)}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MineriaYgeotecnia;

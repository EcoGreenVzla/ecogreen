
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
const industriaPetroleogas = [
  { title: 'MUROS DE CONTENCIÓN', href: '/muros-de-contencion', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/muros-de-contencion-cda.webp' },
  { title: 'SISTEMA DE CONTENCIÓN FLEXIBLES', href: '/muros-de-contencion/sistemas-flexibles', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/sistemas-de-contencion-flexibles1.webp' },
  { title: 'MUROS DE TIERRA REFORZADA', href: '/muros-de-contencion/sistemas-flexibles/tierra-reforzada', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/muros-de-tierra-reforzada-cda.webp' },
  { title: 'MUROS DE GAVIÓN', href: '/muros-de-contencion/sistemas-flexibles/gavion', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/muros-de-gavion-cda.webp' },
  { title: 'MUROS DE GAVIÓN REFORZADOS', href: '/muros-de-contencion/sistemas-flexibles/gavion-reforzado', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/muros-de-gavion-reforzados-cda.webp' },
  { title: 'MUROS MIXTOS', href: '/muros-de-contencion/sistemas-flexibles/muros-mixtos', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/muros-mixtos-cda.webp' },
  { title: 'REFUERZO DE TALUDES Y TERRAPLENES', href: '/muros-de-contencion/sistemas-flexibles/refuerzo-taludes', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/refuerzo-de-taludes-y-terraplenes-cda.webp' },
  { title: 'SISTTEMA DE CONTENCIÓN RIGIDOS', href: '/muros-de-contencion/sistemas-rigidos', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/sistemas-de-contencion-rigidos13.webp' },
  { title: 'MUROS DE CONCRETO ARMADO', href: '/muros-de-contencion/sistemas-rigidos/concreto-armado', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/muros-de-concreto-armado-cda.webp' },
  { title: 'PILOTES Y MICROPILOTES', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/pilotes-y-micropilotes', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/pilotes-y-micropilotes-cda.webp' },
  { title: 'SISTEMAS DE DRENAJE', href: '/muros-de-contencion/sistemas-drenaje', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/sistemas-de-drenaje-cda.webp' },
  { title: 'CONTROL DE EROSIÓN', href: '/control-de-erosion', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/control-de-erosion-cda.webp' },
  { title: 'ESTABILIZACIÓN DE TALUDES', href: '/control-de-erosion/estabilizacion-taludes', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/estabilizacion-de-taludes-cda.webp' },
  { title: 'REFORESTACIÓN', href: '/control-de-erosion/reforestacion', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/reforestacion-cda.webp' },
  { title: 'CANALIZACIONES', href: '/control-de-erosion/canalizaciones', imgSrc: 'https://tumuro.com/media/construccion-civil/grid-construccion-civil/canalizaciones-cda.webp' },
  { title: 'DIQUES Y PRESAS', href: '/control-de-erosion/diques-presas', imgSrc: 'https://tumuro.com/media/construccion-civil/grid-construccion-civil/diques-y-presas-cda.webp' },
  { title: 'PROTECCIÓN DE RIBERAS', href: '/control-de-erosion/proteccion-riberas', imgSrc: 'https://tumuro.com/media/industria-petroleo-y-gas/grid-industria-petroleo-y-gas/proteccion-de-riberas-cda.webp' },
  { title: 'RECONSTRUCCIÓN DE FALLAS DE BORDE', href: '', imgSrc: 'https://tumuro.com/media/industria-petroleo-y-gas/grid-industria-petroleo-y-gas/reconstruccion-de-fallas-de-borde-cda.webp' },
  { title: 'REFUERZO DE PAVIMENTOS Y REPAVIMENTACIÓN', href: '', imgSrc: 'https://tumuro.com/media/industria-petroleo-y-gas/grid-industria-petroleo-y-gas/refuerzo-de-pavimentos-y-repavimentacion-cda.webp' },
  { title: 'RAMPAS Y VIAS DE PENETRACIÓN', href: '', imgSrc: 'https://tumuro.com/media/industria-petroleo-y-gas/grid-industria-petroleo-y-gas/rampas-y-vias-de-penetracion-cda.webp' },
  { title: 'SEPARACIÓN Y ESTABILIZACIÓN DE SUBRASANTES', href: '', imgSrc: 'https://tumuro.com/media/industria-petroleo-y-gas/grid-industria-petroleo-y-gas/separacion-y-estabilizacion-de-subrasantes-cda.webp' },
  { title: 'REFUERZO DE TERRAPLENES SOBRE SUELOS BLANDOS', href: '', imgSrc: 'https://tumuro.com/media/industria-petroleo-y-gas/grid-industria-petroleo-y-gas/refuerzo-de-terraplenes-sobre-suelos-blandos-cda.webp' },
  { title: 'SUBDRENAJE Y ALCHANTARILLAS', href: '', imgSrc: 'https://tumuro.com/media/industria-petroleo-y-gas/grid-industria-petroleo-y-gas/subdrenajes-y-alcantarillas-cda.webp' },
  { title: 'ACERAS Y CAMINERIAS', href: '', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/aceras-y-caminerias-cda.webp' },
  { title: 'MANTENIMIENTO DE AREAS VERDES', href: '', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/mantenimiento-de-areas-verdes-cda.webp' },
  { title: 'SUMINISTRO DE VALVULAS Y TUBERÍAS', href: '', imgSrc: 'https://tumuro.com/media/infraestructura-urbana/grid-infraestructura-urbana/mantenimiento-de-areas-verdes-cda.webp' },


];

const sliderImages = [
  'https://tumuro.com/media/industria-petroleo-y-gas/slider/industria-petroleo-y-gas.webp',
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


const IndustriaPetroleoGas: React.FC = () => {
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
      <title>Industria Petróleo y Gas | EcoGreen</title>
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
                  INDUSTRIA PETRÓLEO Y GAS
                </h1>
                <p className="mt-2 text-sm md:text-lg font-semibold uppercase tracking-wider drop-shadow-md">
                  SECTOR ENERGETICO.
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">INDUSTRIA, PETRÓLEO Y GAS
              </h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
              La industria petrolera incluye procesos globales de exploración, extracción, refinación, transporte (frecuentemente a través de buques petroleros y oleoductos) y la mercadotecnia del producto Petróleo y sus derivados. Los productos de mayor volumen en la industria son los combustibles como por ejemplo el fueloil y la gasolina. El petróleo es la materia prima de muchos productos químicos incluyendo productos farmacéuticos, disolventes, fertilizantes, pesticidas y plásticos.          </p>
            <AnimatePresence>
              {isExpanded && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden text-left">
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed pt-4 pb-8 border-t border-gray-200 mt-4">
                    <p>
                      El Petróleo es un producto esencial para muchas industrias, y es de vital importancia para el mantenimiento de la misma civilización industrializada, por lo que se considera una industria critica en la mayoría de las naciones. El petróleo alimenta un porcentaje muy alto del consumo de energía del mundo.
                    </p>
                  </div>
                  <div>
                    <p>
                      La industria del petróleo se divide normalmente en tres fases:
                    </p>
                    <ul className="list-disc list-inside space-y-6 text-lg text-gray-700 leading-relaxed pt-4 pb-8 border-t border-gray-200 mt-4">
                      <li>"Upstream" Exploración, extracción y producción.</li>
                      <li>"Midstream" Transporte, procesos y almacenamiento.</li>
                      <li>"Downstream" Refinación, comercialización y distribución.</li>
                    </ul>
                    <p>
                      Las soluciones y productos ECOGREEN aportan beneficios al ecosistema intervenido en cualquiera de las tres fases antes mencionadas. Entre las principales aplicaciones en la industria petrolera se encuentran: El refuerzo y estabilización de vías de penetración a zonas petroleras de difícil acceso debido a la baja capacidad portante de suelos blandos, ECOGREEN también estabiliza las áreas y taludes controlando la erosión con el uso de Ecomantos Verdes que fomentan la rápida reforestación. En los casos donde la vialidad y los campos petroleros requieren ser pavimentados ECOGREEN suministra e instala geomallas de refuerzo de poliéster de alto modulo para aumentar la capacidad de soporte de la capa de rodamiento, sin la necesidad de aportar ni transportar grandes volúmenes de material granular para mejorar las condiciones geotécnicas del suelo. Entre muchas otras soluciones se encuentran también sistemas de drenaje, rampas y terraplenes, protección de estribos de puentes, construcción de diques, presas, impermeabilización de canales y lagunas para lodos de perforación, suministro de todo tipo de tuberías y válvulas utilizadas en los procesos de extracción, producción, refinación y transporte.                          </p>
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
      <section className="py-20 bg-white">
        <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
          Los términos conservación ambiental, conservación de las especies, conservación de la naturaleza y protección de la naturaleza Son algunos de los nombres con que se conocen las distintas formas de preservación de la naturaleza, el medio ambiente o específicamente alguna de sus partes: la flora y la fauna, las distintas especies, los distintos ecosistemas, valores paisajísticos, entre otros. La conservación ambiental comprende un conjunto de acciones tendientes a un manejo, uso y cuidado responsable de los bienes comunes en un territorio determinado, que asegure el mantenimiento y potencie sus condiciones presentes desde la identidad y costumbres de las comunidades locales y para las generaciones futuras.
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
                <p>La industria petrolera incluye procesos globales de exploración, extracción, refinación, transporte (frecuentemente a través de buques petroleros y oleoductos) y la mercadotecnia del producto Petróleo y sus derivados. Los productos de mayor volumen en la industria son los combustibles como por ejemplo el fueloil y la gasolina. El petróleo es la materia prima de muchos productos químicos incluyendo productos farmacéuticos, disolventes, fertilizantes, pesticidas y plásticos.</p>
              </div>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-4 text-gray-700">
                <p>El Petróleo es un producto esencial para muchas industrias, y es de vital importancia para el mantenimiento de la misma civilización industrializada, por lo que se considera una industria critica en la mayoría de las naciones. El petróleo alimenta un porcentaje muy alto del consumo de energía del mundo.</p>
                <p>La industria del petróleo se divide normalmente en tres fases:</p>
                <li> Control de erosión y estabilización de taludes con geomantas verdes ECOGREEN.</li>
                <li> Construcción de muros reforestables de tierra reforzada con geomallas de poliéster ECOGREEN de alto modulo, para reparar fallas de bordes en vialidad y construir terraplenes.</li>
                <li> Protección de riberas y construcción de obras hidráulicas, diques, presas y canales con gaviones metálicos ECOGREEN fabricados a máquina.</li>
                <p>Las soluciones y productos ECOGREEN aportan beneficios al ecosistema intervenido en cualquiera de las tres fases antes mencionadas. Entre las principales aplicaciones en la industria petrolera se encuentran: El refuerzo y estabilización de vías de penetración a zonas petroleras de difícil acceso debido a la baja capacidad portante de suelos blandos, ECOGREEN también estabiliza las áreas y taludes controlando la erosión con el uso de Ecomantos Verdes que fomentan la rápida reforestación. En los casos donde la vialidad y los campos petroleros requieren ser pavimentados ECOGREEN suministra e instala geomallas de refuerzo de poliéster de alto modulo para aumentar la capacidad de soporte de la capa de rodamiento, sin la necesidad de aportar ni transportar grandes volúmenes de material granular para mejorar las condiciones geotécnicas del suelo. Entre muchas otras soluciones se encuentran también sistemas de drenaje, rampas y terraplenes, protección de estribos de puentes, construcción de diques, presas, impermeabilización de canales y lagunas para lodos de perforación, suministro de todo tipo de tuberías y válvulas utilizadas en los procesos de extracción, producción, refinación y transporte.</p>
                <p>ECOGREEN siempre fomentará las nuevas tecnologías ecológicas, ratificando nuestra filosofía de negocio con conciencia de prácticas y políticas "VERDES" en pro del saneamiento ambiental e innovando en alternativas de mayor factibilidad económica.</p>
              </ul>
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
            <h3 className="text-3xl font-bold text-left text-ecogreen-blue mb-2 uppercase tracking-wide">Industria Petróleo y Gas</h3>
            <div className="w-full h-1 bg-ecogreen-green"></div>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {industriaPetroleogas.map((sys) => <SystemCard key={sys.title} {...sys} />)}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default IndustriaPetroleoGas;

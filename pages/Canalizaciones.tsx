
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
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/1.jpg',
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/10.jpg',
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/11.jpg',
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/12.jpg',
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/13.jpg',
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/14.jpg',
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/15.jpg',
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/16.jpg',
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/17.jpg',
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/18.jpg',
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/19.jpg',
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/2.jpg',
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/20.jpg',
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/3.jpg',
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/4.jpg',
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/5.jpg',
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/6.jpg',
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/7.jpg',
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/8.jpg',
    'https://tumuro.com/media/canalizaciones/grid-canalizaciones/9.jpg',
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

// --- CUSTOM ImageCard for "Control de Erosión" section ---
interface ImageCardProps {
    src: string;
    onClick: () => void;
}
const ImageCard: React.FC<ImageCardProps> = ({ src, onClick }) => (
    <motion.div
        className="group flex flex-col rounded-md shadow-lg overflow-hidden w-full cursor-pointer"
        variants={cardVariants}
        whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={onClick}
    >
        <div className="h-48 overflow-hidden">
            <img
                src={src}
                alt="Proyecto de canalización"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
        </div>
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
            <div className="absolute top-0 left-0 right-0 h-1 bg-black/50">
                <motion.div 
                    className="h-full bg-ecogreen-lime"
                    initial={{ width: '0%' }}
                    animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
            </div>
        
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <motion.button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white z-10" whileHover={{ scale: 1.2, rotate: 90 }} whileTap={{ scale: 0.9 }}>
                    <XIcon className="w-8 h-8" />
                </motion.button>
                
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
                            alt={`Galería de canalizaciones ${currentIndex + 1}`}
                        />
                    </AnimatePresence>
                </div>

                <motion.button onClick={onPrev} className="absolute left-2 md:left-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <ChevronLeftIcon className="w-8 h-8" />
                </motion.button>
                <motion.button onClick={onNext} className="absolute right-2 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <ChevronRightIcon className="w-8 h-8" />
                </motion.button>

                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {images.map((_, index) => (
                        <div key={index} className={`w-2.5 h-2.5 rounded-full transition-colors ${currentIndex === index ? 'bg-ecogreen-lime' : 'bg-white/40'}`} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};


// --- Main Page Component ---
const Canalizaciones: React.FC = () => {
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
      <title>Canalizaciones | EcoGreen</title>
      <meta name="description" content="Protección de cauces y canales con revestimientos flexibles, geomantas y gaviones EcoGreen." />

      {/* Hero Section (Static) */}
      <section className="relative w-full h-[70vh] max-h-[700px] overflow-hidden bg-gray-800">
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://tumuro.com/media/canalizaciones/slide/morochas.webp')` }}
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
                    CANALIZACIONES
                </h1>
                <p className="mt-2 text-sm md:text-lg font-semibold uppercase tracking-wider drop-shadow-md">
                    PROTECCIÓN DE LOS CAUCES.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Contenido Teórico */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
                <img src="https://tumuro.com/media/banner-services/control-de-erosion-icon.png" alt="Icono Canalizaciones" className="w-16 h-16 mr-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">Canalizaciones</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
                Un canal o canalización es una obra destinada al transporte de fluidos, para darle una dirección deseada. En la mayoría de los casos el fluido transportado es el agua. Los canales tienen como característica principal que son abiertos a la atmosfera.
            </p>
             <AnimatePresence>
                {isExpanded && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden text-left">
                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed pt-4 pb-8 border-t border-gray-200 mt-4">
                           <p>El conocimiento empírico del funcionamiento de los canales se remonta a varios milenios. En la antigua Mesopotamia ya se usaban canales de riego, en la Roma Imperial se abastecían de agua a través de canales construidos sobre inmensos acueductos, y los habitantes del antiguo Perú construyeron en algunos lugares de Los Andes canales que aún se encuentran en funcionamiento. El conocimiento y el estudio sistemático de los canales comienza en el siglo XVIII, con Chézy, Bazin entre otros.</p>
                           <p>Se entiende como estabilidad de un curso de agua, al equilibrio entre la acción del flujo sobre el cause y la resistencia al movimiento de los materiales que los constituyen. Este equilibrio se logra por la interacción entre el flujo de agua y los sedimentos de la cuenca hidrográfica contribuyente, considerando los cambios en las secciones, pendientes y trazado del curso de agua. Cuando ocurren las crecidas, este equilibrio se altera naturalmente produciendo rectificaciones en el mismo. Las alteraciones pueden ser directas cuando las obras se encuentran en el mismo curso de agua, como por ejemplo los diques e indirectas por acciones en la cuenca hidrográfica que causen alteraciones en el uso del suelo, como por ejemplo deforestaciones y urbanismos.</p>
                           <p>La necesidad de la utilización de protección para la estabilización de los cursos de agua naturales, es indispensable para diseñar el trazado de un canal, limitar erosiones, proteger obras civiles ribereñas, como por ejemplo terraplenes de carreteras, estribos de puentes, vías férreas, industrias, etc. Estas protecciones también son utilizadas en obras de drenaje, abastecimiento, control de crecidas, diques y tomas hidroeléctricas.</p>
                           <p>Para determinar qué tipo de solución incorporar como revestimiento para la protección de los cursos de agua y las márgenes, hay que verificar las características del suelo, la acción de las corrientes, condiciones ambientales, facilidad de la construcción y para que aplicación se utilizará el revestimiento para poder determinar su rugosidad resultante, permeabilidad o impermeabilidad, durabilidad, seguridad y la factibilidad económica del sistema.</p>
                           <p>Existen revestimientos rígidos y semi-rígidos de concreto y existen revestimientos flexibles como las Geomantas Verdes ECOGREEN de poliéster y las cestas de gavión metálicas tipo caja y tipo colchonetas ECOGREEN fabricadas con alambres galvanizados. Los revestimientos flexibles son los más utilizados por ECOGREEN, ya que presentan muchas ventajas técnico económicas.</p>
                           <p>Al instalar los sistemas de revestimientos flexibles ECOGREEN se garantiza la reducción de fugas de agua del canal al exterior del mismo, y se minimiza la infiltración en sentido opuesto. Soportan los esfuerzos ejercidos por el flujo de agua en los taludes y en el fondo del canal, mejorando la estabilidad de los márgenes. Aportan condiciones favorables para el establecimiento de nueva vegetación y refuerza la vegetación existente, entre otras muchas ventajas.</p>
                           <p>Los gaviones metálicos ECOGREEN también presentan la ventaja que permiten realizar las obras sin la necesidad de realizar desvíos en los cursos de agua durante su construcción, ya que las cestas son estructuras drenantes y permeables que permiten el libre flujo del agua y que a su vez trae como consecuencia la disminución del empuje hidrostático sobre la estructura, permitiendo que funcione eficientemente sin la necesidad de someterla a soportar grandes presiones.</p>
                           <p>Los gaviones metálicos ECOGREEN son estructuras de bajo impacto ambiental. La malla hexagonal de doble torsión que la conforma poseen una gran resistencia mecánica por el formato de su constitución monolítica, y su durabilidad está garantizada por el recubrimiento galvanizado del alambre con zinc para evitar la corrosión y oxidación. Estas características cumplen con todas las normas internacionales para este tipo de producto. En algunos casos las cestas pueden suministrarse con recubrimientos de materiales plásticos como el PVC para resistir fluidos en ambientes agresivos.</p>
                           <p>Los canales son considerados una de las obras hidráulicas más populares e importantes, generalmente se dividen en dos dependiendo de su geometría y función: Los canales rectangulares y los canales trapezoidales. Los rectangulares son utilizados en zonas urbanas donde la sección del canal se restringe por el espacio limitado que se tiene en las grandes ciudades y en muchos casos se hace necesario embaularlos en su totalidad para poder cruzar vías de comunicación sobre ellos. Los canales trapezoidales son comúnmente utilizados en zonas más rurales, donde los canales puedes estar a cielo abierto sin limitaciones de espacio. Estos son construidos para actividades de riego en el sector agrícola y en muchos casos son utilizados para recuperar y proteger cursos de agua naturales contra la erosión.</p>
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

      {/* Galería de Imágenes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <SectionHeader title="Galería de Proyectos" />
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
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

export default Canalizaciones;

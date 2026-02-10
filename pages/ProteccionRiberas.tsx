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
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/1.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/10.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/11.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/12.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/13.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/14.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/15.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/16.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/17.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/18.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/19.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/21.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/20.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/2.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/3.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/4.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/5.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/6.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/7.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/8.jpg',
    'https://tumuro.com/media/proteccion-de-riberas/grid-proteccion-de-riberas/9.jpg',
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

interface ImageCardProps {
    src: string;
    onClick: () => void;
}
const ImageCard: React.FC<ImageCardProps> = ({ src, onClick }) => (
    <motion.div
        className="group h-64 rounded-md shadow-lg overflow-hidden relative cursor-pointer"
        variants={cardVariants}
        whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={onClick}
    >
        <img
            src={src}
            alt="Protección de Riberas"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
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
                            alt={`Galería Protección de Riberas ${currentIndex + 1}`}
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
const ProteccionRiberas: React.FC = () => {
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
      <title>Protección de Riberas | EcoGreen</title>
      <meta name="description" content="Sistemas con Geomantas EcoGreen para protección de riberas." />

      {/* Hero Section (Static) */}
      <section className="relative w-full h-[70vh] max-h-[700px] overflow-hidden bg-gray-800">
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://tumuro.com/media/proteccion-de-riberas/slider/morocha-proteccion-de-riberas.webp')` }}
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
                    PROTECCIÓN DE RIBERAS
                </h1>
                <p className="mt-2 text-sm md:text-lg font-semibold uppercase tracking-wider drop-shadow-md">
                    SOLUCIONES ECOLÓGICAS PERMANENTES.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Contenido Teórico */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
                <img src="https://tumuro.com/media/banner-services/control-de-erosion-icon.png" alt="Icono Protección de Riberas" className="w-16 h-16 mr-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">Protección de Riberas</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
               Existen muchas riberas y costas que requieren protección contra la erosión hídrica, así como también obras civiles que requieren que sus fundaciones y estructuras estén en contacto permanente con cursos de agua, debido a limitaciones de espacio o por la aplicación para la que fueron diseñadas. Para garantizar su funcionabilidad en el tiempo estas estructuras también deben ser protegidas contra la erosión. Al proceso de sustracción de masa sólida a la roca o a la perdida de partículas finas del suelo, llevado a cabo por un flujo de agua se le denomina Erosión Hídrica. En los casos donde se cuenta con piedras o material granular grueso, la solución para el control de erosión ideal son las cestas de gavión metálicas ECOGREEN fabricadas a máquina bajo la normativa internacional ASTM, las cuales especifican los diferentes tamaños, geometrías, calibres de los alambres y sus diferentes recubrimientos, según el tipo de obra donde se apliquen. En los casos donde solo se cuenta con material de relleno de granulometría fina, recomendamos las innovadoras formaletas textiles ECOGREEN que tienen forma de funda de gran capacidad y son especiales para conformar estructuras de control hidráulico o también llamadas obras fluviales.
            </p>
             <AnimatePresence>
                {isExpanded && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden text-left">
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed pt-4 pb-8 border-t border-gray-200 mt-4">
                           <p>Entre las principales obras fluviales se encuentran; Obras longitudinales para la delimitación de causes y protección de las márgenes de ríos. Control de erosión en la construcción de tomas y almacenes de agua a orillas de cursos de agua. Construcción de espigones y obras transversales para crear retención de sedimentos del material en suspensión y controlar el transporte de sólidos, modificando a su vez las pendientes del cauce y la velocidad del caudal de los ríos.</p>
                           <p>Las formaletas textiles ECOGREEN cuando se llenan con concreto adquieren la forma de un gran bloque que se comporta como una gran unidad de alta resistencia al impacto y a la fricción, y logra obtener un alto peso adecuado para la conformación de estructuras flexibles de protección y revestimiento de orillas.</p>
                           <p>Para la protección contra la socavación y como sistema para control de erosión ó conformación de estructuras, las formaletas textiles ECOGREEN tiene varias ventajas sobre otros sistemas convencionales. En comparación con los revestimientos de Piedra tipo Rip-Rap, las formaletas ECOGREEN es un revestimiento continuo con peso y tamaño homogéneo y de menor espesor. Se puede instalar sin equipo pesado y sin controles especiales, debido a que el concreto es vertido o bombeado al interior de la formaleta textil y ésta va adquiriendo su forma predeterminada. Se puede adaptar a diferentes superficies del terreno incluso bajo agua, garantizando un total contacto con la superficie. A diferencia de otras soluciones convencionales se requiere menor transporte de materiales al sitio de la obra mejorando el rendimiento de la instalación y el costo de la mano de obra, ya que es considerablemente menor debido a que no requiere de mano de obra especializada.</p>
                           <p>Otra solución innovadora son los tubos geotextiles ECOGREEN que poseen dimensiones en su circunferencia mayores a 2 m y longitudes mayores a 6 m, son fabricados con geotextiles tejidos de alto módulo, y funcionan llenos de arena o lodo. Los tubos geotextil ECOGREEN son utilizados en aplicaciones costeras y ribereñas para la construcción de diversos tipos de estructuras de control hidráulico, espigones, protección de orillas y confinamiento de zonas secas o islas artificiales.</p>
                           <p>Para efectos de posicionamiento, los tubos geotextil ECOGREEN están provistos de asas de geotextil desde las cuales se sujetan al suelo o a sistemas de postes para mantener su ubicación durante el llenado. Generalmente se apoyan sobre un geotextil denominado manto antisocavación, el cual está dotado de lastres para mantenerse en contacto con la superficie y evitar la socavación en la zona de apoyo del tubo geotextil.</p>
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
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
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

export default ProteccionRiberas;


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
    'https://tumuro.com/media/muros-de-gavion/grid-muros-de-gavion/muro-de-gavion12.png',
    'https://tumuro.com/media/muros-de-gavion/grid-muros-de-gavion/muro-de-gavion13.png',
    'https://tumuro.com/media/muros-de-gavion/grid-muros-de-gavion/muro-de-gavion14.png',
    'https://tumuro.com/media/muros-de-gavion/grid-muros-de-gavion/muro-de-gavion15.png',
    'https://tumuro.com/media/muros-de-gavion/grid-muros-de-gavion/muro-de-gavion16.png',
    'https://tumuro.com/media/muros-de-gavion/grid-muros-de-gavion/muro-de-gavion17.png',
    'https://tumuro.com/media/muros-de-gavion/grid-muros-de-gavion/muro-de-gavion18.png',
    'https://tumuro.com/media/muros-de-gavion/grid-muros-de-gavion/muro-de-gavion19.png',
    'https://tumuro.com/media/muros-de-gavion/grid-muros-de-gavion/muro-de-gavion2.png',
    'https://tumuro.com/media/muros-de-gavion/grid-muros-de-gavion/muro-de-gavion3.png',
    'https://tumuro.com/media/muros-de-gavion/grid-muros-de-gavion/muro-de-gavion4.png',
    'https://tumuro.com/media/muros-de-gavion/grid-muros-de-gavion/muro-de-gavion5.png',
    'https://tumuro.com/media/muros-de-gavion/grid-muros-de-gavion/muro-de-gavion6.png',
    'https://tumuro.com/media/muros-de-gavion/grid-muros-de-gavion/muro-de-gavion7.png',
    'https://tumuro.com/media/muros-de-gavion/grid-muros-de-gavion/muro-de-gavion8.png',
    'https://tumuro.com/media/muros-de-gavion/grid-muros-de-gavion/muro-de-gavion9.png',
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
            alt="Obra de muro de gavión"
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
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-black/50">
                <motion.div 
                    className="h-full bg-ecogreen-lime"
                    initial={{ width: '0%' }}
                    animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
            </div>
        
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <motion.button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <XIcon className="w-8 h-8" />
                </motion.button>
                
                {/* Main Image */}
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
                            alt={`Galería de muro de gavión ${currentIndex + 1}`}
                        />
                    </AnimatePresence>
                </div>

                {/* Navigation Arrows */}
                <motion.button onClick={onPrev} className="absolute left-2 md:left-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <ChevronLeftIcon className="w-8 h-8" />
                </motion.button>
                <motion.button onClick={onNext} className="absolute right-2 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <ChevronRightIcon className="w-8 h-8" />
                </motion.button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${currentIndex === index ? 'bg-ecogreen-lime' : 'bg-white/40'}`}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};


// --- Main Page Component ---
const Gavion: React.FC = () => {
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
      <title>Muros de Gavión | EcoGreen</title>
      <meta name="description" content="Solución ideal para obras hidráulicas. Muros de gavión monolíticos, permeables y económicos." />

      {/* Hero Section (Static) */}
      <section className="relative w-full h-[70vh] max-h-[700px] overflow-hidden bg-gray-800">
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://tumuro.com/media/muros-de-gavion/slider/muros-de-gavion.webp')` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
            <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="bg-ecogreen-blue/70 p-6 md:p-8 text-center text-white max-w-2xl"
            >
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-ecogreen-lime uppercase drop-shadow-lg">
                    MUROS DE GAVIÓN
                </h1>
                <p className="mt-2 text-sm md:text-lg font-semibold uppercase tracking-wider drop-shadow-md">
                    LA SOLUCIÓN PARA LAS OBRAS HIDRÁULICAS.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Contenido Teórico */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
                <img src="https://tumuro.com/media/banner-services/muros-de-contencion-icon.webp" alt="Icono Muros de Gavión" className="w-16 h-16 mr-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">Muros de Gavión</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
                Los muros de contención construidos con gaviones tienen su origen en Europa y fue en el siglo XIX cuando por primera vez fueron empleados en su versión moderna. Esta técnica ha ido en crecimiento en cuanto a su utilización y campos de aplicación. En América Latina comenzaron a ser utilizados al inicio de los años 70 y hoy en día están siendo utilizados en todos los países del continente americano.
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
                           <p>Las cestas de gavión que conforman este tipo de muro de contención son elementos modulares de formas variadas, fabricadas a partir de mallas metálicas de doble torsión con orificios hexagonales, estas cestas son llenadas con piedras de diferente granulometría de forma manual o con maquinarias de construcción convencional.</p>
                           <p>Las cestas de gavión son unidas firmemente entre si con costuras y amarres con el mismo alambre de iguales características a los que conforman la cesta, de modo de formar una estructura monolítica y continua. Es muy importante la elección que se haga del tipo de cesta a utilizar y la granulometría del material de relleno para lograr una estructura realmente eficaz.</p>
                           <p>Las estructuras de gavión son muy ventajosas desde el punto de vista técnico y económico, ya que poseen un conjunto de características funcionales que los diferencian de los demás sistemas de contención. Las cestas de gavión deben ser fabricadas a máquina con alambres de bajo contenido de carbono, galvanizados con fuertes revestimientos de zinc o con recubrimientos adicionales de PVC, los orificios deben ser controlados al igual que el doble torcinado del alambre, cumpliendo con las normas internacionales que regulan este tipo de productos. Estas exigencias deben cumplirse para que el producto final logre una elevada resistencia mecánica, buena flexibilidad y una alta resistencia contra la corrosión.</p>
                           <div>
                               <p>Entre las principales ventajas de los muros de gavión se encuentran:</p>
                               <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                                   <li>Disponibilidad de las cestas de gavión que los conforman.</li>
                                   <li>Excelente tiempo de ejecución.</li>
                                   <li>Disponibilidad de los equipos y maquinarias especializadas para su construcción.</li>
                                   <li>No requiere de mano de obra calificada.</li>
                                   <li>Son consideradas como una de las soluciones más económicas.</li>
                                   <li>Son estructuras monolíticas ya que el resultado es un bloque homogéneo que tiene las mismas características de resistencia en cualquier punto de la estructura.</li>
                                   <li>Son estructuras muy resistentes debido a que la malla hexagonal doble torsión proporciona una distribución más uniforme de los esfuerzos a que son sometidas y adicionalmente poseen resistencia nominal a la tracción.</li>
                                   <li>Son muy flexibles ya que se adaptan a las deformaciones y movimientos del terreno, sin perder su estabilidad.</li>
                                   <li>Son el sistema de contención con mayor permeabilidad, debido a las características intrínsecas de los materiales que lo conforman, aliviando por completo el empuje hidrostático sobre la estructura.</li>
                                   <li>Son considerados como las estructuras ideales para conformar obras hidráulicas.</li>
                               </ul>
                           </div>
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

export default Gavion;

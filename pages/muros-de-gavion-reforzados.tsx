
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
    'https://tumuro.com/media/muros-de-gavion-reforzados/grid-muros-de-gavion-reforzados/muros-de-gavion-reforzados1.png',
    'https://tumuro.com/media/muros-de-gavion-reforzados/grid-muros-de-gavion-reforzados/muros-de-gavion-reforzados10.png',
    'https://tumuro.com/media/muros-de-gavion-reforzados/grid-muros-de-gavion-reforzados/muros-de-gavion-reforzados11.png',
    'https://tumuro.com/media/muros-de-gavion-reforzados/grid-muros-de-gavion-reforzados/muros-de-gavion-reforzados2.png',
    'https://tumuro.com/media/muros-de-gavion-reforzados/grid-muros-de-gavion-reforzados/muros-de-gavion-reforzados3.png',
    'https://tumuro.com/media/muros-de-gavion-reforzados/grid-muros-de-gavion-reforzados/muros-de-gavion-reforzados4.png',
    'https://tumuro.com/media/muros-de-gavion-reforzados/grid-muros-de-gavion-reforzados/muros-de-gavion-reforzados5.png',
    'https://tumuro.com/media/muros-de-gavion-reforzados/grid-muros-de-gavion-reforzados/muros-de-gavion-reforzados6.png',
    'https://tumuro.com/media/muros-de-gavion-reforzados/grid-muros-de-gavion-reforzados/muros-de-gavion-reforzados7.png',
    'https://tumuro.com/media/muros-de-gavion-reforzados/grid-muros-de-gavion-reforzados/muros-de-gavion-reforzados8.png',
    'https://tumuro.com/media/muros-de-gavion-reforzados/grid-muros-de-gavion-reforzados/muros-de-gavion-reforzados9.png',
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
            alt="Obra de muro de gavión reforzado"
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
                            alt={`Galería de muro de gavión reforzado ${currentIndex + 1}`}
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
const GavionReforzado: React.FC = () => {
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
      <title>Muros de Gavión Reforzados | EcoGreen</title>
      <meta name="description" content="Sistemas ecológicos mixtos: tierra reforzada con fachada de gavión. Ideal para riberas y zonas costeras." />

      {/* Hero Section (Static) */}
      <section className="relative w-full h-[70vh] max-h-[700px] overflow-hidden bg-gray-800">
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://tumuro.com/media/muros-de-gavion-reforzados/slider/muros-de-gavion-reforzados.webp')` }}
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
                    MUROS DE GAVIÓN REFORZADOS
                </h1>
                <p className="mt-2 text-sm md:text-lg font-semibold uppercase tracking-wider drop-shadow-md">
                    SISTEMAS ECOLÓGICOS PARA LA ARQUITECTURA.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Contenido Teórico */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
                <img src="https://tumuro.com/media/banner-services/muros-de-contencion-icon.webp" alt="Icono Muros de Gavión Reforzados" className="w-16 h-16 mr-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">Muros de Gavión Reforzados</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
                Este tipo de sistema está compuesto en su estructura principal, por un muro de contención de tierra reforzada y su paramento o fachada está compuesta por cestas de gavión rellenas de piedras. Esta combinación de técnicas nos permite construir muros de tierra reforzada en las márgenes de ríos y en zonas costeras, debido a que la fachada de piedra con su respectivo geotextil no tejido como filtro, no permiten que el caudal de agua que drena por la cara del talud, produzca el arrastre de finos del material de relleno que conforman el muro de tierra reforzada.
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
                           <p>Cada parte que conforma los muros de gavión reforzado cumple una función primordial para el buen desempeño del sistema de contención. Aún cuando este sistema se considera una solución compuesta, cada material aporta individualmente beneficios al conjunto. El material que cumple la función de anclaje está constituido por geotextiles tejidos o geomallas de refuerzo de alto modulo fabricadas de polipropileno, polietileno o poliéster y en algunos casos mallas hexagonales metálicas, este material es el encargado de cortar la superficie de falla dentro del relleno a reforzar. El otro material que conforma este tipo de muro son las cestas de gavión fabricadas a maquinas que se rellenan de piedras garantizando el acabado final de la fachada del sistema. Juntos ambos materiales deben estar amarrados íntimamente entre si para garantizar la necesaria continuidad de todo el elemento para poder resistir los esfuerzos de tracción a que son sometidas las estructuras a contener.</p>
                           <div>
                               <p>Las ventajas que ofrecen los muros de gavión reforzados son :</p>
                               <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                                   <li>Disponibilidad de las cestas de gavión y los geosinteticos que los conforman.</li>
                                   <li>Excelente tiempo de ejecución.</li>
                                   <li>Disponibilidad de los equipos y maquinarias especializadas para su construcción.</li>
                                   <li>No requiere de mano de obra calificada.</li>
                                   <li>Son muy flexibles ya que se adaptan a las deformaciones y movimientos del terreno, sin perder su estabilidad.</li>
                                   <li>En los casos de derrumbes o deslizamientos se puede utilizar el material fallado por lo que no se requiere de aporte de material, exceptuando el material pétreo de la fachada.</li>
                                   <li>Pueden ser construidos en las márgenes de río y zonas costeras, sin la necesidad de requerir mucho material pétreo.</li>
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

export default GavionReforzado;

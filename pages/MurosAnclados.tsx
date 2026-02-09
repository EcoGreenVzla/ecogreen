
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
    'https://tumuro.com/media/muros-anclados-y-pantallas-atirantadas/grid-muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas1.jpg',
    'https://tumuro.com/media/muros-anclados-y-pantallas-atirantadas/grid-muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas10.jpg',
    'https://tumuro.com/media/muros-anclados-y-pantallas-atirantadas/grid-muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas11.jpg',
    'https://tumuro.com/media/muros-anclados-y-pantallas-atirantadas/grid-muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas12.jpg',
    'https://tumuro.com/media/muros-anclados-y-pantallas-atirantadas/grid-muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas13.jpg',
    'https://tumuro.com/media/muros-anclados-y-pantallas-atirantadas/grid-muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas14.jpg',
    'https://tumuro.com/media/muros-anclados-y-pantallas-atirantadas/grid-muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas15.jpg',
    'https://tumuro.com/media/muros-anclados-y-pantallas-atirantadas/grid-muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas16.jpg',
    'https://tumuro.com/media/muros-anclados-y-pantallas-atirantadas/grid-muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas17.jpg',
    'https://tumuro.com/media/muros-anclados-y-pantallas-atirantadas/grid-muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas18.jpg',
    'https://tumuro.com/media/muros-anclados-y-pantallas-atirantadas/grid-muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas2.jpg',
    'https://tumuro.com/media/muros-anclados-y-pantallas-atirantadas/grid-muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas3.jpg',
    'https://tumuro.com/media/muros-anclados-y-pantallas-atirantadas/grid-muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas4.jpg',
    'https://tumuro.com/media/muros-anclados-y-pantallas-atirantadas/grid-muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas5.jpg',
    'https://tumuro.com/media/muros-anclados-y-pantallas-atirantadas/grid-muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas6.jpg',
    'https://tumuro.com/media/muros-anclados-y-pantallas-atirantadas/grid-muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas7.jpg',
    'https://tumuro.com/media/muros-anclados-y-pantallas-atirantadas/grid-muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas8.jpg',
    'https://tumuro.com/media/muros-anclados-y-pantallas-atirantadas/grid-muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas9.jpg',
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
            alt="Obra de muro anclado"
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
                            alt={`Galería de muro anclado ${currentIndex + 1}`}
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
const MurosAnclados: React.FC = () => {
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
      <title>Muros Anclados y Pantallas Atirantadas | EcoGreen</title>
      <meta name="description" content="Soluciones profundas de geotecnia mediante anclajes activos y pasivos para estabilización de taludes y excavaciones." />

      {/* Hero Section (Static) */}
      <section className="relative w-full h-[70vh] max-h-[700px] overflow-hidden bg-gray-800">
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://tumuro.com/media/muros-anclados-y-pantallas-atirantadas/slider/muros-anclados-y-pantallas-atirantadas.webp')` }}
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
                    MUROS ANCLADOS Y PANTALLAS ATIRANTADAS
                </h1>
                <p className="mt-2 text-sm md:text-lg font-semibold uppercase tracking-wider drop-shadow-md">
                    CUANDO LA GEOTECNIA EXIGE PROFUNDIDAD.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Contenido Teórico */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
                <img src="https://tumuro.com/media/banner-services/muros-de-contencion-icon.webp" alt="Icono Muros Anclados" className="w-16 h-16 mr-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">Muros Anclados y Pantallas Atirantadas</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
                En los últimos años se ha vuelto muy popular el uso de anclajes de acero en la estabilización de taludes. Los muros anclados incluyen los pernos metálicos para cumplir la función de sostenimiento de los bloques de roca que se encuentre en situación de inestabilidad. El detalle común de las tecnologías de pernos es que minimizan la relajación o desprendimiento de los bloques de rocas ( Hoek, 1983 ). Una vez que los bloques se encuentren en estado suelto es muy difícil recobrar la estabilidad completa del macizo, por eso la colocación de anclajes es muy útil que se realice, previamente a la excavación ( Wyllie y Norrish, 1996 ) Este prerefuerzo se puede lograr instalando anclajes a medida que se avanza con la excavación o instalando pernos a la cresta del corte, antes de la excavación. Estos anclajes en roca pueden realizarse de muchas formas, sin embargo, hay dos técnicas que son las más utilizadas: Los muros anclados con pernos individuales no tensionados, también conocidos como anclajes pasivos y los muros anclados tensionados o también llamados anclajes activos.
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
                           <p>Los muros anclados no tensionados o con anclajes pasivos están constituidos por pernos estructurales mejor conocidos como varillas o cabillas de acero, las cuales se colocan dentro de una perforación, que posteriormente es inyectada con cemento para unir la cabilla al macizo de roca. Esto significa que el macizo de roca se refuerza por intermedio de la cabilla de acero. Debido a esto se puede evitar las caídas de roca y en ocasiones los deslizamientos de macizos de rocas fracturadas con discontinuidades muy espaciadas. El diseño de los pernos generalmente es empírico basado en un análisis de discontinuidades en el macizo y de la estabilidad de los bloques. La parte mas importante del diseño es determinar donde estará ubicado, con que inclinación y que longitud debe tener cada perno.</p>
                           <div>
                               <p>Entre las principales ventajas que podemos mencionar de los anclajes pasivos tenemos:</p>
                               <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                                   <li>Permiten la estabilización de bloques individuales o puntos específicos dentro de un macizo de roca.</li>
                                   <li>Es considerada una técnica simple y de instalación relativamente rápida.</li>
                                   <li>Disponibilidad de los materiales que los conforman.</li>
                                   <li>Disponibilidad de los equipos y maquinarias especializadas para su construcción.</li>
                                   <li>Son medianamente económicos.</li>
                               </ul>
                           </div>
                           <p>Los muros anclados tensionados o también llamados con anclajes activos, son una técnica que consiste en la colocación dentro del macizo de roca y muy por debajo de la superficie de falla potencial, de una serie de tirantes de acero anclados en su punta y tensados por medio de gatos colocados en la superficie. Estos anclajes producen fuerzas de compresión que aumentan la fricción y contrarrestan la acción de las fuerzas desestabilizadoras.</p>
                           <p>Los anclajes pretensazos se colocan atravesando posibles superficies de falla, anclando los bloques a la roca sana que se encuentra por detrás de esta superficie. El tensionamiento de los pernos transmite una fuerza a la roca, produciendo una compresión y modificando los esfuerzos normales sobre la superficie de falla. Si las fuerzas de anclaje se instalan a un ángulo menor que al normal de la superficie potencial de falla, se crea adicionalmente, una fuerza resistente que se opone al movimiento. La fuerza requerida para el anclaje, se minimiza cuando la suma del ángulo de buzamiento del ancla y el de la fractura es igual al ángulo de fricción. Finalmente en la cabeza exterior del anclaje se coloca una lámina o pletina metálica para fijar el anclaje y permitir su tensado. Este tipo de metodología también es conocida como pantallas atirantadas y entre sus principales ventajas se encuentran:</p>
                           <ul className="list-disc list-inside space-y-2 pl-4">
                               <li>Disponibilidad de los materiales que los conforman.</li>
                               <li>Disponibilidad de los equipos y maquinarias especializadas para su construcción.</li>
                               <li>Son considerados como la mejor solución en los casos donde las limitaciones de espacio son considerables, como por ejemplo: Taludes con pendientes muy fuertes, sótanos o cualquier estructura subterránea que deba ocupar el menor espacio posible para dar funcionalidad al espacio construido.</li>
                               <li>Se pueden construir en forma progresiva de arriba hacia abajo, a medida que se avanza con el proceso de excavación.</li>
                               <li>Es una técnica que permite excavar junto a edificios o estructuras.</li>
                               <li>Pueden ser construidas de alturas considerables.</li>
                           </ul>
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

export default MurosAnclados;


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
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/1.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/10.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/11.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/12.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/13.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/14.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/15.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/16.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/17.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/18.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/19.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/2.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/3.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/4.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/5.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/6.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/7.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/8.jpg',
    'https://tumuro.com/media/estabilizacion-de-taludes/grid-estabilizacion-de-taludes/9.jpg',
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
            alt="Proyecto de estabilización de taludes"
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
                            alt={`Galería de estabilización de taludes ${currentIndex + 1}`}
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
const EstabilizacionTaludes: React.FC = () => {
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
      <title>Estabilización de Taludes | EcoGreen</title>
      <meta name="description" content="Sistemas con Geomantas EcoGreen para estabilización de taludes." />

      {/* Hero Section (Static) */}
      <section className="relative w-full h-[70vh] max-h-[700px] overflow-hidden bg-gray-800">
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://tumuro.com/media/estabilizacion-de-taludes/slider/morocha.webp')` }}
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
                    ESTABILIZACIÓN DE TALUDES
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
                <img src="https://tumuro.com/media/banner-services/control-de-erosion-icon.png" alt="Icono Estabilización de Taludes" className="w-16 h-16 mr-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">Estabilización de Taludes</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
                En geotecnia es indispensable analizar la estabilidad o la posible inestabilidad de un talud a la hora de realizar un proyecto o una obra de construcción. La inestabilidad de un talud se puede producir por razones geológicas, como laderas posiblemente inestables, relieve, estratificación, meteorización, entre otros. La variación del nivel freático, producida por situaciones estacionales u obras realizadas por el hombre, es otra de las razones de inestabilidad, así como también los movimientos de tierra y obras de ingeniería donde se hace necesario realizar cortes y relleno. Las GEOMANTAS ECOGREEN solucionan el problema de las inestabilidades superficiales generalmente con comportamientos paralelos al talud, en muchos casos esta zona tiene el mismo espesor que la capa vegetal o forma parte de la misma.
            </p>
             <AnimatePresence>
                {isExpanded && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden text-left">
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed pt-4 pb-8 border-t border-gray-200 mt-4">
                           <p>Las GEOMANTAS ECOGREEN son un sistema flexible para la estabilización de taludes fabricados a base de geomallas de poliéster de alto modulo y en muchos casos se presenta en combinación con mallas de alambres fuertemente galvanizados en combinación con anclajes pasivos. El sistema de GEOMANTAS ECOGREEN se ha usado ampliamente en la práctica para estabilizar taludes en suelos y rocas, y se ha demostrado su eficacia en numerosos casos. El sistema Ecogreen constituye una solución económica y es considerado una buena alternativa en comparación con otras medidas basadas en estructuras rígidas de concreto. Ecogreen ha desarrollado conceptos especiales de dimensionado de sistemas flexibles para la estabilización de taludes y para utilizarse en taludes empinados en suelos más o menos homogéneos o en roca suelta fuertemente meteorizada; así como también en rocas fisuradas y estratificadas, en las cuales los cuerpos propensos a deslizarse están definidos por las superficies de las fracturas de las estratificaciones.</p>
                           <p>El sistema de GEOMANTAS ECOGREEN esta diseñado especialmente para estabilizar taludes escarpados de suelos, sedimentos y rocas. Para iniciarse la instalación de las GEOMANTAS ECOGREEN se debe limpiar, nivelar y perfilar la superficie a tratar, luego se coloca y se tensa la geomanta con una fuerza definida mediante la instalación de anclajes junto con planchas de fijación que garantizan la optima transmisión de carga de los anclajes al sistema de geomantas. Las GEOMANTAS ECOGREEN se adaptan a la topografía del terreno y de esa forma evita no solamente los deslizamientos y las deformaciones, sino también los desprendimientos. Los anclajes principales sujetan firmemente el sistema de geomantas. Sin embargo, existen algunos casos donde se requiere de anclajes adicionales cortos y ganchos para fijar el sistema sobre superficies irregulares o cerca de los extremos.</p>
                           <p>Para la instalación de los anclajes se deben realizar perforaciones en tal forma que se garanticen una superficie rugosa entre el suelo y el cemento a todo lo largo de la perforación. Es importante garantizar que no haya colapso de las paredes de la excavación para garantizar que la adherencia de la mezcla se haga con el suelo natural intacto. Las perforaciones deben limpiarse adecuadamente y el anclaje debe colocarse lo mas rápidamente posible después de terminada la perforación y en ningún caso la demora debe ser superior a 24 horas. El cemento utilizado para fijar los anclajes es cemento Pórtland ordinario y agua, la relación agua cemento varia de 0.40 a 0.45. Esta relación produce una lechada que puede ser bombeada por el orificio de la perforación y al mismo tiempo producir una alta resistencia, con un mínimo de exudación de agua de la mezcla. Para reducir esta exudación se debe agregar productos químicos especiales que también producen la reducción de la contracción e incrementa la viscosidad. La inyección debe realizarse lo mas rápidamente posible después de colocado el anclaje en la perforación. El procedimiento de inyección debe garantizar que no quede aire o agua dentro de la zona inyectada.</p>
                           <p>Para el diseño de los sistemas anclados pueden utilizarse varios procedimientos. Los más comunes son el método de la cuña anclada y la utilización de análisis de estabilidad de taludes por los procedimientos de Bishop o de Janbu. Algunos proyectistas utilizan la teoría de presión de tierra de Rankine o Coulomb. Sin embargo los resultados que arrojan son irreales debido a que no se contempla los elementos geotécnicos en los suelos residuales.</p>
                           <p>Es importante resaltar que la técnica más rápida y económica en la actualidad en la aplicación de estabilización de taludes, son las GEOMANTAS VERDES ECOGREEN, debido a que son una solución de la ingeniería moderna, que posee adicionalmente la ventaja ecológica de presentar una cobertura vegetal en su acabado final que armoniza con el medio ambiente y fomenta la INFRAESTRUCTURA VERDE.</p>
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

export default EstabilizacionTaludes;

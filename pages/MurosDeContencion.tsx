
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// --- Local Hero Slider ---
const sliderImages = [
  'https://tumuro.com/media/slider/muros-de-contencion1.webp',
  'https://tumuro.com/media/slider/muros-de-contencion2.webp',
  'https://tumuro.com/media/slider/muros-de-contencion3.webp',
  'https://tumuro.com/media/slider/muros-de-contencion4.webp',
  'https://tumuro.com/media/slider/muros-de-contencion5.webp',
  'https://tumuro.com/media/slider/muros-de-contencion6.webp'
];

const sliderVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
  exit: { opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }
};

const textVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } }
};

const HeroMuros: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, []);
    
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="relative w-full h-[60vh] max-h-[600px] overflow-hidden bg-gray-800">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentIndex}
                    variants={sliderVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-0"
                >
                    <img src={sliderImages[currentIndex]} alt={`Muro de contención ${currentIndex + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40"></div>
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 flex items-center justify-center text-center">
                 <motion.div
                    key={currentIndex} // Re-trigger animation on slide change
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-white p-4"
                 >
                    <h1 className="text-4xl md:text-6xl font-bold text-ecogreen-lime uppercase drop-shadow-2xl tracking-wider">
                        Muros de Contención
                    </h1>
                    <p className="mt-2 text-lg md:text-2xl font-semibold uppercase tracking-wider drop-shadow-lg">
                        Soluciones Verdes, prácticas y Económicas
                    </p>
                </motion.div>
            </div>
        </section>
    );
};


// --- System Card Component ---
interface SystemCardProps {
    title: string;
    imageSrc: string;
    href: string;
    color: 'blue' | 'green' | 'orange';
}

const colorMap = {
    blue: 'bg-ecogreen-blue',
    green: 'bg-ecogreen-green',
    orange: 'bg-ecogreen-orange',
};

const SystemCard: React.FC<SystemCardProps> = ({ title, imageSrc, href, color }) => (
    <Link to={href} className="block">
        <motion.div 
            className="group flex flex-col rounded-md shadow-lg overflow-hidden w-full h-full"
            whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="h-56 overflow-hidden">
                <img
                    src={imageSrc}
                    alt={`${title} background`}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
            </div>
            <div className={`${colorMap[color]} flex items-center justify-center p-4 h-24`}>
                <h3 className="text-white text-base text-center font-bold uppercase tracking-wide">{title}</h3>
            </div>
        </motion.div>
    </Link>
);


const MurosDeContencion: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const sistemasFlexibles = [
        { title: 'Muros de Tierra Reforzada', href: '/muros-de-contencion/sistemas-flexibles/tierra-reforzada', imageSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-tierra-reforzada.webp' },
        { title: 'Muros de Gavión', href: '/muros-de-contencion/sistemas-flexibles/gavion', imageSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-gavion.webp' },
        { title: 'Muros de Gavión Reforzados', href: '/muros-de-contencion/sistemas-flexibles/gavion-reforzado', imageSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-gavion-reforzados.webp' },
        { title: 'Muros Mixtos', href: '/muros-de-contencion/sistemas-flexibles/muros-mixtos', imageSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-mixtos.webp' },
        { title: 'Refuerzo de Taludes', href: '/muros-de-contencion/sistemas-flexibles/refuerzo-taludes', imageSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/refuerzo-de-taludes-y-terraplenes.webp' },
    ];

    const sistemasRigidos = [
        { title: 'Muros Anclados', href: '/muros-de-contencion/sistemas-rigidos/muros-anclados', imageSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/muros-anclados-y-pantallas-atirantadas.webp' },
        { title: 'Concreto Armado', href: '/muros-de-contencion/sistemas-rigidos/concreto-armado', imageSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/muros-de-concreto-armado.webp' },
        { title: 'Muros Ciclópeos', href: '/muros-de-contencion/sistemas-rigidos/muros-ciclopeos', imageSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/muros-de-ciclopeos.webp' },
        { title: 'Pilotes', href: '/muros-de-contencion/sistemas-rigidos/pilotes-micropilotes', imageSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/pilotes-y-micropilotes.webp' },
    ];

    const sistemasDrenaje = [
        { title: 'Sistemas de Drenaje', href: '/muros-de-contencion/sistemas-drenaje', imageSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-drenaje/sistemas-de-drenaje.webp' },
    ];


  return (
    <>
      <title>Muros de Contención | EcoGreen - Soluciones Verdes</title>
      <meta name="description" content="Especialistas en muros de contención flexibles y rígidos, gaviones y tierra reforzada." />
      <meta property="og:title" content="Muros de Contención | EcoGreen - Soluciones Verdes" />
      <meta property="og:description" content="Especialistas en muros de contención flexibles y rígidos, gaviones y tierra reforzada." />
      <meta property="og:image" content="https://tumuro.com/media/slider/muros-de-contencion1.webp" />
      <meta property="og:url" content="https://tumuro.com/muros-de-contencion" />

      <HeroMuros />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center justify-center mb-8">
                <img src="https://tumuro.com/media/banner-services/muros-de-contencion-icon.webp" alt="Icono Muros de Contención" className="h-20 w-20 mr-4" />
                <h2 className="text-3xl font-bold text-ecogreen-blue uppercase tracking-wider">Muros de Contención</h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 text-justify">
                <p>
                    Los muros de contención son estructuras que proporcionan un soporte lateral permanente a una masa de suelo, cuya superficie se encuentra a un nivel superior al de la estructura. La principal función de un muro de contención es la de absorber los empujes de tierra producidos por un terreno natural o por un relleno artificial.
                </p>
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="space-y-4 pt-4">
                                <p>La historia de la ingeniería de los muros de contención se inicia a principios del siglo XVIII con los estudios del ingeniero francés Coulomb (1773), quien fue el primero en aplicar los principios de la mecánica para determinar los empujes de tierra sobre los muros de contención.</p>
                                <p>Posteriormente, a mediados del siglo XIX el ingeniero escocés Rankine (1857), propuso una teoría para el cálculo de los empujes de tierra, diferente a la de Coulomb. Esta teoría, junto a la de Coulomb, han constituido hasta nuestros días las bases fundamentales del cálculo geotécnico.</p>
                                <p>A principios del siglo XX, las teorías de Coulomb y de Rankine fueron revisadas por varios investigadores como Terzaghi (1943) y Taylor (1948), quienes ampliaron la aplicabilidad de los métodos de cálculo para diferentes condiciones del suelo. En la década de los cincuenta, con el desarrollo de la Mecánica de Suelos, se inician los estudios de la estabilidad al talud por los métodos de equilibrio límite, mediante el uso de superficies de fallas circulares, destacando los aportes de Bishop (1955).</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="text-center mt-6">
                <button 
                    onClick={() => setIsExpanded(!isExpanded)} 
                    className="bg-gray-200 text-ecogreen-blue font-bold py-2 px-6 rounded-full hover:bg-gray-300 transition-colors uppercase tracking-wider"
                >
                    {isExpanded ? 'Cerrar ▲' : 'Leer Más ▼'}
                </button>
            </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-center mb-12 tracking-[0.2em] text-gray-500 uppercase">Sistemas de Contención Flexibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {sistemasFlexibles.map(sys => <SystemCard key={sys.title} {...sys} color="blue" />)}
            </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-center mb-12 tracking-[0.2em] text-gray-500 uppercase">Sistemas de Contención Rígidos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {sistemasRigidos.map(sys => <SystemCard key={sys.title} {...sys} color="green" />)}
            </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col items-center">
            <h2 className="text-3xl font-light text-center mb-12 tracking-[0.2em] text-gray-500 uppercase">Sistemas de Drenaje</h2>
            <div className="w-full max-w-sm">
                {sistemasDrenaje.map(sys => <SystemCard key={sys.title} {...sys} color="orange" />)}
            </div>
        </div>
      </section>
    </>
  );
};

export default MurosDeContencion;

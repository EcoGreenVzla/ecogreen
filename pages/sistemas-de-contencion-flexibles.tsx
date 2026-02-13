import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import { sliderData } from '../data/sliderData';

// --- Datos para las Grillas de Sistemas ---
const sistemasFlexibles = [
  { title: 'Muros de Tierra Reforzada', href: '/muros-de-contencion/sistemas-flexibles/tierra-reforzada', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-tierra-reforzada.webp' },
  { title: 'Muros de Gavión', href: '/muros-de-contencion/sistemas-flexibles/gavion', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-gavion.webp' },
  { title: 'Muros de Gavión Reforzados', href: '/muros-de-contencion/sistemas-flexibles/gavion-reforzado', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-gavion-reforzados.webp' },
  { title: 'Muros Mixtos', href: '/muros-de-contencion/sistemas-flexibles/muros-mixtos', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-mixtos.webp' },
  { title: 'Refuerzo de Taludes', href: '/muros-de-contencion/sistemas-flexibles/refuerzo-taludes', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/refuerzo-de-taludes-y-terraplenes.webp' },
];

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

const SistemasFlexibles: React.FC = () => {
  const gridContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <>
      <title>Sistemas de Contención Flexibles | EcoGreen</title>
      <meta name="description" content="Descubra nuestras soluciones en sistemas de contención flexibles, una alternativa confiable, económica y adaptable para infraestructura urbana y vial." />

      {/* 1. HERO SECTION: Instalación del nuevo slider dinámico */}
      <HeroSliderResponsive data={sliderData['sistemas-flexibles']} />

      {/* 2. CONTENIDO TEÓRICO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
                <img src="https://tumuro.com/media/banner-services/muros-de-contencion-icon.webp" alt="Icono Sistemas Flexibles" className="w-16 h-16 mr-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">Sistemas de Contención Flexibles</h2>
            </div>
            
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed text-left">
                <p>
                    Las estructuras flexibles son aquellas que son construidas con materiales deformables. Debido a esta característica estos muros pueden adaptarse a los movimientos y asentamientos del terreno dentro de los límites aceptables, sin que esto signifique la pérdida de estabilidad o el no cumplimiento eficiente de la función para la que fueron diseñados.
                </p>
                <p>
                    Las estructuras flexibles son las que más se adaptan a las necesidades de infraestructura urbana y vial de los países, debido a que son estructuras confiables y eficientes para la contención de taludes y terraplenes construidos en las diversas aplicaciones que exige la ingeniería moderna.
                </p>
                <p>
                    Entre las principales ventajas que ofrecen las estructuras flexibles podemos enumerar:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 font-medium">
                    <li>Disponibilidad de los materiales geosintéticos que los conforman.</li>
                    <li>Excelente tiempo de ejecución.</li>
                    <li>Disponibilidad de los equipos y maquinarias especializadas para su construcción.</li>
                    <li>No requiere de mano de obra calificada.</li>
                    <li>Son consideradas como la solución más económica.</li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GRID: SISTEMAS FLEXIBLES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="mb-12">
                <h3 className="text-3xl font-bold text-left text-ecogreen-blue mb-2 uppercase tracking-wide">Sistemas de Contención Flexibles</h3>
                <div className="w-full h-1 bg-ecogreen-green"></div>
            </div>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={gridContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {sistemasFlexibles.map((sys) => <SystemCard key={sys.title} {...sys} />)}
            </motion.div>
        </div>
      </section>
    </>
  );
};

export default SistemasFlexibles;
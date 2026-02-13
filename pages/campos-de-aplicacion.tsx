import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import { sliderData } from '../data/sliderData';

// --- Data para la Grilla de Aplicaciones ---
const camposdeAplicacion = [
    { title: 'INFRAESTRUCTURA URBANA', href: '/campos-de-aplicacion/infraestructura-urbana', imgSrc: 'https://tumuro.com/media/campos-de-aplicacion/grid-campos-de-aplicacion/infraestructura-urbana1.webp' },
    { title: 'CONSTRUCCIÓN CIVIL', href: '/campos-de-aplicacion/construccion-civil', imgSrc: 'https://tumuro.com/media/campos-de-aplicacion/grid-campos-de-aplicacion/construccion-civil1.webp' },
    { title: 'PROTECCIÓN AMBIENTAL', href: '/campos-de-aplicacion/proteccion-ambiental', imgSrc: 'https://tumuro.com/media/campos-de-aplicacion/grid-campos-de-aplicacion/proteccion-ambiental1.webp' },
    { title: 'INDUSTRIA, PETRÓLEO Y GAS', href: '/campos-de-aplicacion/industria-petroleo-gas', imgSrc: 'https://tumuro.com/media/campos-de-aplicacion/grid-campos-de-aplicacion/industria-petroleo-y-gas1.webp' },
    { title: 'SECTOR AGRÍCOLA', href: '/campos-de-aplicacion/sector-agricola', imgSrc: 'https://tumuro.com/media/campos-de-aplicacion/grid-campos-de-aplicacion/sector-agricola1.webp' },
    { title: 'VÍAS DE COMUNICACIÓN', href: '/campos-de-aplicacion/vias-comunicacion', imgSrc: 'https://tumuro.com/media/campos-de-aplicacion/grid-campos-de-aplicacion/vias-de-comunicacion1.webp' },
    { title: 'OBRAS HIDRÁULICAS', href: '/campos-de-aplicacion/obras-hidraulicas', imgSrc: 'https://tumuro.com/media/campos-de-aplicacion/grid-campos-de-aplicacion/obras-hidraulicas1.webp' },
    { title: 'MINERÍA, GEOLOGÍA Y GEOTECNIA', href: '/campos-de-aplicacion/mineria-geotecnia', imgSrc: 'https://tumuro.com/media/campos-de-aplicacion/grid-campos-de-aplicacion/mineria-geologia-y-geotecnia1.webp' },
];

// --- Animation Variants ---
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  },
};

const gridContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
};

// --- Custom Internal Card Component ---
interface SystemCardProps {
  title: string;
  href: string;
  imgSrc: string;
}
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

const CamposDeAplicacionPage: React.FC = () => {
  return (
    <div className="w-full m-0 p-0">
      <title>Campos de Aplicación | EcoGreen</title>
      <meta name="description" content="Soluciones con Geomantas EcoGreen para la protección del suelo, estabilización de taludes y reforestación." />

      {/* Hero Section Dinámico */}
      <HeroSliderResponsive data={sliderData['campos-de-aplicacion']} />

      {/* Grid de Soluciones */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="mb-12">
                <h3 className="text-3xl font-bold text-left text-ecogreen-blue mb-2 uppercase tracking-wide">CAMPOS DE APLICACIÓN</h3>
                <div className="w-full h-1 bg-ecogreen-green"></div>
            </div>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={gridContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {camposdeAplicacion.map((sys) => <SystemCard key={sys.title} {...sys} />)}
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CamposDeAplicacionPage;
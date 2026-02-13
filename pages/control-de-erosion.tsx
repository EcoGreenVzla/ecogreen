import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import { sliderData } from '../data/sliderData';

// =====================================================================
// 1. CONFIGURACIÓN DE DATOS (GRID DE SISTEMAS)
// =====================================================================

const erosionSystems = [
    { title: 'ESTABILIZACIÓN DE TALUDES', href: '/control-de-erosion/estabilizacion-taludes', imgSrc: 'https://tumuro.com/media/control-de-erosion/grid-control-de-erosion/morocha-izquierda.webp' },
    { title: 'REFUERZO DE TALUDES Y TERRAPLENES', href: '/control-de-erosion/refuerzo-terraplenes', imgSrc: 'https://tumuro.com/media/control-de-erosion/grid-control-de-erosion/refuerzo-de-taludes-y-terraplenes1.webp' },
    { title: 'REFORESTACIÓN', href: '/control-de-erosion/reforestacion', imgSrc: 'https://tumuro.com/media/control-de-erosion/grid-control-de-erosion/morocha-derecha.webp' },
    { title: 'CANALIZACIONES', href: '/control-de-erosion/canalizaciones', imgSrc: 'https://tumuro.com/media/control-de-erosion/grid-control-de-erosion/foto-banner-derecha-canalizaciones.webp' },
    { title: 'DIQUES Y PRESAS', href: '/control-de-erosion/diques-presas', imgSrc: 'https://tumuro.com/media/control-de-erosion/grid-control-de-erosion/morocha-derecha-diques-y-presas.webp' },
    { title: 'PROTECCIÓN DE RIBERAS', href: '/control-de-erosion/proteccion-riberas', imgSrc: 'https://tumuro.com/media/control-de-erosion/grid-control-de-erosion/morocha-izquierda-proteccion-de-riberas.webp' },
];

// =====================================================================
// 2. VARIANTES DE ANIMACIÓN
// =====================================================================

const gridContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  },
};

const MotionLink = motion(Link);

// =====================================================================
// 3. COMPONENTE INTERNO: Tarjeta de Sistema de Erosión
// =====================================================================

const ErosionSystemCard: React.FC<{ title: string; href: string; imgSrc: string }> = ({ title, href, imgSrc }) => (
  <MotionLink
    to={href}
    className="group flex flex-col rounded-md shadow-lg overflow-hidden w-full"
    variants={cardVariants}
    whileHover={{ y: -8, scale: 1.02 }}
  >
    <div className="h-48 overflow-hidden">
      <img
        src={imgSrc}
        alt={`${title} background`}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    </div>
    <div className="bg-ecogreen-green flex items-center p-4">
      <div className="bg-white rounded-full p-1 mr-4 flex-shrink-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
        <img 
          src="https://tumuro.com/media/banner-services/control-de-erosion-icon.png" 
          alt={`${title} icon`} 
          className="h-12 w-12"
        />
      </div>
      <h3 className="text-white text-base font-bold uppercase tracking-wide">{title}</h3>
    </div>
  </MotionLink>
);

// =====================================================================
// 4. COMPONENTE PRINCIPAL: ControlDeErosion
// =====================================================================

const ControlDeErosion: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full m-0 p-0">
      <title>Control de Erosión | EcoGreen</title>
      <meta name="description" content="Soluciones avanzadas para el control de erosión mediante geomantas y sistemas de estabilización de suelos." />

      {/* --- INICIO SECCIÓN: HERO SLIDER (DINÁMICO) --- */}
      <HeroSliderResponsive data={sliderData['control-de-erosion']} />
      {/* --- FIN SECCIÓN: HERO SLIDER (DINÁMICO) --- */}


      {/* --- INICIO BLOQUE: CONTENIDO TEÓRICO --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
              <img src="https://tumuro.com/media/banner-services/control-de-erosion-icon.png" alt="Icono Control de Erosión" className="w-16 h-16 mr-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">CONTROL DE EROSIÓN</h2>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-left">
              La erosión es un fenómeno que se ocasiona debido a la migración de partículas finas del suelo, principalmente producido por la acción del viento y la lluvia...
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
                           <p>Para el control de la erosión se han venido desarrollando diversas técnicas basadas en el uso de materiales geosintéticos...</p>
                           <p>Las geomantas EcoGreen son estructuras tridimensionales de polímeros que suministran una estructura de refuerzo a las raíces y al follaje de la vegetación.</p>
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
      {/* --- FIN BLOQUE: CONTENIDO TEÓRICO --- */}


      {/* --- INICIO SECCIÓN: GRID DE SOLUCIONES --- */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="mb-12">
                <h3 className="text-3xl font-bold text-left text-ecogreen-blue mb-2 uppercase tracking-wide">Soluciones de Control de Erosión</h3>
                <div className="w-full h-1 bg-ecogreen-green"></div>
            </div>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={gridContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {erosionSystems.map((sys) => <ErosionSystemCard key={sys.title} {...sys} />)}
            </motion.div>
        </div>
      </section>
      {/* --- FIN SECCIÓN: GRID DE SOLUCIONES --- */}

    </div>
  );
};

export default ControlDeErosion;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import { sliderData } from '../data/sliderData';

// =====================================================================
// 1. CONFIGURACIÓN DE DATOS Y ANIMACIONES (GRID)
// =====================================================================

const construccionCivil = [
  { title: 'MUROS DE CONTENCIÓN', href: '/muros-de-contencion/sistemas-flexibles/tierra-reforzada', imgSrc: 'https://tumuro.com/media/campos-de-aplicacion/grid-campos-de-aplicacion/construccion-civil/muros-de-contencion.webp' },
  { title: 'CONTROL DE EROSIÓN', href: '/control-de-erosion', imgSrc: 'https://tumuro.com/media/campos-de-aplicacion/grid-campos-de-aplicacion/construccion-civil/control-de-erosion.webp' },
  { title: 'SISTEMAS DE DRENAJE', href: '/muros-de-contencion/sistemas-drenaje', imgSrc: 'https://tumuro.com/media/campos-de-aplicacion/grid-campos-de-aplicacion/construccion-civil/sistemas-de-drenaje.webp' },
];

const gridContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

const MotionLink = motion(Link);

const SystemCard: React.FC<{ title: string; href: string; imgSrc: string }> = ({ title, href, imgSrc }) => (
  <MotionLink
    to={href}
    className="group flex flex-col rounded-md shadow-lg overflow-hidden relative"
    variants={cardVariants}
    whileHover={{ y: -8, scale: 1.02 }}
  >
    <div className="h-64 overflow-hidden">
      <img src={imgSrc} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-ecogreen-blue py-3 px-4">
      <h3 className="text-white text-base font-bold uppercase tracking-wide text-center">{title}</h3>
    </div>
  </MotionLink>
);

// =====================================================================
// 2. COMPONENTE PRINCIPAL: ConstruccionCivil
// =====================================================================

const ConstruccionCivil: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full m-0 p-0">
      <title>Construcción Civil | EcoGreen</title>

      {/* --- INICIO SECCIÓN: HERO SLIDER DINÁMICO --- */}
      {/* Conectado con el ID 'construccion-civil' de sliderData.ts */}
      <HeroSliderResponsive data={sliderData['construccion-civil']} />
      {/* --- FIN SECCIÓN: HERO SLIDER DINÁMICO --- */}


      {/* --- INICIO BLOQUE: CONTENIDO TEÓRICO --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
              <img src="https://tumuro.com/media/banner-services/muros-de-contencion-icon.webp" alt="Icono" className="w-16 h-16 mr-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">Construcción Civil</h2>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              ECOGREEN nace para dar respuesta a la gran demanda que exige la ingeniería moderna...
            </p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed pt-4 border-t mt-4">
                    <p>A través de la incorporación de nuevas tecnologías aplicadas a la construcción civil...</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button onClick={() => setIsExpanded(!isExpanded)} className="bg-ecogreen-blue text-white font-bold text-sm uppercase px-6 py-3 rounded-full hover:bg-ecogreen-green transition-colors mt-6">
              {isExpanded ? 'Cerrar ▲' : 'Leer Mas ▼'}
            </button>
          </div>
        </div>
      </section>
      {/* --- FIN BLOQUE: CONTENIDO TEÓRICO --- */}


      {/* --- INICIO SECCIÓN: GRID DE SOLUCIONES --- */}
      <section className="py-16 bg-gray-50 mb-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-left text-ecogreen-blue mb-2 uppercase tracking-wide">Soluciones para Construcción Civil</h3>
            <div className="w-full h-1 bg-ecogreen-green"></div>
          </div>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={gridContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {construccionCivil.map((sys) => <SystemCard key={sys.title} {...sys} />)}
          </motion.div>
        </div>
      </section>
      {/* --- FIN SECCIÓN: GRID DE SOLUCIONES --- */}

    </div>
  );
};

export default ConstruccionCivil;
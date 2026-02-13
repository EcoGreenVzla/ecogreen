import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
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

const sistemasRigidos = [
  { title: 'Muros Anclados y Pantallas', href: '/muros-de-contencion/sistemas-rigidos/muros-anclados', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/muros-anclados-y-pantallas-atirantadas.webp' },
  { title: 'Muros de Concreto Armado', href: '/muros-de-contencion/sistemas-rigidos/concreto-armado', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/muros-de-concreto-armado.webp' },
  { title: 'Muros Ciclópeos', href: '/muros-de-contencion/sistemas-rigidos/muros-ciclopeos', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/muros-de-ciclopeos.webp' },
  { title: 'Pilotes y Micropilotes', href: '/muros-de-contencion/sistemas-rigidos/pilotes-micropilotes', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/pilotes-y-micropilotes.webp' },
];

const sistemasDrenaje = [
  { title: 'Sistemas de Drenaje', href: '/muros-de-contencion/sistemas-drenaje', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-drenaje/sistemas-de-drenaje.webp' },
];

// --- Variantes de Animación ---
const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  },
};

const SystemCard: React.FC<{ title: string; href: string; imgSrc: string }> = ({ title, href, imgSrc }) => (
  <motion.div
    variants={cardVariants}
    className="group flex flex-col rounded-md shadow-lg overflow-hidden relative h-full"
    whileHover={{ y: -8 }}
  >
    <Link to={href} className="flex flex-col h-full">
      <div className="h-64 overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-ecogreen-blue py-4 px-4">
        <h3 className="text-white text-base font-black uppercase tracking-tighter text-center leading-tight">
          {title}
        </h3>
      </div>
    </Link>
  </motion.div>
);

const MurosDeContencion: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full m-0 p-0">
      {/* 1. Hero Slider Dinámico */}
      <HeroSliderResponsive data={sliderData['muros-de-contencion']} />

      {/* 2. Sección Teórica (Acordeón) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-8">
              <img src="https://tumuro.com/media/banner-services/muros-de-contencion-icon.webp" alt="Icono" className="w-16 h-16 mr-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-ecogreen-blue uppercase tracking-wide">Muros de Contención</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Los muros de contención son estructuras construidas con el propósito de resistir las fuerzas ejercidas por la tierra contenida y transmitir esas fuerzas en forma segura a la fundación.
            </p>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed pt-4 border-t border-gray-200 mt-4">
                    <p>Los muros de contención están considerados como una de las técnicas de construcción más antiguas de la humanidad...</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 bg-ecogreen-blue text-white font-bold text-sm uppercase px-6 py-3 rounded-full hover:bg-ecogreen-green transition-colors"
            >
              {isExpanded ? 'Cerrar ▲' : 'Leer Mas ▼'}
            </button>
          </div>
        </div>
      </section>

      {/* 3. Grids de Sistemas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-ecogreen-blue mb-2 uppercase">Sistemas de Contención Flexibles</h3>
          <div className="w-full h-1 bg-ecogreen-green mb-12"></div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={gridContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {sistemasFlexibles.map((sys) => <SystemCard key={sys.title} {...sys} />)}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-ecogreen-blue mb-2 uppercase">Sistemas de Contención Rígidos</h3>
          <div className="w-full h-1 bg-ecogreen-green mb-12"></div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={gridContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {sistemasRigidos.map((sys) => <SystemCard key={sys.title} {...sys} />)}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 mb-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-ecogreen-blue mb-2 uppercase">Sistemas de Drenaje</h3>
          <div className="w-full h-1 bg-ecogreen-green mb-12"></div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={gridContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {sistemasDrenaje.map((sys) => <SystemCard key={sys.title} {...sys} />)}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MurosDeContencion;
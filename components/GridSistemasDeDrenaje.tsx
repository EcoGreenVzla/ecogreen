import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

// --- Datos locales del Grid ---
const sistemasDrenaje = [
  { 
    title: 'Sistemas de Drenaje', 
    href: '/muros-de-contencion/sistemas-de-drenaje', 
    imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-drenaje/sistemas-de-drenaje.webp' 
  },
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

const GridSistemasDeDrenaje: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 mb-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-ecogreen-blue mb-2 uppercase">
          Sistemas de Drenaje
        </h3>
        <div className="w-full h-1 bg-ecogreen-green mb-12"></div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8" 
          variants={gridContainerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          {sistemasDrenaje.map((sys) => (
            <motion.div 
              key={sys.title} 
              variants={cardVariants} 
              className="group flex flex-col rounded-md shadow-lg overflow-hidden relative h-full bg-white" 
              whileHover={{ y: -8 }}
            >
              <Link to={sys.href} className="flex flex-col h-full">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={sys.imgSrc} 
                    alt={sys.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                
                {/* Contenedor del título actualizado */}
                <div className="absolute bottom-0 left-0 right-0 bg-ecogreen-blue px-4 pb-2">
                  <h3 className="font-gotcha text-[1.4em] tracking-[1px] pt-[0.5em] m-0 text-white text-center leading-none uppercase">
                    <span dangerouslySetInnerHTML={{ __html: sys.title }} />
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GridSistemasDeDrenaje;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

// --- Datos locales del Grid ---
const sistemasRigidos = [
  { 
    title: 'Muros Anclados y Pantallas Atirantadas', 
    href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-anclados-y-pantallas-atirantadas', 
    imgSrc: 'https://tumuro.com/images/muros-anclados-y-pantallas-atirantadas.jpg' 
  },
  { 
    title: 'Muros de Concreto Armado', 
    href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-concreto-armado', 
    imgSrc: 'https://tumuro.com/images/muros-de-concreto-armado.jpg' 
  },
  { 
    title: 'Muros Ciclópeos', 
    href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-ciclopeos', 
    imgSrc: 'https://tumuro.com/images/muros-de-ciclopeos.jpg' 
  },
  { 
    title: 'Pilotes y Micropilotes', 
    href: '/muros-de-contencion/sistemas-de-contencion-rigidos/pilotes-y-micropilotes', 
    imgSrc: 'https://tumuro.com/images/pilotes-y-micropilotes.jpg'
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

const GridSistemasDeContencionRigidos: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-ecogreen-blue mb-2 uppercase">
          Sistemas de Contención Rígidos
        </h3>
        <div className="w-full h-1 bg-ecogreen-green mb-12"></div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8" 
          variants={gridContainerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          {sistemasRigidos.map((sys) => (
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
                <div className="absolute bottom-0 left-0 right-0 bg-ecogreen-blue py-4 px-4">
                  <h3 className="text-white text-base font-black uppercase tracking-tighter text-center leading-tight">
                    {sys.title}
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

export default GridSistemasDeContencionRigidos;
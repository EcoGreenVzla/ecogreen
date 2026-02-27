import React from 'react';
import { motion, Variants } from 'framer-motion';

const logos = [
  { src: 'https://tumuro.com/media/banner/cdidv.webp', alt: 'Cámara de Industriales del estado de Vargas' },
  { src: 'https://tumuro.com/media/banner/ieca.webp', alt: 'International Erosion Control Association' },
  { src: 'https://tumuro.com/media/banner/igs.webp', alt: 'International Geosynthetics Society' },
  { src: 'https://tumuro.com/media/banner/svdg.webp', alt: 'Sociedad Venezolana de Geotecnia' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const LogoRibbon: React.FC = () => {

  // ============================================================
  // PANEL DE CONTROL DE ESTILOS (TEMA DINÁMICO) - ESTÁNDAR 80%
  // ============================================================
  const theme = {
    layout: {
      backgroundColor: '#FFFFFF',
      paddingVertical: 'py-8',
      maxWidthResponsive: 'w-[99%] md:max-w-[80%]', // REGLA BOXED PARA ALINEACIÓN GLOBAL
      borderTop: 'border-t border-gray-50',
    },
    grid: {
      gap: 'gap-8',
      alignItems: 'items-center',
    },
    logo: {
      heightDesktop: 'h-28',
      heightMobile: 'h-22',
    },
    animation: {
      rotateY: 360,
      scaleHover: 1.18,
      springStiffness: 200,
      springDamping: 15,
    }
  };

  return (
    <section className={`${theme.layout.backgroundColor} ${theme.layout.paddingVertical} ${theme.layout.borderTop}`}>
      {/* CONTENEDOR BOXED (MAX-WIDTH 80% EN DESKTOP) */}
      <div className={`container mx-auto px-4 ${theme.layout.maxWidthResponsive}`}>
        
        <motion.div
          className={`grid grid-cols-2 md:grid-cols-4 ${theme.grid.alignItems} ${theme.grid.gap}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              className="flex justify-center cursor-pointer"
              title={logo.alt}
              whileHover={{ 
                rotateY: theme.animation.rotateY, 
                scale: theme.animation.scaleHover 
              }}
              transition={{ 
                type: "spring", 
                stiffness: theme.animation.springStiffness, 
                damping: theme.animation.springDamping 
              }}
            >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`${theme.logo.heightMobile} md:${theme.logo.heightDesktop} w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300`}
                />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoRibbon;
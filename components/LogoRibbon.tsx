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
  // PANEL DE CONTROL DE ESTILOS (TEMA DEL RIBBON)
  // ============================================================
  const theme = {
    section: {
      backgroundColor: '#FFFFFF', // Fondo totalmente blanco
      paddingVertical: '2rem',    // py-8 (Espacio arriba y abajo del ribbon)
      borderTop: '1px solid #f9fafb', // Línea sutil de separación superior
    },
    container: {
      maxWidth: '1024px',         // max-w-4xl (Fuerza los logos hacia adentro)
      paddingHorizontal: '1rem',  // px-4 (Margen de seguridad móvil)
      margin: '0 auto',           // mx-auto (Centrado horizontal)
    },
    grid: {
      gap: '2rem',                // gap-8 (Espacio entre logos)
      alignItems: 'center' as const,
    },
    logo: {
      heightDesktop: '7rem',      // h-28 (Aumentado ligeramente de h-24)
      heightMobile: '5.5rem',     // h-22 (Aumentado ligeramente de h-20)
      transitionDuration: '0.3s',
    },
    animation: {
      rotateY: 360,               // Giro completo sobre su eje
      scaleHover: 1.18,           // Crecimiento al pasar el mouse (Aumentado)
      springStiffness: 200,
      springDamping: 15,
    }
  };

  return (
    <section style={{ backgroundColor: theme.section.backgroundColor, padding: `${theme.section.paddingVertical} 0`, borderTop: theme.section.borderTop }}>
      <div className="container mx-auto" style={{ maxWidth: theme.container.maxWidth, paddingLeft: theme.container.paddingHorizontal, paddingRight: theme.container.paddingHorizontal }}>
        
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 items-center"
          style={{ gap: theme.grid.gap }}
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
              /* EFECTO RESTAURADO: Giro sobre eje Y + Crecimiento */
              whileHover={{ rotateY: theme.animation.rotateY, scale: theme.animation.scaleHover }}
              transition={{ type: "spring", stiffness: theme.animation.springStiffness, damping: theme.animation.springDamping }}
            >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ transition: theme.logo.transitionDuration }}
                  className="h-[5.5rem] md:h-[7rem] w-auto object-contain filter grayscale hover:grayscale-0"
                />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoRibbon;
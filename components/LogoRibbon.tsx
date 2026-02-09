
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
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const LogoRibbon: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 md:gap-x-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              className="flex justify-center cursor-pointer"
              title={logo.alt}
              whileHover={{ rotateY: 360, scale: 1.15 }}
              whileTap={{ rotateY: 360, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, duration: 0.6 }}
            >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-32 md:h-40 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoRibbon;

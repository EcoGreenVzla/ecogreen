
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

interface UnderConstructionProps {
  title?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
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

const UnderConstruction: React.FC<UnderConstructionProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-280px)] bg-gray-50 text-center px-4">
      <motion.div
        className="max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <motion.svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-ecogreen-blue"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm8.41 11h-2.1c-.18-1.78-.9-3.4-1.99-4.71L17.5 7.11c1.56 1.73 2.41 3.99 2.41 6.39zm-2.5-5.89c-1.13-1.3-2.6-2.28-4.24-2.82l.89 2.22c.94.23 1.8.69 2.56 1.32l.79-.72zm-3.67-2.82c-1.64-.54-3.28-.54-4.92 0L9.2 6.51c.88-.29 1.81-.45 2.8-.45s1.92.16 2.8.45l.89-2.22zm-5.43.59C7.5 6.6 6.52 8.07 5.98 9.71l-2.22-.89c.54-1.64 1.52-3.11 2.82-4.24l.72.79zM3.59 11c0-2.4 1.12-4.66 2.41-6.39L7.18 5.8c-1.09 1.31-1.81 2.93-1.99 4.71H3.59zm2.4 7.89l-1.18 1.18C6.34 21.62 8.6 22.48 11 22.48V20.3c-1.78-.18-3.4-.9-4.71-1.99zM11 20.3v2.18c2.4 0 4.66-1.12 6.39-2.41l-1.18-1.18c-1.31 1.09-2.93 1.81-4.71 1.99zm7.89-2.4l1.18-1.18C21.62 15.16 22.48 12.9 22.48 10.5h-2.18c.18 1.78.9 3.4 1.99 4.71z" fill="currentColor"/>
          </motion.svg>
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-ecogreen-blue tracking-wide uppercase"
        >
          Página en Construcción
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-lg text-gray-600"
        >
          Estamos preparando contenido especializado para esta solución EcoGreen.
        </motion.p>
        
        {title && (
            <motion.p variants={itemVariants} className="mt-6 text-md font-semibold text-gray-500 bg-gray-200 inline-block px-4 py-1 rounded-md">
                Estás en: <span className="text-ecogreen-green">{title}</span>
            </motion.p>
        )}

        <motion.div variants={itemVariants} className="mt-8">
          <Link
            to="/"
            className="inline-block bg-ecogreen-blue text-white uppercase text-lg font-semibold tracking-wider px-10 py-3 rounded-md shadow-lg transition-colors duration-300 hover:bg-ecogreen-green"
          >
            Volver al Inicio
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UnderConstruction;

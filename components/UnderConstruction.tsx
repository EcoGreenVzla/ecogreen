
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
        className="max-w-2xl flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <div className="w-64 h-64 md:w-80 md:h-80 mb-8">
            <DotLottieReact
              src="https://lottie.host/5e7d6e97-27e2-4c89-92af-135bfabe99a6/Bj8q8e5BIi.lottie"
              loop
              autoplay
              className="w-full h-full"
            />
          </div>
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
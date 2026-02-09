import React from 'react';
import { motion, Variants } from 'framer-motion';
import { camposData } from '../data/camposAplicacion';

// --- Animation Variants for Coordinated Micro-interactions ---

const itemVariants: Variants = {
  rest: { 
    // Initial state for all child elements is defined in their own variants
  },
  hover: {
    // Hover state triggers corresponding variants in children
  },
  tap: {
    // Tap state triggers ripple effect
  }
};

const circleGreenVariants: Variants = {
  rest: { opacity: 1 },
  hover: { opacity: 0.3, transition: { duration: 0.4 } },
};

const circleBlueVariants: Variants = {
  rest: { pathLength: 0 },
  hover: { 
    pathLength: 1, 
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 1.5 } 
  },
};

const iconVariants: Variants = {
  rest: { y: 0, scale: 1, filter: "brightness(1)" },
  hover: { 
    y: -12, 
    scale: 1.1, 
    filter: "brightness(1.1)",
    transition: { type: "spring", stiffness: 200, damping: 10 }
  },
};

const glowVariants: Variants = {
  rest: { opacity: 0, scale: 0.9 },
  hover: { 
    opacity: 1, 
    scale: 1,
    transition: { delay: 0.2, duration: 0.5 }
  }
}

const titleVariants: Variants = {
    rest: { color: '#4d5562', letterSpacing: '0.025em', fontWeight: 600 },
    hover: { color: '#0E306F', letterSpacing: '0.05em', fontWeight: 600 },
};

const underlineVariants: Variants = {
    rest: { scaleX: 0 },
    hover: { scaleX: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const rippleVariants: Variants = {
    tap: {
        scale: [1, 1.8],
        opacity: [0.6, 0],
        transition: { duration: 0.4, ease: "easeOut" }
    }
}


// FIX: Changed component signature to use React.FC to correctly type props and resolve issue with the 'key' prop.
const CampoItem: React.FC<{ title: string, icon: string, index: number }> = ({ title, icon, index }) => {
  return (
    <motion.div
      initial="rest"
      whileInView={{ opacity: 1, y: 0 }}
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true }}
      variants={itemVariants}
      className="flex flex-col items-center group cursor-pointer"
      style={{ opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
    >
      {/* Contenedor del Círculo con Borde Animado */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
        {/* Ripple Effect */}
        <motion.div 
            className="absolute w-full h-full rounded-full border-2 border-[#0E306F]"
            variants={rippleVariants}
            style={{ scale: 1, opacity: 0 }}
        />
        {/* Glow Effect */}
        <motion.div 
            className="absolute w-full h-full rounded-full"
            style={{ boxShadow: "0 0 20px 5px rgba(14, 48, 111, 0.4)" }}
            variants={glowVariants}
        />

        {/* SVG para el trazo del compás (dual path) */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          {/* Círculo base verde */}
          <motion.circle
            cx="50%" cy="50%" r="48%"
            stroke="#309400"
            strokeWidth="2"
            fill="transparent"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            variants={circleGreenVariants}
          />
          {/* Círculo animado azul (hover) */}
          <motion.circle
            cx="50%" cy="50%" r="48%"
            stroke="#0E306F"
            strokeWidth="4"
            fill="transparent"
            variants={circleBlueVariants}
          />
        </svg>

        {/* Icono Interno con levitación */}
        <motion.div 
          variants={iconVariants}
          className="relative z-10 w-2/3 h-2/3 flex items-center justify-center p-4"
        >
          <img 
            src={icon} 
            alt={title} 
            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </div>

      {/* Título con Tipografía Dinámica */}
      <motion.h3 
        variants={titleVariants}
        className="mt-6 text-center text-[1.2rem] font-sans tracking-wider max-w-[180px]"
      >
        {title}
        <motion.span 
            variants={underlineVariants}
            className="block h-[1px] bg-[#0E306F] mx-auto mt-1" 
        />
      </motion.h3>
    </motion.div>
  );
};

const CamposAplicacion = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light text-center mb-16 tracking-[0.2em] text-gray-500 uppercase"
        >
          Campos de Aplicación
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {camposData.map((campo, index) => (
            <CampoItem 
              key={campo.id} 
              title={campo.title} 
              icon={campo.icon} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CamposAplicacion;
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { casosDeObrasPrincipalesData } from '../data/casosDeObrasPrincipales';

// Variants for the main container to stagger children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Variants for each card, including hover state
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  hover: {
    y: -10,
    boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.15)',
    transition: { type: 'spring', stiffness: 300 },
  }
};

const imageVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
};

const titleVariants: Variants = {
  rest: { color: '#2d3748' }, // text-gray-800
  hover: { color: '#0E306F' }, // ecogreen-blue
};


// FIX: Changed component signature to use React.FC to correctly type props and resolve issue with the 'key' prop.
const CasoCard: React.FC<{ caso: typeof casosDeObrasPrincipalesData[0] }> = ({ caso }) => {
  return (
    <motion.div
      className="group bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden relative cursor-pointer"
      variants={cardVariants}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
    >
        <div className="overflow-hidden h-56">
          <motion.img
            src={caso.image}
            alt={caso.title}
            className="w-full h-full object-cover"
            variants={imageVariants}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
        <div className="p-6">
          <motion.h3
            className="text-xl font-semibold text-gray-800 tracking-wide uppercase mb-2"
            variants={titleVariants}
          >
            {caso.title}
          </motion.h3>
          <p className="text-base text-gray-600 leading-relaxed">
            {caso.description}
          </p>
        </div>
    </motion.div>
  );
};

const CasosDeObras = () => {
  return (
    <section
      className="py-20 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('https://tumuro.com/media/ui/plans-placeholder.webp')" }}
    >
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light text-center mb-16 tracking-[0.2em] text-gray-600 uppercase"
        >
          Casos de Obras
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {casosDeObrasPrincipalesData.map((caso) => (
            <CasoCard key={caso.id} caso={caso} />
          ))}
        </motion.div>
        <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <motion.a 
                href="#"
                className="inline-block bg-ecogreen-blue text-white uppercase text-lg font-semibold tracking-wider px-10 py-3 rounded-md shadow-lg"
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(14, 48, 111, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                Ver Más
            </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CasosDeObras;
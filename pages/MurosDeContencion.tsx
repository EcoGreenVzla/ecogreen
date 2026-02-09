import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '../components/icons/ChevronRightIcon';

const subSections = [
  {
    title: 'Sistemas Flexibles',
    description: 'Soluciones adaptables que utilizan tierra reforzada y gaviones para integrarse con el entorno natural y soportar movimientos del terreno.',
    href: '/muros-de-contencion/sistemas-flexibles',
    imgSrc: 'https://tumuro.com/media/banner-services/muros-de-contencion.webp',
  },
  {
    title: 'Sistemas Rígidos',
    description: 'Estructuras robustas de concreto armado, muros anclados y pilotes, diseñadas para máxima durabilidad y contención en condiciones exigentes.',
    href: '/muros-de-contencion/sistemas-rigidos',
    imgSrc: 'https://tumuro.com/media/slider/muros-de-contencion5.webp',
  },
  {
    title: 'Sistemas de Drenaje',
    description: 'Componentes cruciales para la gestión del agua que garantizan la estabilidad y longevidad de cualquier estructura de contención.',
    href: '/muros-de-contencion/sistemas-drenaje',
    imgSrc: 'https://tumuro.com/media/obras/ppal/ECO150.PRINCIPAL.webp',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

// FIX: Explicitly type cardHoverVariants as Variants to resolve the type error
// where the transition 'type' property was inferred as a generic string.
const cardHoverVariants: Variants = {
  hover: {
    scale: 1.03,
    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.1)',
    transition: { type: 'spring', stiffness: 300 },
  },
};

const MurosDeContencion: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-cover bg-center py-24 md:py-32"
        style={{ backgroundImage: "url('https://tumuro.com/media/slider/muros-de-contencion1.webp')" }}
      >
        <div className="absolute inset-0 bg-ecogreen-blue/60"></div>
        <div className="container mx-auto px-4 text-center text-white relative">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold uppercase tracking-wider drop-shadow-lg"
          >
            Muros de Contención
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-4 max-w-3xl mx-auto text-lg md:text-xl font-light"
          >
            Ingeniería de vanguardia para la estabilización de terrenos. Ofrecemos soluciones a medida que garantizan seguridad, durabilidad y armonía con el paisaje.
          </motion.p>
        </div>
      </section>

      {/* Sub-sections Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {subSections.map((section) => (
              <motion.div key={section.title} variants={itemVariants}>
                <Link to={section.href}>
                  <motion.div
                    className="group bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
                    variants={cardHoverVariants}
                    whileHover="hover"
                  >
                    <div className="overflow-hidden h-56">
                      <img
                        src={section.imgSrc}
                        alt={section.title}
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-ecogreen-blue uppercase tracking-wide">
                        {section.title}
                      </h3>
                      <p className="mt-2 text-gray-600 flex-grow">{section.description}</p>
                      <div className="mt-6 text-ecogreen-green font-semibold flex items-center group-hover:text-ecogreen-orange transition-colors">
                        Ver más <ChevronRightIcon className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MurosDeContencion;

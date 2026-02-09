
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// --- Data for System Grids ---

const sistemasFlexibles = [
  { title: 'Muros de Tierra Reforzada', href: '/muros-de-contencion/sistemas-flexibles/tierra-reforzada', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-tierra-reforzada.webp' },
  { title: 'Muros de Gavión', href: '/muros-de-contencion/sistemas-flexibles/gavion', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-gavion.webp' },
  { title: 'Muros de Gavión Reforzados', href: '/muros-de-contencion/sistemas-flexibles/gavion-reforzado', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-gavion-reforzados.webp' },
  { title: 'Muros Mixtos', href: '/muros-de-contencion/sistemas-flexibles/muros-mixtos', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-mixtos.webp' },
  { title: 'Refuerzo de Taludes', href: '/muros-de-contencion/sistemas-flexibles/refuerzo-taludes', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/refuerzo-de-taludes-y-terraplenes.webp' },
];

const sistemasRigidos = [
  { title: 'Muros Anclados y Pantallas', href: '/muros-de-contencion/sistemas-rigidos/muros-anclados', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/muros-anclados-y-pantallas-atirantadas.webp' },
  { title: 'Muros de Concreto Armado', href: '/muros-de-contencion/sistemas-rigidos/concreto-armado', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/muros-de-concreto-armado.webp' },
  { title: 'Muros Ciclópeos', href: '/muros-de-contencion/sistemas-rigidos/muros-ciclopeos', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/muros-de-ciclopeos.webp' },
  { title: 'Pilotes y Micropilotes', href: '/muros-de-contencion/sistemas-rigidos/pilotes-micropilotes', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-rigidos/pilotes-y-micropilotes.webp' },
];

const sistemasDrenaje = [
  { title: 'Sistemas de Drenaje', href: '/muros-de-contencion/sistemas-drenaje', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-drenaje/sistemas-de-drenaje.webp' },
];


// --- Reusable System Card Component ---

interface SystemCardProps {
  title: string;
  href: string;
  imgSrc: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  },
};
const MotionLink = motion(Link);

const SystemCard: React.FC<SystemCardProps> = ({ title, href, imgSrc }) => (
  <MotionLink
    to={href}
    className="group flex flex-col rounded-md shadow-lg overflow-hidden relative"
    variants={cardVariants}
    whileHover={{ y: -8, scale: 1.02, boxShadow: "0px 12px 24px rgba(0,0,0,0.15)" }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="h-56 overflow-hidden">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-ecogreen-blue/80 backdrop-blur-sm p-4">
      <h3 className="text-white text-base font-bold uppercase tracking-wide text-center">{title}</h3>
    </div>
  </MotionLink>
);


// --- Main Page Component ---

const MurosDeContencion: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const gridContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <>
      <Helmet>
        <title>Muros de Contención | EcoGreen - Soluciones Verdes, Prácticas y Económicas</title>
        <meta name="description" content="Especialistas en sistemas de contención flexibles y rígidos. Muros de tierra reforzada, gaviones, concreto armado y control de erosión en Venezuela." />
        <meta property="og:title" content="Muros de Contención | EcoGreen" />
        <meta property="og:description" content="Soluciones Verdes, Prácticas y Económicas en sistemas de contención flexibles y rígidos." />
        <meta property="og:image" content="https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-tierra-reforzada.webp" />
        <meta property="og:url" content="https://tumuro.com/muros-de-contencion" />
      </Helmet>
      
      {/* Section 1: Hero */}
      <section
        className="relative w-full h-[50vh] max-h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://tumuro.com/media/slider/muros-de-contencion1.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white p-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-ecogreen-lime uppercase drop-shadow-lg"
          >
            Muros de Contención
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 text-lg md:text-2xl font-semibold uppercase tracking-wider drop-shadow-md"
          >
            Soluciones Verdes, Prácticas y Económicas.
          </motion.p>
        </div>
      </section>

      {/* Section 2: Theory Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-ecogreen-blue mb-4">MUROS DE CONTENCIÓN</h2>
          <img src="https://tumuro.com/media/banner-services/muros-de-contencion-icon.webp" alt="Icono Muros de Contención" className="h-20 w-20 mx-auto mb-6" />
          <p className="text-lg text-gray-700 leading-relaxed">
            Los muros de contención son estructuras de ingeniería civil diseñadas para resistir el empuje lateral del suelo o de otros materiales granulares. Su propósito principal es mantener el terreno en una pendiente que, de forma natural, no podría sostenerse, previniendo deslizamientos y garantizando la estabilidad de terraplenes, excavaciones y taludes.
          </p>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: '1.5rem' }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="text-left space-y-4 text-gray-600 overflow-hidden"
              >
                <p>La historia del diseño de muros de contención se remonta al siglo XVIII, con las aportaciones del ingeniero francés Charles-Augustin de Coulomb, quien desarrolló la primera teoría coherente para calcular el empuje de tierras. Su modelo, basado en el equilibrio de una cuña de suelo, sentó las bases para el análisis geotécnico. Un siglo después, William Rankine simplificó la teoría de Coulomb para muros verticales con rellenos horizontales, proporcionando un método más directo que sigue siendo fundamental en la práctica actual.</p>
                <p>Con el avance de la mecánica de suelos, surgieron métodos más sofisticados. En el siglo XX, técnicas como el método de las dovelas (desarrollado por Fellenius y posteriormente mejorado por Bishop) permitieron analizar la estabilidad de taludes y muros de forma más precisa, considerando superficies de falla circulares. Hoy en día, el análisis se complementa con herramientas computacionales avanzadas como el Método de los Elementos Finitos (FEM), que modela el comportamiento complejo del suelo y la interacción con la estructura del muro, permitiendo diseños optimizados y más seguros para una amplia variedad de condiciones geotécnicas.</p>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 text-ecogreen-blue font-bold uppercase tracking-wider"
          >
            {isExpanded ? 'Cerrar ▲' : 'Leer Más ▼'}
          </button>
        </div>
      </section>

      {/* Section 3: Sistemas Flexibles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-ecogreen-blue text-center mb-10">Sistemas Flexibles</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {sistemasFlexibles.map(item => <SystemCard key={item.href} {...item} />)}
          </motion.div>
        </div>
      </section>

      {/* Section 4: Sistemas Rígidos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-ecogreen-blue text-center mb-10">Sistemas Rígidos</h2>
           <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {sistemasRigidos.map(item => <SystemCard key={item.href} {...item} />)}
          </motion.div>
        </div>
      </section>
      
      {/* Section 5: Sistemas de Drenaje */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-ecogreen-blue text-center mb-10">Sistemas de Drenaje</h2>
           <motion.div
            className="max-w-sm"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {sistemasDrenaje.map(item => <SystemCard key={item.href} {...item} />)}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MurosDeContencion;
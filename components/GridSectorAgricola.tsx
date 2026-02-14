import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

const items = [
  { title: 'Muros de Contención', href: '/muros-de-contencion', imgSrc: 'https://tumuro.com/images/muros-de-contencion-cda.jpg' },
  { title: 'Sistemas Flexibles', href: '/muros-de-contencion/sistemas-de-contencion-flexibles', imgSrc: 'https://tumuro.com/images/sistemas-de-contencion-flexibles1.jpg' },
  { title: 'Muros de Tierra Reforzada', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-tierra-reforzada', imgSrc: 'https://tumuro.com/images/muros-de-tierra-reforzada-cda.jpg' },
  { title: 'Muros de Gavión', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion', imgSrc: 'https://tumuro.com/images/muros-de-gavion-cda.jpg' },
  { title: 'Muros de Gavión Reforzados', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados', imgSrc: 'https://tumuro.com/images/muros-de-gavion-reforzados-cda.jpg' },
  { title: 'Muros Mixtos', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-mixtos', imgSrc: 'https://tumuro.com/images/muros-mixtos-cda.jpg' },
  { title: 'Refuerzo de Taludes', href: '/refuerzo-de-taludes-y-terraplenes', imgSrc: 'https://tumuro.com/images/refuerzo-de-taludes-y-terraplenes-cda.jpg' },
  { title: 'Sistemas de Drenaje', href: '/muros-de-contencion/sistemas-de-drenaje', imgSrc: 'https://tumuro.com/images/sistemas-de-drenaje-cda.jpg' },
  { title: 'Control de Erosión', href: '/control-de-erosion', imgSrc: 'https://tumuro.com/images/control-de-erosion-cda.jpg' },
  { title: 'Estabilización de Taludes', href: '/control-de-erosion/estabilizacion-de-taludes', imgSrc: 'https://tumuro.com/images/estabilizacion-de-taludes-cda.jpg' },
  { title: 'Reforestación', href: '/control-de-erosion/reforestacion', imgSrc: 'https://tumuro.com/images/reforestacion-cda.jpg' },
  { title: 'Canalizaciones', href: '/control-de-erosion/canalizaciones', imgSrc: 'https://tumuro.com/images/canalizaciones-cda.jpg' },
  { title: 'Diques y Presas', href: '/control-de-erosion/diques-y-presas', imgSrc: 'https://tumuro.com/images/diques-y-presas-cda.jpg' },
  { title: 'Protección de Riberas', href: '/control-de-erosion/proteccion-de-riberas', imgSrc: 'https://tumuro.com/images/proteccion-de-riberas-cda.jpg' },
  { title: 'Rampas y Vías Agrícolas', href: '#', imgSrc: 'https://tumuro.com/images/rampas-y-vias-de-penetracion-cda.jpg' },
  { title: 'Estabilización de Subrasantes', href: '#', imgSrc: 'https://tumuro.com/images/separacion-y-estabilizacion-de-subrasantes-cda.jpg' },
  { title: 'Refuerzo Suelos Blandos', href: '#', imgSrc: 'https://tumuro.com/images/refuerzo-de-terraplenes-sobre-suelos-blandos-cda.jpg' },
  { title: 'Mantenimiento de Áreas Verdes', href: '#', imgSrc: 'https://tumuro.com/images/mantenimiento-de-areas-verdes-cda.jpg' },
];

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

const GridSectorAgricola: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-ecogreen-blue mb-2 uppercase">Servicios para el Sector Agrícola</h3>
        <div className="w-full h-1 bg-ecogreen-green mb-12"></div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          variants={gridContainerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          {items.map((item) => (
            <motion.div key={item.title} variants={cardVariants} className="group flex flex-col rounded-md shadow-lg overflow-hidden relative h-64 bg-white" whileHover={{ y: -8 }}>
              <Link to={item.href} className="flex flex-col h-full">
                <div className="h-full overflow-hidden">
                  <img src={item.imgSrc} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-ecogreen-blue py-4 px-4">
                  <h3 className="text-white text-base font-black uppercase tracking-tighter text-center leading-tight">{item.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GridSectorAgricola;
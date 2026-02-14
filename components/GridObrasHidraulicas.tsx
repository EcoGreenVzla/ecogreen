import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

const items = [
  { title: 'Muros de Contención', href: '/muros-de-contencion', imgSrc: 'https://tumuro.com/images/muros-de-contencion-cda.jpg' },
  { title: 'Sistemas Flexibles', href: '/muros-de-contencion/sistemas-de-contencion-flexibles', imgSrc: 'https://tumuro.com/images/sistemas-de-contencion-flexibles1.jpg' },
  { title: 'Muros de Gavión', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion', imgSrc: 'https://tumuro.com/images/muros-de-gavion-cda.jpg' },
  { title: 'Muros de Gavión Reforzados', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados', imgSrc: 'https://tumuro.com/images/muros-de-gavion-reforzados-cda.jpg' },
  { title: 'Sistemas Rígidos', href: '/muros-de-contencion/sistemas-de-contencion-rigidos', imgSrc: 'https://tumuro.com/images/sistemas-de-contencion-rigidos13.jpg' },
  { title: 'Muros Anclados y Pantallas', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-anclados-y-pantallas-atirantadas', imgSrc: 'https://tumuro.com/images/muros-anclados-y-pantallas-atirantadas-cda.jpg' },
  { title: 'Muros de Concreto Armado', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-concreto-armado', imgSrc: 'https://tumuro.com/images/muros-de-concreto-armado-cda.jpg' },
  { title: 'Muros Ciclópeos', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-ciclopeos', imgSrc: 'https://tumuro.com/images/muros-ciclopeos-cda.jpg' },
  { title: 'Pilotes y Micropilotes', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/pilotes-y-micropilotes', imgSrc: 'https://tumuro.com/images/pilotes-y-micropilotes-cda.jpg' },
  { title: 'Sistemas de Drenaje', href: '/muros-de-contencion/sistemas-de-drenaje', imgSrc: 'https://tumuro.com/images/sistemas-de-drenaje-cda.jpg' },
  { title: 'Canalizaciones', href: '/control-de-erosion/canalizaciones', imgSrc: 'https://tumuro.com/images/canalizaciones-cda.jpg' },
  { title: 'Diques y Presas', href: '/control-de-erosion/diques-y-presas', imgSrc: 'https://tumuro.com/images/diques-y-presas-cda.jpg' },
  { title: 'Protección de Riberas', href: '/control-de-erosion/proteccion-de-riberas', imgSrc: 'https://tumuro.com/images/proteccion-de-riberas-cda.jpg' },
  { title: 'Refuerzo de Terraplenes', href: '#', imgSrc: 'https://tumuro.com/images/refuerzo-de-terraplenes-sobre-suelos-blandos-cda.jpg' },
  { title: 'Subdrenajes y Alcantarillas', href: '#', imgSrc: 'https://tumuro.com/images/subdrenajes-y-alcantarillas-cda.jpg' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const GridObrasHidraulicas: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-ecogreen-blue mb-2 uppercase">Infraestructura Hidráulica</h3>
        <div className="w-full h-1 bg-ecogreen-green mb-12"></div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item) => (
            <motion.div 
              key={item.title} 
              className="group flex flex-col rounded-md shadow-lg overflow-hidden relative h-64 bg-white"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Link to={item.href} className="flex flex-col h-full">
                <div className="h-full overflow-hidden">
                  <img src={item.imgSrc} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-ecogreen-blue py-4 px-4">
                  <h3 className="text-white text-base font-black uppercase text-center">{item.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GridObrasHidraulicas;
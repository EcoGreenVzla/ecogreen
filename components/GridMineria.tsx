import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

const items = [
  { title: 'Muros de Gavión', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion', imgSrc: 'https://tumuro.com/images/muros-de-gavion-cda.jpg' },
  { title: 'Gaviones Reforzados', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados', imgSrc: 'https://tumuro.com/images/muros-de-gavion-reforzados-cda.jpg' },
  { title: 'Sistemas de Drenaje', href: '/muros-de-contencion/sistemas-de-drenaje', imgSrc: 'https://tumuro.com/images/sistemas-de-drenaje-cda.jpg' },
  { title: 'Control de Erosión', href: '/control-de-erosion', imgSrc: 'https://tumuro.com/images/control-de-erosion-cda.jpg' },
  { title: 'Estabilización de Taludes', href: '/control-de-erosion/estabilizacion-de-taludes', imgSrc: 'https://tumuro.com/images/estabilizacion-de-taludes-cda.jpg' },
  { title: 'Fallas de Borde', href: '#', imgSrc: 'https://tumuro.com/images/reconstruccion-de-fallas-de-borde-cda.jpg' },
  { title: 'Vías de Penetración', href: '#', imgSrc: 'https://tumuro.com/images/rampas-y-vias-de-penetracion-cda.jpg' },
  { title: 'Contra Caída de Rocas', href: '#', imgSrc: 'https://tumuro.com/images/Unica-CAIDA-DE-ROCAS-1800x1200.jpg' },
  { title: 'Reforestación', href: '/control-de-erosion/reforestacion', imgSrc: 'https://tumuro.com/images/reforestacion-cda.jpg' },
  { title: 'Estudios de Suelo y Pozos', href: '#', imgSrc: 'https://tumuro.com/images/muros-de-contencion-cda.jpg' },
  { title: 'Geología y Geofísica', href: '#', imgSrc: 'https://tumuro.com/images/estabilizacion-de-taludes-cda.jpg' },
  { title: 'Prospección y Cartografía', href: '#', imgSrc: 'https://tumuro.com/images/reconstruccion-de-fallas-de-borde-cda.jpg' },
  { title: 'Planes de Exploración', href: '#', imgSrc: 'https://tumuro.com/images/rampas-y-vias-de-penetracion-cda.jpg' },
  { title: 'Certificación de Recursos', href: '#', imgSrc: 'https://tumuro.com/images/separacion-y-estabilizacion-de-subrasantes-cda.jpg' },
  { title: 'Plantas de Explotación', href: '#', imgSrc: 'https://tumuro.com/images/separacion-y-estabilizacion-de-subrasantes-cda.jpg' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const GridMineria: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-ecogreen-blue mb-2 uppercase">Servicios de Minería y Geología</h3>
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
                  <h3 className="text-white text-base font-black uppercase text-center leading-tight">{item.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GridMineria;
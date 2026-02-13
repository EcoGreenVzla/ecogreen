import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

const applicationFields = [
  { title: 'INFRAESTRUCTURA URBANA', href: '/campos-de-aplicacion/infraestructura-urbana', imgSrc: 'https://tumuro.com/images/INFRAESTRUCTURA-URBANA1.JPG' },
  { title: 'CONSTRUCCIÓN CIVIL', href: '/campos-de-aplicacion/construccion-civil', imgSrc: 'https://tumuro.com/images/CONSTRUCCION-CIVIL1.jpg' },
  { title: 'PROTECCIÓN AMBIENTAL', href: '/campos-de-aplicacion/proteccion-ambiental', imgSrc: 'https://tumuro.com/images/PROTECCION-AMBIENTAL1.jpg' },
  { title: 'INDUSTRIA, PETRÓLEO Y GAS', href: '/campos-de-aplicacion/industria-petroleo-y-gas', imgSrc: 'https://tumuro.com/images/INDUSTRIA,-PETROLEO-Y-GAS1.jpg' },
  { title: 'SECTOR AGRÍCOLA', href: '/campos-de-aplicacion/sector-agricola', imgSrc: 'https://tumuro.com/images/SECTOR-AGRICOLA1.JPG' },
  { title: 'VIAS DE COMUNICACIÓN', href: '/campos-de-aplicacion/vias-de-comunicacion', imgSrc: 'https://tumuro.com/images/VIAS-DE-COMUNICACION1.jpg' },
  { title: 'OBRAS HIDRÁULICAS', href: '/campos-de-aplicacion/obras-hidraulicas', imgSrc: 'https://tumuro.com/images/OBRAS-HIDRAULICAS1.jpg' },
  { title: 'MINERÍA, GEOLOGÍA Y GEOTECNIA', href: '/campos-de-aplicacion/mineria-geologia-y-geotecnia', imgSrc: 'https://tumuro.com/images/MINERIA,-GEOLOGIA-Y-GEOTECNIA1.JPG' },
];

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

const GridCamposDeAplicacion: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-ecogreen-blue mb-2 uppercase">
          CAMPOS DE APLICACIÓN
        </h3>
        <div className="w-full h-1 bg-ecogreen-green mb-12"></div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8" 
          variants={gridContainerVariants} 
          initial="hidden" 
          whileInView="visible" s
          viewport={{ once: true }}
        >
          {applicationFields.map((field) => (
            <motion.div 
              key={field.title} 
              variants={cardVariants} 
              className="group flex flex-col rounded-md shadow-lg overflow-hidden relative h-full bg-white" 
              whileHover={{ y: -8 }}
            >
              <Link to={field.href} className="flex flex-col h-full">
                <div className="h-64 overflow-hidden">
                  <img src={field.imgSrc} alt={field.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-ecogreen-blue py-4 px-4">
                  <h3 className="text-white text-sm font-black uppercase tracking-tighter text-center leading-tight">
                    {field.title.split(',').map((text, i) => (
                      <React.Fragment key={i}>
                        {text}{i === 0 && field.title.includes(',') ? ',' : ''}<br />
                      </React.Fragment>
                    ))}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GridCamposDeAplicacion;
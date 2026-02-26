import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'MUROS DE CONTENCIÓN',
    imageSrc: 'https://tumuro.com/media/banner-services/muros-de-contencion.webp',
    iconSrc: 'https://tumuro.com/media/banner-services/muros-de-contencion-icon.webp',
    color: '#0e306f',
    href: '/muros-de-contencion'
  },
  {
    title: 'CONTROL DE EROSIÓN',
    imageSrc: 'https://tumuro.com/media/banner-services/control-de-erosion.webp',
    iconSrc: 'https://tumuro.com/media/banner-services/control-de-erosion-icon.png',
    color: '#309400',
    href: '/control-de-erosion'
  },
  {
    title: 'VIALIDAD',
    imageSrc: 'https://tumuro.com/media/banner-services/vialidad.webp',
    iconSrc: 'https://tumuro.com/media/banner-services/vialidad-icon.png',
    color: '#f87004',
    href: '/vialidad'
  }
];

const ServiceBanner: React.FC = () => {
  return (
    <section className="bg-white py-12">
      {/* Contenedor principal que agrupa las 3 columnas */}
      <div className="container mx-auto px-4 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.href} className="group block no-underline">
              <motion.div 
                /* MEDIDAS TOTALES: 338.33px de ancho */
                style={{ width: '338.33px' }}
                className="bg-white overflow-hidden shadow-sm"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* 1. IMAGEN: 338.33 x 242.4 px */}
                <div style={{ width: '338.33px', height: '242.4px' }} className="overflow-hidden">
                  <img 
                    src={service.imageSrc} 
                    alt={service.title}
                    /* Sin grayscale, color al 100% */
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* 2. FRANJA DE COLOR: 338.33 x 57.97 px */}
                <header 
                  style={{ 
                    width: '338.33px',
                    height: '57.97px',
                    backgroundColor: service.color,
                    backgroundImage: `url(${service.iconSrc})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '4%', // Según tu CSS de referencia
                    backgroundSize: '45px'    // Ajustado para que quepa en los 57.97px de alto
                  }}
                  className="flex items-center pl-[65px] pr-4 transition-all duration-300 group-hover:brightness-110"
                >
                  <h2 
                    className="text-white uppercase leading-none m-0 font-bold"
                    style={{ 
                      fontFamily: 'GotchaLight, sans-serif',
                      fontSize: '14px',
                      letterSpacing: '1px'
                    }}
                  >
                    {service.title}
                  </h2>
                </header>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
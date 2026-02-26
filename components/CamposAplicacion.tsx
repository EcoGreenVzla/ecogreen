import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { camposData } from '../data/camposAplicacion';

// --- ANIMACIONES TÉCNICAS (EFECTO COMPÁS) ---
const greenCircleVariants: Variants = {
  rest: { opacity: 1 },
  hover: { opacity: 0.4 }
};

const blueCircleVariants: Variants = {
  rest: { pathLength: 0, opacity: 0 },
  hover: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" } 
  }
};

const CamposAplicacion = () => {
  return (
    <section id="featured-wrapper" className="bg-white py-16">
      {/* ESPACIOS LATERALES Y CONTENEDOR CERRADO */}
      <div id="featured" className="max-w-[1200px] mx-auto px-10 lg:px-24">
        
        <h2 className="text-3xl font-[200] text-center text-gray-500 mb-12 tracking-[0.2em] uppercase">
          Campos de Aplicación
        </h2>

        {/* AJUSTE DE COLUMNAS:
            - grid-cols-1: Una sola columna en móviles (Vista vertical).
            - md:grid-cols-4: Cuatro columnas en escritorio (Vista horizontal).
        */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-12">
          {camposData.map((campo) => (
            <motion.div
              key={campo.id}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="flex flex-col items-center group cursor-pointer"
            >
              <Link to={campo.href} className="flex flex-col items-center no-underline w-full">
                
                {/* CONTENEDOR DEL CÍRCULO (120px x 120px) */}
                <div className="relative w-[120px] h-[120px] flex items-center justify-center mb-4">
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <motion.circle
                      cx="50" cy="50" r="45"
                      stroke="#4ba406"
                      strokeWidth="4"
                      fill="transparent"
                      variants={greenCircleVariants}
                    />
                    <motion.circle
                      cx="50" cy="50" r="45"
                      stroke="#0e306f"
                      strokeWidth="5"
                      fill="transparent"
                      strokeLinecap="square"
                      variants={blueCircleVariants}
                    />
                  </svg>
                  
                  <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                    <img 
                      src={campo.icon} 
                      alt={campo.title} 
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* ESTILOS DE FUENTE H3 */}
                <h3 
                  className="uppercase"
                  style={{
                    fontFamily: 'GotchaLight, sans-serif',
                    fontSize: '1em',
                    letterSpacing: '1px',
                    color: '#000',
                    textAlign: 'center',
                    margin: '0 0 1em 0'
                  }}
                >
                  {campo.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CamposAplicacion;
import React from 'react';
import { Link } from 'react-router-dom';

const CtaBanner: React.FC = () => {
  // ============================================================
  // PANEL DE CONTROL DE ESTILOS (TEMA) - ESTÁNDAR 80%
  // ============================================================
  const theme = {
    layout: {
      paddingVertical: 'py-10',
      backgroundColor: 'bg-white',
      maxWidthResponsive: 'w-[99%] md:max-w-[80%]', // REGLA BOXED
    }
  };

  return (
    <section className={`${theme.layout.backgroundColor} ${theme.layout.paddingVertical}`}>
      {/* CONTENEDOR BOXED (MAX-WIDTH 80%) */}
      <div className={`container mx-auto px-4 ${theme.layout.maxWidthResponsive}`}>
        
        {/* ENLACE: Apunta directamente a muros de contención */}
        <Link to="/muros-de-contencion">
          
          <div className="block overflow-hidden cursor-pointer">
            <picture>
              {/* Imagen Mobile: 768px */}
              <source
                media="(max-width: 768px)"
                srcSet="https://tumuro.com/media/banner/BANNER-HOME-mobil.webp"
              />
              {/* Imagen Desktop */}
              <img
                src="https://tumuro.com/media/banner/BANNER-HOME-3.webp"
                alt="Banner Muros de Contención EcoGreen"
                className="w-full h-auto object-cover"
              />
            </picture>
          </div>
          
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
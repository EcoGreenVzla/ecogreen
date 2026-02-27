import React from 'react';
import { Link } from 'react-router-dom';

const CtaBanner: React.FC = () => {
  return (
    <section className="bg-white py-10">
      {/* CONFIGURACIÓN DE DISEÑO:
        - 'max-w-5xl' (1024px): Limita el ancho para centrarlo más hacia adentro.
        - 'px-4': Mantiene un margen de seguridad en dispositivos móviles.
      */}
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* ENLACE: Ahora apunta directamente a muros de contención */}
        <Link to="/muros-de-contencion">
          
          {/* BLOQUE ESTÁTICO:
            - Se eliminó 'motion.div' para quitar el efecto grow y animaciones de entrada.
            - Se eliminaron 'shadow-lg' y 'rounded-lg' (Bordes rectos y sin sombra).
          */}
          <div className="block overflow-hidden cursor-pointer">
            <picture>
              {/* Imagen Mobile: 768px */}
              <source
                media="(max-width: 768px)"
                srcSet="https://tumuro.com/media/banner/BANNER-HOME-mobil.webp"
              />
              {/* Imagen Desktop: Ruta absoluta */}
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
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

// --- CONFIGURACIÓN DE DATOS (Rutas Absolutas) ---
const sistemasFlexibles = [
  { title: 'MUROS DE TIERRA REFORZADA', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-tierra-reforzada', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-tierra-reforzada.webp' },
  { title: 'MUROS DE GAVIÓN', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-gavion.webp' },
  { title: 'MUROS DE GAVIÓN REFORZADOS', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-gavion-reforzados.webp' },
  { title: 'MUROS MIXTOS', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-mixtos', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-mixtos.webp' },
  { title: 'REFUERZO DE TALUDES Y TERRAPLENES', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/refuerzo-de-taludes-y-terraplenes', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/refuerzo-de-taludes-y-terraplenes.webp' },
];

const GridSistemasDeContencionFlexibles: React.FC = () => {

  // ============================================================
  // PANEL DE CONTROL DE ESTILOS (THEME)
  // ============================================================
  const theme = {
    layout: {
      paddingVertical: 'py-16',
      backgroundColor: '#FFFFFF',
      maxWidth: '1024px', // DISEÑO BOXED CONSOLIDADO
    },
    headerSection: {
      titleColor: '#0E306F',
      lineColor: '#4BA406',
      fontSize: 'text-3xl',
      fontWeight: 'font-bold',
    },
    card: {
      gap: 'gap-8',
      columns: 'grid-cols-1 md:grid-cols-3', // 3 columnas (4u en HTML original)
      borderRadius: 'rounded-none',
      imageHeight: 'h-64',
    },
    footer: {
      baseColor: '#0E306F',   // Azul Principal (rgb 14 48 111)
      hoverColor: '#0B76BC',  // Azul solicitado para Hover
      padding: 'py-6 px-4',
      textColor: '#FFFFFF',
      fontSize: 'text-lg',
      fontWeight: 'font-bold', // TEXTO EN BOLD
    }
  };

  return (
    <section className={`${theme.layout.paddingVertical}`} style={{ backgroundColor: theme.layout.backgroundColor }}>
      {/* 1. CONTENEDOR BOXED (Centrado a 1024px) */}
      <div className="container mx-auto px-6" style={{ maxWidth: theme.layout.maxWidth }}>
        
        {/* Título de la Sección */}
        <h3 className={`${theme.headerSection.fontSize} ${theme.headerSection.fontWeight} uppercase mb-2`} style={{ color: theme.headerSection.titleColor }}>
          Sistemas de Contención Flexibles
        </h3>
        <div className="w-full h-1 mb-12" style={{ backgroundColor: theme.headerSection.lineColor }}></div>

        {/* 2. GRID DE 3 COLUMNAS (Estilo 4u) */}
        <div className={`grid ${theme.card.columns} ${theme.card.gap}`}>
          {sistemasFlexibles.map((sys) => (
            <div 
              key={sys.title} 
              className={`flex flex-col ${theme.card.borderRadius} overflow-hidden h-full bg-white group`}
            >
              <Link to={sys.href} className="flex flex-col h-full relative">
                
                {/* Contenedor Imagen (Estático, sin zoom) */}
                <div className={`${theme.card.imageHeight} overflow-hidden`}>
                  <img 
                    src={sys.imgSrc} 
                    alt={sys.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* 3. BLOQUE DE TEXTO (Cambio de Azul a Azul) */}
                <div 
                  className={`flex items-center justify-center ${theme.footer.padding} transition-colors duration-300`}
                  style={{ backgroundColor: theme.footer.baseColor }}
                  // Lógica de cambio de color manual para Hover
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = theme.footer.hoverColor)}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = theme.footer.baseColor)}
                >
                  {/* 4. TEXTO BOLD CENTRADO */}
                  <h2 
                    className={`${theme.footer.textColor} ${theme.footer.fontSize} ${theme.footer.fontWeight} uppercase text-center leading-tight tracking-tight`}
                  >
                    {sys.title}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridSistemasDeContencionFlexibles;
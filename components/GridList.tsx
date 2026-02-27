import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { gridListData } from '../data/gridListData';

interface GridListProps {
  id: string; 
}

// Variantes de entrada (opacidad y posición inicial)
const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 } 
  },
};

const GridList: React.FC<GridListProps> = ({ id }) => {
  const data = gridListData[id];

  // ============================================================
  // PANEL DE CONTROL DE ESTILOS (THEME)
  // ============================================================
  const theme = {
    layout: {
      paddingVertical: 'py-16',
      backgroundColor: 'bg-white',
      // MANTENIDO: AJUSTE BOXED RESPONSIVO
      maxWidthResponsive: 'w-[99%] md:max-w-[80%]', 
    },
    header: {
      fontSize: 'text-3xl',
      fontWeight: 'font-bold',
      color: 'text-ecogreen-blue',
      lineColor: 'bg-ecogreen-green',
      marginBottom: 'mb-12',
    },
    grid: {
      gap: 'gap-8',
      columns: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    },
    card: {
      shadow: 'shadow-lg',
      borderRadius: 'rounded-none',
      // MANTENIDO: MEDIDAS EXACTAS
      imageHeight: '220px', 
      // MANTENIDO: COLORES Y TEXTO
      footerBg: '#0E306F',
      footerHoverBg: '#0B76BC',
      footerPadding: 'px-4 py-3',
      titleSize: 'text-[1.3em]',
      titleColor: 'text-white',
      fontWeight: 'font-bold',
    }
  };

  if (!data) return null;

  return (
    <section className={`${theme.layout.paddingVertical} ${theme.layout.backgroundColor}`}>
      
      {/* CONTENEDOR BOXED RESPONSIVO */}
      <div className={`container mx-auto px-6 ${theme.layout.maxWidthResponsive}`}>
        
        <h3 className={`${theme.header.fontSize} ${theme.header.fontWeight} ${theme.header.color} mb-2 uppercase`}>
          {data.title}
        </h3>
        
        <div className={`w-full h-1 ${theme.header.lineColor} ${theme.header.marginBottom}`}></div>
        
        <motion.div 
          className={`grid ${theme.grid.columns} ${theme.grid.gap}`}
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {data.items.map((item, index) => (
            <motion.div 
              key={`${item.title}-${index}`} 
              variants={cardVariants}
              className={`group flex flex-col ${theme.card.borderRadius} ${theme.card.shadow} overflow-hidden bg-white border border-gray-100`}
            >
              {/* ENLAZADO ENVOLVENTE: 
                Trasladamos los eventos de hover aquí para que afecten al footer 
                cuando el cursor esté sobre la imagen o el texto.
              */}
              <Link 
                to={item.href} 
                className="flex flex-col h-full"
                onMouseEnter={(e) => {
                  const footer = e.currentTarget.querySelector('.footer-bg-block') as HTMLElement;
                  if (footer) footer.style.backgroundColor = theme.card.footerHoverBg;
                }}
                onMouseLeave={(e) => {
                  const footer = e.currentTarget.querySelector('.footer-bg-block') as HTMLElement;
                  if (footer) footer.style.backgroundColor = theme.card.footerBg;
                }}
              >
                
                <div style={{ height: theme.card.imageHeight }} className="w-full overflow-hidden">
                  <img 
                    src={item.imgSrc} 
                    alt={item.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                {/* FOOTER BLOCK: 
                  Se le añade la clase 'footer-bg-block' para poder identificarlo 
                  desde el evento de hover del Link superior.
                */}
                <div 
                  className={`footer-bg-block ${theme.card.footerPadding} flex-grow flex items-center justify-center transition-colors duration-300`}
                  style={{ backgroundColor: theme.card.footerBg }}
                >
                  <h3 className={`font-gotcha ${theme.card.titleSize} ${theme.card.fontWeight} tracking-[0px] m-0 ${theme.card.titleColor} text-center leading-tight uppercase`}>
                    <span dangerouslySetInnerHTML={{ __html: item.title }} />
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

export default GridList;
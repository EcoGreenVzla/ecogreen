import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextoData } from '../data/textosData';

interface Props {
  data: TextoData | undefined;
}

const TextoCollapsable: React.FC<Props> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // ============================================================
  // PANEL DE CONTROL DE ESTILOS (SOPORTA MOBILE Y DESKTOP)
  // ============================================================
  const theme = {
    layout: {
      backgroundColor: '#FFFFFF',
      paddingVertical: 'py-10 md:py-20',
      maxWidth: '1080px', 
    },
    header: {
      titleColor: '#0E306F',
      titleFont: 'font-bold',
      fontSizeMobile: 'text-2xl',
      fontSizeDesktop: 'md:text-4xl',
      letterSpacing: 'tracking-wide',
      iconSize: 'w-12 h-12 md:w-16 md:h-16',
      iconMargin: 'mr-4 md:mr-6',
      marginBottom: 'mb-6 md:mb-8',
    },
    content: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 300, 
      lineHeight: '2em', // Interlineado solicitado
      color: '#555555',
      fontSizeIntro: 'text-lg md:text-xl',
      fontSizeExpanded: 'text-base md:text-lg',
      borderTop: 'border-t border-gray-100',
      paddingTop: 'pt-6',
      marginTop: 'mt-6',
    },
    button: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 300, // Estilo Light/Normal
      fontSize: '14px',
      textTransform: 'uppercase' as const,
      textColor: '#FFFFFF',
      
      // CONFIGURACIÓN DE COLORES INVERTIDOS (Tailwind brackets)
      // Móvil: Fondo Verde (#4BA406), Hover Azul (#0E306F)
      // Desktop (md): Fondo Azul (#0E306F), Hover Verde (#4BA406)
      colorsResponsive: "bg-[#4BA406] hover:bg-[#0E306F] md:bg-[#0E306F] md:hover:bg-[#4BA406]",
      
      // DIMENSIONES
      widthMobile: 'w-full', 
      widthDesktop: 'md:w-auto',
      paddingX: 'md:px-10', 
      paddingY: 'py-1', // Aumentado para que el redondeo 'full' luzca bien
      
      // BORDES: 'rounded-full' para el radio máximo (estilo píldora)
      borderRadius: 'rounded-full', 
      
      marginTop: 'mt-10',
    }
  };

  if (!data) return null;

  return (
    <section className={`${theme.layout.paddingVertical}`} style={{ backgroundColor: theme.layout.backgroundColor }}>
      {/* CONTENEDOR BOXED Y CENTRADO */}
      <div className="container mx-auto px-6 flex justify-center">
        <div style={{ maxWidth: theme.layout.maxWidth }} className="w-full">
          
          {/* CABECERA: ICONO + TÍTULO */}
          <div className={`flex items-center ${theme.header.marginBottom}`}>
            {data.iconSrc && (
              <img 
                src={data.iconSrc} 
                alt={data.title} 
                className={`${theme.header.iconSize} ${theme.header.iconMargin} object-contain`} 
              />
            )}
            <h2 
              className={`${theme.header.fontSizeMobile} ${theme.header.fontSizeDesktop} ${theme.header.titleFont} ${theme.header.letterSpacing} uppercase`}
              style={{ color: theme.header.titleColor }}
            >
              {data.title}
            </h2>
          </div>

          {/* DESCRIPCIÓN INTRODUCTORIA (p con line-height 2em) */}
          <div 
            className={`${theme.content.fontSizeIntro}`}
            style={{ 
              fontFamily: theme.content.fontFamily, 
              fontWeight: theme.content.fontWeight,
              lineHeight: theme.content.lineHeight,
              color: theme.content.color
            }}
          >
            {data.introContent}
          </div>

          {/* CONTENIDO EXPANDIBLE */}
          {data.expandedContent && (
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div 
                    className={`${theme.content.fontSizeExpanded} ${theme.content.borderTop} ${theme.content.paddingTop} ${theme.content.marginTop}`}
                    style={{ 
                      fontFamily: theme.content.fontFamily, 
                      fontWeight: theme.content.fontWeight,
                      lineHeight: theme.content.lineHeight,
                      color: theme.content.color
                    }}
                  >
                    {data.expandedContent}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {/* BOTÓN "LEER MÁS" */}
          {data.expandedContent && (
            <div className={`${theme.button.marginTop}`}>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`
                  ${theme.button.widthMobile} 
                  ${theme.button.widthDesktop} 
                  ${theme.button.paddingX} 
                  ${theme.button.paddingY} 
                  ${theme.button.borderRadius} 
                  ${theme.button.colorsResponsive}
                  text-white transition-all duration-300 focus:outline-none
                `}
                style={{
                  fontSize: theme.button.fontSize,
                  fontFamily: theme.button.fontFamily,
                  fontWeight: theme.button.fontWeight,
                  textTransform: theme.button.textTransform,
                }}
              >
                {isExpanded ? 'Cerrar ▲' : 'Leer Mas ▼'}
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default TextoCollapsable;
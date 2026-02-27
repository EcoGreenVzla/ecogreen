import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import XIcon from './icons/XIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import { NavItemType } from '../types';

interface NavProps {
  items: NavItemType[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<NavProps> = ({ items, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  // Estado para controlar qué sección del acordeón está abierta (única)
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  // ============================================================
  // PANEL DE CONTROL DE ESTILOS (TEMA DINÁMICO)
  // ============================================================
  const theme = {
    desktop: {
      container: {
        backgroundColor: '#0E306F',
        color: '#FFFFFF',
        fontSize: '9.5px',
        fontFamily: "'Open Sans', sans-serif",
        textTransform: 'uppercase' as const,
      }
    },
    mobile: {
      panel: {
        position: 'fixed' as const,
        top: 0,
        left: 0,
        height: '100%',
        width: '80%',            // Ancho según referencia HTML
        maxWidth: '314px',       // Máximo según referencia HTML
        backgroundColor: '#0E306F',
        color: '#FFFFFF',
        zIndex: 10000,           // Blindaje por encima de todo
        
        /* SCROLL NAVIGABLE: 
           'overflowY: auto' permite que el menú sea navegable verticalmente 
           si los elementos exceden la altura de la pantalla. 
        */
        overflowY: 'auto' as const, 
        
        fontFamily: "'Open Sans', sans-serif",
        boxShadow: '10px 0 30px rgba(0,0,0,0.5)',
        transition: 'transform 0.25s ease-in-out',
      },
      links: {
        fontSize: '12px',       // Tamaño ajustado para legibilidad móvil
        fontWeight: 'normal' as const,
        textTransform: 'uppercase' as const,
        letterSpacing: '1.5px',
        paddingY: '8px',         // Gap reducido (Espaciado vertical)
        paddingX: '20px',        // Espaciado lateral base
        indentSize: 15,          // Sangría por nivel de profundidad (Acordeón)
        colorGreen: '#5aef00',
        colorWhite: '#FFFFFF',
      },
      backdrop: {
        position: 'fixed' as const,
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 9999,
        backdropFilter: 'blur(2px)',
      },
      iconSize: 'w-3 h-3',
    }
  };

  /**
   * SCRIPT DE LIMPIEZA DE ETIQUETAS BR
   * Esta función detecta cualquier etiqueta <br> y la reemplaza por un espacio
   * para evitar saltos de línea indeseados en el menú móvil.
   */
  const cleanLabel = (text: string) => {
    return text.replace(/<br\s*\/?>/gi, ' ');
  };

  const toggleAccordion = (label: string) => {
    setActiveAccordion(activeAccordion === label ? null : label);
  };

  const renderAccordionItems = (navItems: NavItemType[], depth = 0) => {
    return navItems.map((item, index) => {
      const hasChildren = item.children && item.children.length > 0;
      const isOpen = activeAccordion === item.label;

      return (
        <li key={`${depth}-${index}`} className="w-full list-none">
          <div className="flex items-center justify-between border-b border-white/5">
            <Link
              to={hasChildren ? '#' : (item.href || '#')}
              onClick={(e) => {
                if (hasChildren) {
                  e.preventDefault();
                  toggleAccordion(item.label);
                } else {
                  setIsMobileMenuOpen(false); // Cierre automático tras navegación
                }
              }}
              style={{
                fontSize: theme.mobile.links.fontSize,
                fontWeight: theme.mobile.links.fontWeight,
                paddingTop: theme.mobile.links.paddingY,
                paddingBottom: theme.mobile.links.paddingY,
                paddingLeft: `${(depth * theme.mobile.links.indentSize) + 20}px`,
                color: isOpen ? theme.mobile.links.colorGreen : theme.mobile.links.colorWhite,
                letterSpacing: theme.mobile.links.letterSpacing,
                fontFamily: theme.mobile.panel.fontFamily,
              }}
              className="flex-grow block transition-colors hover:text-[#5aef00]"
            >
              {cleanLabel(item.label)}
            </Link>

            {hasChildren && (
              <button 
                onClick={() => toggleAccordion(item.label)}
                className={`pr-5 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
              >
                <ChevronRightIcon className={`${theme.mobile.iconSize} text-white/40`} />
              </button>
            )}
          </div>

          {/* SUBMENÚ COLAPSABLE (ACORDEÓN) */}
          {hasChildren && (
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="bg-black/10">
                {renderAccordionItems(item.children!, depth + 1)}
              </ul>
            </div>
          )}
        </li>
      );
    });
  };

  return (
    <>
      {/* 1. NAVEGACIÓN DESKTOP */}
      <nav className="hidden lg:flex relative" style={theme.desktop.container}>
        <div className="container mx-auto flex justify-center items-stretch gap-x-2">
          {items.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </div>
      </nav>

      {/* 2. MENÚ MÓVIL OFF-CANVAS */}
      <div 
        style={theme.mobile.backdrop}
        className={`transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <div 
        style={{
          ...theme.mobile.panel,
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)'
        }}
        className="lg:hidden"
      >
        {/* Cabecera del Panel */}
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <span className="text-[#5aef00] font-bold text-xs tracking-[2px] uppercase">EcoGreen Menu</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-white/5 rounded-md">
            <XIcon className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Lista del Acordeón Recursivo */}
        <nav className="pb-20">
          <ul className="flex flex-col p-0 m-0">
            {renderAccordionItems(items)}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
import React, { useState } from 'react';
import { NavItemType } from '../types';
import Dropdown from './Dropdown';
import MegaMenuCasos from './MegaMenuCasos';
import ChevronDownIcon from './icons/ChevronDownIcon';
import { Link, useLocation } from 'react-router-dom';

const checkIsActive = (item: NavItemType, currentPath: string): boolean => {
  if (item.href === currentPath) return true;
  if (item.children) {
    return item.children.some(child => checkIsActive(child, currentPath));
  }
  return false;
};

const NavItem: React.FC<{ item: NavItemType; isMobile?: boolean }> = ({ item, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hasChildren = !!item.children || item.isMegaMenu;
  const location = useLocation();
  const isActive = checkIsActive(item, location.pathname);

  // Colores corporativos (Verde Ecogreen y Azul Marino)
  const activeClasses = isActive 
    ? 'bg-[#2A9648] text-white' 
    : 'bg-[#0E306F] hover:bg-[#2A9648] text-white';

  /**
   * MODIFICACIÓN DE ALTURA:
   * Para aumentar el alto del menú, ajustamos 'pt' y 'pb'.
   * Valores anteriores: pt-[10pt] / pb-[7.5pt]
   * Valores nuevos (Aumentados): pt-[18pt] / pb-[15pt]
   */
  const desktopItemClasses = `
    flex items-center justify-center 
    transition-colors duration-200 
    ${activeClasses}
    ${!item.isMegaMenu ? 'relative' : ''}
    cursor-pointer
    pt-[12pt] px-[12.5pt] pb-[10pt]
  `;

  if (isMobile) {
    return (
      <li className={`border-b border-gray-700 ${isActive ? 'bg-[#2A9648]' : ''}`}>
        <div className="flex justify-between items-center py-3 px-2">
          {/* TAMAÑO FUENTE MÓVIL: text-sm */}
          <Link to={item.href} className="uppercase font-semibold text-sm flex-grow">
            <span dangerouslySetInnerHTML={{ __html: item.label }} />
          </Link>
          {hasChildren && (
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              <ChevronDownIcon className={`h-4 w-4 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>
        {isOpen && hasChildren && (
          <div className="pl-4 pb-2 bg-[#0E306F]">
            {item.children && <Dropdown items={item.children} isMobile />}
          </div>
        )}
      </li>
    );
  }

  return (
    <div 
      className={desktopItemClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link 
        to={item.href} 
        /* CONTROL DE FUENTE PRINCIPAL: 11pt.
           'leading-[1.15em]' asegura que el texto de dos líneas no se pegue.
        */
        className="text-[11pt] leading-[1.15em] tracking-[1px] text-white uppercase text-center block"
      >
        <span dangerouslySetInnerHTML={{ __html: item.label }} />
      </Link>
      
      {/* El Dropdown se posiciona al final de la altura del contenedor ('top-full') */}
      {isHovered && hasChildren && (
        <div className={`absolute top-full z-50 pt-0 ${item.isMegaMenu ? 'left-0 right-0' : 'left-0'}`}>
          {item.isMegaMenu ? <MegaMenuCasos /> : <Dropdown items={item.children || []} />}
        </div>
      )}
    </div>
  );
};

export default NavItem;
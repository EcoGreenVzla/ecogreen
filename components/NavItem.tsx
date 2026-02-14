import React, { useState, useRef } from 'react';
import { NavItemType } from '../types';
import Dropdown from './Dropdown';
import MegaMenuCasos from './MegaMenuCasos';
import ChevronDownIcon from './icons/ChevronDownIcon';
import { Link, useLocation } from 'react-router-dom';

/**
 * GUÍA DE AJUSTES (Sincronizado con Dropdown a 10pt):
 * text-[10pt]  -> font-size: Igualado al tamaño de los submenús.
 * pt-[10pt]    -> Padding Top: 1em (ahora basado en 10pt).
 * px-[12.5pt]  -> Padding Horizontal: 1.25em (ahora basado en 10pt).
 * pb-[7.5pt]   -> Padding Bottom: 0.75em (ahora basado en 10pt).
 */

interface NavItemProps {
  item: NavItemType;
  isMobile?: boolean;
}

const checkIsActive = (item: NavItemType, currentPath: string): boolean => {
  if (item.href === currentPath) return true;
  if (item.children) {
    return item.children.some(child => checkIsActive(child, currentPath));
  }
  return false;
};

const NavItem: React.FC<NavItemProps> = ({ item, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  // Eliminamos timeoutRef ya que no se usará para el cierre instantáneo
  const hasChildren = !!item.children || item.isMegaMenu;
  
  const location = useLocation();
  const isActive = checkIsActive(item, location.pathname);

  const handleToggle = () => {
    if (isMobile && hasChildren) {
      setIsOpen(!isOpen);
    }
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true); // Apertura instantánea
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Cierre instantáneo (eliminado el delay de 400ms)
  };

  const activeClasses = isActive 
    ? 'bg-[#2A9648] text-white' 
    : 'bg-[#0E306F] hover:bg-[#2A9648] text-white';

  const desktopItemClasses = `
    inline-block transition-colors duration-200 
    ${activeClasses}
    ${!item.isMegaMenu ? 'relative' : ''}
    cursor-pointer
    pt-[10pt] px-[12.5pt] pb-[7.5pt]
  `;

  if (isMobile) {
    return (
      <li className={`border-b border-gray-700 ${isActive ? 'bg-[#2A9648] text-white' : ''}`}>
        <div className="flex justify-between items-center py-3 px-2">
          <Link to={item.href} className="uppercase font-semibold text-sm flex-grow">
            <span dangerouslySetInnerHTML={{ __html: item.label }} />
          </Link>
          {hasChildren && (
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 -mr-2">
              <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>
        {isOpen && hasChildren && (
          <div className="pl-4 pb-2 bg-[#0E306F]">
            {item.children && <Dropdown items={item.children} isMobile />}
            {item.isMegaMenu && <Link to={item.href} className="block py-2 text-xs text-gray-300">Ver Casos de Obras</Link>}
          </div>
        )}
      </li>
    );
  }

  return (
    <div 
      className={desktopItemClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Se eliminó el comentario de la línea 86 que causaba el error de compilación */}
      <Link 
        to={item.href} 
        className="text-[10pt] leading-[1.15em] tracking-[1px] text-white uppercase text-center block"
      >
        <span dangerouslySetInnerHTML={{ __html: item.label }} />
      </Link>
      
      {isHovered && hasChildren && (
        <div className={`absolute top-full z-50 pt-0 ${item.isMegaMenu ? 'left-0 right-0' : 'left-0'}`}>
          {item.isMegaMenu ? <MegaMenuCasos /> : <Dropdown items={item.children || []} />}
        </div>
      )}
    </div>
  );
};

export default NavItem;
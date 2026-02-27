import React, { useState } from 'react';
import { NavItemType } from '../types';
import Dropdown from './Dropdown';
import MegaMenuCasos from './MegaMenuCasos';
import { Link, useLocation } from 'react-router-dom';

const checkIsActive = (item: NavItemType, currentPath: string): boolean => {
  if (item.href === currentPath) return true;
  if (item.children) {
    return item.children.some(child => checkIsActive(child, currentPath));
  }
  return false;
};

const NavItem: React.FC<{ item: NavItemType; isMobile?: boolean }> = ({ item, isMobile = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasChildren = !!item.children || item.isMegaMenu;
  const location = useLocation();
  const isActive = checkIsActive(item, location.pathname);

  const activeClasses = isActive 
    ? 'bg-[#2A9648] text-white' 
    : 'bg-[#0E306F] hover:bg-[#2A9648] text-white';

  const linkClasses = `
    flex items-center justify-center 
    transition-colors duration-200 
    ${activeClasses}
    cursor-pointer
    pt-[12pt] px-[12.5pt] pb-[10pt]
    w-full h-full
    text-[11pt] leading-[1.15em] tracking-[1px] uppercase text-center
  `;

  if (isMobile) {
    return (
      <li className={`border-b border-gray-700 ${isActive ? 'bg-[#2A9648]' : ''}`}>
        <Link to={item.href} className="block py-3 px-4 uppercase font-semibold text-sm text-white">
          <span dangerouslySetInnerHTML={{ __html: item.label }} />
        </Link>
      </li>
    );
  }

  return (
    <div 
      /* CRÍTICO: Solo usamos 'relative' si NO es un Mega Menú. 
         Si es Mega Menú, dejamos que se posicione respecto al Nav principal.
      */
      className={`h-full flex items-stretch ${!item.isMegaMenu ? 'relative' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={item.href} className={linkClasses}>
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
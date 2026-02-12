import React, { useState, useRef } from 'react';
import { NavItemType } from '../types';
import Dropdown from './Dropdown';
import MegaMenuCasos from './MegaMenuCasos';
import ChevronDownIcon from './icons/ChevronDownIcon';
import { Link, useLocation } from 'react-router-dom';

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
  const timeoutRef = useRef<number | null>(null);
  const hasChildren = !!item.children || item.isMegaMenu;
  
  const location = useLocation();
  const isActive = checkIsActive(item, location.pathname);

  const handleToggle = () => {
    if (isMobile && hasChildren) {
      setIsOpen(!isOpen);
    }
  };
  
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsHovered(false);
    }, 400); 
  };

  const activeClasses = isActive 
    ? 'bg-[#2A9648] text-white' 
    : 'bg-ecogreen-blue hover:bg-[#2A9648] text-white';

  // CAMBIO REALIZADO: Aumentamos de 'py-2' a 'py-6' para mayor grosor
  const desktopItemClasses = `
    px-4 py-4 transition-colors duration-200 
    ${activeClasses}
    ${!item.isMegaMenu ? 'relative' : ''}
    flex items-center justify-center h-full cursor-pointer
  `;

  const mobileItemClasses = `border-b border-gray-700 ${isActive ? 'bg-[#2A9648] text-white' : ''}`;

  if (isMobile) {
    return (
      <li className={mobileItemClasses}>
        <div className="flex justify-between items-center py-3 px-2">
          <Link to={item.href} className="uppercase font-semibold text-sm flex-grow">
            {item.label}
          </Link>
          {hasChildren && (
            <button 
              onClick={handleToggle}
              className="p-2 -mr-2"
              aria-label={`Toggle submenu for ${item.label}`}
              aria-expanded={isOpen}
            >
              <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>
        {isOpen && hasChildren && (
          <div className="pl-4 pb-2 bg-ecogreen-blue">
            {item.children && <Dropdown items={item.children} isMobile />}
            {item.isMegaMenu && <Link to={item.href} className="block py-2 text-sm text-gray-300 hover:text-white">Ver Casos de Obras</Link>}
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
      <Link 
        to={item.href} 
        className="flex items-center justify-center h-full w-full whitespace-pre-line text-center leading-tight"
      >
        {item.label}
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
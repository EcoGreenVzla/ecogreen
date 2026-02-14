import React, { useState } from 'react';
import { NavItemType } from '../types';
import ChevronDownIcon from './icons/ChevronDownIcon';
import { Link, useLocation } from 'react-router-dom';

const checkIsActive = (item: NavItemType, currentPath: string): boolean => {
  if (item.href === currentPath) return true;
  if (item.children) {
    return item.children.some(child => checkIsActive(child, currentPath));
  }
  return false;
};

const DesktopDropdownItem: React.FC<{ item: NavItemType }> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isActive = checkIsActive(item, location.pathname);

  const activeClasses = isActive ? 'bg-[#2A9648] text-white' : 'text-white hover:bg-[#2A9648]';

  return (
    <li className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link
        to={item.href}
        /**
         * MODIFICACIÓN PARA ANCHO AUTOMÁTICO:
         * - 'whitespace-nowrap': Obliga a que el texto permanezca en una sola línea, 
         * sin importar el ancho del contenedor.
         * - Se mantiene 'text-[11pt]' y los paddings proporcionales 'px-[1.25em]' 'py-[0.8em]'.
         */
        className={`flex justify-between items-center px-[1.25em] py-[0.8em] text-[11pt] leading-[1.15em] tracking-[1px] transition-colors duration-200 whitespace-nowrap ${activeClasses}`}
      >
        {/* Sincronizado con NavItem para interpretar etiquetas HTML como <br> si existieran */}
        <span dangerouslySetInnerHTML={{ __html: item.label }} />
        {item.children && <ChevronDownIcon className="ml-4 h-4 w-4 rotate-[-90deg]" />}
      </Link>
      
      {isHovered && item.children && (
          <div className="absolute top-0 left-full w-auto z-20">
             <Dropdown items={item.children} />
          </div>
      )}
    </li>
  );
};

const MobileDropdownItem: React.FC<{ item: NavItemType }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = checkIsActive(item, location.pathname);

  return (
    <li>
      <div className={`flex justify-between items-center py-2 px-2 ${isActive ? 'text-[#2A9648] font-bold' : 'text-gray-300 hover:text-white'}`} onClick={() => item.children && setIsOpen(!isOpen)}>
        {/* CONTROL DE FUENTE DROPDOWN MÓVIL: 9pt */}
        <Link to={item.href} className="text-[9pt] flex-grow">
          <span dangerouslySetInnerHTML={{ __html: item.label }} />
        </Link>
        {item.children && <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
      </div>
      {isOpen && item.children && (
        <div className="pl-4 border-l border-gray-600 ml-2">
          <Dropdown items={item.children} isMobile />
        </div>
      )}
    </li>
  );
};

const Dropdown: React.FC<{ items: NavItemType[]; isMobile?: boolean }> = ({ items, isMobile = false }) => {
  if (isMobile) return <ul className="space-y-1">{items.map((item, i) => <MobileDropdownItem key={i} item={item} />)}</ul>;
  
  return (
    /**
     * MODIFICACIÓN DE CONTENEDOR:
     * - 'w-max': Permite que el contenedor azul se estire horizontalmente según el hijo más ancho.
     * - 'min-w-[260px]': Mantenemos un ancho mínimo para que el diseño no se vea colapsado con textos cortos.
     */
    <div className="bg-[#0E306F] shadow-lg rounded-b-md w-max min-w-[260px]">
      <ul className="py-2">
        {items.map((item, i) => <DesktopDropdownItem key={i} item={item} />)}
      </ul>
    </div>
  );
};

export default Dropdown;
import React, { useState, useRef } from 'react';
import { NavItemType } from '../types';
import ChevronDownIcon from './icons/ChevronDownIcon';
import { Link, useLocation } from 'react-router-dom';

/**
 * PROPS DEL COMPONENTE
 * items: Lista de enlaces del submenú.
 * isMobile: Determina si el renderizado es para el menú hamburguesa.
 */
interface DropdownProps {
  items: NavItemType[];
  isMobile?: boolean;
}

/**
 * FUNCIÓN DE UTILIDAD: checkIsActive
 * Revisa si la ruta actual coincide con el ítem o alguno de sus hijos.
 */
const checkIsActive = (item: NavItemType, currentPath: string): boolean => {
  if (item.href === currentPath) return true;
  if (item.children) {
    return item.children.some(child => checkIsActive(child, currentPath));
  }
  return false;
};

// --- DesktopDropdownItem ---
const DesktopDropdownItem: React.FC<{ item: NavItemType }> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const hasChildren = !!item.children;
  const location = useLocation();
  const isActive = checkIsActive(item, location.pathname);

  // Apertura y cierre instantáneo al entrar/salir el mouse
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Estilo visual según estado activo o hover
  const activeClasses = isActive 
    ? 'bg-[#2A9648] text-white' 
    : 'text-white hover:bg-[#2A9648]';

  return (
    <li 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={item.href}
        className={`flex justify-between items-center px-4 py-3 text-base tracking-wider transition-colors duration-200 ${activeClasses}`}
      >
        {/* dangerouslySetInnerHTML permite leer etiquetas como <br> desde la data */}
        <span dangerouslySetInnerHTML={{ __html: item.label }} />
        {hasChildren && <ChevronDownIcon className="h-4 w-4 rotate-[-90deg]" />}
      </Link>
      
      {/* Recursividad para sub-menús laterales si existen */}
      {isHovered && hasChildren && (
          <div className="absolute top-0 left-full w-auto z-20">
             <Dropdown items={item.children || []} />
          </div>
      )}
    </li>
  );
};

// --- MobileDropdownItem ---
const MobileDropdownItem: React.FC<{ item: NavItemType }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = !!item.children;
  const location = useLocation();
  const isActive = checkIsActive(item, location.pathname);

  return (
    <li>
      <div 
        className={`flex justify-between items-center py-2 px-2 ${isActive ? 'text-[#2A9648] font-bold' : 'text-gray-300 hover:text-white'}`}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {/* Tamaño de texto reducido para jerarquía móvil */}
        <Link to={item.href} className="text-xs flex-grow">
          {item.label}
        </Link>
        {hasChildren && <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
      </div>
      {isOpen && hasChildren && (
        <div className="pl-4 border-l border-gray-600 ml-2">
          <Dropdown items={item.children} isMobile />
        </div>
      )}
    </li>
  );
};

const Dropdown: React.FC<DropdownProps> = ({ items, isMobile = false }) => {
  if (isMobile) {
    return (
      <ul className="space-y-1">
        {items.map((subItem, index) => (
          <MobileDropdownItem key={index} item={subItem} />
        ))}
      </ul>
    );
  }
  
  return (
    <div className="bg-[#0E306F] shadow-lg rounded-b-md min-w-[260px]">
      <ul className="py-2">
        {items.map((subItem, index) => (
          <DesktopDropdownItem key={index} item={subItem} />
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
import React, { useState, useRef } from 'react';
import { NavItemType } from '../types';
import Dropdown from './Dropdown';
import MegaMenuCasos from './MegaMenuCasos';
import ChevronDownIcon from './icons/ChevronDownIcon';
import { Link } from 'react-router-dom';
// NOTA: Eliminamos las importaciones de framer-motion que causaban el bug

interface NavItemProps {
  item: NavItemType;
  isMobile?: boolean;
  isFirst?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ item, isMobile = false, isFirst = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const hasChildren = !!item.children || item.isMegaMenu;

  const handleToggle = () => {
    if (isMobile && hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  // Lógica: Entra el mouse -> Se abre INMEDIATAMENTE
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsHovered(true);
  };

  // Lógica: Sale el mouse -> Espera 400ms (casi medio segundo) antes de cerrar
  // Esto evita que se cierre si pasas el mouse rápido por el borde
  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsHovered(false);
    }, 400);
  };

  // Aquí controlas la separación de los botones (px-8)
  // Aumentamos el padding lateral para que el menú se vea "más ancho"
  const desktopItemClasses = `
  px-12 py-4 transition-colors duration-200 
  ${isFirst ? 'bg-ecogreen-green' : 'bg-ecogreen-blue'}
  hover:bg-ecogreen-green
  flex items-center h-full cursor-pointer
`;

  const mobileItemClasses = `border-b border-gray-700`;

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
          <div className="pl-4 pb-2">
            {item.children && <Dropdown items={item.children} isMobile />}
            {item.isMegaMenu && <Link to={item.href} className="block py-2 text-sm text-gray-300">Ver Casos de Obras</Link>}
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
      <Link to={item.href} className="flex items-center h-full w-full">
        {item.label}
        {hasChildren && <ChevronDownIcon className="h-4 w-4 ml-2" />}
      </Link>

      {/* SOLUCIÓN: Renderizado condicional simple (&&).
        Sin animaciones, sin AnimatePresence, sin motion.div.
        Si isHovered es true, aparece. Si es false, desaparece. 
        Esto elimina el bug del "cuadro azul vacío".
      */}
      {isHovered && hasChildren && (
        <div className={`absolute top-full z-50 pt-0 ${item.isMegaMenu ? 'left-0 right-0' : 'left-0'}`}>
          {item.isMegaMenu ? <MegaMenuCasos /> : <Dropdown items={item.children || []} />}
        </div>
      )}
    </div>
  );
};

export default NavItem;
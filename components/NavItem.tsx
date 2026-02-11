
import React, { useState, useRef } from 'react';
import { NavItemType } from '../types';
import Dropdown from './Dropdown';
import MegaMenuCasos from './MegaMenuCasos';
import ChevronDownIcon from './icons/ChevronDownIcon';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NavItemProps {
  item: NavItemType;
  isMobile?: boolean;
  isFirst?: boolean;
}

const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -5,
    transition: {
      duration: 0.30,
     
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.30,
    
    }
  }
};

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
  
  const handleHoverStart = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsHovered(false);
    }, 200); // Reduje a 200ms para que se sienta más ágil
  };


  const desktopItemClasses = `
    px-8 py-3 transition-colors duration-200
    ${isFirst ? 'bg-ecogreen-green' : 'bg-ecogreen-blue'}
    hover:bg-ecogreen-green
    ${!item.isMegaMenu ? 'relative' : ''}
    flex items-center h-full cursor-pointer
  `;

  const mobileItemClasses = `
    border-b border-gray-700
  `;

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
    <motion.div 
      className={desktopItemClasses}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <Link to={item.href} className="flex items-center h-full">
        {item.label}
        {hasChildren && <ChevronDownIcon className="h-4 w-4 ml-2" />}
      </Link>
      <AnimatePresence>
        {isHovered && hasChildren && (
          <motion.div
            className={`absolute top-full z-20 pt-2 ${item.isMegaMenu ? 'left-0 right-0' : 'left-0'}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
          >
            {item.isMegaMenu ? <MegaMenuCasos /> : <Dropdown items={item.children || []} />}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavItem;

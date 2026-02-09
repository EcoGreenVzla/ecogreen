
import React, { useState, useRef } from 'react';
import { NavItemType } from '../types';
import ChevronDownIcon from './icons/ChevronDownIcon';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

interface DropdownProps {
  items: NavItemType[];
  isMobile?: boolean;
}

const dropdownMenuVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    }
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    }
  }
};

const dropdownItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  }
};

// --- Desktop Dropdown Components with Animation ---

const DesktopDropdownItem: React.FC<{ item: NavItemType }> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const hasChildren = !!item.children;

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
    }, 300); // 300ms delay to prevent accidental closing
  };

  return (
    <motion.li 
      className="relative"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      variants={dropdownItemVariants}
    >
      <Link
        to={item.href}
        className="flex justify-between items-center px-4 py-3 text-nav tracking-wider text-white hover:bg-ecogreen-green transition-colors duration-300"
      >
        {item.label}
        {hasChildren && <ChevronDownIcon className="h-4 w-4 rotate-[-90deg]" />}
      </Link>
      <AnimatePresence>
        {isHovered && hasChildren && (
          <motion.div 
            className="absolute top-0 left-full w-auto z-20"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
             <Dropdown items={item.children || []} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};


// --- Mobile Dropdown Components (Logic remains the same) ---

const MobileDropdownItem: React.FC<{ item: NavItemType }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = !!item.children;

  return (
    <li>
      <div 
        className="flex justify-between items-center py-2 px-2" 
        onClick={() => hasChildren && setIsOpen(!isOpen)}
        role="button"
        aria-expanded={isOpen}
      >
        <Link to={item.href} className="text-sm text-gray-300 hover:text-white">
          {item.label}
        </Link>
        {hasChildren && <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
      </div>
      {isOpen && hasChildren && (
        <div className="pl-4">
          <Dropdown items={item.children} isMobile />
        </div>
      )}
    </li>
  );
};

// --- Main Dropdown Component ---

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
    <div className="bg-ecogreen-blue shadow-lg rounded-b-md min-w-[260px]">
      <motion.ul 
        className="py-2"
        variants={dropdownMenuVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {items.map((subItem, index) => (
          <DesktopDropdownItem key={index} item={subItem} />
        ))}
      </motion.ul>
    </div>
  );
};

export default Dropdown;
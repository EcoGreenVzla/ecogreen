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
    <li className="relative w-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link
        to={item.href}
        className={`flex justify-between items-center px-[1.25em] py-[0.8em] text-[11pt] leading-[1.15em] tracking-[1px] transition-colors duration-200 whitespace-nowrap w-full h-full ${activeClasses}`}
      >
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

const Dropdown: React.FC<{ items: NavItemType[]; isMobile?: boolean }> = ({ items, isMobile = false }) => {
  if (isMobile) {
    return (
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="py-2 px-4 text-gray-300 text-[9pt]">
            <Link to={item.href} className="block w-full h-full">
              <span dangerouslySetInnerHTML={{ __html: item.label }} />
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  
  return (
    <div className="bg-[#0E306F] shadow-lg rounded-b-md w-max min-w-[260px]">
      <ul className="py-2 flex flex-col items-stretch">
        {items.map((item, i) => <DesktopDropdownItem key={i} item={item} />)}
      </ul>
    </div>
  );
};

// CRÍTICO: Exportación por defecto
export default Dropdown;
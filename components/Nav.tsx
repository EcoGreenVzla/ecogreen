
import React from 'react';
import NavItem from './NavItem';
import XIcon from './icons/XIcon';
import { NavItemType } from '../types';

interface NavProps {
  items: NavItemType[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<NavProps> = ({ items, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex bg-ecogreen-blue text-white uppercase font-thin text-nav tracking-wider relative">
        <div className="container mx-auto flex">
          {items.map((item, index) => (
            <NavItem 
              key={index} 
              item={item} 
              isFirst={index === 0}
            />
          ))}
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity lg:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-ecogreen-blue text-white shadow-lg z-50 transform transition-transform lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 id="mobile-menu-title" className="font-bold uppercase">Menú</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-md hover:bg-ecogreen-green focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close menu"
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <NavItem key={index} item={item} isMobile />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
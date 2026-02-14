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
      {/* Navegación para Escritorio */}
      <nav className="hidden lg:flex bg-[#0E306F] text-white uppercase font-thin tracking-wider relative">
        {/* MODIFICACIÓN: 'items-stretch' asegura que el fondo verde de los NavItem 
            cubra toda la altura vertical del contenedor azul.
            'gap-x-4' controla la separación horizontal entre los botones del menú.
        */}
        <div className="container mx-auto flex justify-center items-stretch gap-x-4">
          {items.map((item, index) => (
            <NavItem 
              key={index} 
              item={item} 
            />
          ))}
        </div>
      </nav>

      {/* Menú Móvil (Sin cambios en altura, optimizado para pulgar) */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity lg:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      <div className={`fixed top-0 right-0 h-full w-80 bg-[#0E306F] text-white shadow-lg z-50 transform transition-transform lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="font-bold uppercase">Menú</h2>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2"><XIcon className="h-6 w-6" /></button>
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
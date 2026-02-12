
import React, { useState } from 'react';
import Nav from './Nav';
import MenuIcon from './icons/MenuIcon';
import { navigationData } from '../data/navigation';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';
import InstagramIcon from './icons/InstagramIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import MailIcon from './icons/MailIcon';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-ecogreen-blue transition-colors duration-200"
        whileHover={{ scale: 1.2, y: -3 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
    >
        {children}
    </motion.a>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Barra superior con Logo y Redes Sociales */}
      <div className="max-w-[1440px] mx-auto px-6 py-4"> {/* Más ancho y más padding vertical */}
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
             <Link to="/">
                {/* Logo más grande como en la captura original */}
                <img className="h-24 md:h-28 w-auto" src="https://tumuro.com/media/ui/ecogreen-logo.png" alt="EcoGreen Construcciones Logo" />
             </Link>
          </div>
          
          {/* Redes sociales con iconos un poco más grandes */}
          <div className="hidden lg:flex items-center space-x-6">
             <SocialIcon href="#"><FacebookIcon className="h-6 w-6" /></SocialIcon>
             <SocialIcon href="#"><TwitterIcon className="h-6 w-6" /></SocialIcon>
             <SocialIcon href="#"><InstagramIcon className="h-6 w-6" /></SocialIcon>
             <SocialIcon href="#"><LinkedinIcon className="h-6 w-6" /></SocialIcon>
             <SocialIcon href="mailto:info@ecogreen.com"><MailIcon className="h-6 w-6" /></SocialIcon>
          </div>
          
          {/* ... (botón móvil igual) ... */}
        </div>
      </div>

      {/* Barra de navegación principal (Nav) */}
      <div className="bg-ecogreen-blue w-full"> {/* Fondo azul que cubre todo el ancho */}
        <Nav isMobile={false} />
      </div>
      
      {/* ... (Menú móvil igual) ... */}
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import MenuIcon from './icons/MenuIcon';
import { navigationData } from '../data/navigation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- CONFIGURACIÓN DE REDES SOCIALES (Icons8 Coloreados) ---
const socialNetworks = [
  { id: 'facebook', href: '#', iconUrl: 'https://img.icons8.com/?size=100&id=13912&format=png&color=3b599a', alt: 'Facebook' },
  { id: 'twitter', href: '#', iconUrl: 'https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=1ca1f1', alt: 'Twitter' },
  { id: 'instagram', href: '#', iconUrl: 'https://img.icons8.com/?size=100&id=119026&format=png&color=ff3970', alt: 'Instagram' },
  { id: 'linkedin', href: '#', iconUrl: 'https://img.icons8.com/?size=100&id=13930&format=png&color=017bb6', alt: 'LinkedIn' },
  { id: 'mail', href: 'mailto:info@ecogreenvzla.com', iconUrl: 'https://img.icons8.com/?size=100&id=tiHbAqWU3ZCQ&format=png&color=e94335', alt: 'Email' },
];

const SocialIcon: React.FC<{ href: string; iconUrl: string; alt: string }> = ({ href, iconUrl, alt }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center transition-all duration-300 h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]"
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
  >
    {/* Se eliminó grayscale para mantener los colores originales */}
    <img src={iconUrl} alt={alt} className="w-full h-full object-contain transition-all" />
  </motion.a>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ============================================================
  // PANEL DE CONTROL DE ESTILOS (THEME)
  // ============================================================
  const theme = {
    layout: {
      maxWidthResponsive: 'w-[99%] md:max-w-[80%]', // DISEÑO BOXED AL 80%
      backgroundColor: 'bg-white',
      paddingY: isScrolled ? 'py-2' : 'py-4 lg:py-6',
    },
    colors: {
      primaryBlue: '#0E306F',
    },
    typography: {
      fontFamily: "'Open Sans', sans-serif",
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`relative z-50 ${theme.layout.backgroundColor} w-full shadow-sm`} style={{ fontFamily: theme.typography.fontFamily }}>
      
      {/* CONTENEDOR BOXED */}
      <div className={`container mx-auto px-4 ${theme.layout.maxWidthResponsive}`}>
        <div className={`flex justify-between items-center transition-all duration-300 ${theme.layout.paddingY}`}>
          
          {/* BOTÓN MÓVIL (Mantiene el azul corporativo) */}
          <div className="fixed left-4 top-6 z-[9999] lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md text-white transition-all duration-500 shadow-lg ${
                isScrolled ? 'bg-[#0e306f]/20 backdrop-blur-sm' : 'bg-[#0e306f]'
              }`}
            >
              <MenuIcon className="h-7 w-7" />
            </button>
          </div>

          {/* LOGO - Tamaño ajustado a 90px en desktop */}
          <div className="flex-shrink-0 lg:flex-none w-full lg:w-auto flex justify-center lg:justify-start">
             <Link to="/" className="block">
                <img 
                   className={`object-contain transition-all duration-300 ${isScrolled ? 'h-[50px]' : 'h-[64px] lg:h-[90px]'} w-auto`} 
                   src="https://tumuro.com/images/ecogreen-logo.png" 
                   alt="EcoGreen Logo" 
                />
             </Link>
          </div>

          {/* REDES SOCIALES COLOREADAS */}
          <div className="hidden lg:flex items-center space-x-2 mr-4"> 
             {socialNetworks.map((net) => (
                  <SocialIcon key={net.id} href={net.href} iconUrl={net.iconUrl} alt={net.alt} />
             ))}
          </div>
        </div>
      </div>

      {/* NAVEGACIÓN */}
      <Nav items={navigationData} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import MenuIcon from './icons/MenuIcon';
import { navigationData } from '../data/navigation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- CONFIGURACIÓN DE REDES SOCIALES (Icons8) ---
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
        className="flex items-center justify-center transition-all duration-300 h-[40px] w-[40px]"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
    >
        <img src={iconUrl} alt={alt} className="w-full h-full object-contain" />
    </motion.a>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    /* LIMPIEZA TOTAL: Se eliminó border-b, border-gray-100 y shadow-md */
    <header className="relative z-50 bg-white w-full">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center py-4 lg:py-6">
          
          <div className="fixed left-4 top-6 z-[9999] lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md text-white transition-all duration-500 focus:outline-none shadow-lg ${
                isScrolled ? 'bg-[#0e306f]/20 backdrop-blur-sm' : 'bg-[#0e306f]'
              }`}
              aria-label="Abrir menú"
            >
              <MenuIcon className="h-7 w-7" />
            </button>
          </div>

          <div className="flex-shrink-0 lg:flex-none w-full lg:w-auto flex justify-center lg:justify-start">
             <Link to="/" className="block">
                <img 
                   className="h-[64px] w-[220px] lg:h-[72px] lg:w-[250px] object-contain transition-all duration-300" 
                   src="https://tumuro.com/images/ecogreen-logo.png" 
                   alt="EcoGreen Construcciones Logo" 
                />
             </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-0.5 mr-16"> 
             {socialNetworks.map((net) => (
                  <SocialIcon key={net.id} href={net.href} iconUrl={net.iconUrl} alt={net.alt} />
             ))}
          </div>
        </div>
      </div>

      <Nav items={navigationData} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
    </header>
  );
};

export default Header;
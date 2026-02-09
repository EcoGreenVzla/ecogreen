
import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';
import InstagramIcon from './icons/InstagramIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import MailIcon from './icons/MailIcon';
import { motion } from 'framer-motion';

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <li>
    <Link to={to} className="hover:text-ecogreen-lime transition-colors duration-300 pb-1 border-b border-transparent hover:border-ecogreen-lime/50">
      {children}
    </Link>
  </li>
);

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-ecogreen-blue p-2 rounded-sm"
    whileHover={{ scale: 1.1, y: -2, backgroundColor: '#f0f0f0' }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    {children}
  </motion.a>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-ecogreen-blue text-white font-sans uppercase text-sm tracking-widest">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-x-8 gap-y-12">
            
            {/* Columna 1: Logo */}
            <div className="lg:col-span-2 flex items-start">
              <img src="https://tumuro.com/media/ui/ecogreen-logo-white.png" alt="EcoGreen Construcciones Logo" className="h-14 w-auto" />
            </div>

            {/* Columna 2: Menú */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold mb-6">Menú</h3>
              <ul className="space-y-3 font-light">
                <FooterLink to="/">Ecogreen</FooterLink>
                <FooterLink to="/campos-de-aplicacion">Campos de Aplicación</FooterLink>
                <FooterLink to="/casos-de-obras">Casos de Obras</FooterLink>
                <FooterLink to="/petroleo">Petroleo</FooterLink>
                <FooterLink to="/control-de-erosion">Control de Erosion</FooterLink>
              </ul>
            </div>
            
            {/* Columna 3: Legal */}
            <div className="lg:col-span-2 pt-0 md:pt-12">
               <ul className="space-y-3 font-light">
                <li><a href="#" className="hover:text-ecogreen-lime transition-colors duration-300 pb-1 border-b border-transparent hover:border-ecogreen-lime/50">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-ecogreen-lime transition-colors duration-300 pb-1 border-b border-transparent hover:border-ecogreen-lime/50">Términos de Uso</a></li>
              </ul>
            </div>

            {/* Columna 4: Contacto */}
            <div className="lg:col-span-4">
               <h3 className="font-semibold mb-6">Contáctanos</h3>
               <div className="font-light space-y-4">
                <p>
                  Urbanización Lomas de la Lagunita,<br />
                  Edo. Miranda, Caracas, Venezuela.
                </p>
                <p>
                  Móvil:<br />
                  +58 (424) 201-9069
                </p>
               </div>
               <div className="flex items-center space-x-3 mt-6">
                  <SocialIcon href="#"><FacebookIcon className="h-5 w-5" /></SocialIcon>
                  <SocialIcon href="#"><TwitterIcon className="h-5 w-5" /></SocialIcon>
                  <SocialIcon href="#"><InstagramIcon className="h-5 w-5" /></SocialIcon>
                  <SocialIcon href="#"><LinkedinIcon className="h-5 w-5" /></SocialIcon>
                  <SocialIcon href="mailto:info@ecogreen.com"><MailIcon className="h-5 w-5" /></SocialIcon>
               </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Barra de Copyright */}
      <div className="bg-black text-gray-400 text-center py-4 px-4">
        <p className="text-xs uppercase tracking-wider">
          Copyright © {currentYear} Ecogreen - All Rights Reserved. 
          <a href="https://wa.me/13164695701" target="_blank" rel="noopener noreferrer" className="text-white hover:text-ecogreen-lime transition-colors"> Powered By zipnegocios</a>
        </p>
      </div>
    </>
  );
};

export default Footer;

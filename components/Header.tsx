
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
      {/* Top bar with logo and social media */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
             <Link to="/">
                <img className="h-24 w-auto" src="https://tumuro.com/images/ecogreen-logo.png" alt="EcoGreen Construcciones Logo" />
             </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-5">
             <SocialIcon href="#"><FacebookIcon className="h-10 w-10" /></SocialIcon>
             <SocialIcon href="#"><TwitterIcon className="h-10 w-10" /></SocialIcon>
             <SocialIcon href="#"><InstagramIcon className="h-10 w-10" /></SocialIcon>
             <SocialIcon href="#"><LinkedinIcon className="h-10 w-10" /></SocialIcon>
             <SocialIcon href="mailto:info@ecogreen.com"><MailIcon className="h-10 w-10" /></SocialIcon>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-ecogreen-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label="Open main menu"
              aria-expanded={isMobileMenuOpen}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <Nav items={navigationData} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
    </header>
  );
};

export default Header;

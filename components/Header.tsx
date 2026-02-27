import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import MenuIcon from './icons/MenuIcon';
import { navigationData } from '../data/navigation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    <img src={iconUrl} alt={alt} className="w-full h-full object-contain" />
  </motion.a>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // ESTADO PARA CONTROLAR EL IDIOMA ACTUAL
  const [currentLang, setCurrentLang] = useState<'es' | 'en'>('es');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // INYECTOR DE GOOGLE (Oculto)
    const addGoogleTranslateScript = () => {
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement({
          pageLanguage: 'es',
          includedLanguages: 'en,es', // Ambos idiomas
          // ELIMINAMOS EL LAYOUT SIMPLE PARA QUE EL SELECTOR OCULTO EXISTAR
          autoDisplay: false
        }, 'google_translate_element');
      };

      if (!document.querySelector('script[src*="translate.google.com"]')) {
        const script = document.createElement('script');
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      } else if ((window as any).google?.translate?.TranslateElement) {
        (window as any).googleTranslateElementInit();
      }
    };

    const timer = setTimeout(addGoogleTranslateScript, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // FUNCIÓN PARA CAMBIAR EL IDIOMA DESDE NUESTRO BOTÓN
  const toggleLanguage = () => {
    // Buscamos el selector real de Google que ahora está fuera de pantalla
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      const targetLang = currentLang === 'es' ? 'en' : 'es';
      select.value = targetLang;
      // Añadimos { bubbles: true } para que Google registre el cambio correctamente
      select.dispatchEvent(new Event('change', { bubbles: true })); 
      setCurrentLang(targetLang);
    }
  };

  return (
    <header className={`relative z-50 bg-white w-full shadow-sm`}>
      <div className={`container mx-auto px-4 w-[99%] md:max-w-[80%]`}>
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4 lg:py-6'}`}>
          
          <div className="fixed left-4 top-6 z-[9999] lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md text-white shadow-lg transition-all duration-500 ${
                isScrolled ? 'bg-[#0e306f]/20 backdrop-blur-sm' : 'bg-[#0e306f]'
              }`}
            >
              <MenuIcon className="h-7 w-7" />
            </button>
          </div>

          <div className="flex-shrink-0 lg:flex-none w-full lg:w-auto flex justify-center lg:justify-start">
             <Link to="/" className="block">
                <img 
                   className={`object-contain transition-all duration-300 ${isScrolled ? 'h-[50px]' : 'h-[64px] lg:h-[90px]'} w-auto`} 
                   src="https://tumuro.com/images/ecogreen-logo.png" 
                   alt="EcoGreen Logo" 
                />
             </Link>
          </div>

          <div className="flex items-center space-x-4"> 
             
             {/* 1. EL TRADUCTOR REAL DE GOOGLE (Está mandado fuera de pantalla por CSS) */}
             <div id="google_translate_element"></div>

             {/* 2. NUESTRO BOTÓN SIMPLE CON BANDERAS REALES */}
             <button 
                onClick={toggleLanguage}
                className="flex items-center justify-center space-x-2 px-3 py-1.5 border border-[#0E306F] text-[#0E306F] rounded-md font-semibold text-[13px] hover:bg-gray-100 transition-colors min-w-[100px]"
             >
                {currentLang === 'es' ? (
                  <>
                    <img src="https://cdn.parcellab.com/img/flags/us.png" alt="English" className="w-4 h-auto" />
                    <span>English</span>
                  </>
                ) : (
                  <>
                    <img src="https://cdn.parcellab.com/img/flags/es.png" alt="Español" className="w-4 h-auto" />
                    <span>Español</span>
                  </>
                )}
             </button>

             <div className="hidden lg:flex items-center space-x-2 mr-4">
                {socialNetworks.map((net) => (
                    <SocialIcon key={net.id} href={net.href} iconUrl={net.iconUrl} alt={net.alt} />
                ))}
             </div>
          </div>
        </div>
      </div>
      <Nav items={navigationData} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
    </header>
  );
};

export default Header;
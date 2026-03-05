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
              className={`inline-flex items-center justify-center p-2 rounded-md text-white shadow-lg transition-all duration-500 ${isScrolled ? 'bg-[#0e306f]/20 backdrop-blur-sm' : 'bg-[#0e306f]'
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
            {/* 1. EL TRADUCTOR REAL DE GOOGLE (Oculto para que no rompa el diseño) */}
            <div id="google_translate_element" style={{ display: 'none' }}></div>

            {/* 2. NUESTRO BOTÓN OPTIMIZADO PARA MÓVIL */}
            <button
              onClick={toggleLanguage}
              className="absolute right-2 top-4 md:top-0 md:relative md:right-0 flex items-center justify-center border border-[#0E306F] text-[#0E306F] rounded-md font-semibold transition-colors hover:bg-gray-100
    /* Tamaños: pequeño en móvil, normal en PC */
    px-2 py-1 md:px-3 md:py-1.5 
    min-w-[40px] md:min-w-[100px] 
    text-[11px] md:text-[13px] z-[1000]"
            >
              {currentLang === 'es' ? (
                <>
                  <img src="https://cdn.parcellab.com/img/flags/us.png" alt="English" className="w-4 h-auto" />
                  {/* El texto se oculta en móvil (hidden) y aparece en escritorio (md:block) */}
                  <span className="hidden md:block ml-2">English</span>
                </>
              ) : (
                <>
                  <img src="https://cdn.parcellab.com/img/flags/es.png" alt="Español" className="w-4 h-auto" />
                  <span className="hidden md:block ml-2">Español</span>
                </>
              )}
            </button>

            {/* Redes sociales (se mantienen igual) */}
            <div className="hidden lg:flex items-center space-x-2 mr-4">
              {socialNetworks.map((net) => (
                <SocialIcon key={net.id} href={net.href} iconUrl={net.iconUrl} alt={net.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ... (tu código anterior) ... */}

      <Nav
        items={navigationData}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* ESTO ES LO QUE DEBES AGREGAR AQUÍ: */}
      <style>{`
        /* Oculta la barra de Google y el espacio en blanco que deja arriba */
        .goog-te-banner-frame.skiptranslate, .goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
          position: static !important;
        }
        /* Oculta el tooltip de 'Texto original' al pasar el mouse */
        .goog-te-balloon-frame {
          display: none !important;
        }
        /* Asegura que el contenedor de Google no ocupe espacio invisible */
        #google_translate_element {
          display: none !important;
        }
        /* Quita el margen que Google le pone al html */
        html {
          margin-top: 0 !important;
        }
      `}</style>

    </header>
  );
};

export default Header;
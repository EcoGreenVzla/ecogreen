import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // ============================================================
  // PANEL DE CONTROL DE ESTILOS (THEME)
  // ============================================================
  const theme = {
    colors: {
      bgFooter: '#0E306F',      // Azul corporativo EcoGreen
      bgCopyright: '#000000',   // Fondo negro para barra inferior
      textPrimary: '#FFFFFF',
      textSecondary: '#9ca3af', // Gris para copyright
      accent: '#4BA406',        // Verde de realce al hover
    },
    fonts: {
      family: "'Open Sans', sans-serif",
      sizeTitle: '14px',        // h3
      sizeLink: '13px',         // Enlaces del menú
      sizeText: '13px',         // Dirección y teléfonos
      sizeCopyright: '10px',
      weightTitle: '600',       // Semi-bold
      weightBody: '300',        // Light
      letterSpacing: '2px',     // tracking-widest
    },
    icons: {
      size: '35px',             // Dimensiones de los iconos sociales
      gap: '10px',              // Espacio entre iconos
    },
    spacing: {
      paddingVertical: '64px',  // py-16
      gapSections: '48px',      // gap-y-12 en mobile
    }
  };

  const socialLinks = [
    { id: 'fb', href: '#', src: 'https://tumuro.com/images/fb-white.png', alt: 'Facebook' },
    { id: 'tw', href: '#', src: 'https://tumuro.com/images/tw-white.png', alt: 'Twitter' },
    { id: 'inst', href: '#', src: 'https://tumuro.com/images/inst-white.png', alt: 'Instagram' },
    { id: 'ld', href: '#', src: 'https://tumuro.com/images/ld-white.png', alt: 'LinkedIn' },
    { id: 'mail', href: 'mailto:info@ecogreenvzla.com', src: 'https://tumuro.com/images/inst-logo-mail-white.png', alt: 'Mail' },
  ];

  return (
    <>
      <footer 
        style={{ 
          backgroundColor: theme.colors.bgFooter, 
          color: theme.colors.textPrimary,
          fontFamily: theme.fonts.family,
          letterSpacing: theme.fonts.letterSpacing
        }}
        className="uppercase"
      >
        <div className="container mx-auto px-6 py-16">
          {/* GRID: Centrado total en mobile, 10 columnas en desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-x-8 gap-y-2 text-center lg:text-left">
            
            {/* 1. LOGO (Centrado en mobile) */}
            <div className="lg:col-span-2 flex justify-center lg:justify-start items-start">
              <img 
                src="https://tumuro.com/media/ui/ecogreen-logo-white.png" 
                alt="EcoGreen Logo" 
                className="h-14 w-auto object-contain" 
              />
            </div>

            {/* 2. MENÚ */}
            <div className="lg:col-span-2">
              <h3 className="mb-6" style={{ fontSize: theme.fonts.sizeTitle, fontWeight: theme.fonts.weightTitle }}>Menú</h3>
              <ul className="space-y-3" style={{ fontSize: theme.fonts.sizeLink, fontWeight: theme.fonts.weightBody }}>
                <li><Link to="/" className="hover:text-[#4BA406] transition-colors">Ecogreen</Link></li>
                <li><Link to="/campos-de-aplicacion" className="hover:text-[#4BA406] transition-colors">Campos de Aplicación</Link></li>
                <li><Link to="/casos-de-obras" className="hover:text-[#4BA406] transition-colors">Casos de Obras</Link></li>
                <li><Link to="/control-de-erosion" className="hover:text-[#4BA406] transition-colors">Control de Erosion</Link></li>
              </ul>
            </div>
            
            {/* 3. LEGAL */}
            <div className="lg:col-span-2 pt-0 lg:pt-12">
               <ul className="space-y-3" style={{ fontSize: theme.fonts.sizeLink, fontWeight: theme.fonts.weightBody }}>
                <li><a href="#" className="hover:text-[#4BA406] transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-[#4BA406] transition-colors">Términos</a></li>
              </ul>
            </div>

            {/* 4. CONTACTO Y SOCIAL (Centrado en mobile) */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
               <h3 className="mb-6" style={{ fontSize: theme.fonts.sizeTitle, fontWeight: theme.fonts.weightTitle }}>Contáctanos</h3>
               <div className="space-y-4 mb-8" style={{ fontSize: theme.fonts.sizeText, fontWeight: theme.fonts.weightBody }}>
                <p>Urbanización Lomas de la Lagunita,<br />Edo. Miranda, Caracas, Venezuela.</p>
                <p>Móvil: +58 (424) 201-9069</p>
               </div>

               {/* ICONOS SOCIALES: Ajuste de tamaño y gap */}
               <div className="flex items-center justify-center lg:justify-start" style={{ gap: theme.icons.gap }}>
                  {socialLinks.map((icon) => (
                    <motion.a
                      key={icon.id}
                      href={icon.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, opacity: 0.8 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img 
                        src={icon.src} 
                        alt={icon.alt} 
                        style={{ width: theme.icons.size, height: theme.icons.size }}
                        className="object-contain"
                      />
                    </motion.a>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </footer>

      {/* BARRA DE COPYRIGHT */}
      <div 
        style={{ backgroundColor: theme.colors.bgCopyright, color: theme.colors.textSecondary }}
        className="text-center py-5 px-4"
      >
        <p style={{ fontSize: theme.fonts.sizeCopyright, letterSpacing: '1px' }} className="uppercase">
          Copyright © {currentYear} Ecogreen - All Rights Reserved. 
          <a href="https://wa.me/13164695701" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4BA406] transition-colors ml-1"> 
            Powered By zipnegocios
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
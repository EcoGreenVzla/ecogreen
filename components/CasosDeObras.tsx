import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { casosDeObrasPrincipalesData } from '../data/casosDeObrasPrincipales';

// --- ANIMACIONES ---
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: 'easeOut' } 
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

const CasoCard: React.FC<{ caso: typeof casosDeObrasPrincipalesData[0] }> = ({ caso }) => {
  return (
    <motion.div
      className="group bg-white flex flex-col rounded-none overflow-hidden cursor-pointer border border-gray-100 shadow-sm"
      style={{ 
        width: '630px', 
        height: '480px',
        maxWidth: '100%' 
      }}
      variants={cardVariants}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
    >
      <div className="w-full h-[80%] overflow-hidden bg-gray-200"> 
        <img
          src={caso.image}
          alt={caso.title}
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="flex-1 flex flex-col justify-start items-center text-center px-10 mt-1 py-1">
        <h3 className="text-[18pt] font-bold text-ecogreen-blue uppercase tracking-tight leading-none mb-1">
          {caso.title}
        </h3>
        <p className="text-[12pt] text-gray-600 leading-tight line-clamp-2 max-w-[95%]">
          {caso.description}
        </p>
      </div>
    </motion.div>
  );
};

const CasosDeObras = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalItems = casosDeObrasPrincipalesData.length;
  const isAllShown = visibleCount >= totalItems;

  // Lógica para detectar el incremento según el dispositivo
  const getIncrement = () => {
    return window.innerWidth < 768 ? 1 : 2;
  };

  const handleToggle = () => {
    if (isAllShown) {
      // RESET: Volver a 4 obras
      setVisibleCount(4);
      const section = document.getElementById('seccion-obras');
      if (section) {
        window.scrollTo({ top: section.offsetTop - 50, behavior: 'smooth' });
      }
    } else {
      // CARGAR MÁS: 2 en desktop, 1 en mobile
      const nextCount = Math.min(visibleCount + getIncrement(), totalItems);
      setVisibleCount(nextCount);
    }
  };

  // EFECTO DE FOCO: Cuando cambia el número de obras, hacemos scroll a la parte inferior
  useEffect(() => {
    if (visibleCount > 4 && !isAllShown) {
      // Esperamos un pequeño instante a que React renderice las nuevas tarjetas
      setTimeout(() => {
        const cards = containerRef.current?.children;
        if (cards && cards.length > 0) {
          const lastNewCard = cards[cards.length - 1];
          lastNewCard.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
      }, 100);
    }
  }, [visibleCount, isAllShown]);

  return (
    <section id="seccion-obras" className="py-16 bg-white">
      <div className="max-w-[1600px] mx-auto px-10 lg:px-20 relative">
        <h2 className="text-4xl font-light text-center mb-12 tracking-[0.25em] text-gray-600 uppercase">
          Casos de Obras
        </h2>

        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 justify-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {casosDeObrasPrincipalesData.slice(0, visibleCount).map((caso) => (
            <CasoCard key={caso.id} caso={caso} />
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <button
            onClick={handleToggle}
            className="font-gotcha inline-block bg-ecogreen-blue text-white uppercase border-0 cursor-pointer outline-0 transition-colors duration-250 ease-in-out hover:bg-ecogreen-green"
            style={{
              fontSize: '14px',
              lineHeight: '16px',
              letterSpacing: '1px',
              borderRadius: '30px',
              padding: '8px 40px',
              appearance: 'none',
              display: 'inline-block',
              verticalAlign: 'middle',
              fontFamily: 'GotchaLight, sans-serif'
            }}
          >
            {isAllShown ? 'Mostrar Menos' : 'Ver Más'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CasosDeObras;
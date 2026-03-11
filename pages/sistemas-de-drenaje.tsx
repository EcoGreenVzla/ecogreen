import React from 'react';

// Componentes
import SEO from '../components/SEO'; 
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GaleriaImagenes from '../components/GaleriaImagenes';

// Data
import { seoData } from '../data/seoData';
import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';
import { galeriasData } from '../data/galeriasData';

const SistemasDeDrenaje: React.FC = () => {
  // CLAVE: ID maestro unificado que conecta con todos los archivos de /data
  const pageID = 'ID-sistemas-de-drenaje.tsx';

  return (
    <div className="w-full m-0 p-0">
      {/* 1. SEO Dinámico: Reemplaza la etiqueta <title> manual */}
      <SEO {...seoData[pageID]} />

      {/* 2. Hero Slider Dinámico */}
      <HeroSliderResponsive data={sliderData[pageID]} />

      {/* 3. Bloque Teórico Dinámico */}
      <TextoCollapsable data={textosData[pageID]} />

      {/* 4. Galería Estilo Fancybox Dinámica */}
      <GaleriaImagenes data={galeriasData[pageID]} />
    </div>
  );
};

export default SistemasDeDrenaje;
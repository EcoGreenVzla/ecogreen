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

const PilotesMicropilotes: React.FC = () => {
  const pageID = 'ID-pilotes-y-micropilotes.tsx';

  return (
    <div className="w-full m-0 p-0">
      {/* 1. SEO Dinámico */}
      <SEO {...seoData[pageID]} />

      {/* 2. Hero Slider Dinámico */}
      <HeroSliderResponsive data={sliderData[pageID]} />

      {/* 3. Sección Teórica Dinámica */}
      <TextoCollapsable data={textosData[pageID]} />

      {/* 4. Galería de Imágenes Dinámica */}
      <GaleriaImagenes data={galeriasData[pageID]} />
    </div>
  );
};

export default PilotesMicropilotes;
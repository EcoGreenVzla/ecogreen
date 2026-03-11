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

const DiquesPresas: React.FC = () => {
  const pageID = 'ID-diques-y-presas.tsx';

  return (
    <div className="w-full m-0 p-0">
      <SEO {...seoData[pageID]} />
      <HeroSliderResponsive data={sliderData[pageID]} />
      <TextoCollapsable data={textosData[pageID]} />
      <GaleriaImagenes data={galeriasData[pageID]} />
    </div>
  );
};

export default DiquesPresas;
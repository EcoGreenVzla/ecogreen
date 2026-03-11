import React from 'react';

// Componentes
import SEO from '../components/SEO'; 
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridList from '../components/GridList';

// Data
import { seoData } from '../data/seoData';
import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const ControlDeErosion: React.FC = () => {
  // CLAVE: Definimos la variable una sola vez para toda la página
  const pageID = 'ID-control-de-erosion.tsx';

  return (
    <div className="w-full m-0 p-0">
      {/* 1. SEO Dinámico: Inyectado correctamente con spread operator */}
      <SEO {...seoData[pageID]} />
      
      {/* 2. Hero Slider Dinámico usando la variable */}
      <HeroSliderResponsive data={sliderData[pageID]} />

      {/* 3. Sección Teórica Dinámica usando la variable */}
      <TextoCollapsable data={textosData[pageID]} />

      {/* 4. Grid de Soluciones usando la variable */}
      <GridList id={pageID} />
    </div>
  );
};

export default ControlDeErosion;
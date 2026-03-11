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

const CasosDeObras: React.FC = () => {
  // CLAVE: El ID unificado que conecta con todos los archivos de /data
  const pageID = 'ID-casos-de-obras.tsx';

  return (
    <div className="w-full m-0 p-0">
      {/* 1. SEO Dinámico: Inyectado con spread operator y el pageID correcto */}
      <SEO {...seoData[pageID]} />

      {/* 2. Hero Slider Dinámico */}
      <HeroSliderResponsive data={sliderData[pageID]} />

      {/* 3. Sección Teórica Dinámica */}
      <TextoCollapsable data={textosData[pageID]} />

      {/* 4. Grid de Proyectos Dinámico */}
      <div className="container mx-auto pb-16 px-4">
        <GridList id={pageID} />
      </div>
    </div>
  );
};

export default CasosDeObras;
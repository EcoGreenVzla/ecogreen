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

const SistemasDeContencionRigidos: React.FC = () => {
  // CLAVE: ID maestro unificado que conecta con todos los archivos de /data
  const pageID = 'ID-sistemas-de-contencion-rigidos.tsx';

  return (
    <div className="w-full m-0 p-0">
      {/* 1. SEO Dinámico: Reemplaza la etiqueta <title> manual */}
      <SEO {...seoData[pageID]} />

      {/* 2. Hero Slider Dinámico */}
      <HeroSliderResponsive data={sliderData[pageID]} />

      {/* 3. Sección Teórica Dinámica */}
      <TextoCollapsable data={textosData[pageID]} />

      {/* 4. Grid de Sistemas Rígidos dinámico */}
      <GridList id={pageID} />
    </div>
  );
};

export default SistemasDeContencionRigidos;
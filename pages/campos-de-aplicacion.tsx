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

const CamposDeAplicacion: React.FC = () => {
  // CLAVE: ID maestro unificado para esta página
  const pageID = 'ID-campos-de-aplicacion.tsx';

  return (
    <div className="w-full m-0 p-0">
      {/* 1. SEO Dinámico usando el pageID y el spread operator */}
      <SEO {...seoData[pageID]} />
      
      {/* 2. Hero Slider Dinámico */}
      <HeroSliderResponsive data={sliderData[pageID]} />

      {/* 3. Sección Teórica Dinámica (Opcional/Descomentada si existe en textosData) */}
      <TextoCollapsable data={textosData[pageID]} /> 

      {/* 4. Grid de Campos de Aplicación dinámico */}
      <GridList id={pageID} />
    </div>
  );
};

export default CamposDeAplicacion;
import React from 'react';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridInfraestructuraUrbana from '../components/GridInfraestructuraUrbana';

import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const InfraestructuraUrbana: React.FC = () => {
  const pageID = 'ID-infraestructura-urbana.tsx';

  return (
    <div className="w-full m-0 p-0">
      <title>Infraestructura Urbana | EcoGreen</title>

      {/* Slider Superior */}
      <HeroSliderResponsive data={sliderData[pageID]} />

      {/* Introducción y Texto Expandible */}
      <TextoCollapsable data={textosData[pageID]} />

      {/* Cuadrícula de Navegación de Servicios */}
      <GridInfraestructuraUrbana />
    </div>
  );
};

export default InfraestructuraUrbana;
import React from 'react';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridConstruccionCivil from '../components/GridConstruccionCivil';

import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const ConstruccionCivil: React.FC = () => {
  const pageID = 'ID-construccion-civil.tsx';

  // Validación de seguridad para evitar pantalla blanca
  if (!sliderData[pageID] || !textosData[pageID]) {
    return <div className="p-20 text-center">Cargando datos de Construcción Civil...</div>;
  }

  return (
    <div className="w-full m-0 p-0">
      <HeroSliderResponsive data={sliderData[pageID]} />
      <TextoCollapsable data={textosData[pageID]} />
      <GridConstruccionCivil />
    </div>
  );
};

export default ConstruccionCivil;
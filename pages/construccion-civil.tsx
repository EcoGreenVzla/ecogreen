import React from 'react';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
// IMPORTA EL NUEVO COMPONENTE
import GridList from '../components/GridList'; 

import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const ConstruccionCivil: React.FC = () => {
  const pageID = 'ID-construccion-civil.tsx';

  if (!sliderData[pageID] || !textosData[pageID]) {
    return <div className="p-20 text-center">Cargando...</div>;
  }

  return (
    <div className="w-full m-0 p-0">
      <title>Construcción Civil | EcoGreen</title>
      <HeroSliderResponsive data={sliderData[pageID]} />
      <TextoCollapsable data={textosData[pageID]} />
      
      {/* USA EL COMPONENTE DINÁMICO CON EL MISMO ID */}
      <GridList id={pageID} />
    </div>
  );
};

export default ConstruccionCivil;
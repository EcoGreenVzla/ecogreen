import React from 'react';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridList from '../components/GridList';

import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const IndustriaPetroleoGas: React.FC = () => {
  // ID exacto del archivo gridListData.ts
  const pageID = 'ID-industria-petroleo-y-gas.tsx';

  if (!sliderData[pageID] || !textosData[pageID]) {
    return <div className="p-20 text-center text-ecogreen-blue font-bold">Cargando...</div>;
  }

  return (
    <div className="w-full m-0 p-0">
      <title>Industria, Petróleo y Gas | EcoGreen</title>
      <HeroSliderResponsive data={sliderData[pageID]} />
      <TextoCollapsable data={textosData[pageID]} />
      {/* Implementación de GridList con ID específico */}
      <GridList id={pageID} />
    </div>
  );
};

export default IndustriaPetroleoGas;
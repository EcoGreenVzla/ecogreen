import React from 'react';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridIndustriaPetroleoGas from '../components/GridIndustriaPetroleoGas';

import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const IndustriaPetroleoGas: React.FC = () => {
  const pageID = 'ID-industria-petroleo-y-gas.tsx';

  // Validación de seguridad para evitar errores de renderizado
  if (!sliderData[pageID] || !textosData[pageID]) {
    return <div className="p-20 text-center text-ecogreen-blue font-bold">Cargando contenido de Industria, Petróleo y Gas...</div>;
  }

  return (
    <div className="w-full m-0 p-0">
      <title>Industria, Petróleo y Gas | EcoGreen</title>
      <HeroSliderResponsive data={sliderData[pageID]} />
      <TextoCollapsable data={textosData[pageID]} />
      <GridIndustriaPetroleoGas />
    </div>
  );
};

export default IndustriaPetroleoGas;
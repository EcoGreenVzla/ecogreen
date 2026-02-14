import React from 'react';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridList from '../components/GridList'; // <--- Nuevo componente

import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const MineriaGeologia: React.FC = () => {
  const pageID = 'ID-mineria.tsx'; // Asegúrate que este ID exista en gridListData.ts

  if (!sliderData[pageID] || !textosData[pageID]) {
    return <div className="p-20 text-center">Cargando...</div>;
  }

  return (
    <div className="w-full m-0 p-0">
      <title>Minería | EcoGreen</title>
      <HeroSliderResponsive data={sliderData[pageID]} />
      <TextoCollapsable data={textosData[pageID]} />
      
      {/* Implementación */}
      <GridList id={pageID} />
    </div>
  );
};

export default MineriaGeologia;
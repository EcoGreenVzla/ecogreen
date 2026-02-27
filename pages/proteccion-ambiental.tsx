import React from 'react';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridList from '../components/GridList';

import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const ProteccionAmbiental: React.FC = () => {
  // ID exacto del archivo gridListData.ts
  const pageID = 'ID-proteccion-ambiental.tsx';

  if (!sliderData[pageID] || !textosData[pageID]) {
    return <div className="p-20 text-center">Cargando...</div>;
  }

  return (
    <div className="w-full m-0 p-0">
      <title>Protección Ambiental | EcoGreen</title>
      <HeroSliderResponsive data={sliderData[pageID]} />
      <TextoCollapsable data={textosData[pageID]} />
      <GridList id={pageID} />
    </div>
  );
};

export default ProteccionAmbiental;
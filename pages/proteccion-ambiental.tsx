import React from 'react';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridProteccionAmbiental from '../components/GridProteccionAmbiental';

import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const ProteccionAmbiental: React.FC = () => {
  const pageID = 'ID-proteccion-ambiental.tsx';

  if (!sliderData[pageID] || !textosData[pageID]) {
    return <div className="p-20 text-center">Cargando datos de Protección Ambiental...</div>;
  }

  return (
    <div className="w-full m-0 p-0">
      <title>Protección Ambiental | EcoGreen</title>
      <HeroSliderResponsive data={sliderData[pageID]} />
      <TextoCollapsable data={textosData[pageID]} />
      <GridProteccionAmbiental />
    </div>
  );
};

export default ProteccionAmbiental;
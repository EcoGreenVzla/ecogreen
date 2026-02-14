import React from 'react';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridObrasHidraulicas from '../components/GridObrasHidraulicas';

import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const ObrasHidraulicas: React.FC = () => {
  const pageID = 'ID-obras-hidraulicas.tsx';

  return (
    <div className="w-full m-0 p-0">
      <title>Obras Hidráulicas | EcoGreen</title>
      <HeroSliderResponsive data={sliderData[pageID]} />
      <TextoCollapsable data={textosData[pageID]} />
      <GridObrasHidraulicas />
    </div>
  );
};

export default ObrasHidraulicas;
import React from 'react';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridList from '../components/GridList';

import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const ObrasHidraulicas: React.FC = () => {
  // ID exacto del archivo gridListData.ts
  const pageID = 'ID-obras-hidraulicas.tsx';

  return (
    <div className="w-full m-0 p-0">
      <title>Obras Hidráulicas | EcoGreen</title>
      <HeroSliderResponsive data={sliderData[pageID]} />
      <TextoCollapsable data={textosData[pageID]} />
      <GridList id={pageID} />
    </div>
  );
};

export default ObrasHidraulicas;
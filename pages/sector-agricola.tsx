import React from 'react';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridSectorAgricola from '../components/GridSectorAgricola';

import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const SectorAgricola: React.FC = () => {
  const pageID = 'ID-sector-agricola.tsx';

  return (
    <div className="w-full m-0 p-0">
      <title>Sector Agrícola | EcoGreen</title>
      <HeroSliderResponsive data={sliderData[pageID]} />
      <TextoCollapsable data={textosData[pageID]} />
      <GridSectorAgricola />
    </div>
  );
};

export default SectorAgricola;
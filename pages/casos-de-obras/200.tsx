import React from 'react';
import HeroSliderResponsive from '../../components/HeroSliderResponsive';
import TextoCollapsable from '../../components/TextoCollapsable';
import GaleriaImagenes from '../../components/GaleriaImagenes';

import { sliderData } from '../../data/sliderData';
import { textosData } from '../../data/textosData';
import { galeriasData } from '../../data/galeriasData';

const Obra200: React.FC = () => {
  const pageID = 'ID-obra-200.tsx';

  return (
    <div className="w-full bg-white">
      <title>Obra #200 | EcoGreen</title>

      <HeroSliderResponsive data={sliderData[pageID]} />

      <div className="container mx-auto py-0 px-24">
        <TextoCollapsable data={textosData[pageID]} />
      </div>

      <div className="container mx-auto pb-24 px-24 border-t border-gray-100 pt-0">
        <GaleriaImagenes data={galeriasData[pageID]} />
      </div>
    </div>
  );
};

export default Obra200;
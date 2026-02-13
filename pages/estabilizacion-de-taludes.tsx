import React from 'react';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GaleriaImagenes from '../components/GaleriaImagenes';

import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';
import { galeriasData } from '../data/galeriasData';

const EstabilizacionTaludes: React.FC = () => {
  const pageID = 'ID-estabilizacion-de-taludes.tsx';

  return (
    <div className="w-full m-0 p-0">
      <title>Estabilización de Taludes | EcoGreen</title>

      <HeroSliderResponsive data={sliderData[pageID]} />
      <TextoCollapsable data={textosData[pageID]} />
      <GaleriaImagenes data={galeriasData[pageID]} />
    </div>
  );
};

export default EstabilizacionTaludes;
import React from 'react';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GaleriaImagenes from '../components/GaleriaImagenes';

import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';
import { galeriasData } from '../data/galeriasData';

const Canalizaciones: React.FC = () => {
  const pageID = 'ID-canalizaciones.tsx';

  return (
    <div className="w-full m-0 p-0">
      <title>Canalizaciones | EcoGreen</title>

      <HeroSliderResponsive data={sliderData[pageID]} />
      <TextoCollapsable data={textosData[pageID]} />
      <GaleriaImagenes data={galeriasData[pageID]} />
    </div>
  );
};

export default Canalizaciones;
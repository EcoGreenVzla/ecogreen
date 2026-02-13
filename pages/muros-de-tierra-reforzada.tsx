import React from 'react';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GaleriaImagenes from '../components/GaleriaImagenes';
import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';
import { galeriasData } from '../data/galeriasData';

const MurosTierraReforzada: React.FC = () => {
  return (
    <div className="w-full m-0 p-0">
      <title>Muros de Tierra Reforzada | EcoGreen</title>
      <HeroSliderResponsive data={sliderData['ID-muros-de-tierra-reforzada.tsx']} />
      <TextoCollapsable data={textosData['ID-muros-de-tierra-reforzada.tsx']} />
      <GaleriaImagenes data={galeriasData['ID-muros-de-tierra-reforzada.tsx']} />
    </div>
  );
};

export default MurosTierraReforzada;
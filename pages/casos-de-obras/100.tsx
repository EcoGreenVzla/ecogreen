import React from 'react';
import HeroSliderResponsive from '../../components/HeroSliderResponsive';
import TextoCollapsable from '../../components/TextoCollapsable';
import GaleriaImagenes from '../../components/GaleriaImagenes';

import { sliderData } from '../../data/sliderData';
import { textosData } from '../../data/textosData';
import { galeriasData } from '../../data/galeriasData';

const Obra100: React.FC = () => {
  const pageID = 'ID-obra-100.tsx';

  return (
    <div className="w-full m-0 p-0">
      <title>Obra #100 | EcoGreen</title>

      {/* Bloque 1: Slider */}
      <HeroSliderResponsive data={sliderData[pageID]} />

      {/* Bloque 2: Contenido de Texto */}
      <TextoCollapsable data={textosData[pageID]} />

      {/* Bloque 3: Galería de Imágenes */}
      <GaleriaImagenes data={galeriasData[pageID]} />
    </div>
  );
};

export default Obra100;
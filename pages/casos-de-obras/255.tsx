import React from 'react';
import HeroSliderResponsive from '../../components/HeroSliderResponsive';
import TextoCollapsable from '../../components/TextoCollapsable';
import GaleriaImagenes from '../../components/GaleriaImagenes';

import { sliderData } from '../../data/sliderData';
import { textosData } from '../../data/textosData';
import { galeriasData } from '../../data/galeriasData';


const Obra255: React.FC = () => {
  const pageID = 'ID-obra-255.tsx';

  return (
    <div className="w-full bg-white">
      <title>Obra #255 | EcoGreen</title>

      {/* Bloque 1: Slider */}
      <HeroSliderResponsive data={sliderData[pageID]} />

      {/* Bloque 2: Texto (Añadimos px-4 para que no se pegue al borde en móvil) */}
      <div className="container mx-auto px-4 md:px-24">
        <TextoCollapsable data={textosData[pageID]} />
      </div>

      {/* Bloque 3: Galería (Quitamos el px-24 que rompe el móvil) */}
      <div className="container mx-auto border-t border-gray-100">
        <GaleriaImagenes data={galeriasData[pageID]} />
      </div>
    </div>
  );
};

export default Obra255;
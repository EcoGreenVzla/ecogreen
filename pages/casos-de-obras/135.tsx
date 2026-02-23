import React from 'react';
import HeroSliderResponsive from '../../components/HeroSliderResponsive';
import TextoCollapsable from '../../components/TextoCollapsable';
import GaleriaImagenes from '../../components/GaleriaImagenes';

import { sliderData } from '../../data/sliderData';
import { textosData } from '../../data/textosData';
import { galeriasData } from '../../data/galeriasData';

const Obra135: React.FC = () => {
  const pageID = 'ID-obra-135.tsx';

  return (
    <div className="w-full bg-white">
      <title>Obra #135 | EcoGreen</title>

      {/* 1. Slider */}
      <HeroSliderResponsive data={sliderData[pageID]} />

      {/* 2. Intro + Botón Leer Más */}
      <div className="container mx-auto py-0 px-24">
        <TextoCollapsable data={textosData[pageID]} />
      </div>

      {/* 3. Galería (Patrón GaleriaData) */}
      <div className="container mx-auto pb-24 px-24 border-t border-gray-100 pt-0">
               {/* CORRECCIÓN: Usa la prop 'data' y pasa el objeto completo sin '.items' */}
        <GaleriaImagenes data={galeriasData[pageID]} />
      </div>
    </div>
  );
};

export default Obra135;
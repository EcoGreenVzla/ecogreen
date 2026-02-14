import React from 'react';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridMineria from '../components/GridMineria';

import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const MineriaGeologia: React.FC = () => {
  const pageID = 'ID-mineria.tsx';

  // Validación para asegurar que la página cargue solo cuando los datos existen
  if (!sliderData[pageID] || !textosData[pageID]) {
    return <div className="p-20 text-center text-ecogreen-blue font-bold">Cargando contenido de Minería y Geotecnia...</div>;
  }

  return (
    <div className="w-full m-0 p-0">
      <title>Minería, Geología y Geotecnia | EcoGreen</title>
      <HeroSliderResponsive data={sliderData[pageID]} />
      <TextoCollapsable data={textosData[pageID]} />
      <GridMineria />
    </div>
  );
};

export default MineriaGeologia;
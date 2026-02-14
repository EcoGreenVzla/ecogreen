import React from 'react';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridViasDeComunicacion from '../components/GridViasDeComunicacion';

import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const ViasComunicacion: React.FC = () => {
  const pageID = 'ID-vias-de-comunicacion.tsx';

  return (
    <div className="w-full m-0 p-0">
      <title>Vías de Comunicación | EcoGreen</title>
      <HeroSliderResponsive data={sliderData[pageID]} />
      <TextoCollapsable data={textosData[pageID]} />
      <GridViasDeComunicacion />
    </div>
  );
};

export default ViasComunicacion;
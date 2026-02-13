import React from 'react';

// Componentes
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridSolucionesControlErosion from '../components/GridSolucionesControlErosion';

// Data
import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const ControlDeErosion: React.FC = () => {
  return (
    <div className="w-full m-0 p-0">
      <title>Control de Erosión | EcoGreen</title>

      {/* 1. Hero Slider Dinámico */}
      <HeroSliderResponsive data={sliderData['ID-control-de-erosion.tsx']} />

      {/* 2. Sección Teórica Dinámica */}
      <TextoCollapsable data={textosData['ID-control-de-erosion.tsx']} />

      {/* 3. Grid de Soluciones de Control de Erosión */}
      <GridSolucionesControlErosion />

    </div>
  );
};

export default ControlDeErosion;
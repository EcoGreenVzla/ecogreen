import React from 'react';

// Componentes
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridSistemasDeContencionRigidos from '../components/GridSistemasDeContencionRigidos';

// Data
import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const SistemasDeContencionRigidos: React.FC = () => {
  return (
    <div className="w-full m-0 p-0">
      <title>Sistemas de Contención Rígidos | EcoGreen</title>

      {/* 1. Hero Slider Dinámico */}
      <HeroSliderResponsive data={sliderData['ID-sistemas-de-contencion-rigidos.tsx']} />

      {/* 2. Sección Teórica Dinámica */}
      <TextoCollapsable data={textosData['ID-sistemas-de-contencion-rigidos.tsx']} />

      {/* 3. Grid de Sistemas Rígidos */}
      <GridSistemasDeContencionRigidos />

    </div>
  );
};

export default SistemasDeContencionRigidos;
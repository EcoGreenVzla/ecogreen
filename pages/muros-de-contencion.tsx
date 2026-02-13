import React from 'react';

// Componentes
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridSistemasDeContencionFlexibles from '../components/GridSistemasDeContencionFlexibles';
import GridSistemasDeContencionRigidos from '../components/GridSistemasDeContencionRigidos';
import GridSistemasDeDrenaje from '../components/GridSistemasDeDrenaje';
import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const MurosDeContencion: React.FC = () => {
  return (
    <div className="w-full m-0 p-0">
      <title>Muros de Contención | EcoGreen</title>

      {/* 1. Hero Slider Dinámico */}
      <HeroSliderResponsive data={sliderData['ID-muros-de-contencion.tsx']} />

      {/* 2. Sección Teórica Dinámica */}
      <TextoCollapsable data={textosData['ID-muros-de-contencion.tsx']} />

      {/* 3. Grids de Sistemas */}
      <GridSistemasDeContencionFlexibles />
      <GridSistemasDeContencionRigidos />
      <GridSistemasDeDrenaje />

    </div>
  );
};

export default MurosDeContencion;
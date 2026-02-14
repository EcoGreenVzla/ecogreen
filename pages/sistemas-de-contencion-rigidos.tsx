import React from 'react';

// Componentes
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridSistemasDeContencionRigidos from '../components/GridSistemasDeContencionRigidos';
import GridList from '../components/GridList'; // <--- Importamos el componente único

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

      {/* Sistemas Rígidos */}
      <GridList id="ID-sistemas-de-contencion-rigidos.tsx" />

    </div>
  );
};

export default SistemasDeContencionRigidos;
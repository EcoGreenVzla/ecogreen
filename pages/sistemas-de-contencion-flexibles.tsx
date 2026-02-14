import React from 'react';

// Componentes Reutilizables
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridList from '../components/GridList'; // <--- Importamos el componente único

// Bases de datos
import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const SistemasDeContencionFlexibles: React.FC = () => {
  return (
    <div className="w-full m-0 p-0">
      <title>Sistemas de Contención Flexibles | EcoGreen</title>

      {/* 1. Hero Slider Dinámico */}
      <HeroSliderResponsive data={sliderData['ID-sistemas-de-contencion-flexibles.tsx']} />

      {/* 2. Sección Teórica Dinámica */}
      <TextoCollapsable data={textosData['ID-sistemas-de-contencion-flexibles.tsx']} />


           {/* Sistemas Flexibles */}
      <GridList id="ID-sistemas-de-contencion-flexibles.tsx" /> 


    </div>
  );
};

export default SistemasDeContencionFlexibles;
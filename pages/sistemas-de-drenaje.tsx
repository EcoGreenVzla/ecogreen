import React from 'react';

// Componentes Reutilizables
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GaleriaImagenes from '../components/GaleriaImagenes';

// Datos Centralizados
import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';
import { galeriasData } from '../data/galeriasData';

const SistemasDeDrenaje: React.FC = () => {
  return (
    <div className="w-full m-0 p-0">
      <title>Sistemas de Drenaje | EcoGreen</title>

      {/* 1. Hero Slider */}
      <HeroSliderResponsive data={sliderData['ID-sistemas-de-drenaje.tsx']} />

      {/* 2. Bloque Teórico Dinámico */}
      <TextoCollapsable data={textosData['ID-sistemas-de-drenaje.tsx']} />

      {/* 3. Galería Estilo Fancybox */}
      <GaleriaImagenes data={galeriasData['ID-sistemas-de-drenaje.tsx']} />

    </div>
  );
};

export default SistemasDeDrenaje;
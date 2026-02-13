import React from 'react';

// Componentes maestros
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GaleriaImagenes from '../components/GaleriaImagenes';

// Importación de la data centralizada
import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';
import { galeriasData } from '../data/galeriasData';

const ProteccionRiberas: React.FC = () => {
  // Definimos el ID que declaramos en los archivos de data
  const pageID = 'ID-proteccion-de-riberas.tsx';

  return (
    <div className="w-full m-0 p-0">
      {/* Título de la pestaña para SEO */}
      <title>Protección de Riberas | EcoGreen</title>

      {/* 1. Slider Superior */}
      <HeroSliderResponsive data={sliderData[pageID]} />

      {/* 2. Bloque de Texto Teórico (con el botón "Leer Más") */}
      <TextoCollapsable data={textosData[pageID]} />

      {/* 3. Galería de Imágenes Estilo Fancybox */}
      <GaleriaImagenes data={galeriasData[pageID]} />
    </div>
  );
};

export default ProteccionRiberas;
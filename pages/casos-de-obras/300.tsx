import React from 'react';
import SEO from '../../components/SEO'; 
import { seoData } from '../../data/seoData'; 
import HeroSliderResponsive from '../../components/HeroSliderResponsive';
import TextoCollapsable from '../../components/TextoCollapsable';
import GaleriaImagenes from '../../components/GaleriaImagenes';

import { sliderData } from '../../data/sliderData';
import { textosData } from '../../data/textosData';
import { galeriasData } from '../../data/galeriasData';


const Obra300: React.FC = () => {
  const pageID = 'ID-obra-300.tsx';

  return (
     <div className="w-full m-0 p-0">
      <SEO {...seoData['pageID']} />
      
      {/* Bloque 1: Slider */}
      <HeroSliderResponsive data={sliderData[pageID]} />

      {/* Bloque 2: Contenido de Texto */}
      <TextoCollapsable data={textosData[pageID]} />

      {/* Bloque 3: Galería de Imágenes */}
      <GaleriaImagenes data={galeriasData[pageID]} />
    </div>
  );
};

export default Obra300;
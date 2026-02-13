import React from 'react';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridCamposDeAplicacion from '../components/GridCamposDeAplicacion';
import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const CamposDeAplicacion: React.FC = () => {
  return (
    <div className="w-full m-0 p-0">
      <title>Campos de Aplicación | EcoGreen</title>

      {/* 1. Hero Slider Dinámico */}
      <HeroSliderResponsive data={sliderData['ID-campos-de-aplicacion.tsx']} />

{/* 2. Sección Teórica Dinámica */}
{/* <TextoCollapsable data={textosData['ID-campos-de-aplicacion.tsx']} /> 
*/}

      {/* 3. Grid de Campos de Aplicación */}
      <GridCamposDeAplicacion />

    </div>
  );
};

export default CamposDeAplicacion;
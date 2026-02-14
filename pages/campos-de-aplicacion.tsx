import React from 'react';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridList from '../components/GridList'; // <--- Importamos el componente único
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

      
     {/* 3. Grid Campos de Aplicacion */}
            <GridList id="ID-campos-de-aplicacion.tsx"/>


    </div>
  );
};

export default CamposDeAplicacion;
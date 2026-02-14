import React from 'react';

// Componentes
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridList from '../components/GridList'; // <--- Importamos el componente único
import GridSistemasDeDrenaje from '../components/GridSistemasDeDrenaje'; //<--- Caso especia editar por separado

import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const MurosDeContencion: React.FC = () => {
  const pageID = 'ID-muros-de-contencion.tsx';

  return (
    <div className="w-full m-0 p-0">
      <title>Muros de Contención | EcoGreen</title>

      {/* 1. Hero Slider Dinámico */}
      <HeroSliderResponsive data={sliderData[pageID]} />

      {/* 2. Sección Teórica Dinámica */}
      <TextoCollapsable data={textosData[pageID]} />

      {/* 3. Grids de Sistemas (Conectados dinámicamente) */}
      
      {/*GRID DINAMICO SISTEMAS DE CONTENCIÓN FLEXIBLES*/}
      <GridList id="ID-sistemas-de-contencion-flexibles.tsx" />
      
      {/*GRID DINAMICO SISTEMAS DE CONTENCIÓN RÍGIDOS*/}
      <GridList id="ID-sistemas-de-contencion-rigidos.tsx" />
      
      {/* GRID ESTATICO Sistemas de Drenaje */}
       <GridSistemasDeDrenaje />

    </div>
  );
};

export default MurosDeContencion;
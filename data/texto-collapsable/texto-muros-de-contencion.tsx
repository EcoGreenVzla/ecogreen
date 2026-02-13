import React from 'react';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';

// Importamos los Grids con la nomenclatura fiel al menú
import GridSistemasDeContencionFlexibles from '../components/GridSistemasDeContencionFlexibles';
import GridSistemasDeContencionRigidos from '../components/GridSistemasDeContencionRigidos';
import GridSistemasDeDrenaje from '../components/GridSistemasDeDrenaje';

// Importamos la data
import { sliderData } from '../data/sliderData';
import { textoMurosDeContencion } from '../data/texto-collapsable/texto-muros-de-contencion';

const MurosDeContencion: React.FC = () => {
  return (
    <div className="w-full m-0 p-0">
      <title>Muros de Contención | EcoGreen</title>
      <meta name="description" content="Soluciones integrales en muros de contención flexibles, rígidos y sistemas de drenaje." />

      {/* 1. Hero Slider Dinámico */}
      <HeroSliderResponsive data={sliderData['muros-de-contencion']} />

      {/* 2. Sección Teórica Dinámica */}
      <TextoCollapsable 
        title={textoMurosDeContencion.title}
        iconSrc={textoMurosDeContencion.iconSrc}
        introContent={textoMurosDeContencion.introContent}
        expandedContent={textoMurosDeContencion.expandedContent}
      />

      {/* 3. Grids de Sistemas Independientes */}
      <GridSistemasDeContencionFlexibles />
      <GridSistemasDeContencionRigidos />
      <GridSistemasDeDrenaje />

    </div>
  );
};

export default MurosDeContencion;
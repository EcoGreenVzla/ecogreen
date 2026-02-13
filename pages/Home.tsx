import React from 'react';
// 1. CAMBIO DE IMPORTACIONES
import HeroSliderResponsive from '../components/HeroSliderResponsive'; // Nuevo componente
import { sliderData } from '../data/sliderData'; // Nuevos datos
import ServiceBanner from '../components/ServiceBanner';
import CamposAplicacion from '../components/CamposAplicacion';
import CasosDeObras from '../components/CasosDeObras';
import CtaBanner from '../components/CtaBanner';
import LogoRibbon from '../components/LogoRibbon';

const Home: React.FC = () => {
  return (
    <>
      {/* 2. REEMPLAZO DEL COMPONENTE */}
      {/* Usamos la clave 'index' que definiste en tu archivo de datos */}
      <HeroSliderResponsive data={sliderData['index']} />
      
      <ServiceBanner />
      <CamposAplicacion />
      <CasosDeObras />
      <CtaBanner />
      <LogoRibbon />
    </>
  );
};

export default Home;
import React from 'react';
import SEO from '../components/SEO';
import { seoData } from '../data/seoData';
import HeroSliderResponsive from '../components/HeroSliderResponsive'; 
import { sliderData } from '../data/sliderData'; 
import ServiceBanner from '../components/ServiceBanner';
import CamposAplicacion from '../components/CamposAplicacion';
import CasosDeObras from '../components/CasosDeObras';
import CtaBanner from '../components/CtaBanner';
import LogoRibbon from '../components/LogoRibbon';

const Home: React.FC = () => {
  // Definimos el ID único para esta página
  const pageID = 'ID-index.tsx';

  return (
    <>
      {/* CORRECCIÓN: Ahora usa la llave unificada [...] */}
      <SEO {...seoData[pageID]} />
      <HeroSliderResponsive data={sliderData[pageID]} />      
      <ServiceBanner />
      <CamposAplicacion />
      <CasosDeObras />
      <CtaBanner />
      <LogoRibbon />
    </>
  );
};

export default Home;
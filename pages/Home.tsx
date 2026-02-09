
import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ServiceBanner from '../components/ServiceBanner';
import CamposAplicacion from '../components/CamposAplicacion';
import CasosDeObras from '../components/CasosDeObras';
import CtaBanner from '../components/CtaBanner';
import LogoRibbon from '../components/LogoRibbon';

const Home: React.FC = () => {
  return (
    <>
      <HeroSlider />
      <ServiceBanner />
      <CamposAplicacion />
      <CasosDeObras />
      <CtaBanner />
      <LogoRibbon />
    </>
  );
};

export default Home;

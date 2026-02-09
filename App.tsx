
import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import ServiceBanner from './components/ServiceBanner';
import CamposAplicacion from './components/CamposAplicacion';
import CasosDeObras from './components/CasosDeObras';
import CtaBanner from './components/CtaBanner';
import LogoRibbon from './components/LogoRibbon';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="mt-32">
          <HeroSlider />
          <ServiceBanner />
          <CamposAplicacion />
          <CasosDeObras />
          <CtaBanner />
          <LogoRibbon />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;

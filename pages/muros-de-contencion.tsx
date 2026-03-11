import React from 'react';
import SEO from '../components/SEO';
import { seoData } from '../data/seoData';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridList from '../components/GridList';
import GridSistemasDeDrenaje from '../components/GridSistemasDeDrenaje';
import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';
const MurosDeContencion: React.FC = () => {
  const pageID = 'ID-muros-de-contencion.tsx';

  return (
    <div className="w-full m-0 p-0">
    <SEO {...seoData[pageID]} />
    <HeroSliderResponsive data={sliderData[pageID]} />
    <TextoCollapsable data={textosData[pageID]} />
    <GridList id="ID-sistemas-de-contencion-flexibles.tsx" />
    <GridList id="ID-sistemas-de-contencion-rigidos.tsx" />
    <GridSistemasDeDrenaje />
    </div>
  );
};

export default MurosDeContencion;
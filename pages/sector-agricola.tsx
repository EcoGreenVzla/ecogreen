import React from 'react';

// Componentes
import SEO from '../components/SEO';
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridList from '../components/GridList';

// Data
import { seoData } from '../data/seoData';
import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const SectorAgricola: React.FC = () => {
  const pageID = 'ID-sector-agricola.tsx';

  return (
    <div className="w-full m-0 p-0">
      <SEO {...seoData[pageID]} />
      <HeroSliderResponsive data={sliderData[pageID]} />
      <TextoCollapsable data={textosData[pageID]} />
      <GridList id={pageID} />
    </div>
  );
};

export default SectorAgricola;
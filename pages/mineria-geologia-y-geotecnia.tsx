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

const MineriaGeologia: React.FC = () => {
  // EL CAMBIO VITAL: Este ID debe coincidir exactamente con las llaves de tus archivos de data
  const pageID = 'ID-mineria.tsx';

  // Verificamos si los datos existen para este ID específico
  const hasData = sliderData[pageID] && textosData[pageID];

  return (
    <div className="w-full m-0 p-0">
      {/* 1. SEO Dinámico */}
      <SEO {...seoData[pageID]} />

      {hasData ? (
        <>
          {/* 2. Hero Slider Dinámico */}
          <HeroSliderResponsive data={sliderData[pageID]} />

          {/* 3. Sección Teórica Dinámica */}
          <TextoCollapsable data={textosData[pageID]} />
          
          {/* 4. Grid de Contenidos */}
          <GridList id={pageID} />
        </>
      ) : (
        /* Este bloque aparece si el ID 'ID-mineria-geologia-y-geotecnia.tsx' 
           no existe dentro de sliderData.ts o textosData.ts */
        <div className="p-40 text-center">
          <h2 className="text-2xl font-bold text-[#0E306F]">Contenido en actualización...</h2>
          <p className="text-gray-500">No se encontraron datos para el ID: {pageID}</p>
        </div>
      )}
    </div>
  );
};

export default MineriaGeologia;
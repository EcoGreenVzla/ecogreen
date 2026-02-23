import React from 'react';

// Componentes estandarizados
import HeroSliderResponsive from '../components/HeroSliderResponsive';
import TextoCollapsable from '../components/TextoCollapsable';
import GridList from '../components/GridList';

// Importación de diccionarios de datos
import { sliderData } from '../data/sliderData';
import { textosData } from '../data/textosData';

const CasosDeObras: React.FC = () => {
  // CLAVE: El ID debe coincidir con las llaves definidas en los archivos de /data
  const pageID = 'ID-casos-de-obras.tsx';

  return (
    <div className="w-full m-0 p-0">
      <title>Casos de Obras | EcoGreen</title>

      {/* 1. Hero Slider Dinámico: Carga imágenes y textos desde sliderData */}
      <HeroSliderResponsive data={sliderData[pageID]} />

      {/* 2. Sección Teórica: Carga el título e introContent desde textosData */}
      <TextoCollapsable data={textosData[pageID]} />

      {/* 3. Grid de Proyectos: Carga las tarjetas desde gridListData usando el mismo ID */}
      <div className="container mx-auto pb-16 px-4">
        <GridList id={pageID} />
      </div>
    </div>
  );
};

export default CasosDeObras;
export interface GaleriaItem {
  src: string;
  title: string; // Este campo ahora contiene la leyenda detallada
}

export interface GaleriaData {
  id: string;
  items: GaleriaItem[];
}

export const galeriasData: Record<string, GaleriaData> = {
  // =====================================================================
  // 6. SISTEMAS DE DRENAJE (sistemas-de-drenaje.tsx)
  // =====================================================================
  'ID-sistemas-de-drenaje.tsx': {
    id: 'ID-sistemas-de-drenaje.tsx',
    items: [
      { 
        src: 'https://tumuro.com/data2/images/sistemas-de-drenaje/sistemas-de-drenaje1.jpg', 
        title: 'Paneles de drenaje planar para intersectar las aguas infiltradas en el talud que sustenta el tanque de agua del Desarrollo Habitacional Alto Verde, Los Teques, Edo. Miranda. 2005' 
      },
      { 
        src: 'https://tumuro.com/data2/images/sistemas-de-drenaje/sistemas-de-drenaje2.jpg', 
        title: 'Panel de drenaje planar vertical para evacuar rápidamente las aguas de lluvia en los jardines de las viviendas del Desarrollo Habitacional Bosque Valle, Distrito Capital. 2008' 
      },
      { 
        src: 'https://tumuro.com/data2/images/sistemas-de-drenaje/sistemas-de-drenaje3.jpg', 
        title: 'Instalación de sistema de subdrenaje con geodrenes de 2” de diametro, para evacuar las aguas infiltradas en un muro d tierra reforzada construido en el Conjunto Residencial Villa de Campo. Urb. Los Naranjos. El Hatillo. 2008' 
      },
      { 
        src: 'https://tumuro.com/data2/images/sistemas-de-drenaje/sistemas-de-drenaje4.jpg', 
        title: 'Paneles de drenaje planar para intersectar las aguas infiltradas en el muro de tierra reforzada, construido en el perímetro de La Universidad de la Policía Nacional, sede Catia. Distrito Capital. 2013' 
      },
      { 
        src: 'https://tumuro.com/data2/images/sistemas-de-drenaje/sistemas-de-drenaje5.jpg', 
        title: 'Impermeabilización de jardín con geomembranas de polietileno de alta densidad, en vivienda particular en la Urb Macaracuay, Municipio Baruta, Edo. Miranda. 2004' 
      },
      { 
        src: 'https://tumuro.com/data2/images/sistemas-de-drenaje/sistemas-de-drenaje6.jpg', 
        title: 'Instalación de paneles de drenaje planar para intersectar las aguas infiltradas en un muro de tierra reforzada construid en el Conjunto Residencial Villa de Campo. Urb. Los Naranjos. El Hatillo. 2008' 
      },
      { 
        src: 'https://tumuro.com/data2/images/sistemas-de-drenaje/sistemas-de-drenaje7.jpg', 
        title: 'Construcción de canales marginales y drenes francés, para minimizar la contaminación de la Quebrada Caroata. Quinta Crespo, Distrito Capital. 2004' 
      },
      { 
        src: 'https://tumuro.com/data2/images/sistemas-de-drenaje/sistemas-de-drenaje8.jpg', 
        title: 'Instalación de sistema de subdrenaje con geodrenes de 2” , para evacuar eficientemente las aguas infiltradas en un mur de tierra reforzada que constituye el estacionamiento del Conjunto Residencial Casa de Campo. Baruta. 2016' 
      },
      { 
        src: 'https://tumuro.com/data2/images/sistemas-de-drenaje/sistemas-de-drenaje9.jpg', 
        title: 'Instalación de sistema de subdrenaje tipo espina de pescado, para evacuar eficientemente las aguas de lluvia en una isl vial construida con área verde, en la Urb. Las Mercedes. Municipio Baruta. 2015' 
      },
      { 
        src: 'https://tumuro.com/data2/images/sistemas-de-drenaje/sistemas-de-drenaje10.jpg', 
        title: 'Instalación de sistema de subdrenaje con geodrenes de 2” , para evacuar eficientemente las aguas infiltradas en un mur de tierra reforzada que constituye el estacionamiento del Conjunto Residencial Casa de Campo. Baruta. 2016' 
      },
      { 
        src: 'https://tumuro.com/data2/images/sistemas-de-drenaje/sistemas-de-drenaje11.jpg', 
        title: 'Paneles de drenaje planar para intersectar las aguas infiltradas en el talud que sustenta el tanque de agua del Desarrollo Habitacional Alto Verde, Los Teques, Edo. Miranda. 2005' 
      },
      { 
        src: 'https://tumuro.com/data2/images/sistemas-de-drenaje/sistemas-de-drenaje12.jpg', 
        title: 'Sistema de dren planar para captar el agua infiltrada en la espalda de Muro Reforzado de 8 m de altura y 120 m de largo, Hacienda Canta Claro, ubicada en Paracotos, Edo. Miranda. 2017' 
      }
    ]
  },
  // =====================================================================
  // Final del bloque de galeria
  // =====================================================================
};
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

// =====================================================================
  // 7. MUROS DE TIERRA REFORZADA (muros-de-tierra-reforzada.tsx)
  // =====================================================================
  'ID-muros-de-tierra-reforzada.tsx': {
    id: 'ID-muros-de-tierra-reforzada.tsx',
    items: [
      { src: 'https://tumuro.com/data2/images/muros-de-tierra-reforzada/muro-de-tierra-reforzada1.png', title: 'Muro de Tierra Reforzada de 14 m de altura, para generar patio de maniobras de Complejo Industrial de Guatire, Edo. Miranda. 2008' },
      { src: 'https://tumuro.com/data2/images/muros-de-tierra-reforzada/muro-de-tierra-reforzada11.png', title: 'Muro de Tierra Reforzada de 10 m de altura, para la construcción de canchas deportivas y áreas sociales. Valle Arriba Athletic Club, Municipio Baruta, Edo. Miranda. 2009' },
      { src: 'https://tumuro.com/data2/images/muros-de-tierra-reforzada/muro-de-tierra-reforzada10.png', title: 'Muro de Tierra Reforzada construido para ampliar estacionamiento de carga pesada del almacén industrial de Diageo en Guarenas, Edo. Miranda. 2008' },
      { src: 'https://tumuro.com/data2/images/muros-de-tierra-reforzada/muro-de-tierra-reforzada9.png', title: 'Vista Frontal de Muro de Tierra Reforzada con Geomanta Verde Ecogreen. Valle Arriba Athletic Club, Municipio Baruta, Edo. Miranda. 2009' },
      { src: 'https://tumuro.com/data2/images/muros-de-tierra-reforzada/muro-de-tierra-reforzada8.png', title: 'Muros de Tierra Reforzada para generar superficies planas para la construcción de Conjunto Residencial de la Misión Vivienda, Edo. Miranda. 2008' },
      { src: 'https://tumuro.com/data2/images/muros-de-tierra-reforzada/muro-de-tierra-reforzada2.png', title: 'Muro de Tierra Reforzada del Edificio I del Conjunto Villa de Campo. Se observa empotramiento de las Geomallas de Refuerzo Ecogreen. Municipio El Hatillo. 2008' },
      { src: 'https://tumuro.com/data2/images/muros-de-tierra-reforzada/muro-de-tierra-reforzada7.png', title: 'Muro de Tierra Reforzada con una fachada con 85° de pendiente. Urb. Valle Arriba, Municipio Baruta, Edo. Miranda. 2009' },
      { src: 'https://tumuro.com/data2/images/muros-de-tierra-reforzada/muro-de-tierra-reforzada6.png', title: 'Muro de Tierra Reforzada para estabilizar los cimientos del Edificio N° 1 del Conjunto Villa de Campo, Urb. Los Naranjos, Municipio El Hatillo. 2007' },
      { src: 'https://tumuro.com/data2/images/muros-de-tierra-reforzada/muro-de-tierra-reforzada3.png', title: 'Muro de Tierra Reforzada de 8 m de altura, construido para contener deslizamiento en vivienda unifamiliar en la Urb. Oripoto, Municipio El Hatillo, Edo. Miranda. 2009' },
      { src: 'https://tumuro.com/data2/images/muros-de-tierra-reforzada/muro-reforzado1.png', title: 'Muro de Tierra Reforzada completamente reforestado con pasto wedelia. Urb. Oripoto, Municipio El Hatillo, Edo. Miranda. 2009' },
      { src: 'https://tumuro.com/data2/images/muros-de-tierra-reforzada/muro-de-tierra-reforzada4.png', title: 'Muros de Tierras Reforzadas consecutivos separados por bermas, construidos sobre quebrada existente en la Urb. Los Naranjos, Municipio El Hatillo, Edo. Miranda. 2007' },
      { src: 'https://tumuro.com/data2/images/muros-de-tierra-reforzada/muro-de-gavion-reforzado1.png', title: 'Muro de Tierra Reforzada de 24 m de altura, constituido por 3 taludes reforzados y una base de Muro de Gavión en la Urb. Alto Verde, Los Teques. 2005' },
      { src: 'https://tumuro.com/data2/images/muros-de-tierra-reforzada/muro-de-tierra-reforzada5.png', title: 'Muro de Tierra Reforzada de 12 m de altura y 90° en su fachada. Edificio 2 Conjunto Residencial Casa de Campo, Edo. Miranda. 2008' },
      { src: 'https://tumuro.com/data2/images/muros-de-tierra-reforzada/muro-de-tierra-reforzada12.png', title: 'Muro Reforzado de 8 m de altura y 120 m de largo, para áreas sociales de la finca Canta Claro, Paracotos, Edo. Miranda. 2017' },
      { src: 'https://tumuro.com/data2/images/muros-de-tierra-reforzada/muro-de-tierra-reforzada13.png', title: 'Muro de Tierra Reforzada de 8 m de altura, para la construcción de jardines y áreas sociales de la Hacienda Canta Claro, Paracotos. 2017' }
    ]
  },

  // =====================================================================
  // Final del bloque de galeria
  // =====================================================================



// =====================================================================
  // 8. MUROS DE GAVIÓN (muros-de-gavion.tsx)
  // =====================================================================
  'ID-muros-de-gavion.tsx': {
    id: 'ID-muros-de-gavion.tsx',
    items: [
      { src: 'https://tumuro.com/data2/images/muros-de-gavion/muro-de-gavion1.png', title: 'Muro de Gavión de 130 m de largo para áreas de estacionamiento, Alt Verde, Los Teques. 2006' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion/muro-de-gavion2.png', title: 'Muro de Gavión de 6 m de altura para proteger planta de tratamiento en Río San Pedro. 2006' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion/muro-de-gavion3.png', title: 'Muro de Gavión de 5 m de alto para contener deslizamiento en Parque Deportivo Santa Paula. 2010' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion/muro-de-gavion4.png', title: 'Muro de Gavión Reforzado con geomallas Ecogreen para control de erosión en Río San Pedro. 2007' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion/muro-de-gavion5.png', title: 'Vista de la Base de un Muro de Gavión Reforzado de 25 m de altura, Alto Verde. 2006' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion/muro-de-gavion6.png', title: 'Protección del Terraplén Reforzado de 600 m de largo con gaviones en Río Castan, Edo. Trujillo. 2012' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion/muro-de-gavion7.png', title: 'Terraplén Reforzado de 600 m para proteger CDI contra inundaciones, Río Castan. 2012' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion/muro-de-gavion8.png', title: 'Muro de Gavión para controlar la erosión en la margen derecha del Rio San Pedro. 2006' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion/muro-de-gavion9.png', title: 'Control de Erosión en Campos de Golf, Izcaragua Country Club, Guarenas. 2009' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion/muro-de-gavion10.png', title: 'Reconstrucción de Falla de Borde en vialidad principal, Alto Verde, Los Teques. 2007' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion/muro-de-gavion11.png', title: 'Muro de Gavión como base de un Muro de Tierra Reforzada para edificios en Alto Verde. 2007' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion/muro-de-gavion12.png', title: 'Reconstrucción de falla de borde con Muro de Gavión, Alto Verde, Los Teques. 2007' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion/muro-de-gavion13.png', title: 'Muro de Gavión de 130 m de largo y 10 m de altura para estabilizar la Troncal 005, Tinaco. 2015' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion/muro-de-gavion14.png', title: 'Construcción de Muro de Gavión para controlar erosión en Rio La Guama, Tinaco. 2015' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion/muro-de-gavion15.png', title: 'Muro de Gavión para controlar la erosión en el Campo de Golf del Club Izcaragua. 2009' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion/muro-de-gavion16.png', title: 'Vista panorámica del Muro de Gavión construido en la margen derecha del Rio La Guama. 2015' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion/muro-de-gavion17.png', title: 'Muro de Gavión de 130 m de largo para estabilizar la Troncal 005 en Tinaco, Edo. Cojedes. 2015' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion/muro-de-gavion18.png', title: 'Construcción de Muro de Gavión de 130 m de largo en Rio La Guama, Tinaco. 2015' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion/muro-de-gavion19.png', title: 'Muro de Gavión para controlar la erosión en el Campo de Golf del Club Izcaragua, Mampote. 2009' }
    ]
  },
  // =====================================================================
  // Final del bloque de galeria
  // =====================================================================






  // =====================================================================
  // 9. MUROS DE GAVIÓN REFORZADOS (muros-de-gavion-reforzados.tsx)
  // =====================================================================
  'ID-muros-de-gavion-reforzados.tsx': {
    id: 'ID-muros-de-gavion-reforzados.tsx',
    items: [
      { src: 'https://tumuro.com/data2/images/muros-de-gavion-reforzados/muros-de-gavion-reforzados1.png', title: 'Muro de gavión reforzado de 130 m de largo para áreas de estacionamiento, Alto Verde, Los Teques. 2006' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion-reforzados/muros-de-gavion-reforzados2.png', title: 'Construcción de áreas de estacionamiento con muros de gavión reforzados, Desarrollo Alto Verde. 2006' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion-reforzados/muros-de-gavion-reforzados3.png', title: 'Vista panorámica de muro de gavión reforzado de 25 m de altura totalmente reforestado, Los Teques. 2006' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion-reforzados/muros-de-gavion-reforzados4.png', title: 'Vista de la base de un muro de gavión reforzado de 25 m de altura, Desarrollo Habitacional Alto Verde. 2006' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion-reforzados/muros-de-gavion-reforzados5.png', title: 'Terraplén Reforzado de 600 m de largo con protección de gaviones en la margen izquierda del Río Castan. 2012' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion-reforzados/muros-de-gavion-reforzados6.png', title: 'Muro Mixto de Gavión Reforzado de 8 m de altura para contener deslizamiento en Urb. Oripoto. 2009' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion-reforzados/muros-de-gavion-reforzados7.png', title: 'Terraplén Reforzado para proteger contra inundaciones al centro hospitalario CDI, Río Castan. 2012' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion-reforzados/muros-de-gavion-reforzados8.png', title: 'Muro de gavión reforzado con geomallas Ecogreen en planta de tratamiento, Alto Verde. 2007' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion-reforzados/muros-de-gavion-reforzados9.png', title: 'Base de muro de gavión reforzado de 25 m de altura, Los Teques, Edo. Miranda. 2006' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion-reforzados/muros-de-gavion-reforzados10.png', title: 'Vista superior de muro de tierra reforzada sobre muro de gavión, diseño arquitectónico flexible. 2006' },
      { src: 'https://tumuro.com/data2/images/muros-de-gavion-reforzados/muros-de-gavion-reforzados11.png', title: 'Vista panorámica de muro de gavión reforzado de 130 m para estabilizar cresta de talud, Los Teques. 2007' }
    ]
  },
  // =====================================================================
  // Final del bloque de galeria
  // =====================================================================







};
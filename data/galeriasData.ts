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

// =====================================================================
  // 10. MUROS MIXTOS (muros-mixtos.tsx)
  // =====================================================================
  'ID-muros-mixtos.tsx': {
    id: 'ID-muros-mixtos.tsx',
    items: [
      { src: 'https://tumuro.com/data2/images/muros-mixtos/muros-mixtos1.png', title: 'Muro Mixto de Gavión Reforzado de 130 m de largo para áreas de estacionamiento, Alto Verde, Los Teques. 2006' },
      { src: 'https://tumuro.com/data2/images/muros-mixtos/muros-mixtos2.png', title: 'Muro de Gavión Reforzado de 130 m de largo en el Desarrollo Habitacional Alto Verde, Edo. Miranda. 2006' },
      { src: 'https://tumuro.com/data2/images/muros-mixtos/muros-mixtos3.png', title: 'Vista de la base de un Muro Mixto de Gavión Reforzado de 25 m de altura, Alto Verde. 2006' },
      { src: 'https://tumuro.com/data2/images/muros-mixtos/muros-mixtos4.png', title: 'Muro Mixto de Gavión Reforzado de 8 m de altura para contener deslizamiento en Oripoto, El Hatillo. 2009' },
      { src: 'https://tumuro.com/data2/images/muros-mixtos/muros-mixtos5.png', title: 'Base de Muro Mixto de Gavión y Tierra Reforzada para estabilizar falla de borde en Alto Verde. 2007' },
      { src: 'https://tumuro.com/data2/images/muros-mixtos/muros-mixtos6.png', title: 'Construcción de Muro Mixto para contener deslizamiento en vivienda en la Urb. Oripoto. 2009' },
      { src: 'https://tumuro.com/data2/images/muros-mixtos/muros-mixtos7.png', title: 'Vista panorámica de muro mixto de 13 m de altura en vialidad de acceso, etapa 5 de Alto Verde. 2007' },
      { src: 'https://tumuro.com/data2/images/muros-mixtos/muros-mixtos8.png', title: 'Reforestación de un Muro Mixto de Gavión Reforzado, Desarrollo Alto Verde, Los Teques. 2006' },
      { src: 'https://tumuro.com/data2/images/muros-mixtos/muros-mixtos9.png', title: 'Vista lateral de Muro Mixto de 13 m de altura para estabilizar falla de borde, Los Teques. 2007' },
      { src: 'https://tumuro.com/data2/images/muros-mixtos/muros-mixtos10.png', title: 'Muro Mixto combinando técnica de Muro Reforzado con fachada de formaletas de concreto, Casa de Campo. 2013' },
      { src: 'https://tumuro.com/data2/images/muros-mixtos/muros-mixtos11.png', title: 'Reconstrucción de falla de borde con Muro Mixto de 24 m combinando Muro Reforzado y Tierra Armada, Los Guayabitos. 2010' }
    ]
  },
  // =====================================================================
  // Final del bloque de galeria
  // =====================================================================

// =====================================================================
  // 11. REFUERZO DE TALUDES Y TERRAPLENES (refuerzo-de-taludes-y-terraplenes.tsx)
  // =====================================================================
  'ID-refuerzo-de-taludes-y-terraplenes.tsx': {
    id: 'ID-refuerzo-de-taludes-y-terraplenes.tsx',
    items: [
      { src: 'https://tumuro.com/data2/images/refuerzo-de-taludes-y-terraplenes/1.jpg', title: 'Terraplenes Reforzados consecutivos separados por bermas en Urb. Los Naranjos, El Hatillo. 2008' },
      { src: 'https://tumuro.com/data2/images/refuerzo-de-taludes-y-terraplenes/2.jpg', title: 'Terraplén de Tierra Reforzada para conjunto residencial de Misión Vivienda, Edo. Miranda. 2008' },
      { src: 'https://tumuro.com/data2/images/refuerzo-de-taludes-y-terraplenes/3.jpg', title: 'Talud de Tierra Reforzada con Geomanta Verde Ecogreen, Valle Arriba Athletic Club. 2009' },
      { src: 'https://tumuro.com/data2/images/refuerzo-de-taludes-y-terraplenes/4.jpg', title: 'Talud de Tierra Reforzada para ampliación de estacionamiento industrial Diageo, Guarenas. 2008' },
      { src: 'https://tumuro.com/data2/images/refuerzo-de-taludes-y-terraplenes/5.jpg', title: 'Terraplén de Tierra Reforzada de 14 m de altura en Complejo Industrial de Guatire. 2008' },
      { src: 'https://tumuro.com/data2/images/refuerzo-de-taludes-y-terraplenes/6.jpg', title: 'Vista Frontal de Talud de Tierra Reforzada con Geomanta Verde Ecogreen, Municipio Baruta. 2009' },
      { src: 'https://tumuro.com/data2/images/refuerzo-de-taludes-y-terraplenes/7.jpg', title: 'Taludes de Tierras Reforzadas consecutivos sobre quebrada en El Hatillo. 2008' },
      { src: 'https://tumuro.com/data2/images/refuerzo-de-taludes-y-terraplenes/8.jpg', title: 'Talud de Tierra Reforzada de 8 m de altura para contener deslizamiento en Urb. Oripoto. 2009' },
      { src: 'https://tumuro.com/data2/images/refuerzo-de-taludes-y-terraplenes/9.jpg', title: 'Talud de Tierra Reforzada de 14 m para generar patio de maniobras, Guatire. 2008' },
      { src: 'https://tumuro.com/data2/images/refuerzo-de-taludes-y-terraplenes/10.jpg', title: 'Talud de Tierra Reforzada completamente reforestado con pasto wedelia, Oripoto. 2009' },
      { src: 'https://tumuro.com/data2/images/refuerzo-de-taludes-y-terraplenes/11.jpg', title: 'Talud de Tierra Reforzada con Geomanta Verde Ecogreen en Valle Arriba. 2009' },
      { src: 'https://tumuro.com/data2/images/refuerzo-de-taludes-y-terraplenes/12.jpg', title: 'Terraplén de Tierra Reforzada de 24 m de altura sobre base de Muro de Gavión, Alto Verde. 2005' },
      { src: 'https://tumuro.com/data2/images/refuerzo-de-taludes-y-terraplenes/13.jpg', title: 'Terraplén de 6 m de altura para reforzar margen del Río Castán, Valera. 2012' },
      { src: 'https://tumuro.com/data2/images/refuerzo-de-taludes-y-terraplenes/14.jpg', title: 'Terraplén de Tierra Reforzada de 12 m de altura y 90° de fachada, Casa de Campo. 2008' },
      { src: 'https://tumuro.com/data2/images/refuerzo-de-taludes-y-terraplenes/15.jpg', title: 'Refuerzo de margen izquierda del Río Castán con terraplén de 600 m de largo. 2012' },
      { src: 'https://tumuro.com/data2/images/refuerzo-de-taludes-y-terraplenes/16.jpg', title: 'Muro de Tierra Reforzada de 8 m para jardines de Hacienda Canta Claro, Paracotos. 2017' },
      { src: 'https://tumuro.com/data2/images/refuerzo-de-taludes-y-terraplenes/17.jpg', title: 'Muro Reforzado de 120 m de largo para áreas sociales de finca Canta Claro. 2017' },
      { src: 'https://tumuro.com/data2/images/refuerzo-de-taludes-y-terraplenes/18.jpg', title: 'Terraplén reforestado de 6 m de altura en la margen del Río Castán. 2012' }
    ]
  },
  // =====================================================================
  // Final del bloque de galeria
  // =====================================================================

// =====================================================================
  // 12. MUROS ANCLADOS Y PANTALLAS ATIRANTADAS (muros-anclados-y-pantallas-atirantadas.tsx)
  // =====================================================================
  'ID-muros-anclados-y-pantallas-atirantadas.tsx': {
    id: 'ID-muros-anclados-y-pantallas-atirantadas.tsx',
    items: [
      { src: 'https://tumuro.com/data2/images/muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas1.jpg', title: 'Pantalla atirantada reticulada de 20 m de altura, reforzada con geomallas metálicas y geomantas verdes ECOGREEN. Residencias Icabaru, Municipio Baruta. 2014' },
      { src: 'https://tumuro.com/data2/images/muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas2.jpg', title: 'Construcción de pantalla atirantada de 10 m de altura para reconstruir falla de borde en Colinas de Tamanaco, Estado Miranda. 2014' },
      { src: 'https://tumuro.com/data2/images/muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas3.jpg', title: 'Pantalla atirantada de 14 m de altura para estabilizar talud erosionado en Club de Tenis de Santa Rosa de Lima. 2013' },
      { src: 'https://tumuro.com/data2/images/muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas4.jpg', title: 'Pantalla atirantada reticulada de 16 m con geomantas verdes ECOGREEN para control de erosión en Barrio Santa Cruz. 2011' },
      { src: 'https://tumuro.com/data2/images/muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas5.jpg', title: 'Pantalla atirantada de 14 m para estabilizar talud de tanque de agua, Desarrollo Alto Verde, Los Teques. 2008' },
      { src: 'https://tumuro.com/data2/images/muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas6.jpg', title: 'Proyección de concreto en pantalla atirantada para reconstruir falla de borde en Cumbres de Curumo. 2013' },
      { src: 'https://tumuro.com/data2/images/muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas7.jpg', title: 'Pantalla Atirantada construida en el talud de la vialidad principal, Bosque Valle, Distrito Capital. 2008' },
      { src: 'https://tumuro.com/data2/images/muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas8.jpg', title: 'Estabilización de talud con pantalla atirantada de 14 m en instalaciones deportivas, Municipio Baruta. 2013' },
      { src: 'https://tumuro.com/data2/images/muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas9.jpg', title: 'Pantalla Atirantada de 12 m de altura para estabilización vial en Bosque Valle. 2008' },
      { src: 'https://tumuro.com/data2/images/muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas10.jpg', title: 'Pantallas Atirantadas construidas para estabilizar taludes en descarga de Quebrada Alto Verde. 2008' },
      { src: 'https://tumuro.com/data2/images/muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas11.jpg', title: 'Proyección de concreto en talud de la Quebrada Alto Verde, Desarrollo Habitacional Alto Verde. 2008' },
      { src: 'https://tumuro.com/data2/images/muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas12.jpg', title: 'Detalle de pantalla atirantada de 14 m en zona de soporte de infraestructura hidráulica, Los Teques. 2008' },
      { src: 'https://tumuro.com/data2/images/muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas13.jpg', title: 'Vista de pantalla atirantada para estabilización de taludes erosionados en Santa Rosa de Lima. 2013' },
      { src: 'https://tumuro.com/data2/images/muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas14.jpg', title: 'Obras de infraestructura geotécnica con anclajes activos y pantallas atirantadas.' },
      { src: 'https://tumuro.com/data2/images/muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas15.jpg', title: 'Reconstrucción de vialidad mediante pantallas atirantadas en Cumbres de Curumo, Estado Miranda. 2013' },
      { src: 'https://tumuro.com/data2/images/muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas16.jpg', title: 'Pantalla atirantada reticulada de 20 m con acabado verde ECOGREEN en El Cafetal, Residencias Icabaru. 2014' },
      { src: 'https://tumuro.com/data2/images/muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas17.jpg', title: 'Estabilización de talud de 16 m mediante pantalla atirantada en Alto Verde, Los Teques. 2008' },
      { src: 'https://tumuro.com/data2/images/muros-anclados-y-pantallas-atirantadas/muros-anclados-y-pantallas-atirantadas18.jpg', title: 'Pantalla atirantada reticulada para control de erosión y estabilización en el Barrio Santa Cruz. 2011' }
    ]
  },
  // =====================================================================
  // Final del bloque de galeria
  // =====================================================================

// =====================================================================
  // 13. MUROS CICLÓPEOS (muros-de-ciclopeos.tsx)
  // =====================================================================
  'ID-muros-de-ciclopeos.tsx': {
    id: 'ID-muros-de-ciclopeos.tsx',
    items: [
      { src: 'https://tumuro.com/data2/images/muros-de-ciclopeos/muros-de-ciclopeos1.jpg', title: 'Reconstrucción con muros ciclópeos de los canales márginales de La Quebrada Caroata. Quinta Crespo, Distrito Capital. 2004' },
      { src: 'https://tumuro.com/data2/images/muros-de-ciclopeos/muros-de-ciclopeos2.jpg', title: 'Reconstrucción de falla de borde de 8 m de altura con muro ciclópeo, Av. principal de Hoyo de La Puerta. Municipio Baruta. 2011' },
      { src: 'https://tumuro.com/data2/images/muros-de-ciclopeos/muros-de-ciclopeos3.jpg', title: 'Muro ciclópeo decorativo construido en la base de un talud estabilizado, Av. Principal de La Urb. El Cafetal. 2011' },
      { src: 'https://tumuro.com/data2/images/muros-de-ciclopeos/muros-de-ciclopeos4.jpg', title: 'Detalle constructivo de muro ciclópeo para estabilización de taludes.' },
      { src: 'https://tumuro.com/data2/images/muros-de-ciclopeos/muros-de-ciclopeos5.jpg', title: 'Acabado final de muro ciclópeo integrado al paisajismo urbano.' },
      { src: 'https://tumuro.com/data2/images/muros-de-ciclopeos/muros-de-ciclopeos6.jpg', title: 'Vista estructural de reconstrucción de falla de borde con muro ciclópeo de 8 m de altura. Hoyo de La Puerta. 2011' }
    ]
  },
  // =====================================================================
  // Final del bloque de galeria
  // =====================================================================


// =====================================================================
  // 14. PILOTES Y MICROPILOTES (pilotes-y-micropilotes.tsx)
  // =====================================================================
  'ID-pilotes-y-micropilotes.tsx': {
    id: 'ID-pilotes-y-micropilotes.tsx',
    items: [
      { src: 'https://tumuro.com/data2/images/pilotes-y-micropilotes/pilotes-y-micropilotes1.jpg', title: 'Hincado de pilotes de 15 m de profundidad y 1 m de diámetro, Alto Verde, Los Teques. 2010' },
      { src: 'https://tumuro.com/data2/images/pilotes-y-micropilotes/pilotes-y-micropilotes2.jpg', title: 'Armado del refuerzo metálico para los pilotes de fundaciones en Desarrollo Alto Verde. 2010' },
      { src: 'https://tumuro.com/data2/images/pilotes-y-micropilotes/pilotes-y-micropilotes3.jpg', title: 'Cortina de micropilotes de 20 m de profundidad para estabilizar falla de borde en Colinas del Tamanaco. 2014' },
      { src: 'https://tumuro.com/data2/images/pilotes-y-micropilotes/pilotes-y-micropilotes4.jpg', title: 'Hincado de pilotes de 20 m de profundidad en edificación de la Fundación Propatria, Los Teques. 2014' },
      { src: 'https://tumuro.com/data2/images/pilotes-y-micropilotes/pilotes-y-micropilotes5.jpg', title: 'Perforación de cortina de micropilotes de 20 m para pantalla atirantada en Colinas del Tamanaco. 2014' },
      { src: 'https://tumuro.com/data2/images/pilotes-y-micropilotes/pilotes-y-micropilotes6.jpg', title: 'Obras de pilotaje y cimentaciones profundas para estabilización de suelos.' },
      { src: 'https://tumuro.com/data2/images/pilotes-y-micropilotes/pilotes-y-micropilotes7.jpg', title: 'Vista estructural de cortina de micropilotes de 20 m de profundidad, Municipio Baruta. 2014' },
      { src: 'https://tumuro.com/data2/images/pilotes-y-micropilotes/pilotes-y-micropilotes8.jpg', title: 'Cortina de micropilotes de 15 m de profundidad en falla de borde de la Urb. Los Campitos. 2011' },
      { src: 'https://tumuro.com/data2/images/pilotes-y-micropilotes/pilotes-y-micropilotes9.jpg', title: 'Proceso de perforación de micropilotes de 15 m para pantalla atirantada en Los Campitos. 2011' }
    ]
  },
  // =====================================================================
  // Final del bloque de galeria
  // =====================================================================


// =====================================================================
  // 15. ESTABILIZACIÓN DE TALUDES (estabilizacion-de-taludes.tsx)
  // =====================================================================
  'ID-estabilizacion-de-taludes.tsx': {
    id: 'ID-estabilizacion-de-taludes.tsx',
    items: [
      { src: 'https://tumuro.com/data2/images/estabilization-de-taludes/1.jpg', title: 'Pantalla atirantada reticulada de 20 m de altura con geomallas metálicas y geomantas verdes ECOGREEN. Res. Icabaru, Municipio Baruta. 2014' },
      { src: 'https://tumuro.com/data2/images/estabilization-de-taludes/2.jpg', title: 'Estabilización de talud de 20 m de altura con sistema de geomantas verdes y anclajes pasivos. Urb. El Cafetal, Municipio Baruta. 2011' },
      { src: 'https://tumuro.com/data2/images/estabilization-de-taludes/3.jpg', title: 'Construcción de pantalla atirantada de 14 m para estabilizar talud erosionado en el Club de Tenis de Santa Rosa de Lima. 2013' },
      { src: 'https://tumuro.com/data2/images/estabilization-de-taludes/4.jpg', title: 'Pantalla atirantada reticulada de 16 m para control de erosión y estabilización en el Barrio Santa Cruz, Municipio Baruta. 2011' },
      { src: 'https://tumuro.com/data2/images/estabilization-de-taludes/5.jpg', title: 'Estabilización de talud de 26 m de altura con sistema de geomantas sintéticas y geomallas metálicas. Bosque Valle, Distrito Capital. 2007' },
      { src: 'https://tumuro.com/data2/images/estabilization-de-taludes/6.jpg', title: 'Estabilización de talud de 16 m de altura con geomantas verdes ECOGREEN y anclajes pasivos. Urb. Las Mesetas. 2010' },
      { src: 'https://tumuro.com/data2/images/estabilization-de-taludes/7.jpg', title: 'Vista de construcción de pantalla atirantada de 14 m en Santa Rosa de Lima, Municipio Baruta. 2013' },
      { src: 'https://tumuro.com/data2/images/estabilization-de-taludes/8.jpg', title: 'Estabilización de talud de 14 m con geomantas verdes ECOGREEN en Guataparo Golf Club, Valencia. 2011' },
      { src: 'https://tumuro.com/data2/images/estabilization-de-taludes/9.jpg', title: 'Estabilización de talud de 10 m con geomantas verdes en cancha múltiple del Valle Arriba Athletic Club. 2012' },
      { src: 'https://tumuro.com/data2/images/estabilization-de-taludes/10.jpg', title: 'Sistema de geomantas verdes ECOGREEN fijadas con anclajes pasivos. Guataparo Golf Club, Estado Carabobo. 2011' },
      { src: 'https://tumuro.com/data2/images/estabilization-de-taludes/11.jpg', title: 'Estabilización de talud de 60 m de altura con geomantas verdes ECOGREEN en Urb. Alto Prado. 2010' },
      { src: 'https://tumuro.com/data2/images/estabilization-de-taludes/12.jpg', title: 'Detalle de sistema de geomantas y geomallas metálicas en talud de 26 m. Bosque Valle, 2007' },
      { src: 'https://tumuro.com/data2/images/estabilization-de-taludes/13.jpg', title: 'Estabilización de talud de 40 m de altura con sistema de geomantas verdes ECOGREEN. Urb. El Cafetal. 2011' },
      { src: 'https://tumuro.com/data2/images/estabilization-de-taludes/14.jpg', title: 'Perforación con equipos de rotopercusión para hincado de anclajes pasivos. Cerro El Salto, Tinaco. 2015' },
      { src: 'https://tumuro.com/data2/images/estabilization-de-taludes/15.jpg', title: 'Pantalla atirantada reticulada de 16 m con geomantas verdes ECOGREEN. Barrio Santa Cruz, 2011' },
      { src: 'https://tumuro.com/data2/images/estabilization-de-taludes/16.jpg', title: 'Estabilización de talud de 20 m de altura en Res. Golden Park, Colinas de Bello Monte. 2014' },
      { src: 'https://tumuro.com/data2/images/estabilization-de-taludes/17.jpg', title: 'Construcción de pantalla atirantada reticulada de 20 m de altura en Urb. El Cafetal. 2014' },
      { src: 'https://tumuro.com/data2/images/estabilization-de-taludes/18.jpg', title: 'Pantalla atirantada de 16 m para estabilizar talud en el Desarrollo Alto Verde, Los Teques. 2008' },
      { src: 'https://tumuro.com/data2/images/estabilization-de-taludes/19.jpg', title: 'Estabilización de talud mediante pantalla atirantada reticulada de 16 m. Barrio Santa Cruz, Municipio Baruta. 2011' }
    ]
  },
  // =====================================================================
  // Final del bloque de galeria
  // =====================================================================

// =====================================================================
  // 16. REFORESTACIÓN (reforestacion.tsx)
  // =====================================================================
  'ID-reforestacion.tsx': {
    id: 'ID-reforestacion.tsx',
    items: [
      { src: 'https://tumuro.com/data2/images/reforestacion/1.jpg', title: 'Reforestación de muro reforzado de 24 m de altura, estabilizado con geomallas ECOGREEN. Alto Verde, Los Teques. 2006' },
      { src: 'https://tumuro.com/data2/images/reforestacion/2.jpg', title: 'Reforestación de muro reforzado de 12 m de altura en la Etapa 5 de la Urb. Alto Verde. 2007' },
      { src: 'https://tumuro.com/data2/images/reforestacion/3.jpg', title: 'Reforestación de talud de 40 m de altura con geomallas metálicas y geomantas verdes ECOGREEN. Cerro El Salto, Tinaco. 2015' },
      { src: 'https://tumuro.com/data2/images/reforestacion/4.jpg', title: 'Detalle de vegetación en muro reforzado de 12 m, Urb. Alto Verde. 2007' },
      { src: 'https://tumuro.com/data2/images/reforestacion/5.jpg', title: 'Muro reforzado reforestado de 12 m en la etapa final de crecimiento vegetal. Alto Verde. 2008' },
      { src: 'https://tumuro.com/data2/images/reforestacion/6.jpg', title: 'Estabilización de talud de 26 m con sistema de geomantas sintéticas y anclajes pasivos. Bosque Valle. 2007' },
      { src: 'https://tumuro.com/data2/images/reforestacion/7.jpg', title: 'Reforestación de talud estabilizado de 26 m de altura, sistema ECOGREEN. Bosque Valle, Distrito Capital. 2007' },
      { src: 'https://tumuro.com/data2/images/reforestacion/8.jpg', title: 'Reforestación de muro de tierra reforzada con geomallas de poliéster en Urb. Oripoto, El Hatillo. 2009' },
      { src: 'https://tumuro.com/data2/images/reforestacion/9.jpg', title: 'Enfajinado en talud de 40 m estabilizado con geomantas verdes en la Autopista Prados del Este. 2010' },
      { src: 'https://tumuro.com/data2/images/reforestacion/10.jpg', title: 'Muro de tierra reforzada de 5 m reforestado en Conjunto Villa de Campo, Los Naranjos. 2007' },
      { src: 'https://tumuro.com/data2/images/reforestacion/11.jpg', title: 'Estabilización de taludes con geomantas verdes ECOGREEN en el campo de golf de Guataparo, Valencia. 2011' },
      { src: 'https://tumuro.com/data2/images/reforestacion/12.jpg', title: 'Reforestación de terraplén reforzado de 600 m de largo en la margen del Río Castán, Valera. 2012' },
      { src: 'https://tumuro.com/data2/images/reforestacion/13.jpg', title: 'Talud reforestado de 30 m de altura en la Autopista Prados del Este, Municipio Baruta. 2010' },
      { src: 'https://tumuro.com/data2/images/reforestacion/14.jpg', title: 'Proceso de enfajinado en talud estabilizado de 26 m de altura. Bosque Valle. 2007' },
      { src: 'https://tumuro.com/data2/images/reforestacion/15.jpg', title: 'Estabilización de talud de 10 m con sistema de geomantas verdes en Valle Arriba Athletic Club. 2011' },
      { src: 'https://tumuro.com/data2/images/reforestacion/16.jpg', title: 'Control de erosión en taludes con geomallas metálicas y cobertura vegetal, Guataparo. 2011' },
      { src: 'https://tumuro.com/data2/images/reforestacion/17.jpg', title: 'Vista panorámica de reforestación de talud de 40 m en Cerro El Salto, Estado Cojedes. 2015' },
      { src: 'https://tumuro.com/data2/images/reforestacion/18.jpg', title: 'Detalle de anclajes pasivos en talud de 40 m con geomantas verdes. Cerro El Salto. 2015' },
      { src: 'https://tumuro.com/data2/images/reforestacion/19.jpg', title: 'Reforestación de talud de 30 m estabilizado con sistema ECOGREEN en Prados del Este. 2011' },
      { src: 'https://tumuro.com/data2/images/reforestacion/20.jpg', title: 'Demostración de cómo la vegetación se entrelaza con el sistema reticular de las geomallas ECOGREEN.' }
    ]
  },
  // =====================================================================
  // Final del bloque de galeria
  // =====================================================================


// =====================================================================
  // 17. CANALIZACIONES (canalizaciones.tsx)
  // =====================================================================
  'ID-canalizaciones.tsx': {
    id: 'ID-canalizaciones.tsx',
    items: [
      { src: 'https://tumuro.com/data2/images/canalizaciones/1.jpg', title: 'Canalización y reconstrucción de muros ciclópeos en Quebrada Caroata, Quinta Crespo. 2004' },
      { src: 'https://tumuro.com/data2/images/canalizaciones/2.jpg', title: 'Delimitación y Control de Erosión con Muro de Gavión de 6 m en Río San Pedro, Alto Verde. 2006' },
      { src: 'https://tumuro.com/data2/images/canalizaciones/3.jpg', title: 'Canalización y embaulamiento con muros de concreto armado en Quebrada Alto Verde. 2008' },
      { src: 'https://tumuro.com/data2/images/canalizaciones/4.jpg', title: 'Canalización y saneamiento con sistema rígido y muros ciclópeos en la Quebrada Caroata. 2004' },
      { src: 'https://tumuro.com/data2/images/canalizaciones/5.jpg', title: 'Construcción de canal de concreto armado para río artificial en Parque El Agua, Edo. Aragua. 2016' },
      { src: 'https://tumuro.com/data2/images/canalizaciones/6.jpg', title: 'Canalización con Muros de Gavión para control de erosión hídrica en Izcaragua Country Club. 2009' },
      { src: 'https://tumuro.com/data2/images/canalizaciones/7.jpg', title: 'Muro de Gavión Reforzado con geomallas para control de erosión en margen del Río San Pedro. 2007' },
      { src: 'https://tumuro.com/data2/images/canalizaciones/8.jpg', title: 'Control de Erosión con Muros de Gavión en márgenes de río en campos de golf, Guarenas. 2009' },
      { src: 'https://tumuro.com/data2/images/canalizaciones/9.jpg', title: 'Reconstrucción con muros ciclópeos de canales marginales en Quinta Crespo. 2004' },
      { src: 'https://tumuro.com/data2/images/canalizaciones/10.jpg', title: 'Canales y Presas de retención de sedimentos con Cestas de Gavión ECOGREEN en Los Teques. 2008' },
      { src: 'https://tumuro.com/data2/images/canalizaciones/11.jpg', title: 'Enrocado para protección de dique con cestas de Gavión ECOGREEN en Río Castán, Trujillo. 2012' },
      { src: 'https://tumuro.com/data2/images/canalizaciones/12.jpg', title: 'Muro de Gavión para delimitar cauce y controlar erosión en margen del Rio San Pedro. 2006' },
      { src: 'https://tumuro.com/data2/images/canalizaciones/13.jpg', title: 'Detalle de canalización con muros de gavión en campos de golf, Edo. Miranda. 2009' },
      { src: 'https://tumuro.com/data2/images/canalizaciones/14.jpg', title: 'Sistema de protección de márgenes mediante gaviones en Izcaragua Country Club. 2009' },
      { src: 'https://tumuro.com/data2/images/canalizaciones/15.jpg', title: 'Construcción de celdas en concreto para sala de bombas en Parque El Agua, Palo Negro. 2016' },
      { src: 'https://tumuro.com/data2/images/canalizaciones/16.jpg', title: 'Vista estructural de canalización hídrica en zonas recreativas. 2009' },
      { src: 'https://tumuro.com/data2/images/canalizaciones/17.jpg', title: 'Canal de concreto para infraestructura hídrica artificial en Estado Aragua. 2016' },
      { src: 'https://tumuro.com/data2/images/canalizaciones/18.jpg', title: 'Muro de Gavión para control de erosión en el Club Izcaragua, Guarenas. 2009' },
      { src: 'https://tumuro.com/data2/images/canalizaciones/19.jpg', title: 'Excavación a máquina para construcción de canal con cestas de Gavión. 2009' },
      { src: 'https://tumuro.com/data2/images/canalizaciones/20.jpg', title: 'Muros de Gavión para canalización y control de erosión hídrica en Guarenas. 2009' }
    ]
  },
  // =====================================================================
  // Final del bloque de galeria
  // =====================================================================



// =====================================================================
  // 18. DIQUES Y PRESAS (diques-y-presas.tsx)
  // =====================================================================
  'ID-diques-y-presas.tsx': {
    id: 'ID-diques-y-presas.tsx',
    items: [
      { src: 'https://tumuro.com/media/diques-y-presas/grid-diques-y-presas/1.jpg', title: 'Construcción de dique de protección con gaviones en curso de agua natural.' },
      { src: 'https://tumuro.com/media/diques-y-presas/grid-diques-y-presas/2.jpg', title: 'Presa de retención de sedimentos mediante sistemas modulares ECOGREEN.' },
      { src: 'https://tumuro.com/media/diques-y-presas/grid-diques-y-presas/3.jpg', title: 'Estructura de control hídrico para prevención de inundaciones.' },
      { src: 'https://tumuro.com/media/diques-y-presas/grid-diques-y-presas/4.jpg', title: 'Detalle de dique flexible adaptado a la topografía del cauce.' },
      { src: 'https://tumuro.com/media/diques-y-presas/grid-diques-y-presas/5.jpg', title: 'Sistema de protección de riberas y control de flujo.' },
      { src: 'https://tumuro.com/media/diques-y-presas/grid-diques-y-presas/6.jpg', title: 'Presa filtrante construida con tecnología de gaviones de doble torsión.' },
      { src: 'https://tumuro.com/media/diques-y-presas/grid-diques-y-presas/7.jpg', title: 'Vista aérea de proyecto de canalización y diques de contención.' },
      { src: 'https://tumuro.com/media/diques-y-presas/grid-diques-y-presas/8.jpg', title: 'Mantenimiento y estabilidad de taludes en zonas de embalse.' },
      { src: 'https://tumuro.com/media/diques-y-presas/grid-diques-y-presas/9.jpg', title: 'Aplicación de geomallas en el refuerzo de presas de tierra.' },
      { src: 'https://tumuro.com/media/diques-y-presas/grid-diques-y-presas/10.jpg', title: 'Control de erosión en el vertedero de una presa de retención.' },
      { src: 'https://tumuro.com/media/diques-y-presas/grid-diques-y-presas/11.jpg', title: 'Dique longitudinal para la recuperación de márgenes fluviales.' },
      { src: 'https://tumuro.com/media/diques-y-presas/grid-diques-y-presas/12.jpg', title: 'Ingeniería hidráulica aplicada para el manejo de cauces de montaña.' }
    ]
  },
  // =====================================================================
  // Final del bloque de galeria
  // =====================================================================


// =====================================================================
  // 19. PROTECCIÓN DE RIBERAS (proteccion-de-riberas.tsx)
  // =====================================================================
  'ID-proteccion-de-riberas.tsx': {
    id: 'ID-proteccion-de-riberas.tsx',
    items: [
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/1.jpg', title: 'Canalización y reconstrucción de muros ciclópeos en Quebrada Caroata, Caracas. 2004' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/2.jpg', title: 'Protección de planta de tratamiento con Muro de Gavión de 6 m en Río San Pedro. 2006' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/3.jpg', title: 'Base de Muro de Gavión Reforzado de 25 m de altura en Desarrollo Alto Verde. 2006' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/4.jpg', title: 'Protección de Terraplén Reforzado con gaviones ECOGREEN en Río Castan, Edo. Trujillo. 2012' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/5.jpg', title: 'Terraplén Reforzado para protección contra inundaciones de Centro Hospitalario, Trujillo. 2012' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/6.jpg', title: 'Muro de Gavión para control de erosión en margen del Rio San Pedro, Los Teques. 2006' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/7.jpg', title: 'Terraplén de protección hidráulica de 600 m de largo en el Río Castan. 2012' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/8.jpg', title: 'Muros de Gavión para control de erosión en campos de golf, Izcaragua Country Club. 2009' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/9.jpg', title: 'Reconstrucción de canales marginales con muros ciclópeos en Sector Quinta Crespo. 2004' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/10.jpg', title: 'Reconstrucción de falla de borde con Muro de Gavión en vialidad principal, Alto Verde. 2007' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/11.jpg', title: 'Terraplén Reforzado de 6 m de alto para protección de infraestructura hospitalaria. 2012' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/12.jpg', title: 'Estabilización de Troncal 005 con Muro de Gavión de 130 m, Tinaco, Edo. Cojedes. 2015' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/13.jpg', title: 'Control de erosión con Muro de Gavión Reforzado en planta de tratamiento hídrico. 2007' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/14.jpg', title: 'Protección con enrocado y gaviones ECOGREEN de terraplén reforzado, Valera. 2012' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/15.jpg', title: 'Construcción de Muro de Gavión para control de erosión en Rio La Guama, Cojedes. 2015' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/16.jpg', title: 'Control de erosión hídrica en la quebrada Izcaragua mediante gaviones. 2009' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/17.jpg', title: 'Vista panorámica de protección marginal en el Rio La Guama, Tinaco. 2015' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/18.jpg', title: 'Protección y estabilización de la Troncal 005 con muros rígidos y gaviones. 2015' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/19.jpg', title: 'Construcción longitudinal de muros de gavión en margen del Rio La Guama. 2015' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/20.jpg', title: 'Protección de márgenes de quebrada en el Campo de Golf del Club Izcaragua. 2009' },
      { src: 'https://tumuro.com/data2/images/proteccion-de-riberas/21.jpg', title: 'Sistema integral de protección contra inundaciones con gaviones y enrocado, Trujillo. 2012' }
    ]
  },
  // =====================================================================
  // Final del bloque de galeria
  // =====================================================================



// =====================================================================
  // 20. MUROS DE CONCRETO ARMADO (muros-de-concreto-armado.tsx)
  // =====================================================================
  'ID-muros-de-concreto-armado.tsx': {
    id: 'ID-muros-de-concreto-armado.tsx',
    items: [
      { src: 'https://tumuro.com/data2/images/muros-de-concreto-armado/muros-de-concreto-armado1.jpg', title: 'Muros de concreto armado de 6 m de altura para ampliación de jardines en Bosque Valle, Caracas. 2010' },
      { src: 'https://tumuro.com/data2/images/muros-de-concreto-armado/muros-de-concreto-armado2.jpg', title: 'Construcción de muros de concreto armado para vivienda en Urb. Las Marías, El Hatillo. 2011' },
      { src: 'https://tumuro.com/data2/images/muros-de-concreto-armado/muros-de-concreto-armado3.jpg', title: 'Desarrollo de muros estructurales en el Conjunto Habitacional Bosque Valle, Distrito Capital. 2010' },
      { src: 'https://tumuro.com/data2/images/muros-de-concreto-armado/muros-de-concreto-armado4.jpg', title: 'Fundaciones y muros de concreto armado para infraestructura residencial en El Hatillo. 2011' },
      { src: 'https://tumuro.com/data2/images/muros-de-concreto-armado/muros-de-concreto-armado5.jpg', title: 'Construcción de muros para sala de bombas en Parque El Agua, Palo Negro, Edo. Aragua. 2016' },
      { src: 'https://tumuro.com/data2/images/muros-de-concreto-armado/muros-de-concreto-armado6.jpg', title: 'Canalización de río artificial con sistemas rígidos de concreto armado en Palo Negro. 2016' },
      { src: 'https://tumuro.com/data2/images/muros-de-concreto-armado/muros-de-concreto-armado7.jpg', title: 'Vaciado de concreto premezclado para serie de 40 muros en Bosque Valle. 2010' },
      { src: 'https://tumuro.com/data2/images/muros-de-concreto-armado/muros-de-concreto-armado8.jpg', title: 'Tanque de almacenamiento de agua construido con muros de concreto armado en Urb. La Unión. 2017' },
      { src: 'https://tumuro.com/data2/images/muros-de-concreto-armado/muros-de-concreto-armado9.jpg', title: 'Fundaciones para bases de toboganes en infraestructura recreativa, Estado Aragua. 2016' },
      { src: 'https://tumuro.com/data2/images/muros-de-concreto-armado/muros-de-concreto-armado10.jpg', title: 'Vista estructural de muros en proceso constructivo en Bosque Valle. 2010' },
      { src: 'https://tumuro.com/data2/images/muros-de-concreto-armado/muros-de-concreto-armado11.jpg', title: 'Detalle de armado de refuerzo metálico en muros de vivienda unifamiliar. 2011' },
      { src: 'https://tumuro.com/data2/images/muros-de-concreto-armado/muros-de-concreto-armado12.jpg', title: 'Construcción de canales hidráulicos de concreto armado en Parque El Agua. 2016' }
    ]
  },
  // =====================================================================
  // Final del bloque de galeria
  // =====================================================================















};
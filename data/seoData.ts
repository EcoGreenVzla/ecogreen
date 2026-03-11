// data/seoData.ts

export interface SEOContent {
  title: string;
  description: string;
  canonicalUrl: string;
}

export const seoData: Record<string, SEOContent> = {
  // =================================================================
  // PÁGINAS PRINCIPALES (Raíz de /pages)
  // =================================================================
  'ID-index.tsx': {
    title: "EcoGreen | Ingeniería Ecológica y Muros de Contención",
    description: "Expertos en sistemas de contención sostenibles, control de erosión y estabilización de taludes en Venezuela. Soluciones de ingeniería verde.",
    canonicalUrl: "https://tumuro.com/"
  },
  'ID-muros-de-contencion.tsx': {
    title: "Muros de Contención | Soluciones Flexibles y Rígidas",
    description: "Diseño y construcción de muros de contención. Especialistas en sistemas adaptables a diversos terrenos y necesidades estructurales.",
    canonicalUrl: "https://tumuro.com/muros-de-contencion"
  },
  'ID-control-de-erosion.tsx': {
    title: "Control de Erosión y Protección de Suelos",
    description: "Tecnologías avanzadas para la prevención de erosión, estabilización de taludes y recuperación de suelos degradados.",
    canonicalUrl: "https://tumuro.com/control-de-erosion"
  },
  'ID-vialidad.tsx': {
    title: "Ingeniería Vial y Pavimentación Sostenible",
    description: "Soluciones especializadas para infraestructura vial, refuerzo de asfalto y estabilización de bases para carreteras.",
    canonicalUrl: "https://tumuro.com/vialidad"
  },
  'ID-petroleo.tsx': {
    title: "Ingeniería y Protección para la Industria Petrolera",
    description: "Servicios técnicos y productos especializados para la contención y protección en infraestructuras del sector petróleo y gas.",
    canonicalUrl: "https://tumuro.com/petroleo"
  },
  'ID-obras-civiles.tsx': {
    title: "Construcción y Obras Civiles de Alta Ingeniería",
    description: "Ejecución de proyectos de ingeniería civil con enfoque en durabilidad, eficiencia estructural y respeto ambiental.",
    canonicalUrl: "https://tumuro.com/obras-civiles"
  },
  'ID-campos-de-aplicacion.tsx': {
    title: "Campos de Aplicación | Ingeniería Geoecológica",
    description: "Sectores de aplicación: minería, industria, urbanismo, protección ambiental y obras hidráulicas.",
    canonicalUrl: "https://tumuro.com/campos-de-aplicacion"
  },
  'ID-casos-de-obras.tsx': {
    title: "Casos de Éxito | Portafolio de Proyectos Ejecutados",
    description: "Galería de obras de ingeniería civil y ecológica realizadas con experiencia y calidad demostrada.",
    canonicalUrl: "https://tumuro.com/casos-de-obras"
  },
  'ID-contacto.tsx': { // Este coincide con el pageID definido en contactanos.tsx
    title: "Contáctanos | Asesoría Técnica Especializada",
    description: "Solicita presupuestos y consultoría técnica para tus proyectos de muros de contención y control de erosión.",
    canonicalUrl: "https://tumuro.com/contactanos"
  },

 

  // =================================================================
  // CATEGORÍAS DE MUROS DE CONTENCIÓN
  // =================================================================
  'ID-sistemas-de-contencion-flexibles.tsx': {
    title: "Sistemas de Contención Flexibles | Ingeniería EcoGreen",
    description: "Soluciones de contención que se adaptan a los movimientos del terreno. Muros de tierra reforzada, gaviones y sistemas mixtos.",
    canonicalUrl: "https://tumuro.com/muros-de-contencion/sistemas-de-contencion-flexibles"
  },
  'ID-sistemas-de-contencion-rigidos.tsx': {
    title: "Sistemas de Contención Rígidos | Ingeniería EcoGreen",
    description: "Estructuras de concreto y pantallas atirantadas para máxima estabilidad en espacios reducidos y terrenos firmes.",
    canonicalUrl: "https://tumuro.com/muros-de-contencion/sistemas-de-contencion-rigidos"
  },
  'ID-sistemas-de-drenaje.tsx': {
    title: "Sistemas de Drenaje e Hidráulica | EcoGreen",
    description: "Manejo eficiente de aguas infiltradas y escorrentía para garantizar la vida útil de los muros de contención y terraplenes.",
    canonicalUrl: "https://tumuro.com/muros-de-contencion/sistemas-de-drenaje"
  },


 
  // =================================================================
  // SUB-PÁGINAS: SISTEMAS DE CONTENCIÓN FLEXIBLES
  // =================================================================
  'ID-muros-de-tierra-reforzada.tsx': {
    title: "Muros de Tierra Reforzada | Ingeniería EcoGreen",
    description: "Diseño y construcción de muros verdes de alta resistencia. Estabilización de suelos con geomallas de alto módulo y acabado reforestado.",
    canonicalUrl: "https://tumuro.com/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-tierra-reforzada"
  },
  'ID-muros-de-gavion.tsx': {
    title: "Muros de Gavión | Ingeniería EcoGreen",
    description: "Estructuras de contención permeables y flexibles mediante cestas metálicas de doble torsión rellenas de piedra para obras hidráulicas y viales.",
    canonicalUrl: "https://tumuro.com/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion"
  },
  'ID-muros-de-gavion-reforzados.tsx': {
    title: "Muros de Gavión Reforzados | Ingeniería EcoGreen",
    description: "Combinación técnica de tierra reforzada con fachada de gavión para máxima protección en márgenes de ríos y zonas de alta erosión.",
    canonicalUrl: "https://tumuro.com/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados"
  },
  'ID-muros-mixtos.tsx': {
    title: "Muros Mixtos de Contención | Ingeniería EcoGreen",
    description: "Soluciones versátiles que combinan gaviones y tierra reforzada para adaptarse a la disponibilidad de material y requisitos hidráulicos.",
    canonicalUrl: "https://tumuro.com/muros-de-contencion/sistemas-de-contencion-flexibles/muros-mixtos"
  },
  'ID-refuerzo-de-taludes-y-terraplenes.tsx': {
    title: "Refuerzo de Taludes y Terraplenes | Ingeniería EcoGreen",
    description: "Sistemas de contención reforestables mediante geomallas para el control de desprendimientos y corrimientos de suelo.",
    canonicalUrl: "https://tumuro.com/muros-de-contencion/sistemas-de-contencion-flexibles/refuerzo-de-taludes-y-terraplenes"
  },



  // =================================================================
  // SUB-PÁGINAS: SISTEMAS DE CONTENCIÓN RÍGIDOS
  // =================================================================
  'ID-muros-anclados-y-pantallas-atirantadas.tsx': {
    title: "Muros Anclados y Pantallas Atirantadas | Ingeniería EcoGreen",
    description: "Estabilización de taludes mediante anclajes activos y pasivos. Soluciones geotécnicas avanzadas para excavaciones profundas y control de deslizamientos.",
    canonicalUrl: "https://tumuro.com/muros-de-contencion/sistemas-de-contencion-rigidos/muros-anclados-y-pantallas-atirantadas"
  },
  'ID-muros-de-concreto-armado.tsx': {
    title: "Muros de Concreto Armado | Ingeniería EcoGreen",
    description: "Diseño y construcción de muros estructurales de concreto reforzado. Soluciones de alta durabilidad para contención de tierras y protección vial.",
    canonicalUrl: "https://tumuro.com/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-concreto-armado"
  },
  'ID-muros-de-ciclopeos.tsx': {
    title: "Muros Ciclópeos | Ingeniería EcoGreen",
    description: "Construcción de muros de concreto ciclópeo. Una solución tradicional, estética y económica para la estabilización de taludes de altura moderada.",
    canonicalUrl: "https://tumuro.com/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-ciclopeos"
  },
  'ID-pilotes-y-micropilotes.tsx': {
    title: "Pilotes y Micropilotes | Ingeniería EcoGreen",
    description: "Cimentaciones profundas y estabilización de deslizamientos activos mediante pilotes hincados y técnicas de Soil Nailing con micropilotes.",
    canonicalUrl: "https://tumuro.com/muros-de-contencion/sistemas-de-contencion-rigidos/pilotes-y-micropilotes"
  },


  // =================================================================
  // SUB-PÁGINAS (Categorías y Servicios en /pages)
  // =================================================================
  'ID-canalizaciones.tsx': {
    title: "Canalizaciones e Ingeniería Hidráulica",
    description: "Diseño y revestimiento de canales para el manejo seguro de escorrentías y prevención de erosión hídrica.",
    canonicalUrl: "https://tumuro.com/control-de-erosion/canalizaciones"
  },
  'ID-estabilizacion-de-taludes.tsx': {
    title: "Estabilización de Taludes y Laderas",
    description: "Evaluación y ejecución de obras para garantizar la seguridad de pendientes frente a fallas geológicas.",
    canonicalUrl: "https://tumuro.com/control-de-erosion/estabilizacion-de-taludes"
  },
  'ID-diques-y-presas.tsx': {
    title: "Diques y Presas de Contención",
    description: "Estructuras hidráulicas para el control de inundaciones y almacenamiento de recursos hídricos.",
    canonicalUrl: "https://tumuro.com/control-de-erosion/diques-y-presas"
  },
  'ID-industria-petroleo-y-gas.tsx': {
    title: "Ingeniería para la Industria de Petróleo y Gas",
    description: "Sistemas de protección y contención diseñados para operaciones petroleras exigentes.",
    canonicalUrl: "https://tumuro.com/campos-de-aplicacion/industria-petroleo-y-gas"
  },
 

  // =================================================================
  // GRUPO: CASOS DE OBRAS (/pages/casos-de-obras)
  // =================================================================
  'ID-obra-100.tsx': {
    title: "Caso de Obra #100 | Ingeniería EcoGreen",
    description: "Detalles técnicos y ejecución del proyecto #100 de contención y estabilización.",
    canonicalUrl: "https://tumuro.com/casos-de-obras/100"
  },
  'ID-obra-135.tsx': {
    title: "Caso de Obra #135 | Ingeniería EcoGreen",
    description: "Análisis técnico de la obra #135. Soluciones aplicadas en condiciones geológicas críticas.",
    canonicalUrl: "https://tumuro.com/casos-de-obras/135"
  },
  'ID-obra-150.tsx': {
    title: "Caso de Obra #150 | Ingeniería EcoGreen",
    description: "Proyecto #150: Soluciones integrales de ingeniería geoecológica y control de erosión.",
    canonicalUrl: "https://tumuro.com/casos-de-obras/150"
  },
  'ID-obra-200.tsx': {
    title: "Caso de Obra #200 | Ingeniería EcoGreen",
    description: "Hito de ingeniería #200. Demostración de eficiencia estructural y durabilidad ambiental.",
    canonicalUrl: "https://tumuro.com/casos-de-obras/200"
  },
  'ID-obra-215.tsx': {
    title: "Caso de Obra #215 | Ingeniería EcoGreen",
    description: "Detalles técnicos de la obra #215 enfocada en vialidad y contención de laderas.",
    canonicalUrl: "https://tumuro.com/casos-de-obras/215"
  },
  'ID-obra-255.tsx': {
    title: "Caso de Obra #255 | Ingeniería EcoGreen",
    description: "Proyecto #255: Aplicación de sistemas flexibles para la protección de infraestructura.",
    canonicalUrl: "https://tumuro.com/casos-de-obras/255"
  },
  'ID-obra-270.tsx': {
    title: "Caso de Obra #270 | Ingeniería EcoGreen",
    description: "Estudio de caso #270. Resultados de la implementación de sistemas rígidos de contención.",
    canonicalUrl: "https://tumuro.com/casos-de-obras/270"
  },
  'ID-obra-285.tsx': {
    title: "Caso de Obra #285 | Ingeniería EcoGreen",
    description: "Proyecto #285: Innovación en control de erosión hídrica y recuperación de áreas.",
    canonicalUrl: "https://tumuro.com/casos-de-obras/285"
  },
  'ID-obra-296.tsx': {
    title: "Caso de Obra #296 | Ingeniería EcoGreen",
    description: "Obra #296: Soluciones de ingeniería aplicadas a terrenos con alta complejidad geológica.",
    canonicalUrl: "https://tumuro.com/casos-de-obras/296"
  },
  'ID-obra-300.tsx': {
    title: "Caso de Obra #300 | Ingeniería EcoGreen",
    description: "Proyecto #300. Experiencia acumulada en soluciones de ingeniería sostenibles.",
    canonicalUrl: "https://tumuro.com/casos-de-obras/300"
  },
  'ID-obra-325.tsx': {
    title: "Caso de Obra #325 | Ingeniería EcoGreen",
    description: "Proyecto #325: Estabilización masiva de taludes y protección de infraestructura vial.",
    canonicalUrl: "https://tumuro.com/casos-de-obras/325"
  },



  // =================================================================
  // GRUPO: CAMPOS DE APLICACIÓN
  // =================================================================
  'ID-infraestructura-urbana.tsx': {
    title: "Infraestructura Urbana Sostenible | EcoGreen",
    description: "Soluciones de ingeniería verde para el desarrollo urbano: gestión de aguas de lluvia y mitigación de islas de calor.",
    canonicalUrl: "https://tumuro.com/campos-de-aplicacion/infraestructura-urbana"
  },
  'ID-construccion-civil.tsx': {
    title: "Soluciones para Construcción Civil | EcoGreen",
    description: "Aplicación de tecnologías geoecológicas en proyectos de edificación, estabilización de taludes y muros de contención.",
    canonicalUrl: "https://tumuro.com/campos-de-aplicacion/construccion-civil"
  },
  'ID-proteccion-ambiental.tsx': {
    title: "Protección Ambiental y Conservación | EcoGreen",
    description: "Acciones para el manejo responsable de ecosistemas mediante infraestructura verde y control de erosión.",
    canonicalUrl: "https://tumuro.com/campos-de-aplicacion/proteccion-ambiental"
  },
  'ID-sector-agricola.tsx': {
    title: "Ingeniería para el Sector Agrícola | EcoGreen",
    description: "Estabilización de vías agrícolas y protección de riberas para garantizar la continuidad de la producción alimentaria.",
    canonicalUrl: "https://tumuro.com/campos-de-aplicacion/sector-agricola"
  },
  'ID-vias-de-comunicacion.tsx': {
    title: "Vías de Comunicación y Vialidad | EcoGreen",
    description: "Refuerzo de pavimentos y reconstrucción de fallas de borde en carreteras y autopistas con sistemas sostenibles.",
    canonicalUrl: "https://tumuro.com/campos-de-aplicacion/vias-de-comunicacion"
  },
  'ID-obras-hidraulicas.tsx': {
    title: "Ingeniería en Obras Hidráulicas | EcoGreen",
    description: "Protección de cauces, construcción de diques y presas flexibles utilizando gaviones y mantos antisocavación.",
    canonicalUrl: "https://tumuro.com/campos-de-aplicacion/obras-hidraulicas"
  },
  'ID-mineria.tsx': {
    title: "Minería, Geología y Geotecnia | EcoGreen",
    description: "Estudios de suelo, prospección geológica y sistemas de contención para proyectos de explotación minera responsable.",
    canonicalUrl: "https://tumuro.com/campos-de-aplicacion/mineria-geologia-y-geotecnia"
  },


  // =================================================================
  // GRUPO: PRODUCTOS DE PETRÓLEO
  // =================================================================
  'ID-petroleo-1.tsx': {
    title: "Producto Petrolero 1 | Ingeniería EcoGreen",
    description: "Especificaciones técnicas y aplicaciones del producto especializado para el sector petróleo y gas.",
    canonicalUrl: "https://tumuro.com/petroleo/producto-1"
  },
  'ID-petroleo-2.tsx': {
    title: "Producto Petrolero 2 | Ingeniería EcoGreen",
    description: "Sistemas de protección y contención diseñados para operaciones petroleras exigentes.",
    canonicalUrl: "https://tumuro.com/petroleo/producto-2"
  },
  'ID-petroleo-3.tsx': {
    title: "Producto Petrolero 3 | Ingeniería EcoGreen",
    description: "Soluciones de ingeniería para infraestructura de transporte y almacenamiento de hidrocarburos.",
    canonicalUrl: "https://tumuro.com/petroleo/producto-3"
  },
  'ID-petroleo-4.tsx': {
    title: "Producto Petrolero 4 | Ingeniería EcoGreen",
    description: "Tecnología avanzada para el control de derrames y protección ambiental en zonas petroleras.",
    canonicalUrl: "https://tumuro.com/petroleo/producto-4"
  },
  'ID-petroleo-5.tsx': {
    title: "Producto Petrolero 5 | Ingeniería EcoGreen",
    description: "Mantenimiento y refuerzo de estructuras críticas en plantas y complejos petroquímicos.",
    canonicalUrl: "https://tumuro.com/petroleo/producto-5"
  }
};
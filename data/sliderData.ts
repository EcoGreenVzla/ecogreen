import { HeroSectionResponsive } from '../types';

export const sliderData: Record<string, HeroSectionResponsive> = {
  
  // =====================================================================
  // ECOGREEN (Home.tsx)
  // =====================================================================
  'index': {
    title: "ECOGREEN", // Sincronizado con navigation.ts
    subtitle: "LA MEJOR ALTERNATIVA TECNOLÓGICA Y ECONÓMICA",
    link: "/",
    desktopImages: [
      "https://tumuro.com/data1/images/muros-de-contencion/combined/muros-de-contencion1.jpg",
      "https://tumuro.com/data1/images/muros-de-contencion/combined/muros-de-contencion2.jpg",
      "https://tumuro.com/data1/images/muros-de-contencion/combined/muros-de-contencion3.jpg",
      "https://tumuro.com/data1/images/muros-de-contencion/combined/muros-de-contencion4.jpg",
      "https://tumuro.com/data1/images/muros-de-contencion/combined/muros-de-contencion5.jpg",
      "https://tumuro.com/data1/images/muros-de-contencion/combined/muros-de-contencion6.jpg"
    ],
    mobileImages: [
      "https://tumuro.com/data3/images/muro-de-tierra-reforzada1.png",
      "https://tumuro.com/data3/images/muro-de-gavion-reforzado1.png",
      "https://tumuro.com/data3/images/muro-de-gavion-reforzado2.png",
      "https://tumuro.com/data3/images/muro-de-gavion-reforzado3.png",
      "https://tumuro.com/data3/images/muro-de-tierra-reforzada2.png",
      "https://tumuro.com/data3/images/muro-de-gavion-reforzado4.png"
    ]
  },

  // =====================================================================
// MUROS DE CONCRETO ARMADO (ConcretoArmado.tsx)
// =====================================================================
'concreto-armado': {
  title: "MUROS DE CONCRETO ARMADO", // Sincronizado con navigation.ts y el header HTML
  subtitle: "UNA SOLUCIÓN TRADICIONAL CONFIABLE.", // Extraído de span #slider-p en el HTML
  link: "/muros-de-contencion/sistemas-rigidos/concreto-armado",
  
  desktopImages: [
    "https://tumuro.com/data1/images/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-concreto-armado/muros-de-concreto-armado.jpg"
  ],

  mobileImages: [
    "https://tumuro.com/data3/images/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-concreto-armado/muros-de-concreto-armado.jpg"
  ]
},
// =====================================================================
// CONSTRUCCIÓN CIVIL (ConstruccionCivil.tsx)
// =====================================================================
'construccion-civil': {
  title: "CONSTRUCCIÓN CIVIL", // Texto exacto del span en el HTML
  subtitle: "INFRAESTRUCTURA VERDE.", // Texto exacto del span #slider-p
  link: "/campos-de-aplicacion/construccion-civil",
  
  // RUTA DESKTOP: Extraída del contenedor #wowslider-container1
  desktopImages: [
    "https://tumuro.com/images/construccion-civil.jpg"
  ],

  // RUTAS MOBILE: Extraídas de la lista <ul> del #wowslider-container-mobile
  mobileImages: [
    "https://tumuro.com/images/construccion-civil2.jpg",
    "https://tumuro.com/images/construccion-civil3.jpg"
  ]
},

  // =====================================================================
  // MUROS DE CONTENCIÓN (MurosDeContencion.tsx)
  // =====================================================================
  'muros-de-contencion': {
    title: "MUROS DE CONTENCIÓN", // Sincronizado con navigation.ts
    subtitle: "SOLUCIONES VERDES, PRÁCTICAS Y ECONÓMICAS.",
    link: "/muros-de-contencion",
    desktopImages: [
      "https://tumuro.com/data1/images/muros-de-contencion/combined/muros-de-contencion1.jpg",
      "https://tumuro.com/data1/images/muros-de-contencion/combined/muros-de-contencion2.jpg",
      "https://tumuro.com/data1/images/muros-de-contencion/combined/muros-de-contencion3.jpg"
    ],
    mobileImages: [
      "https://tumuro.com/data3/images/muros-de-contencion/muro-de-gavion-reforzado1.png",
      "https://tumuro.com/data3/images/muros-de-contencion/muro-de-tierra-reforzada1.png"
    ]
  },

  // =====================================================================
// CANALIZACIONES (Canalizaciones.tsx)
// =====================================================================
'canalizaciones': {
  title: "CANALIZACIONES", // Extraído de wowslider title
  subtitle: "PROTECCIÓN DE LOS CAUCES.", // Extraído de span #slider-p
  link: "/control-de-erosion/canalizaciones",
  
  desktopImages: [
    "https://tumuro.com/data1/images/canalizaciones/MOROCHAS/MOROCHAS.jpg" //
  ],

  mobileImages: [
    "https://tumuro.com/data3/images/canalizaciones/mobiles/Foto-Banner-Derecha-Canalizaciones.jpg", //
    "https://tumuro.com/data3/images/canalizaciones/mobiles/Foto-Banner-Izquierda-Canalizaciones.jpg" //
  ]
},

  // =====================================================================
  // SISTEMAS FLEXIBLES (SistemasFlexibles.tsx)
  // =====================================================================
  'sistemas-flexibles': {
    title: "SISTEMAS FLEXIBLES", // Sincronizado con navigation.ts
    subtitle: "TECNOLOGÍA A PRUEBA DE ASENTAMIENTOS.",
    link: "/muros-de-contencion/sistemas-flexibles",
    desktopImages: [
      "https://tumuro.com/data1/images/muros-de-contencion/sistemas-de-contencion-flexibles/sistemas-de-contencion-flexibles-1.jpg",
      "https://tumuro.com/data1/images/muros-de-contencion/sistemas-de-contencion-flexibles/sistemas-de-contencion-flexibles-2.jpg"
    ],
    mobileImages: [
      "https://tumuro.com/data3/images/muros-de-contencion/sistemas-de-contencion-flexibles/talud-reforzado1.png"
    ]
  },


// =====================================================================
  // ESTABILIZACIÓN DE TALUDES (EstabilizacionTaludes.tsx)
  // =====================================================================
  'estabilizacion-taludes': {
    title: "ESTABILIZACIÓN DE TALUDES",
    subtitle: "SOLUCIONES ECOLÓGICAS PERMANENTES.", // Texto exacto del span #slider-p
    link: "/control-de-erosion/estabilizacion-taludes",
    
    // RUTA DESKTOP: Extraída de wowslider-container1
    desktopImages: [
      "https://tumuro.com/data1/images/estabilization-de-taludes/Morocha.JPG"
    ],

    // RUTAS MOBILE: Extraídas de wowslider-container-mobile
    mobileImages: [
      "https://tumuro.com/data3/images/estabilization-de-taludes/Morocha-Derecha.jpg",
      "https://tumuro.com/data3/images/estabilization-de-taludes/Morocha-Izquierda.jpg"
    ]
  },


  // =====================================================================
  // MUROS DE TIERRA REFORZADA (MurosDeTierraReforzada.tsx)
  // =====================================================================
  'muros-de-tierra-reforzada': {
    title: "MUROS DE TIERRA REFORZADA", // Sincronizado con navigation.ts
    subtitle: "SOLUCIONES VERDES DE ALTA RESISTENCIA.",
    link: "/muros-de-contencion/sistemas-flexibles/tierra-reforzada",
    desktopImages: ["https://tumuro.com/data1/images/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-tierra-reforzada/talud-reforzado1.jpg"],
    mobileImages: ["https://tumuro.com/data3/images/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-tierra-reforzada/talud-reforzado1.png"]
  },

// =====================================================================
  // MUROS DE GAVIÓN (Gavion.tsx)
  // =====================================================================
  'muros-de-gavion': {
    title: "MUROS DE GAVIÓN",
    subtitle: "LA SOLUCIÓN PARA LAS OBRAS HIDRÁULICAS.", // Texto exacto del span #slider-p
    link: "/muros-de-contencion/sistemas-flexibles/gavion",
    
    // RUTA DESKTOP: Extraída de wowslider-container1
    desktopImages: [
      "https://tumuro.com/data1/images/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion/muros-de-gavion.jpg"
    ],

    // RUTAS MOBILE: Extraídas de wowslider-container-mobile
    mobileImages: [
      "https://tumuro.com/data3/images/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion/muros-de-gavion.png"
    ]
  },
  
  // =====================================================================
  // MUROS DE GAVIÓN REFORZADO (GavionReforzado.tsx)
  // =====================================================================
  'gavion-reforzado': {
    title: "MUROS DE GAVIÓN REFORZADO", // Sincronizado con navigation.ts
    subtitle: "SISTEMAS ECOLÓGICOS PARA LA ARQUITECTURA.",
    link: "/muros-de-contencion/sistemas-flexibles/gavion-reforzado",
    desktopImages: ["https://tumuro.com/data1/images/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados/muros-de-gavion-reforzados.jpg"],
    mobileImages: ["https://tumuro.com/data3/images/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados/muros-de-gavion-reforzados.png"]
  },

  // =====================================================================
  // MUROS CICLÓPEOS (MurosCiclopeos.tsx)
  // =====================================================================
  'muros-de-ciclopeos': {
    title: "MUROS CICLÓPEOS", // Sincronizado con navigation.ts
    subtitle: "CUANDO LO COLONIAL IMPERA.",
    link: "/muros-de-contencion/sistemas-rigidos/muros-ciclopeos",
    desktopImages: ["https://tumuro.com/data1/images/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-ciclopeos/muros-de-ciclopeos.jpg"],
    mobileImages: ["https://tumuro.com/data3/images/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-ciclopeos/muros-de-ciclopeos.jpg"]
  },

// =====================================================================
// CONTROL DE EROSIÓN (ControlDeErosion.tsx)
// =====================================================================
'control-de-erosion': {
  title: "CONTROL DE EROSIÓN", // Sincronizado con navigation.ts
  subtitle: "LA PROTECCIÓN DEL SUELO.", // Texto extraído del span en el HTML
  link: "/control-de-erosion",
  
  // Rutas .webp verificadas en el código fuente proporcionado
  desktopImages: [
    "https://tumuro.com/media/control-de-erosion/sliders/rota-morocha-1.webp",
    "https://tumuro.com/media/control-de-erosion/sliders/rota-morocha-2.webp",
    "https://tumuro.com/media/control-de-erosion/sliders/rota-morocha-3.webp",
    "https://tumuro.com/media/control-de-erosion/sliders/rota-morocha-4.webp",
    "https://tumuro.com/media/control-de-erosion/sliders/rota-morocha-5.webp"
  ],

  mobileImages: [
    "https://tumuro.com/media/control-de-erosion/sliders/rota-morocha-1.webp",
    "https://tumuro.com/media/control-de-erosion/sliders/rota-morocha-2.webp",
    "https://tumuro.com/media/control-de-erosion/sliders/rota-morocha-3.webp",
    "https://tumuro.com/media/control-de-erosion/sliders/rota-morocha-4.webp",
    "https://tumuro.com/media/control-de-erosion/sliders/rota-morocha-5.webp"
  ]
},

  // =====================================================================
  // VIALIDAD (Vialidad.tsx)
  // =====================================================================
  'vialidad': {
    title: "VIALIDAD", // Sincronizado con navigation.ts
    subtitle: "INFRAESTRUCTURA VIAL SOSTENIBLE.",
    link: "/vialidad",
    desktopImages: ["https://tumuro.com/data1/images/muros-de-contencion/combined/muros-de-contencion4.jpg"],
    mobileImages: ["https://tumuro.com/data3/images/muro-de-gavion-reforzado2.png"]
  },

  // =====================================================================
  // PETRÓLEO (Petroleo.tsx)
  // =====================================================================
  'petroleo': {
    title: "PETRÓLEO", // Sincronizado con navigation.ts
    subtitle: "ESTABILIZACIÓN EN ÁREAS DE EXPLOTACIÓN.",
    link: "/petroleo",
    desktopImages: ["https://tumuro.com/data1/images/muros-de-contencion/combined/muros-de-contencion5.jpg"],
    mobileImages: ["https://tumuro.com/data3/images/muro-de-gavion-reforzado3.png"]
  },

// =====================================================================
  // CAMPOS DE APLICACIÓN (CamposDeAplicacionPage.tsx)
  // =====================================================================
  'campos-de-aplicacion': {
    title: "CAMPOS DE APLICACIÓN", // Detectado en el atributo title del HTML
    subtitle: "INFRAESTRUCTURA VERDE.", // Detectado en el span #slider-p del HTML
    link: "/campos-de-aplicacion",
    
    // Imágenes extraídas de la sección .slider-desktop (#wowslider-container1)
    desktopImages: [
      "https://tumuro.com/images/infraestructura-urbana.jpg"
    ],

    // Imágenes extraídas de la sección .slider-mobile (#wowslider-container-mobile)
    mobileImages: [
      "https://tumuro.com/images/infraestructura-urbana2.jpg",
      "https://tumuro.com/images/infraestructura-urbana3.jpg"
    ]
  },

  // =====================================================================
  // CASOS DE OBRAS (CasosDeObrasPage.tsx)
  // =====================================================================
  'casos-de-obras': {
    title: "CASOS DE OBRAS", // Sincronizado con navigation.ts
    subtitle: "NUESTRA EXPERIENCIA NOS RESPALDA.",
    link: "/casos-de-obras",
    desktopImages: ["https://tumuro.com/data1/images/casos-de-obras/casos-de-obras1.jpg"],
    mobileImages: ["https://tumuro.com/data3/images/casos-de-obras/casos-de-obras1.jpg"]
  },


// =====================================================================
  // DIQUES Y PRESAS (DiquesPresas.tsx)
  // =====================================================================
  'diques-y-presas': {
    title: "DIQUES Y PRESAS",
    subtitle: "EL CONTROL DEL AGUA.", // Texto exacto del span #slider-p
    link: "/control-de-erosion/diques-y-presas",
    
    // RUTA DESKTOP: Extraída de wowslider-container1
    desktopImages: [
      "https://tumuro.com/data1/images/diques-y-presas/Morocha-Diques-y-Presas.jpg"
    ],

    // RUTAS MOBILE: Extraídas de wowslider-container-mobile
    mobileImages: [
      "https://tumuro.com/data3/images/diques-y-presas/Morocha-Derecha-Diques-y-Presas.jpg",
      "https://tumuro.com/data3/images/diques-y-presas/Morocha-Izquierda-Diques-y-Presas.JPG"
    ]
  },


  // =====================================================================
  // CONTÁCTANOS (Contactanos.tsx)
  // =====================================================================
  'contactanos': {
    title: "CONTÁCTANOS", // Sincronizado con navigation.ts
    subtitle: "ESTAMOS PARA AYUDARLE EN SU PROYECTO.",
    link: "/contactanos",
    desktopImages: ["https://tumuro.com/data1/images/muros-de-contencion/combined/muros-de-contencion1.jpg"],
    mobileImages: ["https://tumuro.com/data3/images/muro-de-tierra-reforzada1.png"]
  },

  // IDs adicionales para detalles de obras (Casos específicos)
  '100': { title: "OBRA ECOGREEN 100", subtitle: "SISTEMA DE MUROS DE TIERRA REFORZADA.", desktopImages: ["https://tumuro.com/data1/images/casos-de-obras/100/100.jpg"], mobileImages: ["https://tumuro.com/data3/images/casos-de-obras/100/100.jpg"] },
  '150': { title: "OBRA ECOGREEN 150", subtitle: "ESTABILIZACIÓN DE TALUD CON GEOMANTAS.", desktopImages: ["https://tumuro.com/data1/images/casos-de-obras/150/150.jpg"], mobileImages: ["https://tumuro.com/data3/images/casos-de-obras/150/150.jpg"] },
  '200': { title: "OBRA ECOGREEN 200", subtitle: "PANTALLA ATIRANTADA Y CONTROL DE EROSIÓN.", desktopImages: ["https://tumuro.com/data1/images/casos-de-obras/200/200.jpg"], mobileImages: ["https://tumuro.com/data3/images/casos-de-obras/200/200.jpg"] },
  '215': { title: "OBRA ECOGREEN 215", subtitle: "RECONSTRUCCIÓN DE FALLA DE BORDE.", desktopImages: ["https://tumuro.com/data1/images/casos-de-obras/215/215.jpg"], mobileImages: ["https://tumuro.com/data3/images/casos-de-obras/215/215.jpg"] }




};
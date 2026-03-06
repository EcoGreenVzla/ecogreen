// Definimos una estructura flexible que no te bloquee en el futuro
export interface CasoDeObraPrincipal {
  id: number;
  image: string;
  title: string;
  description: string;
  type: string; // <--- Ahora acepta cualquier texto (Vialidad, Ribera, etc.)
}

export const casosDeObrasPrincipalesData: CasoDeObraPrincipal[] = [
  {
    id: 100,
    image: 'https://tumuro.com/media/obras/ppal/ECO100.PRINCIPAL.webp',
    title: 'ESTABILIZACIÓN Y CONTROL DE EROSIÓN',
    description: 'Estabilización de talud en Prados del Este.',
    type: 'Control de Erosión', 
  },
  {
    id: 150,
    image: 'https://tumuro.com/media/obras/ppal/ECO150.PRINCIPAL.webp',
    title: 'Construcción de Terraplén en el Rio Castán.',
    description: 'Construcción de Terraplén en el Rio Castán.',
    type: 'TERRAPLÉN SOBRE SUELO BLANDO',
  },
  {
    id: 200,
    image: 'https://tumuro.com/media/obras/ppal/ECO200.PRINCIPAL.webp',
    title: 'ESTABILIZACIÓN Y CONTROL DE EROSIÓN',
    description: 'Estabilización de talud en el Cerro El Salto.',
    type: 'Control de Erosión',
  },
  {
    id: 215,
    image: 'https://tumuro.com/media/obras/ppal/ECO215.PRINCIPAL.webp',
    title: 'Protección de ribera en el Rio La Guama.',
    description: 'Protección de ribera en el Rio La Guama.',
    type: 'Protección de Ribera',
  },
    {
    id: 135,
    image: 'https://tumuro.com/data2/images/casos-de-obras/135/ECO135_20.jpg',
    title: 'PROTECCION DE TALUD EN EL VALLE ARRIBA ATHLETIC CLUB',
    description: 'MURO DE TIERRA REFORZADA Y PROTECCION DE TALUD EN EL VALLE ARRIBA ATHLETIC CLUB',
    type: 'Muro de Tierra Reforzada',
  },
   {
    id: 270,
    image: 'https://tumuro.com/data2/images/casos-de-obras/270/ECO270_18.jpg',
    title: 'MURO DE TIERRA REFORZADA URB. CERRO VERDE',
    description: 'MURO DE TIERRA REFORZADA URB. CERRO VERDE',
    type: 'Muro de Tierra Reforzada',
  },
   {
    id: 300,
    image: 'https://tumuro.com/data2/images/casos-de-obras/300/ECO300_18.jpg',
    title: 'MURO DE TIERRA REFORZADA CANCHA ECUESTRE',
    description: 'MURO DE TIERRA REFORZADA. CANCHA ECUESTRE. PARACOTOS.',
    type: 'Muro de Tierra Reforzada',
  },
     {
    id: 255,
    image: 'https://tumuro.com/data2/images/casos-de-obras/255/ECO255_36.jpg',
    title: 'MURO DE TIERRA REFORZADA, CABALLERIZA',
    description: 'MURO DE TIERRA REFORZADA, CABALLERIZA PARACOTOS',
    type: 'Muro de Tierra Reforzada',
  },
       {
    id: 325,
    image: 'https://tumuro.com/data2/images/casos-de-obras/325/ECO325_29.jpg',
    title: 'MURO DE TIERRA REFORZADA',
    description: 'URB. ORIPOTO',
    type: 'Muro de Tierra Reforzada',
  },
     {
    id: 296,
    image: 'https://tumuro.com/data2/images/casos-de-obras/296/ECO296_47.jpg',
    title: 'MURO DE TIERRA REFORZADA Y PROTECCIÓN DE TALUDES QUEBRADA CARABALLO.',
    description: 'QUEBRADA CARABALLO.',
    type: 'Muro de Tierra Reforzada',
  },
     {
    id: 285,
    image: 'https://tumuro.com/data2/images/casos-de-obras/285/ECO285_18.jpg',
    title: 'CONTROL DE EROSIÓN HÍDRICA. TORRES DE TRANSMISIÓN DEL SISTEMA ELÉCTRICO NACIONAL. ',
    description: 'TORRES DE TRANSMISIÓN DEL SISTEMA ELÉCTRICO NACIONAL.',
    type: 'Control de Erosión',
  },
  
];
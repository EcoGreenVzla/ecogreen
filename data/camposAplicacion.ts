
export interface CampoAplicacion {
  id: number;
  title: string;
  icon: string;
  href: string;
}

export const camposData: CampoAplicacion[] = [
  { id: 1, title: 'INFRAESTRUCTURA URBANA', icon: 'https://tumuro.com/media/icons/ca-infraestructura-urbana-icon.png', href: '/campos-de-aplicacion/infraestructura-urbana' },
  { id: 2, title: 'CONSTRUCCIÓN CIVIL', icon: 'https://tumuro.com/media/icons/ca-construccion-civil-icon.png', href: '/campos-de-aplicacion/construccion-civil' },
  { id: 3, title: 'PROTECCIÓN AMBIENTAL', icon: 'https://tumuro.com/media/icons/ca-proteccion-ambiental-icon.png', href: '/campos-de-aplicacion/proteccion-ambiental' },
  { id: 4, title: 'INDUSTRIA, PETRÓLEO Y GAS', icon: 'https://tumuro.com/media/icons/ca-industria-petroleo-gas-icon.png', href: '/campos-de-aplicacion/industria-petroleo-gas' },
  { id: 5, title: 'SECTOR AGRÍCOLA', icon: 'https://tumuro.com/media/icons/ca-sector-agricola-icon.png', href: '/campos-de-aplicacion/sector-agricola' },
  { id: 6, title: 'VÍAS DE COMUNICACIÓN', icon: 'https://tumuro.com/media/icons/ca-vias-de-comunicacion-icon.png', href: '/campos-de-aplicacion/vias-comunicacion' },
  { id: 7, title: 'OBRAS HIDRÁULICAS', icon: 'https://tumuro.com/media/icons/ca-obras-hidraulicas-icon.png', href: '/campos-de-aplicacion/obras-hidraulicas' },
  { id: 8, title: 'MINERÍA, GEOLOGÍA Y GEOTECNIA', icon: 'https://tumuro.com/media/icons/ca-mineria-geologia-y-geotecnia-icon.png', href: '/campos-de-aplicacion/mineria-geotecnia' },
];

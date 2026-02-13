
export interface NavItemType {
  label: string;
  href: string;
  children?: NavItemType[];
  isMegaMenu?: boolean;
}

export interface CasoDeObra {
  id: number;
  title: string;
  thumbnail: string;
  type: 'Talud' | 'Terraplén' | 'Ribera';
  system: 'Flexible' | 'Rígido';
  category: 'Estabilización' | 'Refuerzo' | 'Protección';
}


// === NUEVA ESTRUCTURA PARA EL SLIDER RESPONSIVE (MIGRACIÓN) ===
export interface HeroSectionResponsive {
  title: string;
  subtitle?: string;
  link?: string;
  buttonText?: string;
  
  // Listas independientes de imágenes (URLs como texto simple)
  desktopImages: string[]; 
  mobileImages: string[];  
}
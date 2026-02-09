
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

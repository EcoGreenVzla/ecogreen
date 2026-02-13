import { NavItemType } from '../types';

export const navigationData: NavItemType[] = [
  { label: 'ECOGREEN', href: '/' },
  {
    label: 'MUROS DE\nCONTENCIÓN',
    href: '/muros-de-contencion',
    children: [
      {
        label: 'SISTEMAS DE CONTENCIÓN FLEXIBLES',
        href: '/muros-de-contencion/sistemas-flexibles',
        children: [
          { label: 'MUROS DE TIERRA REFORZADA', href: '/muros-de-contencion/sistemas-flexibles/tierra-reforzada' },
          { label: 'MUROS DE GAVIÓN', href: '/muros-de-contencion/sistemas-flexibles/gavion' },
          { label: 'MUROS DE GAVIÓN REFORZADOS', href: '/muros-de-contencion/sistemas-flexibles/gavion-reforzado' },
          { label: 'MUROS MIXTOS', href: '/muros-de-contencion/sistemas-flexibles/muros-mixtos' },
          { label: 'REFUERZO DE TALUDES Y TERRAPLENES', href: '/muros-de-contencion/sistemas-flexibles/refuerzo-taludes' },
        ],
      },
      {
        label: 'SISTEMAS DE CONTENCIÓN RÍGIDOS',
        href: '/muros-de-contencion/sistemas-rigidos',
        children: [
          { label: 'MUROS ANCLADOS Y PANTALLAS ATIRANTADAS', href: '/muros-de-contencion/sistemas-rigidos/muros-anclados' },
          { label: 'MUROS DE CONCRETO ARMADO', href: '/muros-de-contencion/sistemas-rigidos/concreto-armado' },
          { label: 'MUROS CICLÓPEOS', href: '/muros-de-contencion/sistemas-rigidos/muros-ciclopeos' },
          { label: 'PILOTES Y MICROPILOTES', href: '/muros-de-contencion/sistemas-rigidos/pilotes-micropilotes' },
        ],
      },
      { label: 'SISTEMAS DE DRENAJE', href: '/muros-de-contencion/sistemas-drenaje' },
    ],
  },
  {
    label: 'CONTROL DE\nEROSIÓN',
    href: '/control-de-erosion',
    children: [
      { label: 'ESTABILIZACIÓN DE TALUDES', href: '/control-de-erosion/estabilizacion-taludes' },
      { label: 'REFUERZO DE TALUDES Y TERRAPLENES', href: '/control-de-erosion/refuerzo-terraplenes' },
      { label: 'REFORESTACIÓN', href: '/control-de-erosion/reforestacion' },
      { label: 'CANALIZACIONES', href: '/control-de-erosion/canalizaciones' },
      { label: 'DIQUES Y PRESAS', href: '/control-de-erosion/diques-presas' },
      { label: 'PROTECCIÓN DE RIBERAS', href: '/control-de-erosion/proteccion-riberas' },
    ],
  },
  { label: 'VIALIDAD', href: '/vialidad' },
  {
    label: 'PETRÓLEO',
    href: '/petroleo',
    children: [
        { label: 'PRODUCTO / SERVICIO 1', href: '/petroleo/producto-1' },
        { label: 'PRODUCTO / SERVICIO 2', href: '/petroleo/producto-2' },
        { label: 'PRODUCTO / SERVICIO 3', href: '/petroleo/producto-3' },
        { label: 'PRODUCTO / SERVICIO 4', href: '/petroleo/producto-4' },
        { label: 'PRODUCTO / SERVICIO 5', href: '/petroleo/producto-5' },
    ]
  },
  {
    label: 'CAMPOS DE\nAPLICACIÓN',
    href: '/campos-de-aplicacion',
    children: [
        { label: 'INFRAESTRUCTURA URBANA', href: '/campos-de-aplicacion/infraestructura-urbana' },
        { label: 'CONSTRUCCIÓN CIVIL', href: '/campos-de-aplicacion/construccion-civil' },
        { label: 'PROTECCIÓN AMBIENTAL', href: '/campos-de-aplicacion/proteccion-ambiental' },
        { label: 'INDUSTRIA, PETRÓLEO Y GAS', href: '/campos-de-aplicacion/industria-petroleo-gas' },
        { label: 'SECTOR AGRÍCOLA', href: '/campos-de-aplicacion/sector-agricola' },
        { label: 'VÍAS DE COMUNICACIÓN', href: '/campos-de-aplicacion/vias-comunicacion' },
        { label: 'OBRAS HIDRÁULICAS', href: '/campos-de-aplicacion/obras-hidraulicas' },
        { label: 'MINERÍA, GEOLOGÍA Y GEOTECNIA', href: '/campos-de-aplicacion/mineria-geotecnia' },
    ]
  },
  { 
    label: 'CASOS DE\nOBRAS', 
    href: '/casos-de-obras', 
    isMegaMenu: true,
    children: [
        { label: 'OBRA ECOGREEN #100', href: '/casos-de-obras/100' },
        { label: 'OBRA ECOGREEN #150', href: '/casos-de-obras/150' },
        { label: 'OBRA ECOGREEN #200', href: '/casos-de-obras/200' },
        { label: 'OBRA ECOGREEN #215', href: '/casos-de-obras/215' },
    ]
  },
  { label: 'CONTÁCTANOS', href: '/contactanos' },
];
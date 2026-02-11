
import { NavItemType } from '../types';

export const navigationData: NavItemType[] = [
  { label: 'INICIO', href: '/' },
  {
    label: 'MUROS DE CONTENCIÓN',
    href: '/muros-de-contencion',
    children: [
      {
        label: 'Sistemas Flexibles',
        href: '/muros-de-contencion/sistemas-flexibles',
        children: [
          { label: 'Muros Tierra Reforzada', href: '/muros-de-contencion/sistemas-flexibles/muros-tierra-reforzada' },
          { label: 'Gavión', href: '/muros-de-contencion/sistemas-flexibles/gavion' },
          { label: 'Gavión Reforzado', href: '/muros-de-contencion/sistemas-flexibles/gavion-reforzado' },
          { label: 'Muros Mixtos', href: '/muros-de-contencion/sistemas-flexibles/muros-mixtos' },
          { label: 'Refuerzo de Taludes', href: '/muros-de-contencion/sistemas-flexibles/refuerzo-taludes' },
        ],
      },
      {
        label: 'Sistemas Rígidos',
        href: '/muros-de-contencion/sistemas-rigidos',
        children: [
          { label: 'Muros Anclados / Pantallas', href: '/muros-de-contencion/sistemas-rigidos/muros-anclados' },
          { label: 'Concreto Armado', href: '/muros-de-contencion/sistemas-rigidos/concreto-armado' },
          { label: 'Muros Ciclópeos', href: '/muros-de-contencion/sistemas-rigidos/muros-ciclopeos' },
          { label: 'Pilotes y Micropilotes', href: '/muros-de-contencion/sistemas-rigidos/pilotes-micropilotes' },
        ],
      },
      { label: 'Sistemas de Drenaje', href: '/muros-de-contencion/sistemas-drenaje' },
    ],
  },
  {
    label: 'CONTROL DE EROSIÓN',
    href: '/control-de-erosion',
    children: [
      { label: 'Estabilización de Taludes', href: '/control-de-erosion/estabilizacion-taludes' },
      { label: 'Refuerzo de Terraplenes', href: '/control-de-erosion/refuerzo-terraplenes' },
      { label: 'Reforestación', href: '/control-de-erosion/reforestacion' },
      { label: 'Canalizaciones', href: '/control-de-erosion/canalizaciones' },
      { label: 'Diques y Presas', href: '/control-de-erosion/diques-presas' },
      { label: 'Protección de Riberas', href: '/control-de-erosion/proteccion-riberas' },
    ],
  },
  { label: 'VIALIDAD', href: '/vialidad' },
  {
    label: 'PETRÓLEO',
    href: '/petroleo',
    children: [
        { label: 'Producto / Servicio 1', href: '/petroleo/producto-1' },
        { label: 'Producto / Servicio 2', href: '/petroleo/producto-2' },
        { label: 'Producto / Servicio 3', href: '/petroleo/producto-3' },
        { label: 'Producto / Servicio 4', href: '/petroleo/producto-4' },
        { label: 'Producto / Servicio 5', href: '/petroleo/producto-5' },
    ]
  },
  {
    label: 'CAMPOS DE APLICACIÓN',
    href: '/campos-de-aplicacion',
    children: [
        { label: 'Infraestructura Urbana', href: '/campos-de-aplicacion/infraestructura-urbana' },
        { label: 'Construcción Civil', href: '/campos-de-aplicacion/construccion-civil' },
        { label: 'Protección Ambiental', href: '/campos-de-aplicacion/proteccion-ambiental' },
        { label: 'Industria, Petróleo y Gas', href: '/campos-de-aplicacion/industria-petroleo-gas' },
        { label: 'Sector Agrícola', href: '/campos-de-aplicacion/sector-agricola' },
        { label: 'Vías de Comunicación', href: '/campos-de-aplicacion/vias-comunicacion' },
        { label: 'Obras Hidráulicas', href: '/campos-de-aplicacion/obras-hidraulicas' },
        { label: 'Minería y Geotecnia', href: '/campos-de-aplicacion/mineria-geotecnia' },
    ]
  },
  { label: 'CASOS DE OBRAS', href: '/casos-de-obras', isMegaMenu: true },
  { label: 'CONTÁCTANOS', href: '/contactanos' },
];

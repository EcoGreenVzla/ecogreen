
import { NavItemType } from '../types';

export const navigationData: NavItemType[] = [
  { label: 'INICIO', href: '/' },
  {
    label: 'MUROS DE CONTENCIÓN',
    href: '/muros-de-contencion',
    children: [
      {
        label: 'Sistemas Flexibles',
        href: '#',
        children: [
          { label: 'Tierra Reforzada', href: '#' },
          { label: 'Gavión', href: '#' },
          { label: 'Gavión Reforzado', href: '#' },
          { label: 'Muros Mixtos', href: '#' },
          { label: 'Refuerzo de Taludes', href: '#' },
        ],
      },
      {
        label: 'Sistemas Rígidos',
        href: '#',
        children: [
          { label: 'Muros Anclados / Pantallas', href: '#' },
          { label: 'Concreto Armado', href: '#' },
          { label: 'Muros Ciclópeos', href: '#' },
          { label: 'Pilotes y Micropilotes', href: '#' },
        ],
      },
      { label: 'Sistemas de Drenaje', href: '#' },
    ],
  },
  {
    label: 'CONTROL DE EROSIÓN',
    href: '#',
    children: [
      { label: 'Estabilización de Taludes', href: '#' },
      { label: 'Refuerzo de Terraplenes', href: '#' },
      { label: 'Reforestación', href: '#' },
      { label: 'Canalizaciones', href: '#' },
      { label: 'Diques y Presas', href: '#' },
      { label: 'Protección de Riberas', href: '#' },
    ],
  },
  { label: 'VIALIDAD', href: '#' },
  {
    label: 'PETRÓLEO',
    href: '#',
    children: [
        { label: 'Producto / Servicio 1', href: '#' },
        { label: 'Producto / Servicio 2', href: '#' },
        { label: 'Producto / Servicio 3', href: '#' },
        { label: 'Producto / Servicio 4', href: '#' },
        { label: 'Producto / Servicio 5', href: '#' },
    ]
  },
  {
    label: 'CAMPOS DE APLICACIÓN',
    href: '#',
    children: [
        { label: 'Infraestructura Urbana', href: '#' },
        { label: 'Construcción Civil', href: '#' },
        { label: 'Protección Ambiental', href: '#' },
        { label: 'Industria, Petróleo y Gas', href: '#' },
        { label: 'Sector Agrícola', href: '#' },
        { label: 'Vías de Comunicación', href: '#' },
        { label: 'Obras Hidráulicas', href: '#' },
        { label: 'Minería y Geotecnia', href: '#' },
    ]
  },
  { label: 'CASOS DE OBRAS', href: '#', isMegaMenu: true },
  { label: 'CONTÁCTANOS', href: '#' },
];
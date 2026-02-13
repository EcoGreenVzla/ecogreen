import React from 'react';
// CAMBIO: Usamos Link de react-router-dom en lugar de next/link
import { Link } from 'react-router-dom'; 

interface GridItem {
  title: string;
  image: string;
  link?: string;
}

const infraItems: GridItem[] = [
  { title: "MUROS DE CONTENCIÓN", image: "https://tumuro.com/images/muros-de-contencion-cda.jpg", link: "/muros-de-contencion" },
  { title: "SISTEMAS DE CONTENCIÓN FLEXIBLES", image: "https://tumuro.com/images/sistemas-de-contencion-flexibles1.jpg", link: "/muros-de-contencion/sistemas-de-contencion-flexibles" },
  { title: "MUROS DE TIERRA REFORZADA", image: "https://tumuro.com/images/muros-de-tierra-reforzada-cda.jpg", link: "/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-tierra-reforzada" },
  { title: "MUROS DE GAVIÓN", image: "https://tumuro.com/images/muros-de-gavion-cda.jpg", link: "/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion" },
  { title: "MUROS DE GAVIÓN REFORZADOS", image: "https://tumuro.com/images/muros-de-gavion-reforzados-cda.jpg", link: "/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados" },
  { title: "MUROS MIXTOS", image: "https://tumuro.com/images/muros-mixtos-cda.jpg", link: "/muros-de-contencion/sistemas-de-contencion-flexibles/muros-mixtos" },
  { title: "REFUERZO DE TALUDES Y TERRAPLENES", image: "https://tumuro.com/images/refuerzo-de-taludes-y-terraplenes-cda.jpg", link: "/refuerzo-de-taludes-y-terraplenes" },
  { title: "SISTEMAS DE CONTENCIÓN RIGIDOS", image: "https://tumuro.com/images/sistemas-de-contencion-rigidos13.jpg", link: "/muros-de-contencion/sistemas-de-contencion-rigidos" },
  { title: "MUROS ANCLADOS Y PANTALLAS ATIRANTADAS", image: "https://tumuro.com/images/muros-anclados-y-pantallas-atirantadas-cda.jpg", link: "/muros-de-contencion/sistemas-de-contencion-rigidos/muros-anclados-y-pantallas-atirantadas" },
  { title: "MUROS DE CONCRETO ARMADO", image: "https://tumuro.com/images/muros-de-concreto-armado-cda.jpg", link: "/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-concreto-armado" },
  { title: "MUROS CICLÓPEOS", image: "https://tumuro.com/images/muros-ciclopeos-cda.jpg", link: "/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-ciclopeos" },
  { title: "PILOTES Y MICROPILOTES", image: "https://tumuro.com/images/pilotes-y-micropilotes-cda.jpg", link: "/muros-de-contencion/sistemas
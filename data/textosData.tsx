import React from 'react';

// Definimos la estructura que debe tener cada bloque de texto
export interface TextoData {
  title: string;
  iconSrc?: string;
  introContent: React.ReactNode;
  expandedContent?: React.ReactNode;
}

// Creamos el diccionario de textos al que accederemos por ID
export const textosData: Record<string, TextoData> = {
  
  // =====================================================================
  // 2. MUROS DE CONTENCIÓN (muros-de-contencion.tsx)
  // =====================================================================
  'ID-muros-de-contencion.tsx': {
    title: "Muros de Contención",
    iconSrc: "https://tumuro.com/media/banner-services/muros-de-contencion-icon.webp",
    introContent: (
      <>
        <p>
          Los muros de contención son estructuras construidas con el propósito de resistir las fuerzas ejercidas por la tierra contenida y transmitir esas fuerzas en forma segura a la fundación o a un sitio fuera de la masa susceptible a moverse. La finalidad de los muros de contención es proveer estabilidad contra la rotura de macizos de tierra o roca para evitar los deslizamientos causados por su peso propio o por empujes producidos por cargas externas.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          Los muros de contención están considerados como una de las técnicas de construcción más antiguas de la humanidad. Tomando en cuenta las construcciones de piedra existentes construidas por las civilizaciones prehistóricas. Sin embargo, su estudio utilizando modelos teóricos y su dimensionamiento en bases racionales comienza a desarrollarse en el siglo XVIII, cuando Coulomb en 1773 presentó su trabajo sobre la determinación del empuje lateral aplicado por el suelo sobre una estructura de contención.
        </p>
        <p>
          La mecánica de suelo moderna utiliza ampliamente el modelo desarrollado por Coulomb, tomando en cuenta que es una de las bases principales de los métodos corrientes de dimensionamientos de muros de contención. El análisis de un muro de contención consiste en el análisis del equilibrio del conjunto formado por el macizo de suelo y la propia estructura. Este equilibrio es afectado por las características de resistencia, deformabilidad, permeabilidad y por el peso propio de esos dos elementos.
        </p>
        <p>
          Posteriormente, en 1857 nace la teoría de Rankine, la cual se basa en las condiciones de esfuerzo en el suelo en un estado de equilibrio plástico. También se analiza la estabilidad por el método ordinario de las dovelas para taludes de suelos estratificados propuesto por Bishop en 1955.
        </p>
        <p>
          Existen varios tipos de muros de contención y cada uno de ellos tiene un método de cálculo y una geometría diferente, una forma de transmitir las cargas, un proceso constructivo y unos materiales que lo conforman. Estos tipos de muros los podemos clasificar en dos grandes grupos:
        </p>
      </>
    )
  },

   // =====================================================================
  //  Final del bloque de texto
  // =====================================================================

};
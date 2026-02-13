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
          La mecánica de suelo moderna utiliza ampliamente el modelo desarrollado por Coulomb, tomando en cuenta que es una de las bases principales de los métodos corrientes de dimensionamientos de muros de contención. El análisis de un muro de contención consiste en el análisis del equilibrio del conjunto formado por el macizo de suelo y la propia estructura.
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

  // =====================================================================
  // SISTEMAS DE CONTENCIÓN FLEXIBLES (sistemas-de-contencion-flexibles.tsx)
  // =====================================================================
  'ID-sistemas-de-contencion-flexibles.tsx': {
    title: "Sistemas de Contención Flexibles",
    introContent: (
      <>
        <p>
          Las estructuras flexibles son aquellas que son construidas con materiales deformables. Debido a esta característica estos muros pueden adaptarse a los movimientos y asentamientos del terreno dentro de los límites aceptables, sin que esto signifique la pérdida de estabilidad o el no cumplimiento eficiente de la función para la que fueron diseñados.
        </p>
        <br />
        <p>
          Las estructuras flexibles son las que más se adaptan a las necesidades de infraestructura urbana y vial de los países, debido a que son estructuras confiables y eficientes para la contención de taludes y terraplenes construidos en las diversas aplicaciones que exige la ingeniería moderna.
        </p>
        <br />
        <p>
          Entre las principales ventajas que ofrecen las estructuras flexibles podemos enumerar:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4 mt-4 font-medium text-gray-700">
            <li>Disponibilidad de los materiales geosintéticos que los conforman.</li>
            <li>Excelente tiempo de ejecución.</li>
            <li>Disponibilidad de los equipos y maquinarias especializadas para su construcción.</li>
            <li>No requiere de mano de obra calificada.</li>
            <li>Son consideradas como la solución más económica.</li>
        </ul>
      </>
    ) 
  },
  // =====================================================================
  //  Final del bloque de texto
  // =====================================================================

  // =====================================================================
  // 3. SISTEMAS DE CONTENCIÓN RÍGIDOS (sistemas-de-contencion-rigidos.tsx)
  // =====================================================================
  'ID-sistemas-de-contencion-rigidos.tsx': {
    title: "Sistemas de Contención Rígidos",
    iconSrc: "https://tumuro.com/media/banner-services/muros-de-contencion-icon.webp",
    introContent: (
      <>
        <p>
          Las estructuras rígidas son aquellas que son construidas con materiales que no aceptan cualquier tipo de deformación. Debido a esta característica estos muros presentan varias limitaciones técnicas en cuanto a su aplicación, como por ejemplo no permiten ningún tipo de deformaciones o asentamientos del suelo, esto trae como consecuencia que dependen de un excelente terreno de fundación para ser construidos. Otra de las limitaciones de este tipo de estructuras es que requieren de un eficiente sistema de drenaje para su óptimo funcionamiento.
        </p>
        <br />
        <p>
          Sin embargo algunas estructuras rígidas se presentan como la mejor solución en los casos donde las limitaciones de espacio son considerables, como por ejemplo: Taludes con pendientes muy fuertes, sótanos o cualquier estructura subterránea que deba ocupar el menor espacio posible para dar funcionalidad al espacio construido.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          Entre los muros de contención considerados como estructuras rígidas tenemos:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4 mt-4 font-medium text-gray-700">
            <li>Muros Anclados y Pantallas Atirantadas.</li>
            <li>Muros de Concreto Armado.</li>
            <li>Muros Ciclópeos.</li>
            <li>Pilotes y Micropilotes.</li>
        </ul>
      </>
    )
  },
  // =====================================================================
  // Final del bloque de texto
  // =====================================================================

  // =====================================================================
  // 4. CONTROL DE EROSIÓN (control-de-erosion.tsx)
  // =====================================================================
  'ID-control-de-erosion.tsx': {
    title: "Control de Erosión",
    iconSrc: "https://tumuro.com/images/control-de-erosion-icon-blue.png",
    introContent: (
      <>
        <p>
          La erosión es un fenómeno que se ocasiona debido a la migración de partículas finas del suelo, principalmente producido por la acción del viento y la lluvia, siendo las zonas más susceptibles aquellas que carecen de algún tipo de vegetación en su superficie. Es considerado también, como un proceso de desgaste y transporte de sedimentos del suelo, causado por el agua de lluvia y el escurrimiento superficial, este proceso a su vez es afectado por diversos factores como el clima, el tipo de suelo, la vegetación y la topografía del terreno.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          Los factores climáticos tienen un papel importante en la erosión hídrica, siendo las precipitaciones tanto en su intensidad como en su duración, el elemento desencadenante del proceso. No obstante, estas características de la lluvia y la relación que existe con la infiltración, la escorrentía y la pérdida de partículas del suelo, es muy compleja.
        </p>
        <p>
          Las <strong>GEOMANTAS ECOGREEN</strong> son mantos permanentes que cumplen la función de alojar en su arreglo dimensional el material orgánico necesario para la germinación de semillas y el crecimiento de la nueva vegetación, al mismo tiempo controlan la escorrentía reduciendo la velocidad del flujo de agua, minimizando las fuerzas erosivas aplicadas sobre el suelo.
        </p>
        <p>
          Una de las principales ventajas de las GEOMANTAS ECOGREEN es que son un sistema liviano de fácil manejo que no requiere de maquinaria pesada para su instalación. Esto permite intervenir taludes que presentan fuertes pendientes, donde para los sistemas convencionales es imposible llegar.
        </p>
      </>
    )
  },
  // =====================================================================
  // Final del bloque de texto
  // =====================================================================

  // =====================================================================
  // 5. CAMPOS DE APLICACIÓN (campos-de-aplicacion.tsx)
  // =====================================================================
  'ID-campos-de-aplicacion.tsx': {
    title: "",
    introContent: (
      <>
       
      </>
    )
  },
  // =====================================================================
  // Final del bloque de texto
  // =====================================================================

};
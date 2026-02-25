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




// =====================================================================
  // 6. SISTEMAS DE DRENAJE (sistemas-de-drenaje.tsx)
  // =====================================================================
  'ID-sistemas-de-drenaje.tsx': {
    title: "Sistemas de Drenaje",
    // iconSrc: "https://tumuro.com/media/banner-services/drenaje-icon.webp", // Opcional, si tienes un ícono para esta sección
    introContent: (
      <>
        <p>
          En cualquier obra de ingeniería es fundamental tener un manejo hidráulico adecuado, para evitar problemas posteriores. En terraplenes construidos para obras viales el enemigo principal es el agua, debido a que puede producir el deterioro del cuerpo del terraplén, socavándolo y arrastrando el material fino. Otro ejemplo cotidiano se presenta en la construcción de muros de contención tradicionales donde el desalojo del agua infiltrada es muy importante para evitar la sobre saturación y que ésta a su vez aumente las presiones sobre la cara del muro, ya que su función es retener suelo y no la presión hidrostática.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          Existen varios sistemas de drenaje ECOGREEN, entre ellos se encuentran los drenajes verticales, drenes planares, geotextiles no tejidos, geomembranas impermeables, geodrenes y el conocido dren francés. Adicionalmente a su función como elementos drenantes, todos estos sistemas también son aplicados en obras como protección, separación y filtración, en diversas aplicaciones como por ejemplo, rellenos sanitarios, túneles, estructuras subterráneas, canchas deportivas, jardines, vialidades, entre otros.
        </p>
        <p>
          Los drenes verticales ECOGREEN son estructuras flexibles que se encuentran en contacto con el suelo. Están constituidos por tres elementos; el principal es la geomalla de drenaje que cumple la función de conducción del agua percolada e infiltrada, hasta una tubería perforada longitudinal denominada geodren, que se encarga de evacuar el fluido. Estos geodrenes se instalan en la parte inferior de la superficie a drenar, y están envueltos por geotextiles no tejidos al igual que la geomalla denante. Su principal función es la filtración, permitiendo el paso de los fluidos y reteniendo las partículas del suelo. Este sistema sustituye al tradicional dren francés y es constantemente utilizado para el abatimiento del nivel freático.
        </p>
        <p>
          El dren planar ECOGREEN es exactamente igual al geocompuesto de drenaje vertical, la única variante es la posición horizontal de su instalación. Su mayor aplicación se encuentra en la construcción de terraplenes con suelos de alta plasticidad y alta compresibilidad, donde se presentan asentamientos que provocan serios hundimientos que amenazan la nivelación de la vía. Este problema también se presenta cuando se construyen edificaciones sobre suelos blandos donde la capacidad de carga es sumamente baja. Por ello resulta de gran importancia incorporar el sistema de drenaje planar ECOGREEN para separar suelos de diferente granulometría y evitar la contaminación entre ellos y al mismo tiempo previniendo la acumulación de agua para obtener una base bien drenada y seca.
        </p>
        <p>
          En las estructuras subterráneas y en los túneles es necesario evitar la presencia de agua infiltrada proveniente de las rocas fracturadas o del terreno circundante, debido a que causa un acelerado desgaste de la obra, reduciendo los parámetros de seguridad y aumentando los costos de mantenimiento. En los jardines, canchas deportivas y rellenos sanitarios también es muy importante mantener un óptimo equilibrio hidrológico y de drenaje para lograr conducir eficientemente las aguas pluviales y los lixiviados, para evitar la contaminación de los mantos freáticos y cuerpos de agua.
        </p>
        <p>
          Así mismo, la creciente utilización de geomembranas impermeables para el manejo del agua de lluvia en jardines y áreas verdes, se debe a que este sistema impide la infiltración de agua y elimina el arrastre de finos que causa la pérdida de la capacidad portante del suelo y produce deslizamientos.
        </p>
      </>
    )
  },
  // =====================================================================
  //  Final del bloque de texto
  // =====================================================================

// =====================================================================
  // 7. MUROS DE TIERRA REFORZADA (muros-de-tierra-reforzada.tsx)
  // =====================================================================
  'ID-muros-de-tierra-reforzada.tsx': {
    title: "Muros de Tierra Reforzada",
    introContent: (
      <>
        <p>
          El hombre siempre ha tratado de construir en zonas consideradas valiosas debido a su estética o posición geográfica, sin embargo estas zonas no siempre cuentan con buenas cimentaciones. Por esta razón a través de los siglos se ha desarrollado el concepto de suelo reforzado es verdaderamente antiguo ya que hace 3000 años los babilonios utilizaron ramas entrelazadas de palmera para reforzar sus monumentos. También se conoce que la gran muralla china construida hace más de 2000 años, contiene secciones en donde la arcilla y la arena fueron reforzadas con ramas.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          El sistema de muros de contención que ha tenido más éxito a nivel mundial en obras de infraestructura urbana y vial es el denominado muro de tierra reforzada o también conocido como muro verde. Este sistema soluciona el restablecimiento de las dimensiones de las vías falladas y reconstruye los deslizamientos de suelo en un período de tiempo muy corto. Este tipo de sistema de contención nació con la creación del sistema registrado “tierra armada” creado por el ingeniero francés Henry Vidal en el año 1960. Dicha técnica consiste en la inclusión de una serie de tiras metálicas que van amarradas a unas escamas de concreto prefabricadas que conforman la fachada del muro.
        </p>
        <p>
          Los muros de tierra reforzada construidos con productos geosintéticos se rigen bajo el mismo basamento teórico del sistema “tierra armada” con la diferencia que las tiras metálicas son sustituidas por geotextiles o por geomallas de diferentes tipos. Estos muros son considerados el mejor sistema de contención de la ingeniería contemporánea debido a que presentan muchas ventajas:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4 mt-4 font-medium text-gray-700">
            <li>Disponibilidad de los materiales geosintéticos que los conforman.</li>
            <li>Reutilización del material fallado en casos de derrumbes.</li>
            <li>Excelente tiempo de ejecución.</li>
            <li>Disponibilidad de equipos y maquinarias especializadas.</li>
            <li>No requiere de mano de obra calificada.</li>
            <li>Solución más económica.</li>
            <li>Mínimo impacto ambiental (fachada reforestada).</li>
        </ul>
        <p className="mt-4">
          Es muy importante resaltar la virtud que tienen los muros de tierra reforzada en cuanto al acabado de su fachada, tomando en cuenta que existe la flexibilidad de colocarles bloques, concreto proyectado, gaviones o reforestarlos con la vegetación de la zona, logrando minimizar el impacto ambiental armonizando ecológicamente el sistema de muro con el ambiente.
        </p>
      </>
    )
  },

  // =====================================================================
  //  Final del bloque de texto
  // =====================================================================









  // =====================================================================
  //  Final del bloque de texto
  // =====================================================================




// =====================================================================
  // 8. MUROS DE GAVIÓN (muros-de-gavion.tsx)
  // =====================================================================
  'ID-muros-de-gavion.tsx': {
    title: "Muros de Gavión",
    introContent: (
      <>
        <p>
          Los muros de contención construidos con gaviones tienen su origen en Europa y fue en el siglo XIX cuando por primera vez fueron empleados en su versión moderna. Esta técnica ha ido en crecimiento en cuanto a su utilización y campos de aplicación. En América Latina comenzaron a ser utilizados al inicio de los años 70 y hoy en día están siendo utilizados en todos los países del continente americano.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          Las cestas de gavión que conforman este tipo de muro de contención son elementos modulares de formas variadas, fabricadas a partir de mallas metálicas de doble torsión con orificios hexagonales, estas cestas son llenadas con piedras de diferente granulometría de forma manual o con maquinarias de construcción convencional.
        </p>
        <p>
          Las estructuras de gavión son muy ventajosas desde el punto de vista técnico y económico, ya que poseen un conjunto de características funcionales que los diferencian de los demás sistemas de contención. Entre las principales ventajas se encuentran:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4 mt-4 font-medium text-gray-700">
            <li>Excelente tiempo de ejecución y disponibilidad de materiales.</li>
            <li>No requiere de mano de obra calificada ni maquinaria pesada especializada.</li>
            <li>Estructuras monolíticas y altamente resistentes a la tracción.</li>
            <li>Gran flexibilidad: se adaptan a los movimientos del terreno sin perder estabilidad.</li>
            <li>Máxima permeabilidad: alivian por completo el empuje hidrostático.</li>
            <li>Ideales para la conformación de obras hidráulicas.</li>
        </ul>
      </>
    )
  },
  // =====================================================================
  // Final del bloque de textos
  // =====================================================================


  // =====================================================================
  // 9. MUROS DE GAVIÓN REFORZADOS (muros-de-gavion-reforzados.tsx)
  // =====================================================================
  'ID-muros-de-gavion-reforzados.tsx': {
    title: "Muros de Gavión Reforzados",
    introContent: (
      <>
        <p>
          Este tipo de sistema está compuesto en su estructura principal, por un muro de contención de tierra reforzada y su paramento o fachada está compuesta por cestas de gavión rellenas de piedras. Esta combinación de técnicas nos permite construir muros de tierra reforzada en las márgenes de ríos y en zonas costeras, debido a que la fachada de piedra con su respectivo geotextil no tejido como filtro, no permiten que el caudal de agua que drena por la cara del talud, produzca el arrastre de finos del material de relleno que conforman el muro de tierra reforzada.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          Cada parte que conforma los muros de gavión reforzado cumple una función primordial para el buen desempeño del sistema de contención. El material que cumple la función de anclaje está constituido por geotextiles tejidos o geomallas de refuerzo de alto modulo fabricadas de polipropileno, polietileno o poliéster, encargado de cortar la superficie de falla dentro del relleno. Las cestas de gavión rellenas de piedras garantizan el acabado final de la fachada. Juntos, ambos materiales deben estar amarrados íntimamente para garantizar la continuidad y resistir los esfuerzos de tracción.
        </p>
        <p className="mt-4 font-semibold">Las ventajas que ofrecen los muros de gavión reforzados son:</p>
        <ul className="list-disc list-inside space-y-2 pl-4 mt-2 font-medium text-gray-700">
            <li>Disponibilidad inmediata de materiales geosintéticos y cestas de gavión.</li>
            <li>Excelente tiempo de ejecución y uso de maquinaria convencional.</li>
            <li>Alta flexibilidad para adaptarse a deformaciones y movimientos del terreno.</li>
            <li>En casos de derrumbes, permite reutilizar el material fallado como relleno.</li>
            <li>Construcción eficiente en márgenes de río y costas con requerimiento reducido de material pétreo.</li>
            <li>No requiere de mano de obra calificada.</li>
        </ul>
      </>
    )
  },
  // =====================================================================
  // Final del bloque de texto
  // =====================================================================




// =====================================================================
  // 10. MUROS MIXTOS (muros-mixtos.tsx)
  // =====================================================================
  'ID-muros-mixtos.tsx': {
    title: "Muros Mixtos",
    introContent: (
      <>
        <p>
          Se denominan muros mixtos a la combinación de dos técnicas de sistemas de contención, esta modalidad se utiliza en los casos donde existen dos tipo de material de relleno para la conformación del muro de contención. Es muy importante señalar que la incidencia que tiene el material de relleno en el valor total de un muro de contención es muy importante, por esta razón es necesario evaluar antes de iniciar la estabilización de cualquier talud, la cercanía y disponibilidad de canteras o sitios donde sacar el material de préstamo, para minimizar la incidencia del relleno en el costo total de la obra.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          La combinación mas común es la construcción de un muro de gavión en la base y en la parte alta un muro de tierra reforzada, esto es debido a que en muchos casos existe la presencia de circulación de agua por la fachada de la base del muro y los gaviones tienen mejor comportamiento en las obras hidráulicas que los muros de tierra reforzada. Sin embargo sobre el muro de gavión se coloca un muro de tierra reforzada por ser el sistema más económico y más rápido de construir.
        </p>
        <p className="mt-4 font-semibold">Ventajas principales:</p>
        <ul className="list-disc list-inside space-y-2 pl-4 mt-2 font-medium text-gray-700">
            <li>Disponibilidad de los materiales que los conforman.</li>
            <li>Excelente tiempo de ejecución.</li>
            <li>Disponibilidad de los equipos y maquinarias especializadas para su construcción.</li>
            <li>No requiere de mano de obra calificada.</li>
            <li>Son muy flexibles ya que se adaptan a las deformaciones y movimientos del terreno, sin perder su estabilidad.</li>
            <li>Se adaptan a la disponibilidad del material de relleno para su conformación.</li>
        </ul>
      </>
    )
  },
  // =====================================================================
  // Final del bloque de textos
  // =====================================================================



// =====================================================================
  // 11. REFUERZO DE TALUDES Y TERRAPLENES (refuerzo-de-taludes-y-terraplenes.tsx)
  // =====================================================================
  'ID-refuerzo-de-taludes-y-terraplenes.tsx': {
    title: "Refuerzo de Taludes y Terraplenes",
    introContent: (
      <>
        <p>
          Al momento de iniciar la construcción de un terraplén, hay que tomar en cuenta los dos tipos más comunes de inestabilidad, como lo son los desprendimientos o corrimientos. Los desprendimientos o comúnmente llamados derrumbes son movimientos de suelo producidos por la falta de apoyo, debido a una escasa cantidad de terreno de soporte. En la mayoría de los casos se trata de rocas que caen por un talud, debido a la perdida del apoyo que la sustenta.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          Analizar la estabilidad de un talud realizado en macizos rocosos fracturados es parte de dos procesos. El primero es analizar la estructura del corte realizado para determinar si la orientación de las discontinuidades podría resultar en inestabilidad (análisis cinemático). El segundo paso requiere un análisis de estabilidad por el método del equilibrio límite para comparar las fuerzas resistentes contra las causantes de la falla.
        </p>
        <p>
          Los taludes y terraplenes reforzados con <strong>GEOMALLAS ECOGREEN</strong> se rigen bajo el mismo basamento teórico del sistema “Tierra Armada“, con la diferencia que las tiras metálicas son sustituidas con Geomallas de poliéster.
        </p>
        <p className="mt-4 font-semibold">Ventajas principales:</p>
        <ul className="list-disc list-inside space-y-2 pl-4 mt-2 font-medium text-gray-700">
            <li>Disponibilidad inmediata de materiales geosintéticos y equipos especializados.</li>
            <li>Reutilización del material fallado, eliminando a menudo la necesidad de material de préstamo.</li>
            <li>Excelente tiempo de ejecución y solución económica por no requerir mano de obra calificada.</li>
            <li>Bajo impacto ambiental: fachada completamente reforestada que armoniza con el entorno.</li>
        </ul>
      </>
    )
  },
  // =====================================================================
  // Final del bloque de texto
  // =====================================================================
// =====================================================================
  // 12. MUROS ANCLADOS Y PANTALLAS ATIRANTADAS (muros-anclados-y-pantallas-atirantadas.tsx)
  // =====================================================================
  'ID-muros-anclados-y-pantallas-atirantadas.tsx': {
    title: "Muros Anclados y Pantallas Atirantadas",
    introContent: (
      <>
        <p>
          En los últimos años se ha vuelto muy popular el uso de anclajes de acero en la estabilización de taludes. Los muros anclados incluyen los pernos metálicos para cumplir la función de sostenimiento de los bloques de roca que se encuentre en situación de inestabilidad. Esta tecnología minimiza la relajación o desprendimiento de los bloques de rocas; una vez que los bloques se encuentran sueltos es muy difícil recobrar la estabilidad completa del macizo, por eso la colocación de anclajes es fundamental.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          Existen dos técnicas principales en esta categoría:
        </p>
        
        <h3 className="text-xl font-bold mt-6 mb-2 text-ecogreen-blue uppercase">Anclajes Pasivos (Pernos individuales)</h3>
        <p>
          Constituidos por varillas de acero colocadas dentro de perforaciones inyectadas con cemento. El macizo de roca se refuerza por intermedio de la cabilla, evitando caídas de roca y deslizamientos en macizos fracturados.
        </p>
        <p className="mt-2 font-semibold">Ventajas de los anclajes pasivos:</p>
        <ul className="list-disc list-inside space-y-1 pl-4 mb-4 font-medium text-gray-700">
            <li>Estabilización de bloques individuales o puntos específicos.</li>
            <li>Técnica simple de instalación relativamente rápida.</li>
            <li>Disponibilidad de materiales y equipos especializados.</li>
            <li>Solución medianamente económica.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-2 text-ecogreen-blue uppercase">Anclajes Activos (Pantallas Atirantadas)</h3>
        <p>
          Consisten en la colocación de tirantes de acero anclados profundamente por debajo de la superficie de falla potencial y tensados mediante gatos hidráulicos. Producen fuerzas de compresión que aumentan la fricción y contrarrestan las fuerzas desestabilizadoras.
        </p>
        <p className="mt-2 font-semibold">Ventajas de las pantallas atirantadas:</p>
        <ul className="list-disc list-inside space-y-1 pl-4 font-medium text-gray-700">
            <li>Ideal para limitaciones severas de espacio (pendientes fuertes, sótanos).</li>
            <li>Construcción progresiva de arriba hacia abajo (descendente) durante la excavación.</li>
            <li>Permite excavar con seguridad junto a edificios o estructuras existentes.</li>
            <li>Capacidad para alcanzar alturas considerables.</li>
        </ul>
      </>
    )
  },
  // =====================================================================
  // Final del bloque de texto
  // =====================================================================




// =====================================================================
  // 13. MUROS CICLÓPEOS (muros-de-ciclopeos.tsx)
  // =====================================================================
  'ID-muros-de-ciclopeos.tsx': {
    title: "Muros Ciclópeos",
    introContent: (
      <>
        <p>
          Los muros ciclópeos o también llamados de concreto ciclópeo son una mezcla de concreto con cantos o bloques de roca dura. La proporción más utilizada en la mezcla es 60% de concreto y 40% de volumen de piedra. Es importante resaltar que a medida que aumente la proporción de piedra en la mezcla, aumenta también la posibilidad de agrietamiento del muro debido al aumento de zonas de debilidad estructural interna.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          Este tipo de técnica disminuye los volúmenes de concreto debido a la incorporación de grandes volúmenes de piedra. Sin embargo, este sistema no puede soportar esfuerzos de flexión grandes. Los muros de concreto ciclópeo son relativamente simples de construir e incluso se pueden adaptar a curvas y diferentes formas para proyectos arquitectónicos. Requieren de una cimentación excelente, ya que no permiten deformaciones. Su principal limitante es la altura, pues a partir de los 4.00 m comienzan a ser antieconómicos.
        </p>
        <p className="mt-4 font-semibold">Ventajas de esta técnica:</p>
        <ul className="list-disc list-inside space-y-1 pl-4 mt-2 font-medium text-gray-700">
            <li>Disponibilidad de los materiales que los conforman.</li>
            <li>Uso de equipos y maquinarias de construcción convencionales.</li>
            <li>No requiere de mano de obra calificada.</li>
            <li>Simplicidad constructiva.</li>
            <li>Alta adaptabilidad a diseños arquitectónicos variados.</li>
        </ul>
      </>
    )
  },
  // =====================================================================
  // Final del bloque de texto
  // =====================================================================


// =====================================================================
  // 14. PILOTES Y MICROPILOTES (pilotes-y-micropilotes.tsx)
  // =====================================================================
  'ID-pilotes-y-micropilotes.tsx': {
    title: "Pilotes y Micropilotes",
    introContent: (
      <>
        <p>
          Los pilotes hincados son considerados estructuras enterradas que son capaces de resistir esfuerzos a flexión, estos son colocados dentro del suelo atravesando la superficie de falla. Esta técnica es utilizada en ocasiones para la estabilización de deslizamientos activos poco profundos, ya que trabajan empotradas en el suelo firme por debajo de la falla.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          Para mejorar la rigidez y el comportamiento general del sistema, es común la utilización de estructuras de concreto armado para unir las cabezas de los pilotes. En casos donde la excavación previa es imposible, la construcción de pilas perforadas de 1,00 a 2,00 m de diámetro resulta una solución muy efectiva.
        </p>
        <p className="mt-4">
          Por otro lado, el <strong>Soil Nailing</strong> utiliza micropilotes vacíos capaces de movilizar resistencia a la tensión. A diferencia de los pilotes, los micropilotes (conformados por cabillas, vigas o tubos inyectados) no suelen resistir grandes cargas laterales a flexión, pero son sumamente eficientes en materiales fracturados o sueltos.
        </p>
        <p className="mt-4 font-semibold">Ventajas principales:</p>
        <ul className="list-disc list-inside space-y-1 pl-4 mt-2 font-medium text-gray-700">
            <li>Disponibilidad de materiales y equipos especializados.</li>
            <li>Tiempo de construcción relativamente rápido.</li>
            <li>Capacidad de construcción en sitios de difícil acceso.</li>
            <li>Alta eficiencia como refuerzo en materiales fracturados o sueltos.</li>
        </ul>
      </>
    )
  },
  // =====================================================================
  // Final del bloque de texto
  // =====================================================================


// =====================================================================
  // 15. ESTABILIZACIÓN DE TALUDES (estabilizacion-de-taludes.tsx)
  // =====================================================================
  'ID-estabilizacion-de-taludes.tsx': {
    title: "Estabilización de Taludes",
    introContent: (
      <>
        <p>
          En geotecnia es indispensable analizar la estabilidad o la posible inestabilidad de un talud a la hora de realizar un proyecto o una obra de construcción. La inestabilidad de un talud se puede producir por razones geológicas, como laderas posiblemente inestables, relieve, estratificación, meteorización, entre otros. Las <strong>GEOMANTAS ECOGREEN</strong> solucionan el problema de las inestabilidades superficiales generalmente con comportamientos paralelos al talud, en muchos casos en la zona de la capa vegetal.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          Las GEOMANTAS ECOGREEN son un sistema flexible para la estabilización de taludes fabricados a base de geomallas de poliéster de alto modulo y, en muchos casos, se presentan en combinación con mallas de alambres fuertemente galvanizados y anclajes pasivos. Este sistema constituye una solución económica y es considerado una excelente alternativa frente a estructuras rígidas de concreto.
        </p>
        <p>
          El proceso de instalación comienza con la limpieza, nivelación y perfilado de la superficie. Luego se coloca y tensa la geomanta mediante anclajes y planchas de fijación que garantizan la óptima transmisión de carga. Este sistema se adapta perfectamente a la topografía del terreno, evitando deslizamientos, deformaciones y desprendimientos.
        </p>
        <p className="mt-4">
          Es importante resaltar que las <strong>GEOMANTAS VERDES ECOGREEN</strong> son la técnica más rápida y económica actualmente. Además de su eficiencia técnica, ofrecen la ventaja ecológica de una cobertura vegetal final que armoniza con el medio ambiente y fomenta el desarrollo de <strong>INFRAESTRUCTURA VERDE</strong>.
        </p>
      </>
    )
  },
  // =====================================================================
  // Final del bloque de textos
  // =====================================================================

// =====================================================================
  // 16. REFORESTACIÓN (reforestacion.tsx)
  // =====================================================================
  'ID-reforestacion.tsx': {
    title: "Reforestación",
    introContent: (
      <>
        <p>
          Desde tiempos remotos se conoce el uso de la vegetación para controlar la erosión y estabilizar taludes. A partir de los años treinta comenzó a resurgir esta práctica de manera más científica y metódica, ganando popularidad en la última década debido al mayor nivel de conciencia ambiental y a la disponibilidad de parámetros técnicos que validan estas soluciones ecológicas.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          A finales de los sesenta se introdujeron los geosintéticos como las <strong>GEOMANTAS ECOGREEN</strong>, materiales capaces de soportar las condiciones químicas del suelo. En combinación con pastos especializados como el <strong>Vetiver</strong>, estas geomantas ofrecen una solución ideal: la alta resistencia a la tracción del polímero se une a la fuerza radicular de la planta, que ancla el suelo profundamente.
        </p>
        <p>
          Dependiendo de la necesidad paisajística, también se pueden utilizar especies como la gudelia, maní forrajero o flores de distintos colores para dar vistosidad. El éxito del sistema depende de buenas prácticas agrícolas: asegurar una óptima germinación para que el sistema radicular aporte evapotranspiración y abatimiento de la humedad.
        </p>
        <p className="mt-4 font-semibold">Consideraciones técnicas para el éxito:</p>
        <ul className="list-disc list-inside space-y-1 pl-4 mt-2 font-medium text-gray-700">
            <li>Análisis químico del suelo y aporte de material orgánico.</li>
            <li>Selección de la especie vegetal acorde al clima y topografía.</li>
            <li>Mantenimiento y riego constante durante la fase de establecimiento.</li>
            <li>Uso de geomallas de alto módulo para garantizar la estabilidad estructural inicial.</li>
        </ul>
        <p className="mt-4">
          Los muros de tierra reforzada reforestados son la técnica más económica y ecológica hoy día, contribuyendo activamente con la <strong>Infraestructura Verde</strong> urbana y rural.
        </p>
      </>
    )
  },
  // =====================================================================
  // Final del bloque de textos
  // =====================================================================


// =====================================================================
  // 17. CANALIZACIONES (canalizaciones.tsx)
  // =====================================================================
  'ID-canalizaciones.tsx': {
    title: "Canalizaciones",
    introContent: (
      <>
        <p>
          Un canal o canalización es una obra destinada al transporte de fluidos, para darle una dirección deseada. En la mayoría de los casos el fluido transportado es el agua. Los canales tienen como característica principal que son abiertos a la atmosfera y su conocimiento se remonta a milenios, desde Mesopotamia hasta el Imperio Romano y el antiguo Perú.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          La estabilidad de un curso de agua depende del equilibrio entre la acción del flujo y la resistencia de los materiales que constituyen el cauce. La necesidad de protección para estabilizar cursos de agua naturales es indispensable para limitar erosiones y proteger obras civiles ribereñas como terraplenes de carreteras, estribos de puentes y urbanismos.
        </p>
        <p>
          ECOGREEN utiliza principalmente <strong>revestimientos flexibles</strong> como las Geomantas Verdes de poliéster y las cestas de gavión metálicas. Estos sistemas garantizan la reducción de fugas, soportan los esfuerzos del flujo en taludes y fondo, y aportan condiciones favorables para el refuerzo de la vegetación existente.
        </p>
        <p className="mt-4">
          Los <strong>gaviones metálicos ECOGREEN</strong> presentan la ventaja de permitir obras sin desvíos del curso de agua, ya que son estructuras drenantes y permeables que eliminan el empuje hidrostático. Fabricados con malla hexagonal de doble torsión y recubrimiento galvanizado (y PVC en ambientes agresivos), cumplen con todas las normas internacionales de durabilidad.
        </p>
        <p className="mt-4 font-semibold">Tipos de canales según su geometría:</p>
        <ul className="list-disc list-inside space-y-1 pl-4 mt-2 font-medium text-gray-700">
            <li><strong>Canales Rectangulares:</strong> Utilizados en zonas urbanas con espacio limitado, a menudo embaulados totalmente.</li>
            <li><strong>Canales Trapezoidales:</strong> Comunes en zonas rurales y agrícolas para riego o recuperación de cursos naturales.</li>
        </ul>
      </>
    )
  },
  // =====================================================================
  // Final del bloque de textos
  // =====================================================================




// =====================================================================
  // 18. DIQUES Y PRESAS (diques-y-presas.tsx)
  // =====================================================================
  'ID-diques-y-presas.tsx': {
    title: "Diques y Presas",
    introContent: (
      <>
        <p>
          Un dique es una construcción diseñada específicamente para evitar el paso del agua y regular flujos hídricos. Puede ser de origen natural o construido por el hombre utilizando diversos materiales como tierra, mampostería de piedra u hormigón, y posee un carácter que puede ser permanente o temporal según los requerimientos de la obra.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          En la ingeniería moderna, los diques y presas construidos con sistemas flexibles representan una ventaja significativa. El uso de <strong>gaviones metálicos y colchonetas ECOGREEN</strong> permite la creación de estructuras que, además de retener el empuje hídrico, poseen una permeabilidad intrínseca que elimina las presiones hidrostáticas excesivas detrás del paramento.
        </p>
        <p>
          Estas estructuras son fundamentales en el control de crecidas, la protección de riberas y la generación de embalses. Al ser sistemas modulares, se adaptan a los asentamientos diferenciales del terreno sin perder su integridad estructural, algo que las estructuras rígidas de concreto simple no pueden lograr con la misma eficiencia.
        </p>
        <p className="mt-4 font-semibold">Ventajas de los sistemas EcoGreen en presas:</p>
        <ul className="list-disc list-inside space-y-1 pl-4 mt-2 font-medium text-gray-700">
            <li>Alta resistencia mecánica y durabilidad ante la erosión hidráulica.</li>
            <li>Capacidad de filtración y drenaje natural.</li>
            <li>Bajo impacto ambiental al permitir la integración de vegetación.</li>
            <li>Facilidad de transporte y montaje en sitios de difícil acceso fluvial.</li>
        </ul>
      </>
    )
  },
  // =====================================================================
  // Final del bloque de textos
  // =====================================================================

// =====================================================================
  // 19. PROTECCIÓN DE RIBERAS (proteccion-de-riberas.tsx)
  // =====================================================================
  'ID-proteccion-de-riberas.tsx': {
    title: "Protección de Riberas",
    introContent: (
      <>
        <p>
          Existen muchas riberas y costas que requieren protección contra la erosión hídrica, así como también obras civiles cuyas fundaciones están en contacto permanente con cursos de agua. Al proceso de sustracción de masa sólida a la roca o a la perdida de partículas finas del suelo por flujo de agua se le denomina <strong>Erosión Hídrica</strong>. ECOGREEN ofrece soluciones adaptadas según la granulometría del material disponible, desde gaviones metálicos hasta formaletas textiles innovadoras.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          En casos con material granular grueso, la solución ideal son las <strong>cestas de gavión metálicas ECOGREEN</strong>, fabricadas bajo normativa ASTM. Si se cuenta con material de relleno fino, recomendamos las <strong>formaletas textiles ECOGREEN</strong>: fundas de gran capacidad que, al llenarse con concreto, forman bloques de alta resistencia al impacto y la fricción, adaptándose a superficies irregulares incluso bajo el agua.
        </p>
        <p className="mt-4">
          Otra solución de vanguardia son los <strong>tubos geotextiles ECOGREEN</strong>. Fabricados con textiles tejidos de alto módulo, funcionan llenos de arena o lodo para aplicaciones costeras, construcción de espigones y confinamiento de islas artificiales. Estos sistemas incluyen mantos antisocavación dotados de lastres para mantener el contacto permanente con la superficie del lecho.
        </p>
        <p className="mt-4 font-semibold">Principales Obras Fluviales:</p>
        <ul className="list-disc list-inside space-y-1 pl-4 mt-2 font-medium text-gray-700">
            <li>Delimitación de cauces y protección de márgenes de ríos.</li>
            <li>Construcción de espigones y obras transversales para retención de sedimentos.</li>
            <li>Control de erosión en tomas y almacenes de agua ribereños.</li>
            <li>Modificación de pendientes del cauce para control de velocidad del caudal.</li>
            <li>Conformación de estructuras flexibles de revestimiento de orillas.</li>
        </ul>
      </>
    )
  },
  // =====================================================================
  // Final del bloque de textos
  // =====================================================================



// =====================================================================
  // 20. MUROS DE CONCRETO ARMADO (muros-de-concreto-armado.tsx)
  // =====================================================================
  'ID-muros-de-concreto-armado.tsx': {
    title: "Muros de Concreto Armado",
    introContent: (
      <>
        <p>
          Los muros de concreto armado pueden diseñarse para grandes alturas, inclusive superiores a los 10,00 m, aunque requieren de una excelente cimentación. Son económicamente viables hasta los 8,00 m de altura y representan una de las técnicas más extendidas globalmente para la estabilización de deslizamientos de taludes y terraplenes debido a su simplicidad constructiva.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          Estas estructuras están constituidas por masas de concreto reforzadas con varillas de acero, capaces de resistir las presiones laterales del suelo apoyándose en una cimentación por fuera de la masa inestable. El diseño incluye la estabilidad intrínseca contra volcamiento y deslizamiento, así como el análisis de esfuerzos cortantes y momentos internos.
        </p>
        <p className="mt-4">
          Existen diversos tipos según su geometría: los <strong>muros empotrados (cantilever)</strong> en forma de L o T invertida; los <strong>muros con contrafuertes</strong>, que aportan rigidez adicional; y los <strong>muros con estribos</strong>, que utilizan placas superiores horizontales para soportar mayores momentos. Es imperativo que cuenten con sistemas de drenaje y barbacanas para aliviar la presión hidrostática del agua represada.
        </p>
        <p className="mt-4 font-semibold">Ventajas principales:</p>
        <ul className="list-disc list-inside space-y-1 pl-4 mt-2 font-medium text-gray-700">
            <li>Disponibilidad universal de materiales (acero y concreto).</li>
            <li>Uso de métodos y maquinarias convencionales de construcción.</li>
            <li>No requiere de mano de obra altamente especializada.</li>
            <li>Capacidad de alcanzar alturas considerables bajo diseño riguroso.</li>
            <li>Solución estructural de larga durabilidad y probada eficiencia.</li>
        </ul>
      </>
    )
  },
  // =====================================================================
  // Final del bloque de textos
  // =====================================================================


// =====================================================================
  // 21. INFRAESTRUCTURA URBANA (infraestructura-urbana.tsx)
  // =====================================================================
  'ID-infraestructura-urbana.tsx': {
    title: "Infraestructura Urbana",
    introContent: (
      <>
        <p>
          ECOGREEN incorpora innumerables soluciones en diferentes campos de aplicación en la infraestructura urbana. Nuestras obras sirven de soporte para el desarrollo de actividades vitales en la organización estructural de las ciudades, abarcando sectores estratégicos como Transporte, Energía, Hidráulica, Telecomunicaciones y Edificaciones.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          Aportamos soluciones en el sector <strong>TRANSPORTE</strong> (carreteras, autopistas, puertos); infraestructura <strong>ENERGÉTICA</strong> (redes eléctricas, plantas térmicas y eólicas); infraestructura <strong>HIDRÁULICA</strong> (redes de alcantarillado, plantas de tratamiento y embalses); <strong>TELECOMUNICACIONES</strong> y el sector de <strong>EDIFICACIONES</strong> (viviendas, hospitales y parques).
        </p>
        <p className="mt-4">
          Fomentamos la incorporación de la <strong>INFRAESTRUCTURA VERDE</strong>, compuesta por suelos y vegetación, con el objetivo de mejorar la gestión del agua de lluvia, elevar la calidad del aire y reducir el efecto "Isla de Calor" en los ambientes construidos, mitigando así el impacto ambiental de las grandes obras.
        </p>
      </>
    )
  },
  // =====================================================================
  // Final del bloque de textos
  // =====================================================================


// =====================================================================
  // 22. CONSTRUCCIÓN CIVIL (construccion-civil.tsx)
  // =====================================================================
  'ID-construccion-civil.tsx': {
    title: "Construcción Civil",
    introContent: (
      <>
        <p>
          La industria de la construcción cumple un importante rol en el desarrollo de un país, satisfaciendo las necesidades de infraestructura de la mayoría de las actividades económicas y sociales. ECOGREEN cuenta con un gran grupo de profesionales en arquitectura, paisajismo, ingeniería y geotecnia para realizar estudios y proyectos integrales en cada aplicación.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          Contamos con un equipo multidisciplinario en el área operativa respaldado por maquinaria especializada que cumple con los estándares internacionales medioambientales. Nuestros servicios van dirigidos a solucionar problemas de estabilización de taludes, control de erosión y muros de contención utilizando diversas técnicas.
        </p>
        <p className="mt-4">
          En ECOGREEN fomentamos activamente las <strong>nuevas tecnologías ecológicas</strong>, ratificando nuestra filosofía de prácticas "VERDES" en pro del saneamiento ambiental e innovando en alternativas que ofrezcan una mayor factibilidad económica para nuestros clientes.
        </p>
      </>
    )
  },
  // =====================================================================
  // Final del bloque de textos
  // =====================================================================


// =====================================================================
  // 23. PROTECCIÓN AMBIENTAL (proteccion-ambiental.tsx)
  // =====================================================================
  'ID-proteccion-ambiental.tsx': {
    title: "Protección Ambiental",
    introContent: (
      <>
        <p>
          La conservación ambiental comprende un conjunto de acciones tendientes a un manejo, uso y cuidado responsable de los bienes comunes en un territorio determinado. El objetivo es asegurar el mantenimiento y potenciar las condiciones presentes de los ecosistemas, respetando la identidad y costumbres locales para las generaciones futuras.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          ECOGREEN fomenta la incorporación de la <strong>INFRAESTRUCTURA VERDE</strong>, compuesta principalmente por suelos y vegetación. Buscamos integrar áreas reforestadas y mejorar la gestión del agua de lluvia en ambientes construidos para mitigar el efecto "Isla de Calor" y elevar la calidad del aire.
        </p>
        <p className="mt-4 font-semibold">Nuestras principales soluciones ecológicas incluyen:</p>
        <ul className="list-disc list-inside space-y-1 pl-4 mt-2 font-medium text-gray-700">
            <li>Estabilización de taludes con geomantas verdes ECOGREEN.</li>
            <li>Muros reforestables de tierra reforzada con geomallas de poliéster.</li>
            <li>Obras hidráulicas, diques y canales con gaviones metálicos de bajo impacto.</li>
            <li>Separación de subrasantes con geosintéticos para reducir volúmenes de relleno.</li>
            <li>Sistemas de subdrenaje para el manejo eficiente de lixiviados y aguas pluviales.</li>
            <li>Construcción de rellenos sanitarios y lagunas de oxidación.</li>
        </ul>
      </>
    )
  },


  // =====================================================================
  // Final del bloque de textos
  // =====================================================================


// =====================================================================
  // 24. INDUSTRIA, PETRÓLEO Y GAS (industria-petroleo-y-gas.tsx)
  // =====================================================================
  'ID-industria-petroleo-y-gas.tsx': {
    title: "Industria, Petróleo y Gas",
    introContent: (
      <>
        <p>
          La industria petrolera incluye procesos globales de exploración, extracción, refinación, transporte y mercadotecnia del producto Petróleo y sus derivados. El petróleo es la materia prima de muchos productos químicos esenciales y alimenta un porcentaje muy alto del consumo de energía del mundo, siendo una industria crítica para la civilización industrializada.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          La industria se divide normalmente en tres fases donde las soluciones <strong>ECOGREEN</strong> aportan beneficios directos: <strong>Upstream</strong> (Exploración y extracción), <strong>Midstream</strong> (Transporte y almacenamiento) y <strong>Downstream</strong> (Refinación y distribución).
        </p>
        <p className="mt-4 font-semibold">Nuestras principales aplicaciones incluyen:</p>
        <ul className="list-disc list-inside space-y-1 pl-4 mt-2 font-medium text-gray-700">
            <li>Refuerzo y estabilización de vías de penetración en suelos blandos para zonas de difícil acceso.</li>
            <li>Estabilización de taludes y control de erosión con Ecomantos Verdes para rápida reforestación.</li>
            <li>Uso de geomallas de refuerzo para aumentar la capacidad de soporte en pavimentos sin grandes volúmenes de relleno.</li>
            <li>Sistemas de drenaje, rampas, terraplenes y protección de estribos de puentes.</li>
            <li>Construcción de diques, presas e impermeabilización de canales y lagunas para lodos de perforación.</li>
            <li>Suministro de tuberías y válvulas especializadas para procesos de extracción y transporte.</li>
        </ul>
        <p className="mt-4">
          En ECOGREEN ratificamos nuestra filosofía de negocio con conciencia de prácticas y políticas <strong>"VERDES"</strong>, innovando en alternativas de mayor factibilidad económica para el sector energético.
        </p>
      </>
    )
  },

   // =====================================================================
  // Final del bloque de textos
  // =====================================================================



// =====================================================================
  // 25. SECTOR AGRÍCOLA (sector-agricola.tsx)
  // =====================================================================
  'ID-sector-agricola.tsx': {
    title: "Sector Agrícola",
    introContent: (
      <>
        <p>
          Los aportes de ECOGREEN al sector agrícola son de suma importancia para garantizar la continuidad en los procesos de producción, industrialización y comercialización de productos alimenticios. Nuestras soluciones permiten solventar problemas críticos de operatividad que suelen presentarse en áreas rurales y de cultivo, especialmente durante las épocas de lluvia.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          Mediante la utilización de <strong>geomallas de refuerzo de alto módulo</strong>, ECOGREEN logra estabilizar las vías de penetración agrícola anegadas sin necesidad de transportar grandes volúmenes de material de relleno. Esto minimiza los tiempos de distribución de cosechas y asegura el acceso a zonas difíciles.
        </p>
        <p className="mt-4">
          Nuestras contribuciones clave al sector incluyen:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-4 mt-2 font-medium text-gray-700">
            <li>Estabilización de vialidad agrícola para el transporte de cosechas.</li>
            <li>Canalizaciones y protección de riberas para evitar inundaciones en sembradíos.</li>
            <li>Construcción de diques, presas y lagunas para el almacenamiento de agua de riego.</li>
            <li>Garantía de producción agrícola constante incluso en épocas de sequía.</li>
        </ul>
        <p className="mt-4">
          La agricultura es un pilar económico fundamental, y ECOGREEN se compromete con soluciones que promueven el desarrollo sustentable del campo.
        </p>
      </>
    )
  },

  // =====================================================================
  // Final del bloque de textos
  // =====================================================================


// =====================================================================
  // 26. VÍAS DE COMUNICACIÓN (vias-de-comunicacion.tsx)
  // =====================================================================
  'ID-vias-de-comunicacion.tsx': {
    title: "Vías de Comunicación",
    introContent: (
      <>
        <p>
          Las vías de comunicación forman la red vital urbana e interurbana que permite el desplazamiento de personas y bienes. ECOGREEN aporta soluciones integrales para calles, carreteras, vías de penetración agrícolas y petroleras, autopistas, puentes y túneles, optimizando rendimientos y extendiendo la vida útil de la infraestructura.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          Como promotores de la <strong>Infraestructura Verde</strong>, nuestras soluciones armonizan con la naturaleza siendo mínimamente invasivas. Nos especializamos en la reconstrucción de fallas de borde, el refuerzo de pavimentos con geomallas de alto módulo y la estabilización de suelos blandos para garantizar la seguridad vial.
        </p>
        <p className="mt-4 font-semibold">Nuestras aplicaciones en vialidad incluyen:</p>
        <ul className="list-disc list-inside space-y-1 pl-4 mt-2 font-medium text-gray-700">
            <li>Reconstrucción de fallas de borde con muros de contención flexibles y rígidos.</li>
            <li>Refuerzo de pavimentos para aumentar la capacidad de carga.</li>
            <li>Estabilización de vías de acceso a zonas petroleras y agrícolas.</li>
            <li>Sistemas de drenaje y subdrenaje para proteger el cuerpo de la vía.</li>
            <li>Protección de estribos de puentes y construcción de diques de defensa.</li>
            <li>Sistemas contra caída de rocas en cortes de carretera.</li>
        </ul>
      </>
    )
  },


  // =====================================================================
  // Final del bloque de textos
  // =====================================================================




// =====================================================================
  // 27. OBRAS HIDRÁULICAS (obras-hidraulicas.tsx)
  // =====================================================================
  'ID-obras-hidraulicas.tsx': {
    title: "Obras Hidráulicas",
    introContent: (
      <>
        <p>
          La accidentada topografía nacional es favorable para la construcción de obras hidráulicas. Las soluciones ECOGREEN se dividen en obras transversales (diques y presas) y longitudinales (protección de riberas y espigones). Estas infraestructuras de gran inversión requieren una vida útil garantizada, lograda a través de sistemas que se adapten a los asentamientos diferenciales de los cauces.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          Utilizando <strong>cestas de gavión metálicas ECOGREEN</strong> fabricadas a máquina, ofrecemos una solución flexible y permeable. A diferencia del concreto rígido, los gaviones permiten realizar obras sin desviar cursos de agua, ya que alivian el empuje hidrostático y funcionan eficientemente bajo grandes presiones sin necesidad de complejas fundaciones o ataguías.
        </p>
        <p className="mt-4 font-semibold">Tipos de Canales según Aplicación:</p>
        <ul className="list-disc list-inside space-y-1 pl-4 mt-2 font-medium text-gray-700">
            <li><strong>Canales Rectangulares:</strong> Ideales para zonas urbanas con espacio limitado, a menudo embaulados para permitir el paso de vías de comunicación.</li>
            <li><strong>Canales Trapezoidales:</strong> Utilizados en zonas rurales y agrícolas para riego, recuperación de cauces naturales y control de erosión a cielo abierto.</li>
        </ul>
        <p className="mt-4">
          Nuestros gaviones cuentan con recubrimiento galvanizado de zinc y, en ambientes agresivos, con recubrimiento de <strong>PVC</strong>, cumpliendo con todas las normas internacionales de durabilidad y bajo impacto ambiental.
        </p>
      </>
    )
  },

// =====================================================================
  // 28. MINERÍA, GEOLOGÍA Y GEOTECNIA (mineria-geologia-y-geotecnia.tsx)
  // =====================================================================
  'ID-mineria.tsx': {
    title: "Minería, Geología y Geotecnia",
    introContent: (
      <>
        <p>
          La minería es una actividad fundamental del sector primario dedicada a la extracción de minerales metálicos, no metálicos y energéticos. ECOGREEN cuenta con un departamento exclusivo en el área de geología y geotecnia encargado de proyectar y ejecutar planes de exploración y explotación minera bajo normativas internacionales y un estricto cuidado del medio ambiente.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <p>
          Ofrecemos soluciones integrales en todas las etapas de un proyecto minero, desde el plan inicial de exploración y delimitación hasta la puesta en marcha de plantas de extracción y procesamiento "llave en mano". Nuestros procedimientos geológicos cumplen con los estándares legales mundiales para garantizar la estabilidad del sector productivo y la preservación ecológica.
        </p>
        <p className="mt-4 font-semibold">Procesos clave que ejecutamos:</p>
        <ul className="list-disc list-inside space-y-1 pl-4 mt-2 font-medium text-gray-700">
            <li>Estudios de suelo previos con recuperación de núcleos e instalación de pozos.</li>
            <li>Levantamientos topográficos, geofísicos y geomática cartográfica.</li>
            <li>Geología de superficie y prospección en campo para mapas de exploración.</li>
            <li>Certificación de muestras y categorización de recursos minerales para mercados internacionales.</li>
            <li>Ejecución de proyectos y montaje de plantas de explotación en minas.</li>
            <li>Sistemas de contención para taludes y protección contra caída de rocas.</li>
        </ul>
      </>
    )
  },


  // =====================================================================
  // CASOS DE OBRAS (casos-de-obras.tsx)
  // =====================================================================
  'ID-casos-de-obras.tsx': {
    title: "Casos de Obras",
    introContent: (
      <>
        <p>
          En ECOGREEN nos sentimos orgullosos de mostrar la trayectoria y el éxito de nuestras intervenciones a nivel nacional. A continuación, presentamos una selección de proyectos emblemáticos donde la ingeniería verde ha garantizado la estabilidad estructural y armonía ambiental.
        </p>
      </>
    )
  },

// ...


// ... dentro de textosData
  'ID-obra-100.tsx': {
    title: "ESTABILIZACIÓN Y CONTROL DE EROSIÓN",
    introContent: (
      <>
        <h3 className="text-xl font-bold text-[#0E306F] mb-2 uppercase">OBRA ECOGREEN #100</h3>
        <p>
          Estabilización de talud de 30 m de alto por 120 m de largo, ubicado en la Autopista Prados del Este, a la altura del mural de la Urb. Santa Rosa de Lima. Municipio Baruta, Estado Miranda. Venezuela, 2009.
        </p>
      </>
    ),
    expandedContent: (
      <div className="space-y-4">
        <p>Este deslizamiento ocurrió en una de las principales autopistas de la ciudad de Caracas, La Autopista Prados del Este...</p>
        <p>El derrumbe ocurrió debido a que el talud no contaba con un sistema de recolección de aguas de lluvia eficiente...</p>
        <p>Para estabilizar el talud se construyó en la cresta un canal de concreto capaz de captar el agua de escorrentía...</p>
        <p>Finalmente sobre las Geomantas Verdes ECOGREEN, se colocaron Geomallas Metálicas de doble torsión ECOGREEN...</p>
        <p className="italic text-sm">La última foto presentada en la secuencia fue tomada en el año 2017, 8 años después de la culminación de la obra.</p>
      </div>
    )
  },
// ... dentro de textosData
  'ID-obra-150.tsx': {
    title: "TERRAPLÉN SOBRE SUELO BLANDO",
    introContent: (
      <>
        <h3 className="text-xl font-bold text-[#0E306F] mb-4 uppercase">OBRA ECOGREEN #150</h3>
        <p>
          Construcción de Terraplén de tierra reforzada de 6 m de alto por 600 m de largo, para incrementar la altura de la margen izquierda del Rio Castán, ubicado en Valera, Estado Trujillo. Venezuela, 2012.
        </p>
      </>
    ),
    expandedContent: (
      <div className="space-y-4">
        <p>En un terreno ubicado en la población de Pampanito de la ciudad de Valera, se proyectó construir un centro hospitalario... el nivel del rio superó la cresta e inundó todo el terreno paralizando la ejecución.</p>
        <p>Se diseñó un terraplén de 6 m de altura libre (7 m totales) utilizando Geomallas ECOGREEN de alto módulo Uniaxiales con resistencia de 50 kN/m para garantizar la estabilidad hidráulica.</p>
        <p>El diseño incorporó una protección con gaviones y colchonetas metálicas ECOGREEN en la cara interna para proteger contra impactos de rocas o troncos arrastrados por la corriente.</p>
        <p className="italic text-sm">El registro fotográfico incluye imágenes tomadas en 2015, 3 años después de la culminación de la obra.</p>
      </div>
    )
  },

  // ... dentro del objeto textosData
  'ID-obra-200.tsx': {
    title: "ESTABILIZACIÓN Y CONTROL DE EROSIÓN",
    introContent: (
      <>
        <h3 className="text-xl font-bold text-[#0E306F] mb-4 uppercase">OBRA ECOGREEN #200</h3>
        <p>
          Estabilización y Control de Erosión del Cerro El Salto, talud de 40 m de alto por 120 m de largo, ubicado en la Troncal 005 que une a Tinaquillo con San Carlos, Estado Cojedes. Venezuela, 2015.
        </p>
      </>
    ),
    expandedContent: (
      <div className="space-y-4">
        <p>El Cerro El Salto presentaba constantes deslizamientos que interrumpían el tránsito de una de las principales arterias viales del país, debido a la meteorización del esquisto y la saturación hídrica.</p>
        <p>Para la estabilización, se realizó el perfilado a máquina del material suelto y la construcción de terrazas y bermas para distribuir la altura del talud.</p>
        <p>Se instalaron anclajes pasivos de 1" a 3 m de profundidad, fijados con lechada de cemento, seguidos por la colocación de Geomantas Verdes ECOGREEN de alto módulo y Geomallas Metálicas de doble torsión.</p>
        <p>Finalmente, se realizó la reforestación con pasto y riego controlado durante los primeros meses para garantizar la cobertura vegetal del sistema.</p>
      </div>
    )
  },


  // ... dentro del objeto textosData
  'ID-obra-215.tsx': {
    title: "PROTECCIÓN DE RIBERA",
    introContent: (
      <>
        <h3 className="text-xl font-bold text-[#0E306F] mb-4 uppercase">OBRA ECOGREEN #215</h3>
        <p>
          Protección contra la erosión de 130 m de ribera de la margen derecha del Rio La Guama, ubicado en la progresiva 69+107 de la Troncal 005, Tinaco, Estado Cojedes. Venezuela, 2015.
        </p>
      </>
    ),
    expandedContent: (
      <div className="space-y-4">
        <p>El Rio La Guama se acerca de manera importante a la Troncal 005, produciendo fuerte erosión en el talud que sustenta la vía. Se diseñó una protección con un muro de cestas de gavión metálicas ECOGREEN de 130 m de largo por 6 m de altura.</p>
        <p>Las cestas fueron fabricadas con alambre calibre 12, fuertemente galvanizadas con Zinc y doble torsionado (malla 8 x 10 cm), cumpliendo con las normas ASTM A641 M y ASTM A856 M-98.</p>
        <p>Como factor de seguridad, se instalaron colchonetas de gavión de 30 cm de espesor al pie y cresta del muro para garantizar protección contra la socavación y adaptarse a posibles asentamientos del cauce.</p>
        <p>Todo el sistema respetó la geometría del meandro natural del río para minimizar el impacto ecológico en el curso de agua.</p>
      </div>
    )
  },
  'ID-obra-135.tsx': {
    title: "INFRAESTRUCTURA URBANA",
    introContent: (
      <>
        <h3 className="text-xl font-bold text-[#0E306F] mb-4 uppercase">OBRA ECOGREEN #135</h3>
        <p>
        ECOGREEN incorpora innumerables soluciones en diferentes campos de aplicación en la infraestructura urbana. Las obras proyectadas y ejecutadas por los profesionales de la arquitectura, urbanistas, ingenieros civiles, entre muchos otros, sirven de soporte para el desarrollo de otras actividades y su necesario funcionamiento en la organización estructural de las ciudades. Los aportes de las soluciones ECOGREEN abarcan muchos sectores importantes en los que se encuentran; el sector TRANSPORTE que contempla las calles, carreteras, autopistas, vías férreas, puertos y aeropuertos. La infraestructura ENERGÉTICA que incluye las redes eléctricas, transformación, distribución y alumbrado público, calefacción urbana, refinerías, oleoductos, gasoductos, plantas eólicas, térmicas y nucleares. Infraestructura HIDRÁULICA que agrupa todas las redes de recolección y reciclaje de residuos, vertederos y rellenos sanitarios, redes de desagüe y alcantarillado, embalses, depósitos, tratamiento y distribución de agua potable. Otro sector importante es las TELECOMUNICACIONES que está conformado por las obras de telefonía fija, redes de televisión, repetidoras, centrales, fibra óptica y celdas de telefonía celular. Y por último el sector de las EDIFICACIONES que abarca las principales obras de infraestructura que se encuentran más visibles y cercanas a las comunidades, como lo son las viviendas, instituciones educativas, comercios, industria, hospitales y centros de salud, parques, etc.
        </p>
      </>
    ),
    expandedContent: (
      <div className="space-y-4">
        <p>Las grandes obras de infraestructura, muchas veces generan impactos sociales y ambientales, poniendo en riesgo la salud y el bienestar de las comunidades afectadas, por lo que precisan de exhaustivos estudios de impacto ambiental previos a su realización.</p>
        <p> Es por esto que ECOGREEN fomenta la incorporación de la INFRAESTRUCTURA VERDE, que se compone principalmente por los suelos y la vegetación, y que tiene como objetivo incorporar mayor número de áreas reforestadas y mejorar la gestión del agua de lluvia de los ambientes construidos, para lograr beneficios laterales tales como; mejorar la calidad del aire y reducir el efecto "Isla de Calor"</p>
      </div>
    )
  },
  'ID-obra-270.tsx': {
    title: "MURO DE TIERRA REFORZADA",
    introContent: (
      <>
        <h3 className="text-xl font-bold text-[#0E306F] mb-4 uppercase">OBRA ECOGREEN #270</h3>
        <p>
Construcción de muro de tierra reforzada de 25 m de largo por 10 m de altura, para reconstruir deslizamiento y ampliar el área social de jardín de la Qta 4 Aguas ubicada en la Urb. Cerro Verde. Municipio Baruta. Estado Miranda. 2022        </p>
      </>
    ),
  },
   'ID-obra-300.tsx': {
    title: "MURO DE TIERRA REFORZADA",
    introContent: (
      <>
        <h3 className="text-xl font-bold text-[#0E306F] mb-4 uppercase">OBRA ECOGREEN #300</h3>
        <p>
          Construcción de un muro de tierra reforzada de 70 m de largo por 6 m de altura para extensión de cancha ecuestre en la Urbanización Paracotos. Estado Miranda. 2024
</p>
      </>
    ),
  },
     'ID-obra-255.tsx': {
    title: "MURO DE TIERRA REFORZADA",
    introContent: (
      <>
        <h3 className="text-xl font-bold text-[#0E306F] mb-4 uppercase">OBRA ECOGREEN #255</h3>
        <p>
Construcción de muro de tierra reforzada de 60 m de largo por 7 m de altura, diseñado para ganar terreno y generar nueva área social de jardines que servirían al mismo tiempo como tribuna para las competencias de equitación en la caballeriza de la Urb. Paracotos. Estado Miranda. 2017</p>
      </>
    ),
  },
   'ID-obra-325.tsx': {
    title: "MURO DE TIERRA REFORZADA",
    introContent: (
      <>
        <h3 className="text-xl font-bold text-[#0E306F] mb-4 uppercase">OBRA ECOGREEN #325</h3>
        <p>
Construcción de muro de tierra reforzada de 28 m de largo por 5 m de altura, para ganar superficie plana de jardin de 140 m2 en la Urb. Oripoto. Estado Miranda. 2025</p>
      </>
    ),
  },
};
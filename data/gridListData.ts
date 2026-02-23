export interface GridItem {
  title: string;
  href: string; // Usamos 'href' para mantener consistencia con tu código anterior
  imgSrc: string;
}

export interface GridSection {
  title: string;
  items: GridItem[];
}

export const gridListData: Record<string, GridSection> = {
  // 1. CAMPOS DE APLICACIÓN
  'ID-campos-de-aplicacion.tsx': {
    title: 'CAMPOS DE APLICACIÓN',
    items: [
      { title: 'INFRAESTRUCTURA URBANA', href: '/campos-de-aplicacion/infraestructura-urbana', imgSrc: 'https://tumuro.com/images/INFRAESTRUCTURA-URBANA1.JPG' },
      { title: 'CONSTRUCCIÓN CIVIL', href: '/campos-de-aplicacion/construccion-civil', imgSrc: 'https://tumuro.com/images/CONSTRUCCION-CIVIL1.jpg' },
      { title: 'PROTECCIÓN AMBIENTAL', href: '/campos-de-aplicacion/proteccion-ambiental', imgSrc: 'https://tumuro.com/images/PROTECCION-AMBIENTAL1.jpg' },
      { title: 'INDUSTRIA, PETRÓLEO Y GAS', href: '/campos-de-aplicacion/industria-petroleo-y-gas', imgSrc: 'https://tumuro.com/images/INDUSTRIA,-PETROLEO-Y-GAS1.jpg' },
      { title: 'SECTOR AGRÍCOLA', href: '/campos-de-aplicacion/sector-agricola', imgSrc: 'https://tumuro.com/images/SECTOR-AGRICOLA1.JPG' },
      { title: 'VIAS DE COMUNICACIÓN', href: '/campos-de-aplicacion/vias-de-comunicacion', imgSrc: 'https://tumuro.com/images/VIAS-DE-COMUNICACION1.jpg' },
      { title: 'OBRAS HIDRÁULICAS', href: '/campos-de-aplicacion/obras-hidraulicas', imgSrc: 'https://tumuro.com/images/OBRAS-HIDRAULICAS1.jpg' },
      { title: 'MINERÍA, GEOLOGÍA Y GEOTECNIA', href: '/campos-de-aplicacion/mineria-geologia-y-geotecnia', imgSrc: 'https://tumuro.com/images/MINERIA,-GEOLOGIA-Y-GEOTECNIA1.JPG' },
    ]                                                                                                                         
  },

  // 2. CONSTRUCCIÓN CIVIL
  'ID-construccion-civil.tsx': {
    title: 'ÁREAS DE CONSTRUCCIÓN CIVIL',
    items: [
      { title: 'Muros de Contención', href: '/muros-de-contencion', imgSrc: 'https://tumuro.com/images/muros-de-contencion-cda.jpg' },
      { title: 'Sistemas de Contención Flexibles', href: '/muros-de-contencion/sistemas-de-contencion-flexibles', imgSrc: 'https://tumuro.com/images/sistemas-de-contencion-flexibles1.jpg' },
      { title: 'Muros de Tierra Reforzada', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-tierra-reforzada', imgSrc: 'https://tumuro.com/images/muros-de-tierra-reforzada-cda.jpg' },
      { title: 'Muros de Gavión', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion', imgSrc: 'https://tumuro.com/images/muros-de-gavion-cda.jpg' },
      { title: 'Muros de Gavión Reforzados', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados', imgSrc: 'https://tumuro.com/images/muros-de-gavion-reforzados-cda.jpg' },
      { title: 'Muros Mixtos', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-mixtos', imgSrc: 'https://tumuro.com/images/muros-mixtos-cda.jpg' },
      { title: 'Refuerzo de Taludes y Terraplenes', href: '/refuerzo-de-taludes-y-terraplenes', imgSrc: 'https://tumuro.com/images/refuerzo-de-taludes-y-terraplenes-cda.jpg' },
      { title: 'Sistemas de Contención Rígidos', href: '/muros-de-contencion/sistemas-de-contencion-rigidos', imgSrc: 'https://tumuro.com/images/sistemas-de-contencion-rigidos13.jpg' },
      { title: 'Muros Anclados y Pantallas Atirantadas', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-anclados-y-pantallas-atirantadas', imgSrc: 'https://tumuro.com/images/muros-anclados-y-pantallas-atirantadas-cda.jpg' },
      { title: 'Muros de Concreto Armado', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-concreto-armado', imgSrc: 'https://tumuro.com/images/muros-de-concreto-armado-cda.jpg' },
      { title: 'Muros Ciclópeos', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-ciclopeos', imgSrc: 'https://tumuro.com/images/muros-ciclopeos-cda.jpg' },
      { title: 'Pilotes y Micropilotes', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/pilotes-y-micropilotes', imgSrc: 'https://tumuro.com/images/pilotes-y-micropilotes-cda.jpg' },
      { title: 'Sistemas de Drenaje', href: '/muros-de-contencion/sistemas-de-drenaje', imgSrc: 'https://tumuro.com/images/sistemas-de-drenaje-cda.jpg' },
      { title: 'Control de Erosión', href: '/control-de-erosion', imgSrc: 'https://tumuro.com/images/control-de-erosion-cda.jpg' },
      { title: 'Estabilización de Taludes', href: '/control-de-erosion/estabilizacion-de-taludes', imgSrc: 'https://tumuro.com/images/estabilizacion-de-taludes-cda.jpg' },
      { title: 'Reforestación', href: '/control-de-erosion/reforestacion', imgSrc: 'https://tumuro.com/images/reforestacion-cda.jpg' },
      { title: 'Canalizaciones', href: '/control-de-erosion/canalizaciones', imgSrc: 'https://tumuro.com/images/canalizaciones-cda.jpg' },
      { title: 'Diques y Presas', href: '/control-de-erosion/diques-y-presas', imgSrc: 'https://tumuro.com/images/diques-y-presas-cda.jpg' },
      { title: 'Reconstrucción de Fallas de Borde', href: '#', imgSrc: 'https://tumuro.com/images/reconstruccion-de-fallas-de-borde-cda.jpg' },
      { title: 'Refuerzo de Pavimentos y Repavimentación', href: '#', imgSrc: 'https://tumuro.com/images/refuerzo-de-pavimentos-y-repavimentacion-cda.jpg' },
      { title: 'Subdrenajes y Alcantarillas', href: '#', imgSrc: 'https://tumuro.com/images/subdrenajes-y-alcantarillas-cda.jpg' },
      { title: 'Aceras y Caminerias', href: '#', imgSrc: 'https://tumuro.com/images/aceras-y-caminerias-cda.jpg' },
      { title: 'Mantenimiento de Areas Verdes', href: '#', imgSrc: 'https://tumuro.com/images/mantenimiento-de-areas-verdes-cda.jpg' },
      { title: 'Jardines Verticales y Techos Verdes', href: '#', imgSrc: 'https://tumuro.com/images/subdrenajes-y-alcantarillas-cda.jpg' },
    ]
  },

  // 3. INDUSTRIA, PETRÓLEO Y GAS
  'ID-industria-petroleo-y-gas.tsx': {
    title: 'SOLUCIONES PARA EL SECTOR ENERGÉTICO',
    items: [
      { title: 'Muros de Contención', href: '/muros-de-contencion', imgSrc: 'https://tumuro.com/images/muros-de-contencion-cda.jpg' },
      { title: 'Sistemas Flexibles', href: '/muros-de-contencion/sistemas-de-contencion-flexibles', imgSrc: 'https://tumuro.com/images/sistemas-de-contencion-flexibles1.jpg' },
      { title: 'Muros de Tierra Reforzada', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-tierra-reforzada', imgSrc: 'https://tumuro.com/images/muros-de-tierra-reforzada-cda.jpg' },
      { title: 'Muros de Gavión', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion', imgSrc: 'https://tumuro.com/images/muros-de-gavion-cda.jpg' },
      { title: 'Muros de Gavión Reforzados', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados', imgSrc: 'https://tumuro.com/images/muros-de-gavion-reforzados-cda.jpg' },
      { title: 'Muros Mixtos', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-mixtos', imgSrc: 'https://tumuro.com/images/muros-mixtos-cda.jpg' },
      { title: 'Refuerzo de Taludes', href: '/refuerzo-de-taludes-y-terraplenes', imgSrc: 'https://tumuro.com/images/refuerzo-de-taludes-y-terraplenes-cda.jpg' },
      { title: 'Sistemas Rígidos', href: '/muros-de-contencion/sistemas-de-contencion-rigidos', imgSrc: 'https://tumuro.com/images/sistemas-de-contencion-rigidos13.jpg' },
      { title: 'Muros de Concreto Armado', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-concreto-armado', imgSrc: 'https://tumuro.com/images/muros-de-concreto-armado-cda.jpg' },
      { title: 'Pilotes y Micropilotes', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/pilotes-y-micropilotes', imgSrc: 'https://tumuro.com/images/pilotes-y-micropilotes-cda.jpg' },
      { title: 'Sistemas de Drenaje', href: '/muros-de-contencion/sistemas-de-drenaje', imgSrc: 'https://tumuro.com/images/sistemas-de-drenaje-cda.jpg' },
      { title: 'Control de Erosión', href: '/control-de-erosion', imgSrc: 'https://tumuro.com/images/control-de-erosion-cda.jpg' },
      { title: 'Estabilización de Taludes', href: '/control-de-erosion/estabilizacion-de-taludes', imgSrc: 'https://tumuro.com/images/estabilizacion-de-taludes-cda.jpg' },
      { title: 'Reforestación', href: '/control-de-erosion/reforestacion', imgSrc: 'https://tumuro.com/images/reforestacion-cda.jpg' },
      { title: 'Canalizaciones', href: '/control-de-erosion/canalizaciones', imgSrc: 'https://tumuro.com/images/canalizaciones-cda.jpg' },
      { title: 'Diques y Presas', href: '/control-de-erosion/diques-y-presas', imgSrc: 'https://tumuro.com/images/diques-y-presas-cda.jpg' },
      { title: 'Protección de Riberas', href: '/control-de-erosion/proteccion-de-riberas', imgSrc: 'https://tumuro.com/images/proteccion-de-riberas-cda.jpg' },
      { title: 'Vías de Penetración', href: '#', imgSrc: 'https://tumuro.com/images/rampas-y-vias-de-penetracion-cda.jpg' },
      { title: 'Estabilización de Subrasantes', href: '#', imgSrc: 'https://tumuro.com/images/separacion-y-estabilizacion-de-subrasantes-cda.jpg' },
      { title: 'Refuerzo Suelos Blandos', href: '#', imgSrc: 'https://tumuro.com/images/refuerzo-de-terraplenes-sobre-suelos-blandos-cda.jpg' },
      { title: 'Suministro de Válvulas', href: '#', imgSrc: 'https://tumuro.com/images/mantenimiento-de-areas-verdes-cda.jpg' },
    ]
  },

  // 4. INFRAESTRUCTURA URBANA
  'ID-infraestructura-urbana.tsx': {
    title: 'SERVICIOS DE INFRAESTRUCTURA',
    items: [
      { title: 'Muros de Contención', href: '/muros-de-contencion', imgSrc: 'https://tumuro.com/images/muros-de-contencion-cda.jpg' },
      { title: 'Sistemas de Contención Flexibles', href: '/muros-de-contencion/sistemas-de-contencion-flexibles', imgSrc: 'https://tumuro.com/images/sistemas-de-contencion-flexibles1.jpg' },
      { title: 'Muros de Tierra Reforzada', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-tierra-reforzada', imgSrc: 'https://tumuro.com/images/muros-de-tierra-reforzada-cda.jpg' },
      { title: 'Muros de Gavión', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion', imgSrc: 'https://tumuro.com/images/muros-de-gavion-cda.jpg' },
      { title: 'Muros de Gavión Reforzados', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados', imgSrc: 'https://tumuro.com/images/muros-de-gavion-reforzados-cda.jpg' },
      { title: 'Muros Mixtos', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-mixtos', imgSrc: 'https://tumuro.com/images/muros-mixtos-cda.jpg' },
      { title: 'Refuerzo de Taludes y Terraplenes', href: '/refuerzo-de-taludes-y-terraplenes', imgSrc: 'https://tumuro.com/images/refuerzo-de-taludes-y-terraplenes-cda.jpg' },
      { title: 'Sistemas de Contención Rígidos', href: '/muros-de-contencion/sistemas-de-contencion-rigidos', imgSrc: 'https://tumuro.com/images/sistemas-de-contencion-rigidos13.jpg' },
      { title: 'Muros Anclados y Pantallas Atirantadas', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-anclados-y-pantallas-atirantadas', imgSrc: 'https://tumuro.com/images/muros-anclados-y-pantallas-atirantadas-cda.jpg' },
      { title: 'Muros de Concreto Armado', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-concreto-armado', imgSrc: 'https://tumuro.com/images/muros-de-concreto-armado-cda.jpg' },
      { title: 'Muros Ciclópeos', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-ciclopeos', imgSrc: 'https://tumuro.com/images/muros-ciclopeos-cda.jpg' },
      { title: 'Pilotes y Micropilotes', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/pilotes-y-micropilotes', imgSrc: 'https://tumuro.com/images/pilotes-y-micropilotes-cda.jpg' },
      { title: 'Sistemas de Drenaje', href: '/muros-de-contencion/sistemas-de-drenaje', imgSrc: 'https://tumuro.com/images/sistemas-de-drenaje-cda.jpg' },
      { title: 'Control de Erosión', href: '/control-de-erosion', imgSrc: 'https://tumuro.com/images/control-de-erosion-cda.jpg' },
      { title: 'Estabilización de Taludes', href: '/control-de-erosion/estabilizacion-de-taludes', imgSrc: 'https://tumuro.com/images/estabilizacion-de-taludes-cda.jpg' },
      { title: 'Reforestación', href: '/control-de-erosion/reforestacion', imgSrc: 'https://tumuro.com/images/reforestacion-cda.jpg' },
      { title: 'Canalizaciones', href: '/control-de-erosion/canalizaciones', imgSrc: 'https://tumuro.com/images/canalizaciones-cda.jpg' },
      { title: 'Diques y Presas', href: '/control-de-erosion/diques-y-presas', imgSrc: 'https://tumuro.com/images/diques-y-presas-cda.jpg' },
      { title: 'Reconstrucción de Fallas de Borde', href: '#', imgSrc: 'https://tumuro.com/images/reconstruccion-de-fallas-de-borde-cda.jpg' },
      { title: 'Refuerzo de Pavimentos', href: '#', imgSrc: 'https://tumuro.com/images/refuerzo-de-pavimentos-y-repavimentacion-cda.jpg' },
      { title: 'Subdrenajes y Alcantarillas', href: '#', imgSrc: 'https://tumuro.com/images/subdrenajes-y-alcantarillas-cda.jpg' },
      { title: 'Aceras y Caminerías', href: '#', imgSrc: 'https://tumuro.com/images/aceras-y-caminerias-cda.jpg' },
      { title: 'Mantenimiento de Áreas Verdes', href: '#', imgSrc: 'https://tumuro.com/images/mantenimiento-de-areas-verdes-cda.jpg' },
      { title: 'Jardines Verticales y Techos Verdes', href: '#', imgSrc: 'https://tumuro.com/images/subdrenajes-y-alcantarillas-cda.jpg' },
    ]
  },

  // 5. MINERÍA, GEOLOGÍA Y GEOTECNIA
  'ID-mineria.tsx': {
    title: 'SERVICIOS DE MINERÍA Y GEOLOGÍA',
    items: [
      { title: 'Muros de Gavión', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion', imgSrc: 'https://tumuro.com/images/muros-de-gavion-cda.jpg' },
      { title: 'Gaviones Reforzados', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados', imgSrc: 'https://tumuro.com/images/muros-de-gavion-reforzados-cda.jpg' },
      { title: 'Sistemas de Drenaje', href: '/muros-de-contencion/sistemas-de-drenaje', imgSrc: 'https://tumuro.com/images/sistemas-de-drenaje-cda.jpg' },
      { title: 'Control de Erosión', href: '/control-de-erosion', imgSrc: 'https://tumuro.com/images/control-de-erosion-cda.jpg' },
      { title: 'Estabilización de Taludes', href: '/control-de-erosion/estabilizacion-de-taludes', imgSrc: 'https://tumuro.com/images/estabilizacion-de-taludes-cda.jpg' },
      { title: 'Fallas de Borde', href: '#', imgSrc: 'https://tumuro.com/images/reconstruccion-de-fallas-de-borde-cda.jpg' },
      { title: 'Vías de Penetración', href: '#', imgSrc: 'https://tumuro.com/images/rampas-y-vias-de-penetracion-cda.jpg' },
      { title: 'Contra Caída de Rocas', href: '#', imgSrc: 'https://tumuro.com/images/Unica-CAIDA-DE-ROCAS-1800x1200.jpg' },
      { title: 'Reforestación', href: '/control-de-erosion/reforestacion', imgSrc: 'https://tumuro.com/images/reforestacion-cda.jpg' },
      { title: 'Estudios de Suelo y Pozos', href: '#', imgSrc: 'https://tumuro.com/images/muros-de-contencion-cda.jpg' },
      { title: 'Geología y Geofísica', href: '#', imgSrc: 'https://tumuro.com/images/estabilizacion-de-taludes-cda.jpg' },
      { title: 'Prospección y Cartografía', href: '#', imgSrc: 'https://tumuro.com/images/reconstruccion-de-fallas-de-borde-cda.jpg' },
      { title: 'Planes de Exploración', href: '#', imgSrc: 'https://tumuro.com/images/rampas-y-vias-de-penetracion-cda.jpg' },
      { title: 'Certificación de Recursos', href: '#', imgSrc: 'https://tumuro.com/images/separacion-y-estabilizacion-de-subrasantes-cda.jpg' },
      { title: 'Plantas de Explotación', href: '#', imgSrc: 'https://tumuro.com/images/separacion-y-estabilizacion-de-subrasantes-cda.jpg' },
    ]
  },

  // 6. OBRAS HIDRÁULICAS
  'ID-obras-hidraulicas.tsx': {
    title: 'INFRAESTRUCTURA HIDRÁULICA',
    items: [
      { title: 'Muros de Contención', href: '/muros-de-contencion', imgSrc: 'https://tumuro.com/images/muros-de-contencion-cda.jpg' },
      { title: 'Sistemas Flexibles', href: '/muros-de-contencion/sistemas-de-contencion-flexibles', imgSrc: 'https://tumuro.com/images/sistemas-de-contencion-flexibles1.jpg' },
      { title: 'Muros de Gavión', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion', imgSrc: 'https://tumuro.com/images/muros-de-gavion-cda.jpg' },
      { title: 'Muros de Gavión Reforzados', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados', imgSrc: 'https://tumuro.com/images/muros-de-gavion-reforzados-cda.jpg' },
      { title: 'Sistemas Rígidos', href: '/muros-de-contencion/sistemas-de-contencion-rigidos', imgSrc: 'https://tumuro.com/images/sistemas-de-contencion-rigidos13.jpg' },
      { title: 'Muros Anclados y Pantallas', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-anclados-y-pantallas-atirantadas', imgSrc: 'https://tumuro.com/images/muros-anclados-y-pantallas-atirantadas-cda.jpg' },
      { title: 'Muros de Concreto Armado', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-concreto-armado', imgSrc: 'https://tumuro.com/images/muros-de-concreto-armado-cda.jpg' },
      { title: 'Muros Ciclópeos', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-ciclopeos', imgSrc: 'https://tumuro.com/images/muros-ciclopeos-cda.jpg' },
      { title: 'Pilotes y Micropilotes', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/pilotes-y-micropilotes', imgSrc: 'https://tumuro.com/images/pilotes-y-micropilotes-cda.jpg' },
      { title: 'Sistemas de Drenaje', href: '/muros-de-contencion/sistemas-de-drenaje', imgSrc: 'https://tumuro.com/images/sistemas-de-drenaje-cda.jpg' },
      { title: 'Canalizaciones', href: '/control-de-erosion/canalizaciones', imgSrc: 'https://tumuro.com/images/canalizaciones-cda.jpg' },
      { title: 'Diques y Presas', href: '/control-de-erosion/diques-y-presas', imgSrc: 'https://tumuro.com/images/diques-y-presas-cda.jpg' },
      { title: 'Protección de Riberas', href: '/control-de-erosion/proteccion-de-riberas', imgSrc: 'https://tumuro.com/images/proteccion-de-riberas-cda.jpg' },
      { title: 'Refuerzo de Terraplenes', href: '#', imgSrc: 'https://tumuro.com/images/refuerzo-de-terraplenes-sobre-suelos-blandos-cda.jpg' },
      { title: 'Subdrenajes y Alcantarillas', href: '#', imgSrc: 'https://tumuro.com/images/subdrenajes-y-alcantarillas-cda.jpg' },
    ]
  },

  // 7. PROTECCIÓN AMBIENTAL
  'ID-proteccion-ambiental.tsx': {
    title: 'SOLUCIONES DE PROTECCIÓN AMBIENTAL',
    items: [
      { title: 'Muros de Contención', href: '/muros-de-contencion', imgSrc: 'https://tumuro.com/images/muros-de-contencion-cda.jpg' },
      { title: 'Sistemas de Contención Flexibles', href: '/muros-de-contencion/sistemas-de-contencion-flexibles', imgSrc: 'https://tumuro.com/images/sistemas-de-contencion-flexibles1.jpg' },
      { title: 'Muros de Tierra Reforzada', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-tierra-reforzada', imgSrc: 'https://tumuro.com/images/muros-de-tierra-reforzada-cda.jpg' },
      { title: 'Muros de Gavión', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion', imgSrc: 'https://tumuro.com/images/muros-de-gavion-cda.jpg' },
      { title: 'Muros de Gavión Reforzados', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados', imgSrc: 'https://tumuro.com/images/muros-de-gavion-reforzados-cda.jpg' },
      { title: 'Muros Mixtos', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-mixtos', imgSrc: 'https://tumuro.com/images/muros-mixtos-cda.jpg' },
      { title: 'Refuerzo de Taludes y Terraplenes', href: '/refuerzo-de-taludes-y-terraplenes', imgSrc: 'https://tumuro.com/images/refuerzo-de-taludes-y-terraplenes-cda.jpg' },
      { title: 'Control de Erosión', href: '/control-de-erosion', imgSrc: 'https://tumuro.com/images/control-de-erosion-cda.jpg' },
      { title: 'Estabilización de Taludes', href: '/control-de-erosion/estabilizacion-de-taludes', imgSrc: 'https://tumuro.com/images/estabilizacion-de-taludes-cda.jpg' },
      { title: 'Reforestación', href: '/control-de-erosion/reforestacion', imgSrc: 'https://tumuro.com/images/reforestacion-cda.jpg' },
      { title: 'Canalizaciones', href: '/control-de-erosion/canalizaciones', imgSrc: 'https://tumuro.com/images/canalizaciones-cda.jpg' },
      { title: 'Diques y Presas', href: '/control-de-erosion/diques-y-presas', imgSrc: 'https://tumuro.com/images/diques-y-presas-cda.jpg' },
      { title: 'Protección de Riberas', href: '/control-de-erosion/proteccion-de-riberas', imgSrc: 'https://tumuro.com/images/proteccion-de-riberas-cda.jpg' },
      { title: 'Mantenimiento de Áreas Verdes', href: '#', imgSrc: 'https://tumuro.com/images/mantenimiento-de-areas-verdes-cda.jpg' },
      { title: 'Jardines Verticales y Techos Verdes', href: '#', imgSrc: 'https://tumuro.com/images/subdrenajes-y-alcantarillas-cda.jpg' },
    ]
  },

  // 8. SECTOR AGRÍCOLA
  'ID-sector-agricola.tsx': {
    title: 'SERVICIOS PARA EL SECTOR AGRÍCOLA',
    items: [
      { title: 'Muros de Contención', href: '/muros-de-contencion', imgSrc: 'https://tumuro.com/images/muros-de-contencion-cda.jpg' },
      { title: 'Sistemas Flexibles', href: '/muros-de-contencion/sistemas-de-contencion-flexibles', imgSrc: 'https://tumuro.com/images/sistemas-de-contencion-flexibles1.jpg' },
      { title: 'Muros de Tierra Reforzada', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-tierra-reforzada', imgSrc: 'https://tumuro.com/images/muros-de-tierra-reforzada-cda.jpg' },
      { title: 'Muros de Gavión', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion', imgSrc: 'https://tumuro.com/images/muros-de-gavion-cda.jpg' },
      { title: 'Muros de Gavión Reforzados', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados', imgSrc: 'https://tumuro.com/images/muros-de-gavion-reforzados-cda.jpg' },
      { title: 'Muros Mixtos', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-mixtos', imgSrc: 'https://tumuro.com/images/muros-mixtos-cda.jpg' },
      { title: 'Refuerzo de Taludes', href: '/refuerzo-de-taludes-y-terraplenes', imgSrc: 'https://tumuro.com/images/refuerzo-de-taludes-y-terraplenes-cda.jpg' },
      { title: 'Sistemas de Drenaje', href: '/muros-de-contencion/sistemas-de-drenaje', imgSrc: 'https://tumuro.com/images/sistemas-de-drenaje-cda.jpg' },
      { title: 'Control de Erosión', href: '/control-de-erosion', imgSrc: 'https://tumuro.com/images/control-de-erosion-cda.jpg' },
      { title: 'Estabilización de Taludes', href: '/control-de-erosion/estabilizacion-de-taludes', imgSrc: 'https://tumuro.com/images/estabilizacion-de-taludes-cda.jpg' },
      { title: 'Reforestación', href: '/control-de-erosion/reforestacion', imgSrc: 'https://tumuro.com/images/reforestacion-cda.jpg' },
      { title: 'Canalizaciones', href: '/control-de-erosion/canalizaciones', imgSrc: 'https://tumuro.com/images/canalizaciones-cda.jpg' },
      { title: 'Diques y Presas', href: '/control-de-erosion/diques-y-presas', imgSrc: 'https://tumuro.com/images/diques-y-presas-cda.jpg' },
      { title: 'Protección de Riberas', href: '/control-de-erosion/proteccion-de-riberas', imgSrc: 'https://tumuro.com/images/proteccion-de-riberas-cda.jpg' },
      { title: 'Rampas y Vías Agrícolas', href: '#', imgSrc: 'https://tumuro.com/images/rampas-y-vias-de-penetracion-cda.jpg' },
      { title: 'Estabilización de Subrasantes', href: '#', imgSrc: 'https://tumuro.com/images/separacion-y-estabilizacion-de-subrasantes-cda.jpg' },
      { title: 'Refuerzo Suelos Blandos', href: '#', imgSrc: 'https://tumuro.com/images/refuerzo-de-terraplenes-sobre-suelos-blandos-cda.jpg' },
      { title: 'Mantenimiento de Áreas Verdes', href: '#', imgSrc: 'https://tumuro.com/images/mantenimiento-de-areas-verdes-cda.jpg' },
    ]
  },

  // 9. SISTEMAS DE CONTENCIÓN FLEXIBLES
  'ID-sistemas-de-contencion-flexibles.tsx': {
    title: 'SISTEMAS DE CONTENCIÓN FLEXIBLES',
    items: [
      { title: 'Muros de Tierra Reforzada', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-tierra-reforzada', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-tierra-reforzada.webp' },
      { title: 'Muros de Gavión', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-gavion.webp' },
      { title: 'Muros de Gavión Reforzados', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-de-gavion-reforzados.webp' },
      { title: 'Muros Mixtos', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-mixtos', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/muros-mixtos.webp' },
      { title: 'Refuerzo de Taludes y Terraplenes', href: '/refuerzo-de-taludes-y-terraplenes', imgSrc: 'https://tumuro.com/media/muros-de-contencion/grid-sistemas-de-contencion-flexibles/refuerzo-de-taludes-y-terraplenes.webp' },
    ]
  },

  // 10. SISTEMAS DE CONTENCIÓN RÍGIDOS
  'ID-sistemas-de-contencion-rigidos.tsx': {
    title: 'SISTEMAS DE CONTENCIÓN RÍGIDOS',
    items: [
      { title: 'Muros Anclados y Pantallas Atirantadas', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-anclados-y-pantallas-atirantadas', imgSrc: 'https://tumuro.com/images/muros-anclados-y-pantallas-atirantadas.jpg' },
      { title: 'Muros de Concreto Armado', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-concreto-armado', imgSrc: 'https://tumuro.com/images/muros-de-concreto-armado.jpg' },
      { title: 'Muros Ciclópeos', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-ciclopeos', imgSrc: 'https://tumuro.com/images/muros-de-ciclopeos.jpg' },
      { title: 'Pilotes y Micropilotes', href: '/muros-de-contencion/sistemas-de-contencion-rigidos/pilotes-y-micropilotes', imgSrc: 'https://tumuro.com/images/pilotes-y-micropilotes.jpg' },
    ]
  },

  // 11. SISTEMAS DE DRENAJE
  'ID-sistemas-de-drenaje.tsx': {
    title: 'SISTEMAS DE DRENAJE',
    items: [
      { title: 'Subdrenajes', href: '#', imgSrc: 'https://tumuro.com/images/sistemas-de-drenaje-cda.jpg' },
      { title: 'Canales y Cunetas', href: '/control-de-erosion/canalizaciones', imgSrc: 'https://tumuro.com/images/canalizaciones-cda.jpg' },
      { title: 'Alcantarillas', href: '#', imgSrc: 'https://tumuro.com/images/subdrenajes-y-alcantarillas-cda.jpg' },
    ]
  },

  // 12. SOLUCIONES CONTROL EROSIÓN
  'ID-control-de-erosion.tsx': {
    title: 'SOLUCIONES DE CONTROL DE EROSIÓN',
    items: [
      { title: 'Estabilización de Taludes', href: '/control-de-erosion/estabilizacion-de-taludes', imgSrc: 'https://tumuro.com/images/estabilizacion-de-taludes-cda.jpg' },
      { title: 'Refuerzo de Taludes y Terraplenes', href: '/refuerzo-de-taludes-y-terraplenes', imgSrc: 'https://tumuro.com/images/refuerzo-de-taludes-y-terraplenes-cda.jpg' },
      { title: 'Reforestación', href: '/control-de-erosion/reforestacion', imgSrc: 'https://tumuro.com/images/reforestacion-cda.jpg' },
      { title: 'Canalizaciones', href: '/control-de-erosion/canalizaciones', imgSrc: 'https://tumuro.com/images/canalizaciones-cda.jpg' },
      { title: 'Diques y Presas', href: '/control-de-erosion/diques-y-presas', imgSrc: 'https://tumuro.com/images/diques-y-presas-cda.jpg' },
      { title: 'Protección de Riberas', href: '/control-de-erosion/proteccion-de-riberas', imgSrc: 'https://tumuro.com/images/proteccion-de-riberas-cda.jpg' },
    ]
  },

  // 13. VÍAS DE COMUNICACIÓN
  'ID-vias-de-comunicacion.tsx': {
    title: 'SERVICIOS DE VIALIDAD',
    items: [
      { title: 'Muros de Contención', href: '/muros-de-contencion', imgSrc: 'https://tumuro.com/images/muros-de-contencion-cda.jpg' },
      { title: 'Sistemas Flexibles', href: '/muros-de-contencion/sistemas-de-contencion-flexibles', imgSrc: 'https://tumuro.com/images/sistemas-de-contencion-flexibles1.jpg' },
      { title: 'Muros de Tierra Reforzada', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-tierra-reforzada', imgSrc: 'https://tumuro.com/images/muros-de-tierra-reforzada-cda.jpg' },
      { title: 'Muros de Gavión', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion', imgSrc: 'https://tumuro.com/images/muros-de-gavion-cda.jpg' },
      { title: 'Muros de Gavión Reforzados', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados', imgSrc: 'https://tumuro.com/images/muros-de-gavion-reforzados-cda.jpg' },
      { title: 'Muros Mixtos', href: '/muros-de-contencion/sistemas-de-contencion-flexibles/muros-mixtos', imgSrc: 'https://tumuro.com/images/muros-mixtos-cda.jpg' },
      { title: 'Refuerzo de Taludes', href: '/refuerzo-de-taludes-y-terraplenes', imgSrc: 'https://tumuro.com/images/refuerzo-de-taludes-y-terraplenes-cda.jpg' },
      { title: 'Sistemas Rígidos', href: '/muros-de-contencion/sistemas-de-contencion-rigidos', imgSrc: 'https://tumuro.com/images/sistemas-de-contencion-rigidos13.jpg' },
      { title: 'Sistemas de Drenaje', href: '/muros-de-contencion/sistemas-de-drenaje', imgSrc: 'https://tumuro.com/images/sistemas-de-drenaje-cda.jpg' },
      { title: 'Control de Erosión', href: '/control-de-erosion', imgSrc: 'https://tumuro.com/images/control-de-erosion-cda.jpg' },
      { title: 'Reconstrucción Fallas de Borde', href: '#', imgSrc: 'https://tumuro.com/images/reconstruccion-de-fallas-de-borde-cda.jpg' },
      { title: 'Refuerzo de Pavimentos', href: '#', imgSrc: 'https://tumuro.com/images/refuerzo-de-pavimentos-y-repavimentacion-cda.jpg' },
      { title: 'Rampas y Vías de Penetración', href: '#', imgSrc: 'https://tumuro.com/images/rampas-y-vias-de-penetracion-cda.jpg' },
      { title: 'Contra Caída de Rocas', href: '#', imgSrc: 'https://tumuro.com/images/Unica-CAIDA-DE-ROCAS-1800x1200.jpg' },
      { title: 'Reforestación', href: '/control-de-erosion/reforestacion', imgSrc: 'https://tumuro.com/images/reforestacion-cda.jpg' },
    ]
  },




// ... (dentro de export const gridListData: Record<string, GridSection> = { )

  // 14. CASOS DE OBRAS
  'ID-casos-de-obras.tsx': {
    title: 'PROYECTOS EJECUTADOS',
    items: [
      { title: 'OBRA ECOGREEN #100', href: '/casos-de-obras/100', imgSrc: 'https://tumuro.com/images/ECO100.PRINCIPAL.JPG' },
      { title: 'OBRA ECOGREEN #150', href: '/casos-de-obras/150', imgSrc: 'https://tumuro.com/images/ECO150.PRINCIPAL.JPG' },
      { title: 'OBRA ECOGREEN #200', href: '/casos-de-obras/200', imgSrc: 'https://tumuro.com/images/ECO200.PRINCIPAL.JPG' },
      { title: 'OBRA ECOGREEN #215', href: '/casos-de-obras/215', imgSrc: 'https://tumuro.com/data2/images/casos-de-obras/215/ECO215_PRINCIPAL.jpg' },
      { title: 'OBRA ECOGREEN #135', href: '/casos-de-obras/135', imgSrc: 'https://tumuro.com/images/ECO135.PRINCIPAL.jpg' },
      { title: 'OBRA ECOGREEN #270', href: '/casos-de-obras/270', imgSrc: 'https://tumuro.com/images/ECO270.PRINCIPAL.jpg' },
      { title: 'OBRA ECOGREEN #300', href: '/casos-de-obras/300', imgSrc: 'https://tumuro.com/images/ECO300.PRINCIPAL.jpg' },
    ]
  }

// ...

};
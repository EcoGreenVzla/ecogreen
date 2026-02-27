import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/index';
import UnderConstruction from './components/UnderConstruction';
import ScrollToTop from './components/ScrollToTop';

/**
 * =================================================================
 * EJEMPLOS PRÁCTICOS DE MANTENIMIENTO
 * =================================================================
 * * ➕ AÑADIR (Ejemplo: Nueva página de "Garantía"):
 * 1. Arriba en imports: import Garantia from './pages/garantia';
 * 2. En el bloque de Routes: <Route path="/garantia" element={<Garantia />} />
 * * 🔄 ACTUALIZAR (Ejemplo: Cambiar la URL de Vialidad):
 * - Antes: <Route path="/vialidad" element={<Vialidad />} />
 * - Después: <Route path="/servicios-viales" element={<Vialidad />} />
 * * 🚫 DESHABILITAR (Ejemplo: Mantenimiento temporal de Muros Mixtos):
 * - Opción A (Comentar): // <Route path="/muros-mixtos" element={<MurosMixtos />} />
 * - Opción B (Usar el componente de construcción): 
 * <Route path="/muros-mixtos" element={<UnderConstruction title="MUROS MIXTOS" />} />
 * * ❌ ELIMINAR:
 * - Simplemente borra la línea de 'import' de la página y su etiqueta <Route /> correspondiente.
 */

// --- IMPORTS DE PÁGINAS PRINCIPALES ---
import MurosDeContencion from './pages/muros-de-contencion';
import Vialidad from './pages/vialidad';
import Petroleo from './pages/petroleo';
import ObrasCiviles from './pages/obras-civiles'; 
import ControlDeErosion from './pages/control-de-erosion';
import CamposDeAplicacionPage from './pages/campos-de-aplicacion';
import CasosDeObrasPage from './pages/casos-de-obras';
import Contactanos from './pages/contactanos';

// --- NUEVO IMPORT: CASO DE OBRA #100 ---
import Obra100 from './pages/casos-de-obras/100';
import Obra150 from './pages/casos-de-obras/150';
import Obra200 from './pages/casos-de-obras/200';
import Obra215 from './pages/casos-de-obras/215';
import Obra135 from './pages/casos-de-obras/135';
import Obra270 from './pages/casos-de-obras/270';
import Obra300 from './pages/casos-de-obras/300';
import Obra255 from './pages/casos-de-obras/255';
import Obra325 from './pages/casos-de-obras/325';


// --- DETALLES DE MUROS ---
import SistemasFlexibles from './pages/sistemas-de-contencion-flexibles';
import SistemasRigidos from './pages/sistemas-de-contencion-rigidos';
import SistemasDrenaje from './pages/sistemas-de-drenaje';
import TierraReforzada from './pages/muros-de-tierra-reforzada';
import Gavion from './pages/muros-de-gavion';
import GavionReforzado from './pages/muros-de-gavion-reforzados';
import MurosMixtos from './pages/muros-mixtos';
import RefuerzoTaludes from './pages/refuerzo-de-taludes-y-terraplenes';

// --- DETALLES DE CAMPOS DE APLICACIÓN ---
import InfraestructuraUrbana from './pages/infraestructura-urbana';
import ConstruccionCivil from './pages/construccion-civil';
import ProteccionAmbiental from './pages/proteccion-ambiental';
import IndustriaPetroleoGas from './pages/industria-petroleo-y-gas';
import SectorAgricola from './pages/sector-agricola';
import ViasComunicacion from './pages/vias-de-comunicacion';
import ObrasHidraulicas from './pages/obras-hidraulicas';
import MineriaGeotecnia from './pages/mineria-geologia-y-geotecnia';

// --- DETALLES DE PETRÓLEO Y OTROS ---
import PetroleoProducto1 from './pages/PetroleoProducto1';
import PetroleoProducto2 from './pages/PetroleoProducto2';
import PetroleoProducto3 from './pages/PetroleoProducto3';
import PetroleoProducto4 from './pages/PetroleoProducto4';
import PetroleoProducto5 from './pages/PetroleoProducto5';
import MurosAncladosPantallas from './pages/muros-anclados-y-pantallas-atirantadas';
import MurosConcretoArmado from './pages/muros-de-concreto-armado';
import MurosCiclopeos from './pages/muros-de-ciclopeos';
import PilotesMicropilotes from './pages/pilotes-y-micropilotes';
import EstabilizacionTaludes from './pages/estabilizacion-de-taludes';
import RefuerzoTaludesTerraplenes from './pages/refuerzo-de-taludes-y-terraplenes';
import Reforestacion from './pages/reforestacion';
import Canalizaciones from './pages/canalizaciones';
import DiquesYPresas from './pages/diques-y-presas';
import ProteccionRiberas from './pages/proteccion-de-riberas';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* ScrollToTop: Reinicia el scroll al inicio de la página en cada navegación */}
      <ScrollToTop />

      <div className="flex flex-col min-h-screen bg-white">
        <Header />

        <main className="flex-grow">
          <Routes>
            {/* INICIO */}
            <Route path="/" element={<Home />} />

            {/* RUTAS PRINCIPALES */}
            <Route path="/muros-de-contencion" element={<MurosDeContencion />} />
            <Route path="/vialidad" element={<Vialidad />} />
            <Route path="/petroleo" element={<Petroleo />} />
            <Route path="/obras-civiles" element={<ObrasCiviles />} />
            <Route path="/control-de-erosion" element={<ControlDeErosion />} />
            <Route path="/campos-de-aplicacion" element={<CamposDeAplicacionPage />} />
            <Route path="/casos-de-obras" element={<CasosDeObrasPage />} />
            <Route path="/contactanos" element={<Contactanos />} />

            {/* RUTA ESPECÍFICA: OBRA #100 */}
            <Route path="/casos-de-obras/100" element={<Obra100 />} />
            <Route path="/casos-de-obras/150" element={<Obra150 />} />
            <Route path="/casos-de-obras/200" element={<Obra200 />} />
            <Route path="/casos-de-obras/215" element={<Obra215 />} />
            <Route path="/casos-de-obras/135" element={<Obra135 />} />
            <Route path="/casos-de-obras/270" element={<Obra270 />} />
            <Route path="/casos-de-obras/300" element={<Obra300 />} />
            <Route path="/casos-de-obras/255" element={<Obra255 />} />
            <Route path="/casos-de-obras/325" element={<Obra325 />} />
            


            {/* SUB-RUTAS: MUROS DE CONTENCIÓN */}
            <Route path="/muros-de-contencion/sistemas-de-contencion-flexibles" element={<SistemasFlexibles />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-rigidos" element={<SistemasRigidos />} />
            <Route path="/muros-de-contencion/sistemas-de-drenaje" element={<SistemasDrenaje />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-tierra-reforzada" element={<TierraReforzada />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion" element={<Gavion />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados" element={<GavionReforzado />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-flexibles/muros-mixtos" element={<MurosMixtos />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-flexibles/refuerzo-de-taludes-y-terraplenes" element={<RefuerzoTaludes />} />
            
            <Route
              path="/muros-de-contencion/sistemas-de-contencion-rigidos/muros-anclados-y-pantallas-atirantadas"
              element={<MurosAncladosPantallas />}
            />
            <Route
              path="/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-concreto-armado"
              element={<MurosConcretoArmado />}
            />
            <Route
              path="/muros-de-contencion/sistemas-de-contencion-rigidos/muros-ciclopeos"
              element={<MurosCiclopeos />}
            />
            <Route
              path="/muros-de-contencion/sistemas-de-contencion-rigidos/pilotes-y-micropilotes"
              element={<PilotesMicropilotes />}
            />

            {/* SUB-RUTAS: CONTROL DE EROSION */}
            <Route
              path="/control-de-erosion/estabilizacion-de-taludes"
              element={<EstabilizacionTaludes />}
            />
            <Route
              path="/control-de-erosion/refuerzo-de-taludes-y-terraplenes"
              element={<RefuerzoTaludesTerraplenes />}
            />
            <Route
              path="/control-de-erosion/reforestacion"
              element={<Reforestacion />}
            />
            <Route
              path="/control-de-erosion/canalizaciones"
              element={<Canalizaciones />}
            />
            <Route
              path="/control-de-erosion/diques-y-presas"
              element={<DiquesYPresas />}
            />
            <Route
              path="/control-de-erosion/proteccion-de-riberas"
              element={<ProteccionRiberas />}
            />
            

            {/* SUB-RUTAS: CAMPOS DE APLICACIÓN */}
            <Route path="/campos-de-aplicacion/infraestructura-urbana" element={<InfraestructuraUrbana />} />
            <Route path="/campos-de-aplicacion/construccion-civil" element={<ConstruccionCivil />} />
            <Route path="/campos-de-aplicacion/proteccion-ambiental" element={<ProteccionAmbiental />} />
            <Route path="/campos-de-aplicacion/industria-petroleo-y-gas" element={<IndustriaPetroleoGas />} />
            <Route path="/campos-de-aplicacion/sector-agricola" element={<SectorAgricola />} />
            <Route path="/campos-de-aplicacion/vias-de-comunicacion" element={<ViasComunicacion />} />
            <Route path="/campos-de-aplicacion/obras-hidraulicas" element={<ObrasHidraulicas />} />
            <Route path="/campos-de-aplicacion/mineria-geologia-y-geotecnia" element={<MineriaGeotecnia />} />

            {/* SUB-RUTAS: PETRÓLEO */}
            <Route path="/petroleo/producto-1" element={<PetroleoProducto1 />} />
            <Route path="/petroleo/producto-2" element={<PetroleoProducto2 />} />
            <Route path="/petroleo/producto-3" element={<PetroleoProducto3 />} />
            <Route path="/petroleo/producto-4" element={<PetroleoProducto4 />} />
            <Route path="/petroleo/producto-5" element={<PetroleoProducto5 />} />

            {/* 404 - FALLBACK */}
            <Route path="*" element={<UnderConstruction title="Página no encontrada" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/index'; 
import UnderConstruction from './components/UnderConstruction';
import ScrollToTop from './components/ScrollToTop';

// Rutas Principales
import MurosDeContencion from './pages/muros-de-contencion';
import Vialidad from './pages/vialidad';
import Petroleo from './pages/petroleo';
import Contactanos from './pages/contactanos';
import ControlDeErosion from './pages/control-de-erosion';
import CamposDeAplicacionPage from './pages/campos-de-aplicacion';
import CasosDeObrasPage from './pages/casos-de-obras';

// Muros de Contención - Sistemas
import SistemasFlexibles from './pages/sistemas-de-contencion-flexibles';
import SistemasRigidos from './pages/sistemas-de-contencion-rigidos';
import SistemasDrenaje from './pages/sistemas-de-drenaje';

// Muros de Contención - Flexibles
import TierraReforzada from './pages/muros-de-tierra-reforzada';
import Gavion from './pages/muros-de-gavion';
import GavionReforzado from './pages/muros-de-gavion-reforzados';
import MurosMixtos from './pages/muros-mixtos';
import RefuerzoTaludes from './pages/refuerzo-de-taludes-y-terraplenes';

// Muros de Contención - Rígidos
import MurosAnclados from './pages/muros-anclados-y-pantallas-atirantadas';
import ConcretoArmado from './pages/muros-de-concreto-armado';
import MurosCiclopeos from './pages/muros-de-ciclopeos';
import PilotesMicropilotes from './pages/pilotes-y-micropilotes';

// Control de Erosión
import EstabilizacionTaludes from './pages/estabilizacion-de-taludes';
import RefuerzoTerraplenes from './pages/refuerzo-de-taludes-y-terraplenes'; 
import Reforestacion from './pages/reforestacion';
import Canalizaciones from './pages/canalizaciones';
import DiquesPresas from './pages/diques-y-presas';
import ProteccionRiberas from './pages/proteccion-de-riberas';

// Campos de Aplicación
import InfraestructuraUrbana from './pages/infraestructura-urbana';
import ConstruccionCivil from './pages/construccion-civil';
import ProteccionAmbiental from './pages/proteccion-ambiental';
import IndustriaPetroleoGas from './pages/industria-petroleo-y-gas';
import SectorAgricola from './pages/sector-agricola';
import ViasComunicacion from './pages/vias-de-comunicacion';
import ObrasHidraulicas from './pages/obras-hidraulicas';
import MineriaGeotecnia from './pages/mineria-geologia-y-geotecnia';

// Petróleo 
import PetroleoProducto1 from './pages/PetroleoProducto1';
import PetroleoProducto2 from './pages/PetroleoProducto2';
import PetroleoProducto3 from './pages/PetroleoProducto3';
import PetroleoProducto4 from './pages/PetroleoProducto4';
import PetroleoProducto5 from './pages/PetroleoProducto5';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow !pt-0 !mt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Rutas Principales */}
            <Route path="/muros-de-contencion" element={<MurosDeContencion />} />
            <Route path="/vialidad" element={<Vialidad />} />
            <Route path="/petroleo" element={<Petroleo />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/control-de-erosion" element={<ControlDeErosion />} />
            <Route path="/campos-de-aplicacion" element={<CamposDeAplicacionPage />} />
            <Route path="/casos-de-obras" element={<CasosDeObrasPage />} />
            <Route path="/casos-de-obras/100" element={<UnderConstruction title="OBRA ECOGREEN 100" />} />
            <Route path="/casos-de-obras/150" element={<UnderConstruction title="OBRA ECOGREEN 150" />} />
            <Route path="/casos-de-obras/200" element={<UnderConstruction title="OBRA ECOGREEN 200" />} />
            <Route path="/casos-de-obras/215" element={<UnderConstruction title="OBRA ECOGREEN 215" />} />

            {/* Muros de Contención */}
            <Route path="/muros-de-contencion/sistemas-de-contencion-flexibles" element={<SistemasFlexibles />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-rigidos" element={<SistemasRigidos />} />
            <Route path="/muros-de-contencion/sistemas-de-drenaje" element={<SistemasDrenaje />} />
            
            <Route path="/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-tierra-reforzada" element={<TierraReforzada />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion" element={<Gavion />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados" element={<GavionReforzado />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-flexibles/muros-mixtos" element={<MurosMixtos />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-flexibles/refuerzo-de-taludes-y-terraplenes" element={<RefuerzoTaludes />} />
            
            <Route path="/muros-de-contencion/sistemas-de-contencion-rigidos/muros-anclados-y-pantallas-atirantadas" element={<MurosAnclados />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-rigidos/muros-de-concreto-armado" element={<ConcretoArmado />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-rigidos/muros-ciclopeos" element={<MurosCiclopeos />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-rigidos/pilotes-y-micropilotes" element={<PilotesMicropilotes />} />

            {/* Control de Erosión */}
            <Route path="/control-de-erosion/estabilizacion-de-taludes" element={<EstabilizacionTaludes />} />
            <Route path="/control-de-erosion/refuerzo-de-taludes-y-terraplenes" element={<RefuerzoTerraplenes />} />
            <Route path="/control-de-erosion/reforestacion" element={<Reforestacion />} />
            <Route path="/control-de-erosion/canalizaciones" element={<Canalizaciones />} />
            <Route path="/control-de-erosion/diques-y-presas" element={<DiquesPresas />} />
            <Route path="/control-de-erosion/proteccion-de-riberas" element={<ProteccionRiberas />} />

            {/* Campos de Aplicación */}
            <Route path="/campos-de-aplicacion/infraestructura-urbana" element={<InfraestructuraUrbana />} />
            <Route path="/campos-de-aplicacion/construccion-civil" element={<ConstruccionCivil />} />
            <Route path="/campos-de-aplicacion/proteccion-ambiental" element={<ProteccionAmbiental />} />
            <Route path="/campos-de-aplicacion/industria-petroleo-y-gas" element={<IndustriaPetroleoGas />} />
            <Route path="/campos-de-aplicacion/sector-agricola" element={<SectorAgricola />} />
            <Route path="/campos-de-aplicacion/vias-de-comunicacion" element={<ViasComunicacion />} />
            <Route path="/campos-de-aplicacion/obras-hidraulicas" element={<ObrasHidraulicas />} />
            <Route path="/campos-de-aplicacion/mineria-geologia-y-geotecnia" element={<MineriaGeotecnia />} />

            {/* Petróleo */}
            <Route path="/petroleo/producto-1" element={<PetroleoProducto1 />} />
            <Route path="/petroleo/producto-2" element={<PetroleoProducto2 />} />
            <Route path="/petroleo/producto-3" element={<PetroleoProducto3 />} />
            <Route path="/petroleo/producto-4" element={<PetroleoProducto4 />} />
            <Route path="/petroleo/producto-5" element={<PetroleoProducto5 />} />

            {/* Fallback Route */}
            <Route path="*" element={<UnderConstruction title="Página no encontrada" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import UnderConstruction from './components/UnderConstruction';
import ScrollToTop from './components/ScrollToTop';

// Import all the new page components
import MurosDeContencion from './pages/MurosDeContencion';
import Vialidad from './pages/Vialidad';
import Petroleo from './pages/Petroleo';
import Contactanos from './pages/Contactanos';
import ControlDeErosion from './pages/ControlDeErosion';
import CamposDeAplicacionPage from './pages/CamposDeAplicacionPage';
import CasosDeObrasPage from './pages/CasosDeObrasPage';

import SistemasFlexibles from './pages/SistemasFlexibles';
import SistemasRigidos from './pages/SistemasRigidos';
import SistemasDrenaje from './pages/SistemasDrenaje';

import TierraReforzada from './pages/MurosDeTierraReforzada';
import Gavion from './pages/Gavion';
import GavionReforzado from './pages/GavionReforzado';
import MurosMixtos from './pages/MurosMixtos';
import RefuerzoTaludes from './pages/RefuerzoTaludes';

import MurosAnclados from './pages/MurosAnclados';
import ConcretoArmado from './pages/ConcretoArmado';
import MurosCiclopeos from './pages/MurosCiclopeos';
import PilotesMicropilotes from './pages/PilotesMicropilotes';

import EstabilizacionTaludes from './pages/EstabilizacionTaludes';
import RefuerzoTerraplenes from './pages/RefuerzoTerraplenes';
import Reforestacion from './pages/Reforestacion';
import Canalizaciones from './pages/Canalizaciones';
import DiquesPresas from './pages/DiquesPresas';
import ProteccionRiberas from './pages/ProteccionRiberas';

import InfraestructuraUrbana from './pages/InfraestructuraUrbana';
import ConstruccionCivil from './pages/ConstruccionCivil';
import ProteccionAmbiental from './pages/ProteccionAmbiental';
import IndustriaPetroleoGas from './pages/IndustriaPetroleoGas';
import SectorAgricola from './pages/SectorAgricola';
import ViasComunicacion from './pages/ViasComunicacion';
import ObrasHidraulicas from './pages/ObrasHidraulicas';
import MineriaGeotecnia from './pages/MineriaGeotecnia';

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
            
            {/* Top Level Routes */}
            <Route path="/muros-de-contencion" element={<MurosDeContencion />} />
            <Route path="/vialidad" element={<Vialidad />} />
            <Route path="/petroleo" element={<Petroleo />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/control-de-erosion" element={<ControlDeErosion />} />
            <Route path="/campos-de-aplicacion" element={<CamposDeAplicacionPage />} />
            <Route path="/casos-de-obras" element={<CasosDeObrasPage />} />

            {/* Muros de Contención */}
            <Route path="/muros-de-contencion/sistemas-flexibles" element={<SistemasFlexibles />} />
            <Route path="/muros-de-contencion/sistemas-rigidos" element={<SistemasRigidos />} />
            <Route path="/muros-de-contencion/sistemas-drenaje" element={<SistemasDrenaje />} />
            <Route path="/muros-de-contencion/sistemas-flexibles/tierra-reforzada" element={<TierraReforzada />} />
            <Route path="/muros-de-contencion/sistemas-flexibles/gavion" element={<Gavion />} />
            <Route path="/muros-de-contencion/sistemas-flexibles/gavion-reforzado" element={<GavionReforzado />} />
            <Route path="/muros-de-contencion/sistemas-flexibles/muros-mixtos" element={<MurosMixtos />} />
            <Route path="/muros-de-contencion/sistemas-flexibles/refuerzo-taludes" element={<RefuerzoTaludes />} />
            <Route path="/muros-de-contencion/sistemas-rigidos/muros-anclados" element={<MurosAnclados />} />
            <Route path="/muros-de-contencion/sistemas-rigidos/concreto-armado" element={<ConcretoArmado />} />
            <Route path="/muros-de-contencion/sistemas-rigidos/muros-ciclopeos" element={<MurosCiclopeos />} />
            <Route path="/muros-de-contencion/sistemas-rigidos/pilotes-micropilotes" element={<PilotesMicropilotes />} />

            {/* Control de Erosión */}
            <Route path="/control-de-erosion/estabilizacion-taludes" element={<EstabilizacionTaludes />} />
            <Route path="/control-de-erosion/refuerzo-terraplenes" element={<RefuerzoTerraplenes />} />
            <Route path="/control-de-erosion/reforestacion" element={<Reforestacion />} />
            <Route path="/control-de-erosion/canalizaciones" element={<Canalizaciones />} />
            <Route path="/control-de-erosion/diques-presas" element={<DiquesPresas />} />
            <Route path="/control-de-erosion/proteccion-riberas" element={<ProteccionRiberas />} />

            {/* Campos de Aplicación */}
            <Route path="/campos-de-aplicacion/infraestructura-urbana" element={<InfraestructuraUrbana />} />
            <Route path="/campos-de-aplicacion/construccion-civil" element={<ConstruccionCivil />} />
            <Route path="/campos-de-aplicacion/proteccion-ambiental" element={<ProteccionAmbiental />} />
            <Route path="/campos-de-aplicacion/industria-petroleo-gas" element={<IndustriaPetroleoGas />} />
            <Route path="/campos-de-aplicacion/sector-agricola" element={<SectorAgricola />} />
            <Route path="/campos-de-aplicacion/vias-comunicacion" element={<ViasComunicacion />} />
            <Route path="/campos-de-aplicacion/obras-hidraulicas" element={<ObrasHidraulicas />} />
            <Route path="/campos-de-aplicacion/mineria-geotecnia" element={<MineriaGeotecnia />} />

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

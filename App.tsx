
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MurosDeContencion from './pages/MurosDeContencion';

// Import all new pages
import Vialidad from './pages/Vialidad';
import Petroleo from './pages/Petroleo';
import Contactanos from './pages/Contactanos';
import ControlDeErosion from './pages/ControlDeErosion';
import CamposDeAplicacionPage from './pages/CamposDeAplicacionPage';

// Muros de Contención Sub-pages
import SistemasFlexibles from './pages/SistemasFlexibles';
import SistemasRigidos from './pages/SistemasRigidos';
import SistemasDrenaje from './pages/SistemasDrenaje';
import TierraReforzada from './pages/TierraReforzada';
import Gavion from './pages/Gavion';
import GavionReforzado from './pages/GavionReforzado';
import MurosMixtos from './pages/MurosMixtos';
import RefuerzoTaludes from './pages/RefuerzoTaludes';
import MurosAnclados from './pages/MurosAnclados';
import ConcretoArmado from './pages/ConcretoArmado';
import MurosCiclopeos from './pages/MurosCiclopeos';
import PilotesMicropilotes from './pages/PilotesMicropilotes';

// Control de Erosión Sub-pages
import EstabilizacionTaludes from './pages/EstabilizacionTaludes';
import RefuerzoTerraplenes from './pages/RefuerzoTerraplenes';
import Reforestacion from './pages/Reforestacion';
import Canalizaciones from './pages/Canalizaciones';
import DiquesPresas from './pages/DiquesPresas';
import ProteccionRiberas from './pages/ProteccionRiberas';

// Petróleo Sub-pages
import PetroleoProducto1 from './pages/PetroleoProducto1';
import PetroleoProducto2 from './pages/PetroleoProducto2';
import PetroleoProducto3 from './pages/PetroleoProducto3';
import PetroleoProducto4 from './pages/PetroleoProducto4';
import PetroleoProducto5 from './pages/PetroleoProducto5';

// Campos de Aplicación Sub-pages
import InfraestructuraUrbana from './pages/InfraestructuraUrbana';
import ConstruccionCivil from './pages/ConstruccionCivil';
import ProteccionAmbiental from './pages/ProteccionAmbiental';
import IndustriaPetroleoGas from './pages/IndustriaPetroleoGas';
import SectorAgricola from './pages/SectorAgricola';
import ViasComunicacion from './pages/ViasComunicacion';
import ObrasHidraulicas from './pages/ObrasHidraulicas';
import MineriaGeotecnia from './pages/MineriaGeotecnia';


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        
        <Route path="muros-de-contencion">
          <Route index element={<MurosDeContencion />} />
          <Route path="sistemas-flexibles">
            <Route index element={<SistemasFlexibles />} />
            <Route path="tierra-reforzada" element={<TierraReforzada />} />
            <Route path="gavion" element={<Gavion />} />
            <Route path="gavion-reforzado" element={<GavionReforzado />} />
            <Route path="muros-mixtos" element={<MurosMixtos />} />
            <Route path="refuerzo-taludes" element={<RefuerzoTaludes />} />
          </Route>
          <Route path="sistemas-rigidos">
            <Route index element={<SistemasRigidos />} />
            <Route path="muros-anclados" element={<MurosAnclados />} />
            <Route path="concreto-armado" element={<ConcretoArmado />} />
            <Route path="muros-ciclopeos" element={<MurosCiclopeos />} />
            <Route path="pilotes-micropilotes" element={<PilotesMicropilotes />} />
          </Route>
          <Route path="sistemas-drenaje" element={<SistemasDrenaje />} />
        </Route>
        
        <Route path="control-de-erosion">
          <Route index element={<ControlDeErosion />} />
          <Route path="estabilizacion-taludes" element={<EstabilizacionTaludes />} />
          <Route path="refuerzo-terraplenes" element={<RefuerzoTerraplenes />} />
          <Route path="reforestacion" element={<Reforestacion />} />
          <Route path="canalizaciones" element={<Canalizaciones />} />
          <Route path="diques-presas" element={<DiquesPresas />} />
          <Route path="proteccion-riberas" element={<ProteccionRiberas />} />
        </Route>

        <Route path="vialidad" element={<Vialidad />} />

        <Route path="petroleo">
          <Route index element={<Petroleo />} />
          <Route path="producto-servicio-1" element={<PetroleoProducto1 />} />
          <Route path="producto-servicio-2" element={<PetroleoProducto2 />} />
          <Route path="producto-servicio-3" element={<PetroleoProducto3 />} />
          <Route path="producto-servicio-4" element={<PetroleoProducto4 />} />
          <Route path="producto-servicio-5" element={<PetroleoProducto5 />} />
        </Route>
        
        <Route path="campos-de-aplicacion">
          <Route index element={<CamposDeAplicacionPage />} />
          <Route path="infraestructura-urbana" element={<InfraestructuraUrbana />} />
          <Route path="construccion-civil" element={<ConstruccionCivil />} />
          <Route path="proteccion-ambiental" element={<ProteccionAmbiental />} />
          <Route path="industria-petroleo-gas" element={<IndustriaPetroleoGas />} />
          <Route path="sector-agricola" element={<SectorAgricola />} />
          <Route path="vias-comunicacion" element={<ViasComunicacion />} />
          <Route path="obras-hidraulicas" element={<ObrasHidraulicas />} />
          <Route path="mineria-geotecnia" element={<MineriaGeotecnia />} />
        </Route>
        
        <Route path="contactanos" element={<Contactanos />} />
      </Route>
    </Routes>
  );
};

export default App;
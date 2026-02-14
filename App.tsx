import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/index'; 
import UnderConstruction from './components/UnderConstruction';
import ScrollToTop from './components/ScrollToTop';

/**
 * =================================================================
 * GUÍA DE MANTENIMIENTO DE PÁGINAS (ROUTES)
 * =================================================================
 * * ➕ AÑADIR: 
 * 1. Importa el componente: import MiPagina from './pages/mi-archivo';
 * 2. Agrega la etiqueta: <Route path="/mi-url" element={<MiPagina />} />
 * * 🔄 ACTUALIZAR:
 * - Cambia el texto en 'path="/..."' para cambiar la URL.
 * - Cambia el destino en 'import ... from "./pages/..."' si mueves el archivo.
 * * 🚫 DESHABILITAR:
 * - Comenta la línea de la <Route /> usando // al principio. 
 * El usuario verá la página 404 (UnderConstruction) si intenta entrar.
 * * ❌ ELIMINAR:
 * - Borra el 'import' arriba y la etiqueta '<Route />' abajo.
 */

// --- IMPORTS DE PÁGINAS ---
import MurosDeContencion from './pages/muros-de-contencion';
import Vialidad from './pages/vialidad';
import Petroleo from './pages/petroleo';
import ObrasCiviles from './pages/obras-civiles'; // Nueva Página
import ControlDeErosion from './pages/control-de-erosion';
import CamposDeAplicacionPage from './pages/campos-de-aplicacion';
import CasosDeObrasPage from './pages/casos-de-obras';
import Contactanos from './pages/contactanos';

// Detalles de Muros
import SistemasFlexibles from './pages/sistemas-de-contencion-flexibles';
import SistemasRigidos from './pages/sistemas-de-contencion-rigidos';
import SistemasDrenaje from './pages/sistemas-de-drenaje';
import TierraReforzada from './pages/muros-de-tierra-reforzada';
import Gavion from './pages/muros-de-gavion';
import GavionReforzado from './pages/muros-de-gavion-reforzados';
import MurosMixtos from './pages/muros-mixtos';
import RefuerzoTaludes from './pages/refuerzo-de-taludes-y-terraplenes';

// Detalles de Campos de Aplicación
import InfraestructuraUrbana from './pages/infraestructura-urbana';
import ConstruccionCivil from './pages/construccion-civil';
import ProteccionAmbiental from './pages/proteccion-ambiental';
import IndustriaPetroleoGas from './pages/industria-petroleo-y-gas';
import SectorAgricola from './pages/sector-agricola';
import ViasComunicacion from './pages/vias-de-comunicacion';
import ObrasHidraulicas from './pages/obras-hidraulicas';
import MineriaGeotecnia from './pages/mineria-geologia-y-geotecnia';

// Detalles de Petróleo
import PetroleoProducto1 from './pages/PetroleoProducto1';
import PetroleoProducto2 from './pages/PetroleoProducto2';
import PetroleoProducto3 from './pages/PetroleoProducto3';
import PetroleoProducto4 from './pages/PetroleoProducto4';
import PetroleoProducto5 from './pages/PetroleoProducto5';

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
            <Route path="/obras-civiles" element={<ObrasCiviles />} /> {/* Registro de nueva página */}
            <Route path="/control-de-erosion" element={<ControlDeErosion />} />
            <Route path="/campos-de-aplicacion" element={<CamposDeAplicacionPage />} />
            <Route path="/casos-de-obras" element={<CasosDeObrasPage />} />
            <Route path="/contactanos" element={<Contactanos />} />

            {/* SUB-RUTAS: MUROS DE CONTENCIÓN */}
            <Route path="/muros-de-contencion/sistemas-de-contencion-flexibles" element={<SistemasFlexibles />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-rigidos" element={<SistemasRigidos />} />
            <Route path="/muros-de-contencion/sistemas-de-drenaje" element={<SistemasDrenaje />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-tierra-reforzada" element={<TierraReforzada />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion" element={<Gavion />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-flexibles/muros-de-gavion-reforzados" element={<GavionReforzado />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-flexibles/muros-mixtos" element={<MurosMixtos />} />
            <Route path="/muros-de-contencion/sistemas-de-contencion-flexibles/refuerzo-de-taludes-y-terraplenes" element={<RefuerzoTaludes />} />

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
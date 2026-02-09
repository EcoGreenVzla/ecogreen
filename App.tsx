
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MurosDeContencion from './pages/MurosDeContencion';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="muros-de-contencion" element={<MurosDeContencion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
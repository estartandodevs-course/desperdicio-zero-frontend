import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Perfil from '../pages/perfil';
import Home from '../pages/home';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
}

export default AppRoutes;

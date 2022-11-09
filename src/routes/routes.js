import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from '../pages/Profile';
import Home from '../pages/HomePage';
import AddProduct from '../pages/AddProduct';
import MyPantry from '../pages/MyPantry';
import Analysis from '../pages/Analysis';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/adicionar-alimento" element={<AddProduct />} />
      <Route path="/minha-dispensa" element={<MyPantry />} />
      <Route path="/analise" element={<Analysis />} />
    </Routes>
  );
}

export default AppRoutes;

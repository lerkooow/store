import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      {/* index указывает на индексный (главный) маршрут */}
    </Routes>
  );
};

export default AppRoutes;

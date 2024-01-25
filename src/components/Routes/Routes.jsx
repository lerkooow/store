import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";

import { ROUTES } from "../../utils/routes";
import SingleProduct from "../Products/SingleProduct";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      {/* index указывает на индексный (главный) маршрут */}
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />}></Route>
    </Routes>
  );
};

export default AppRoutes;

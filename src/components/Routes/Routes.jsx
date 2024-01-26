import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import SingleProduct from "../Products/SingleProduct";
import SingleCategory from "../Categories/SingleCategory";
import Cart from "../Cart/Cart";

import { ROUTES } from "../../utils/routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      {/* index указывает на индексный (главный) маршрут */}
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
      <Route path={ROUTES.CART} element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;

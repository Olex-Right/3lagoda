import React from "react";
import { Route, Routes } from "react-router-dom";
import menuItems from "../constatns/menuItems";

const Router = () => {
  return (
    <Routes>
      {menuItems.map((menuItem) => {
        return <Route key={menuItem.link} path={menuItem.link} element={<menuItem.component/>} />;
      })}
    </Routes>
  );
};

export default Router;

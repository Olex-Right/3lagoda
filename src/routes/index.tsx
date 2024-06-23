import React from "react";
import { Route, Routes } from "react-router-dom";
import routesItems from "../constatns/routes";

const Router = () => {
  return (
    <Routes>
      {routesItems.map((routesItem) => {
        return (
          <Route
            key={routesItem.link}
            path={routesItem.link}
            element={<routesItem.component />}
          />
        );
      })}
    </Routes>
  );
};

export default Router;

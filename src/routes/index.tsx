import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../pages/Category/Category";
import Employee from "../pages/Employee/Employee";

const Router = () => {
  return (
    <Routes>
      <Route path="/category" element={<Category />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/" element={<Employee />} />
    </Routes>
  );
};

export default Router;

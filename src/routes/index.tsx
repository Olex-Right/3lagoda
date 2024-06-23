import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../pages/Category/Category";
import Employee from "../pages/Employee/Employee";
import CategoryRequest1 from "../pages/Category/CategoryRequest1";
import CategoryRequest2 from "../pages/Category/CategoryRequest2";

const Router = () => {
  return (
    <Routes>
      <Route path="/category-request1" element={<CategoryRequest1 />} />
      <Route path="/category-request2" element={<CategoryRequest2 />} />
      <Route path="/category" element={<Category />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/" element={<Employee />} />
    </Routes>
  );
};

export default Router;

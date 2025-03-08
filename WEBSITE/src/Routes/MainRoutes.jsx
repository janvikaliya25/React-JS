import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import EditProductPage from "../Pages/EditProductPage";
import Login from "../Pages/Login";
import PageNotFound from "../Pages/PageNotFound";
import Product from "../Pages/Product";
import SingleProductPage from "../Pages/SingleProductPage";
import Signup from "../Pages/Signup";

function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/edit/:id' element={<EditProductPage />} />
      <Route path='/product' element={<Product />} />
      <Route path='/SingleProductPage/:id' element={<SingleProductPage />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}


export default MainRoutes;

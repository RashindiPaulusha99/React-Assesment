import React from "react";
import Login from "../pages/Session/Login";
import Register from "../pages/Session/Register";
import Product from "../pages/Session/Product";
import Cart from "../pages/Session/Cart";
import {Routes, Route} from "react-router-dom";
import NotFoundIndex from "../pages/Session/NotFoundIndex";

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='*' element={<NotFoundIndex/>}/>
      </Routes>
  );
}

export default App;

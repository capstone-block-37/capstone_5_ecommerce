import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetail from "./components/ProductDetail"
import Register from "./components/Register"
import Login from "./components/Login"
import Checkout from "./components/Checkout"
import Cart from "./components/Cart"
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/cart">Cart</Link>
        {/* <Link to="/product/:id">Product</Link> */}
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;

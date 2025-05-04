import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetail from "./components/ProductDetail"
// import Register from "./components/Register"
// import Login from "./components/Login"
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/product/:id">Product</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;

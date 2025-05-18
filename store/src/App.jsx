import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Register from "./components/Register";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { useNavigate } from "react-router";

function App() {
  const [token, setToken] = useState(null);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  let navigate = useNavigate();

  const logoutUser = () => {
    //clear logged in state
    setToken(null);
    setUser(null);
    navigate("/");
  };
  console.log(token);
  return (
    <>
      <div className="nav-bar">
        <div className="innerNav">
          <Link to="/">Home</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/cart">Cart</Link>

          {token ? (
            <Link onClick={logoutUser}>Logout</Link>
          ) : (
            <div className="loginLink">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
          {/* <Link to="/product/:id">Product</Link> */}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/register"
          element={<Register setToken={setToken} setUser={setUser} />}
        ></Route>
        <Route
          path="/login"
          element={<Login setToken={setToken} setUser={setUser} />}
        ></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/cart" element={<Cart cart={cart} token={token} setCart={setCart}/>}></Route>
        <Route path="/product/:id" element={<ProductDetail setCart={setCart} cart={cart}/>}></Route>
      </Routes>
    </>
  );
}

export default App;

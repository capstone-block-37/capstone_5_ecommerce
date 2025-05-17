import React from "react";

const Cart = ({cart}) => {
    console.log(cart)
  return (
    <div className="container">
      <h2>Your Cart</h2>
      <div className="productsWrapper">
        {cart.map((product) => (
          <div
            className="product-card"
          >
            <img
              src={product.img_url}
              style={{ width: "100%", height: "250px" }}
            />
            <h2>{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

import React from "react";

const Cart = ({ cart, token, setCart }) => {
  console.log(cart);

  const deleteProductBtn = async (id) => {
    try {
      await fetch(
        `https://block-37-e-commerce-backend.onrender.com/api/users/userProducts/${id}`,{
          // await fetch(`http://localhost:3033/api/users/userProducts/${id}`
          method: "DELETE",
          headers: { "Content-Type": "application/json", Authorization: token },
        }
      );
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
          cart.splice(i, 1);
          break;
        }
      }
      setCart([...cart]);
    } catch (error) {
      console.log("Error in fetchData", error);
    }
  };

  return (
    <div className="container">
      <h2>Your Cart</h2>
      <div className="productsWrapper">
        {cart.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.img_url}
              style={{ width: "100%", height: "250px" }}
            />
            <h2>{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button onClick={() => deleteProductBtn(product.id)}>
              Remove from cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

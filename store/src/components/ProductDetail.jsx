// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetail({ setCart, cart }) {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  console.log(id);
  const [token, setToken] = useState(null);

  console.log(cart)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://block-37-e-commerce-backend.onrender.com/api/product/${id}`);
        // const response = await fetch(`http://localhost:3033/api/product/${id}`);
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.log("Error in fetchData", error);
      }
    }
    fetchData();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <div className="product-card-single">
        <img src={product.img_url} style={{ Width: "150px" }} />
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <button onClick={() => setCart([product, ...cart])} className="cart-btn">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;

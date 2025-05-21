import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Home() {
  let navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://block-37-e-commerce-backend.onrender.com/api/products");
        // const response = await fetch("http://localhost:3033/api/products");
        const result = await response.json();
        console.log(result);
        setProducts(result);
      } catch (error) {
        console.log("Error in fetchData", error);
      }
    }

    fetchData();
  }, []);

  function singleProduct(id) {
    navigate(`/product/${id}`);
  }

  return (
    <div className="container">
      <h2>Your E-Commerce Store</h2>
      <div className="productsWrapper">
        {products.map((product) => (
          <div onClick={() => singleProduct(product.id)} className="product-card">
            <img src={product.img_url} style={{ width: "100%", height: "250px" }} />
            <h2>{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

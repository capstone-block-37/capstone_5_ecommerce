import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Home() {
  let navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3033/api/products");
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
    <div className="app">
      <h1>Your E-Commerce Store</h1>
      {products.map((product) => (
        <div onClick={() => singleProduct(product.id)}>
          <h4>{product.name}</h4>
          <h3>{product.description}</h3>
          <p>Price: ${product.price}</p>
          <img src={product.img_url} style={{ Width: "150px" }} />
        </div>
      ))}
    </div>
  );
}

export default Home;

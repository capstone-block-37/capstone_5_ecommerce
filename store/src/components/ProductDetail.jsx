// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3033/api/products");
        const result = await response.json();
        // console.log(result);
        setProducts(result);
      } catch (error) {
        console.log("Error in fetchData", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="product">
      <h1>Your product</h1>
      {products.map((product) => (
        <div>
          <h3>{product.description}</h3>
          <h4>{product.name}</h4>
          <p>Price: ${product.price}</p>
          <img src={product.img_url} style={{ Width: "150px" }} />
        </div>
      ))}
    </div>
  );
}

export default ProductDetail;

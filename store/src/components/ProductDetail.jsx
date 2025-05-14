// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:3033/api/product/${id}`
        );
        const result = await response.json();
        // console.log(result);
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
        <button className="cart-btn">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;

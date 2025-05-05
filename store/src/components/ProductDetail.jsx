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
    <div className="product">
      <h1>Your product</h1>
      <div>
        <h3>{product.description}</h3>
        <h4>{product.name}</h4>
        <p>Price: ${product.price}</p>
        <img src={product.img_url} style={{ Width: "150px" }} />
      </div>
    </div>
  );
}

export default ProductDetail;

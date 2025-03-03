
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProductPage() {
  const [state, setState] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`) 
      .then((res) => {
        const foundProduct = res.data.find((product) => product.id === parseInt(id));
        if (foundProduct) {
          setState(foundProduct);
        } else {
          console.error("Product not found");
        }
        console.log(res.data)
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  }, [id]);

  return (
    <div style={{height:"400px",width:"85%"}} className="border mt-5 m-auto">
      {state.id ? (
        <div className="d-flex justify-content-evenly align-items-center w-100 border h-100">
          <div key={state.id} className="h-100 border w-50 d-flex justify-content-evenly align-items-center">
            <img
              src={state.image_link}
              alt={state.name}
            className="h-100"/>
          </div>
          <div className="border w-50 h-100 p-3">
            <h3>{state.name}</h3>
            <h5>
              {/* <strong>Product Type:</strong> {state.product_type} */}
            </h5>
            <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> (45)</p>
            <p>
              <strong>Brand:</strong> {state.brand}
            </p>
            <p>
              <strong>Price:</strong> ₹{state.price}
              <p>Tax included.</p>
            </p>
            <p>Color:01 Santorini Sunset</p>
            <button className="form-control border-none bg-dark text-light" style={{borderRadius:"0px",height:"45px",fontSize:"12px"}}>
              ADD TO CART
            </button>
            <hr></hr>
          </div>
        </div>
      ) : (
        <p>Product is loading...</p>
      )}
    </div>
  );
}

export default SingleProductPage;
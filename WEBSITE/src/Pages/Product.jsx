
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&limit=20"
      ) 
      .then((res) => {
        const limitedProducts = res.data.slice(0, 20);
        setProducts(limitedProducts);
        console.log(limitedProducts);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []); 

  const handleRedirect = (id) => {
    navigate(`/SingleProductPage/${id}`);
  };

  return (
    <div className="border d-flex justify-content-evenly align-items-center" style={{width:"100%",position:"relative"}}>
      <div className=" border border-dark" style={{height:"500px",position:"absolute",top:"35px",left:"0px",width:"20%"}}>

      </div>


    <div
      style={{
        marginLeft:"20%",
        width:"75%"
      }}
      className=" d-flex justify-content-between align-items-center flex-wrap"
    >
      {products.map((el) => (
        <div
          onClick={() => handleRedirect(el.id)}
          key={el.id}
          className=" border"
          style={{width:"23%",height:"450px",marginTop:"35px"}}
        >
          <div className=" d-flex justify-content-evenly align-items-center" style={{height:"250px"}}>
          <img
            src={el.image_link}
            className="h-75"
            alt={el.name}
          />
          </div>
          <div className="text-center" style={{height:"200px"}}>
            <p className="">Product Type : {el.product_type}</p>
            <p className="">{el.name}</p>
            <p className="card-text">
             <strong> Brand</strong> : {el.brand}
            </p>
            <p className=""><strong>Price :  </strong>₹ {el.price }</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Product;

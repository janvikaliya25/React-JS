

import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function SingleProductPage() {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
      .then((res) => {
        const foundProduct = res.data.find((product) => Number(product.id) === Number(id));
        setState(foundProduct || null);
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  const handleAddToCart = () => {
    if (!state || loading) return;
    setLoading(true);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === state.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...state, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    setTimeout(() => {
      setLoading(false);
      navigate("/cart");
    }, 500);
  };

  return (
    <div className="container py-5">
      {state ? (
        <div className="row align-items-stretch g-4">
         
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="border p-4 shadow-sm bg-light rounded w-100 d-flex align-items-center justify-content-center">
              <img
                src={state.image_link}
                alt={state.name}
                className="img-fluid rounded"
                style={{ maxHeight: "400px", width: "100%", objectFit: "contain" }}
              />
            </div>
          </div>

          <div className="col-lg-6 d-flex">
            <div className="border p-4 shadow-sm bg-white rounded w-100">
              <h2 className="fw-bold">{state.name}</h2>
              <p className="text-muted">
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i> (45 Reviews)
              </p>
              <p className="text-dark"><strong>Brand:</strong> {state.brand}</p>
              <h4 className="text-success fw-bold">
                {state.price ? `₹ ${state.price}` : "Price not available"}
              </h4>
              <p className="text-muted">Tax included.</p>
              <p><strong>Color:</strong> 01 Santorini Sunset</p>

                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  className="btn btn-dark py-2 fw-bold text-uppercase w-100 w-md-45"
                  onClick={handleAddToCart}
                  disabled={loading}
                >
                  {loading ? "Adding..." : "Add to Cart"}
                </button>

                <Link to={`/edit/${state.id}`} className="w-100 w-md-45">
                  <button className="btn btn-outline-dark py-2 fw-bold text-uppercase w-100">
                    Edit
                  </button>
                </Link>
              </div>

              <hr />
              <Link to="/" className="text-decoration-none">
                <p className="text-muted small">Fast & Secure Checkout Available</p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-danger text-center">Product not found.</p>
      )}
    </div>
  );
}

export default SingleProductPage;

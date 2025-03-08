
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    image_link: "",
  });

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const foundProduct = storedProducts.find((product) => product.id === parseInt(id));

    if (foundProduct) {
      setFormData(foundProduct);
    } else {
      axios
        .get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
        .then((res) => {
          const apiProduct = res.data.find((product) => product.id === parseInt(id));
          if (apiProduct) {
            setFormData({
              name: apiProduct.name || "",
              brand: apiProduct.brand || "",
              price: apiProduct.price || "",
              image_link: apiProduct.image_link || "",
            });
          }
        })
        .catch((err) => console.error("Error fetching product:", err));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    if (!formData.name || !formData.brand || !formData.price || !formData.image_link) {
      alert("All fields are required!");
      return;
    }

    let storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    storedProducts = storedProducts.map((product) =>
      product.id === parseInt(id) ? { ...product, ...formData } : product
    );
    localStorage.setItem("products", JSON.stringify(storedProducts));
    
    alert("Product updated successfully!");
    navigate("/Product");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10 col-12">
          <div className="border p-4 shadow-sm bg-white rounded">
            <h2 className="fw-bold text-center">Edit Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control w-100"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Brand</label>
                <input
                  type="text"
                  className="form-control w-100"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price (₹)</label>
                <input
                  type="number"
                  className="form-control w-100"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Image Link</label>
                <input
                  type="text"
                  className="form-control w-100"
                  name="image_link"
                  value={formData.image_link}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark w-100">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProductPage;

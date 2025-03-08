
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Product() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [category, setCategory] = useState("all");
//   const [priceRange, setPriceRange] = useState("all");
//   const [sortOption, setSortOption] = useState("newest");
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 12;
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
//       .then((res) => {
//         const limitedProducts = res.data.slice(0, 50);
//         setProducts(limitedProducts);
//         setFilteredProducts(limitedProducts);
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//       });
//   }, []);

//   useEffect(() => {
//     let updatedProducts = [...products];

//     if (category !== "all") {
//       updatedProducts = updatedProducts.filter(
//         (product) => product.product_type === category
//       );
//     }

//     if (priceRange !== "all") {
//       updatedProducts = updatedProducts.filter((product) => {
//         const price = parseFloat(product.price) || 0;
//         if (priceRange === "0-5") return price <= 5;
//         if (priceRange === "6-10") return price > 6 && price <= 10;
//         if (priceRange === "10+") return price > 10;
//         return true;
//       });
//     }

//     if (searchTerm) {
//       updatedProducts = updatedProducts.filter((product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (sortOption === "price-low-high") {
//       updatedProducts.sort((a, b) => a.price - b.price);
//     } else if (sortOption === "price-high-low") {
//       updatedProducts.sort((a, b) => b.price - a.price);
//     }

//     setFilteredProducts(updatedProducts);
//   }, [searchTerm, category, priceRange, sortOption, products]);

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//   const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="container py-5">
//       <h2 className="text-center mb-4 fw-bold">Maybelline Products</h2>

//       <div className="row mb-4 g-3">
//         <div className="col-md-4">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <div className="col-md-3">
//           <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
//             <option value="all">All Categories</option>
//             <option value="blush">Blush</option>
//             <option value="bronzer">Bronzer</option>
//             <option value="foundation">Foundation</option>
//             <option value="eyeshadow">Eyeshadow</option>
//             <option value="lip_liner">Lip Liner</option>
//             <option value="lipstick">Lipstick</option>
//             <option value="nail_polish">Nail Polish</option>
//           </select>
//         </div>
//         <div className="col-md-3">
//           <select className="form-select" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
//             <option value="all">All Prices</option>
//             <option value="0-5">₹0 - ₹5</option>
//             <option value="6-10">₹6 - ₹10</option>
//             <option value="10+">₹10+</option>
//           </select>
//         </div>
//         <div className="col-md-2">
//           <select className="form-select" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
//             <option value="newest">Newest</option>
//             <option value="price-low-high">Price: Low to High</option>
//             <option value="price-high-low">Price: High to Low</option>
//           </select>
//         </div>
//       </div>

//       <div className="row g-4">
//         {currentProducts.map((el) => (
//           <div key={el.id} className="col-sm-6 col-md-4 col-lg-3">
//             <div className="card border-0 rounded h-100 shadow-sm">
//               <div className="d-flex justify-content-center align-items-center p-3" style={{ height: "220px" }}>
//                 <img src={el.image_link} className="img-fluid rounded" alt={el.name} style={{ maxHeight: "200px", objectFit: "contain" }} />
//               </div>
//               <div className="card-body text-center">
//                 <h6 className="fw-bold">{el.name}</h6>
//                 <p className="text-muted small">{el.product_type}</p>
//                 <p className="fw-bold text-success">₹ {el.price || "N/A"}</p>
//                 <button className="btn btn-dark py-2 w-100" onClick={() => navigate(`/SingleProductPage/${el.id}`)}>View</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <nav className="mt-4">
//         <ul className="pagination justify-content-center">
//           <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
//             <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
//           </li>
//           {[...Array(totalPages)].map((_, i) => (
//             <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
//               <button className="page-link" onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
//             </li>
//           ))}
//           <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
//             <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Product;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortOption, setSortOption] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
      .then((res) => {
        const limitedProducts = res.data.slice(0, 50);
        setProducts(limitedProducts);
        setFilteredProducts(limitedProducts);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  useEffect(() => {
    let updatedProducts = [...products];

    if (category !== "all") {
      updatedProducts = updatedProducts.filter(
        (product) => product.product_type === category
      );
    }

    if (priceRange !== "all") {
      updatedProducts = updatedProducts.filter((product) => {
        const price = parseFloat(product.price) || 0;
        if (priceRange === "0-5") return price <= 5;
        if (priceRange === "6-10") return price >= 6 && price <= 10;
        if (priceRange === "10+") return price > 10;
        return true;
      });
    }

    if (searchTerm) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === "price-low-high") {
      updatedProducts.sort((a, b) => parseFloat(a.price || 0) - parseFloat(b.price || 0));
    } else if (sortOption === "price-high-low") {
      updatedProducts.sort((a, b) => parseFloat(b.price || 0) - parseFloat(a.price || 0));
    }

    setFilteredProducts(updatedProducts);
  }, [searchTerm, category, priceRange, sortOption, products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">Maybelline Products</h2>

      <div className="row mb-4 g-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="blush">Blush</option>
            <option value="bronzer">Bronzer</option>
            <option value="foundation">Foundation</option>
            <option value="eyeshadow">Eyeshadow</option>
            <option value="lip_liner">Lip Liner</option>
            <option value="lipstick">Lipstick</option>
            <option value="nail_polish">Nail Polish</option>
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-select" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
            <option value="all">All Prices</option>
            <option value="0-5">₹0 - ₹5</option>
            <option value="6-10">₹6 - ₹10</option>
            <option value="10+">₹10+</option>
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="row g-4">
        {currentProducts.map((el) => (
          <div key={el.id} className="col-sm-6 col-md-4 col-lg-3">
            <div className="card border-0 rounded h-100 shadow-sm">
              <div className="d-flex justify-content-center align-items-center p-3" style={{ height: "220px" }}>
                <img src={el.image_link} className="img-fluid rounded" alt={el.name} style={{ maxHeight: "200px", objectFit: "contain" }} />
              </div>
              <div className="card-body text-center">
                <h6 className="fw-bold">{el.name}</h6>
                <p className="text-muted small">{el.product_type}</p>
                <p className="fw-bold text-success">₹ {el.price || "N/A"}</p>
                <button className="btn btn-dark py-2 w-100" onClick={() => navigate(`/SingleProductPage/${el.id}`)}>View</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage <= 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
          </li>
          {[...Array(totalPages)].map((_, i) => (
            <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
            </li>
          ))}
          <li className={`page-item ${currentPage >= totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Product;

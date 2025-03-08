
// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Cart() {
//   const [cart, setCart] = useState(() => {
//     return JSON.parse(localStorage.getItem("cart")) || [];
//   });
//   const navigate = useNavigate();

 
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity < 1) return;

//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const removeFromCart = (id) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   const handleCheckout = () => {
//     if (cart.length === 0) {
//       alert("Your cart is empty!");
//       return;
//     }

//     if (window.confirm("Proceed to checkout?")) {
//       localStorage.removeItem("cart");
//       setCart([]);
//       alert("Thank you for your purchase!");
//       navigate("/");
//     }
//   };

//   const totalPrice = cart.reduce(
//     (total, item) => total + parseFloat(item.price) * item.quantity,
//     0
//   );

//   return (
//     <div className="container py-5">
//       <h2 className="text-center mb-4 fw-bold">Shopping Cart</h2>

//       {cart.length === 0 ? (
//         <div className="text-center">
//           <p className="text-muted">Your cart is empty.</p>
//           <Link to="/" className="btn btn-dark">
//             Go Shopping
//           </Link>
//         </div>
//       ) : (
//         <div className="row">
//           <div className="col-lg-4 order-lg-2 mb-4">
//             <div className="card shadow-sm border-0 p-3">
//               <h4 className="fw-bold">Order Summary</h4>
//               <hr />
//               <p className="d-flex justify-content-between">
//                 <span>Total Items:</span>
//                 <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
//               </p>
//               <p className="d-flex justify-content-between">
//                 <span>Total Price:</span>
//                 <span className="fw-bold text-success">₹ {totalPrice.toFixed(2)}</span>
//               </p>
//               <button className="btn btn-dark w-100 mt-3" onClick={handleCheckout}>
//                 Checkout
//               </button>
//               <Link to="/Product" className="btn btn-outline-dark w-100 mt-2">
//                 Continue Shopping
//               </Link>
//             </div>
//           </div>

//           <div className="col-lg-8 order-lg-1">
//             {cart.map((item) => (
//               <div key={item.id} className="card mb-3 shadow-sm border-0">
//                 <div className="row g-0 align-items-center">
//                   <div className="col-4 col-md-3 text-center">
//                     <img
//                       src={item.image_link}
//                       alt={item.name}
//                       className="img-fluid rounded"
//                       style={{ maxHeight: "100px", objectFit: "contain", width: "100%" }}
//                     />
//                   </div>

//                   <div className="col-8 col-md-6">
//                     <div className="card-body">
//                       <h6 className="fw-bold">{item.name}</h6>
//                       <p className="text-muted small">{item.product_type}</p>
//                       <h5 className="text-success fw-bold">₹ {item.price}</h5>
//                     </div>
//                   </div>

//                   <div className="col-12 col-md-3 text-center mt-3 mt-md-0">
//                     <div className="d-flex justify-content-center align-items-center">
//                       <button
//                         className="btn btn-sm btn-dark me-2"
//                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                       >
//                         -
//                       </button>
//                       <span className="fw-bold">{item.quantity}</span>
//                       <button
//                         className="btn btn-sm btn-dark ms-2"
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                       >
//                         +
//                       </button>
//                     </div>
//                     <button
//                       className="btn btn-danger btn-sm mt-2"
//                       onClick={() => removeFromCart(item.id)}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";  // Import SweetAlert2

function Cart() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const navigate = useNavigate();

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to remove this item from your cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
        Swal.fire("Deleted!", "The item has been removed from your cart.", "success");
      }
    });
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      Swal.fire("Your cart is empty!", "Please add some products before checkout.", "warning");
      return;
    }

    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Are you sure you want to place this order?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Checkout!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("cart");
        setCart([]);
        Swal.fire("Order Placed!", "Thank you for your purchase!", "success").then(() => {
          navigate("/");
        });
      }
    });
  };

  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-muted">Your cart is empty.</p>
          <Link to="/Product" className="btn btn-dark">Go Shopping</Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-4 order-lg-2 mb-4">
            <div className="card shadow-sm border-0 p-3">
              <h4 className="fw-bold">Order Summary</h4>
              <hr />
              <p className="d-flex justify-content-between">
                <span>Total Items:</span>
                <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Total Price:</span>
                <span className="fw-bold text-success">₹ {totalPrice.toFixed(2)}</span>
              </p>
              <button className="btn btn-dark w-100 mt-3" onClick={handleCheckout}>
                Checkout
              </button>
              <Link to="/Product" className="btn btn-outline-dark w-100 mt-2">
                Continue Shopping
              </Link>
            </div>
          </div>

          <div className="col-lg-8 order-lg-1">
            {cart.map((item) => (
              <div key={item.id} className="card mb-3 shadow-sm border-0">
                <div className="row g-0 align-items-center">
                  <div className="col-4 col-md-3 text-center">
                    <img
                      src={item.image_link}
                      alt={item.name}
                      className="img-fluid rounded"
                      style={{ maxHeight: "100px", objectFit: "contain", width: "100%" }}
                    />
                  </div>

                  <div className="col-8 col-md-6">
                    <div className="card-body">
                      <h6 className="fw-bold">{item.name}</h6>
                      <p className="text-muted small">{item.product_type}</p>
                      <h5 className="text-success fw-bold">₹ {item.price}</h5>
                    </div>
                  </div>

                  <div className="col-12 col-md-3 text-center mt-3 mt-md-0">
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-sm btn-dark me-2"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="fw-bold">{item.quantity}</span>
                      <button
                        className="btn btn-sm btn-dark ms-2"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn btn-danger btn-sm mt-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Signup() {
  const [state, setState] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const API_URL = "http://localhost:3000/users";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    if (touched[name]) validateField(name, value);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    const usernameRegex = /^[a-zA-Z0-9_ ]{3,20}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (name === "username" && (!value || !usernameRegex.test(value))) error = "Username must be 3-20 characters.";
    if (name === "email" && (!value || !emailRegex.test(value))) error = "Invalid email format";
    if (name === "password" && (!value || !passwordRegex.test(value))) error = "Weak password: 6+ chars, 1 uppercase, 1 number, 1 symbol.";
    
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(errors).some(error => error)) {
      Swal.fire({ icon: "error", title: "Invalid Form", text: "Please check all fields." });
      return;
    }
    
    setLoading(true);
    try {
      const res = await axios.post(API_URL, state);
      if (res.status === 201 || res.status === 200) {
        Swal.fire({ icon: "success", title: "Signup Successful", text: "Welcome!" }).then(() => navigate("/"));
      }
    } catch (error) {
      Swal.fire({ icon: "error", title: "Signup Failed", text: error.response?.data?.message || "An error occurred." });
    }
    setLoading(false);
  };

  return (
    <div className="bg-light vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center">Welcome to Sugar</h3>
        <p className="text-center text-muted">(Get exciting deals!)</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              name="username"
              placeholder="Username"
              value={state.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
            />
            {errors.username && <small className="text-danger">{errors.username}</small>}
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>
          <div className="mb-3 position-relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
            />
            <button type="button" className="btn btn-sm btn-outline-secondary position-absolute top-50 end-0 translate-middle-y me-2" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors.password && <small className="text-danger">{errors.password}</small>}
          </div>
          <button type="submit" className="btn btn-dark w-100" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;

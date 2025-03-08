
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    const emailRegex = /^\S+@\S+\.\S+$/;
    
    if (name === "email") {
      if (!value) {
        error = "Email is required";
      } else if (!emailRegex.test(value)) {
        error = "Invalid email format";
      }
    }

    if (name === "password") {
      if (!value) {
        error = "Password is required";
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with state:", state);
  
    if (validateForm()) {
      console.log("Validation passed. Sending request...");
      try {
        // const response = await axios.post("http://localhost:3000/user", state);
        const response = await axios.post("http://localhost:3000/login", state);
        console.log("Server Response:", response.data);
  
        Swal.fire({
          icon: "success",
          title: "Signup Successful",
          text: "You have successfully signed up!",
        }).then(() => {
          navigate("/");
        });
      } 

  catch (error) {
    let message = "There was an error logging in. Please try again.";
    if (error.response && error.response.status === 401) {
      message = "Invalid email or password.";
    }
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: message,
    });
  }
}
  

  const validateForm = () => {
    let isValid = true;
    Object.keys(state).forEach((field) => {
      validateField(field, state[field]); 
      if (errors[field]) isValid = false;
    });
    return isValid;
  };
  

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "400px" }}>
        <h4 className="text-center">Login</h4>
        <form onSubmit={handleSubmit} className="mt-3">
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter Your Email"
              className={`form-control ${errors.email && touched.email ? "is-invalid" : ""}`}
            />
            {errors.email && touched.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter Your Password"
              className={`form-control ${errors.password && touched.password ? "is-invalid" : ""}`}
            />
            {errors.password && touched.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <button type="submit" className="btn btn-dark w-100">Login</button>
        </form>
        <hr />
        <p className="text-center">
          Don't have an account? <Link to='/Signup' className="text-decoration-none text-dark">Sign Up</Link>
        </p>
      </div>
    </div>
  )}
}

export default Login;

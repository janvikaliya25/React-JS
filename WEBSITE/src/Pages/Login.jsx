
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

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
      } else if (!passwordRegex.test(value)) {
        error =
          "Password must be at least 6 characters long, include one uppercase letter, one number, and one special character";
      }
    }

    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email} = state;
    const {password}=state;

    if (!email || errors.email) {
      Swal.fire("Error", "Please enter email", "error");
      return;
    }
    if(!password || errors.password){
        Swal.fire(
            "Error",
            "please enter password",
            "error"
        );
    }

    axios
      .post(`http://localhost:3000/user`, state)
      .then((res) => {
        Swal.fire("Success", "Login Successful", "success");
        navigate("/Home");
      })
      .catch((err) => {
        Swal.fire("Error", "Login failed, please try again", "error");
      });
  };

  return (
    <div
      className="border border-dark w-50 m-auto mt-5 bg-dark"
      style={{ height: "500px" }}
    >
      <div
        className="w-75 m-auto mt-5 p-4"
        style={{ background: "white", height: "400px" }}
      >
        <h4 className="text-center">Login</h4>
        <form onSubmit={handleSubmit} className="w-75 m-auto p-3">
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={() => setTouched({ ...touched, email: true })}
              placeholder="Enter Your Email"
              className={`form-control ${
                errors.email && touched.email ? "is-invalid" : ""
              }`}
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
              onFocus={() => setTouched({ ...touched, password: true })}
              placeholder="Enter Your Password"
              className={`form-control ${
                errors.password && touched.password ? "is-invalid" : ""
              }`}
            />
            {errors.password && touched.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <button type="submit" className="mt-2 btn btn-outline-secondary">
            Submit
          </button>
        </form>
        <hr />
      </div>
    </div>
  );
}

export default Login;

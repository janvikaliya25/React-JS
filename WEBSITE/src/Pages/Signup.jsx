
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Signup() {
  const [state, setState] = useState({
    username: "",
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

    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (name === "username") {
      if (!value) {
        error = "Username is required";
      } else if (!usernameRegex.test(value)) {
        error = "Username lenght must be 3 and more.";
      }
    }

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
      else if (!passwordRegex.test(value)) {
        error =
          "Password must be 6 digit and strong.";
      }
    }

    setErrors({ ...errors, [name]: error });
  };

  const validateForm = () => {
    const newErrors = {};

    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!state.username) {
      newErrors.username = "Username is required";
    } else if (!usernameRegex.test(state.username)) {
      newErrors.username =
        "Username must be lenght 3 and more.";
    }

    if (!state.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(state.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!state.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(state.password)) {
      newErrors.password =
        "Password must be 6 diits and strong";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post(`http://localhost:3000/user`, state)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Signup Successful",
            text: "You have successfully signed up!",
          }).then(() => {
            navigate("/Login");
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Signup Failed",
            text: "There was an error signing you up. Please try again.",
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Form",
        text: "Please try again.",
      });
    }
  };

  return (
    <div
      className="border border-dark w-50 m-auto mt-5 bg-dark"
      style={{ height: "500px" }}
    >
      <div
        className="w-75 m-auto mt-5 p-4"
        style={{ background: "white",height:"400px" }}
      >
        <h3 className="text-center">Welcome to Sugar</h3>
        <p className="text-center">(Get exciting deals :)</p>
        <form action="" onSubmit={handleSubmit} className="w-75 m-auto p-3">
          <div>
            <input
              name="username"
              placeholder="Username"
              value={state.username}
              onChange={handleChange}
              onFocus={() => setTouched({ ...touched, username: true })}
              onBlur={handleBlur}
              className="form-control"
            />
            {errors.username && (
              <p style={{ color: "red" }}>{errors.username}</p>
            )}
          </div>
          <div className="mt-2">
            <input
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
              onFocus={() => setTouched({ ...touched, email: true })}
              onBlur={handleBlur}
              className="form-control"
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div className="mt-2">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              onFocus={() => setTouched({ ...touched, password: true })}
              onBlur={handleBlur}
              className="form-control"
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
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

export default Signup

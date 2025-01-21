import { useState } from "react";
import './Signup.css'

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
  });

  const [isLogin, setIsLogin] = useState(true);

 
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  
  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "username" && !isLogin) {
      const usernameRegex = /^[0-9A-Za-z]{3,16}$/;
      setErrors((prev) => ({ ...prev, username: !usernameRegex.test(value) }));
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prev) => ({ ...prev, email: !emailRegex.test(value) }));
    } else if (name === "password") {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      setErrors((prev) => ({ ...prev, password: !passwordRegex.test(value) }));
    }
  };



  const handleFocus = (e) => {
    const { name } = e.target;
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      if (!formState.email || !formState.password) {
        alert("Please fill in all fields.");
      } else if (errors.email || errors.password) {
        alert("Please fix the errors before submitting.");
      } else {
        alert("Login successful!");
        setFormState({ username: "", email: "", password: "" });
      }
    } 
    
    else {
      if (!formState.username || !formState.email || !formState.password) {
        alert("Please fill in all fields.");
      } else if (errors.username || errors.email || errors.password) {
        alert("Please fix the errors before submitting.");
      } else {
        alert("Signup successful!");
        setFormState({ username: "", email: "", password: "" });
      }
    }
  };

  return (
    <div class="" id="main">
      {isLogin ? (
        <div id="login" className="p-4 w-75 m-auto mt-3">
          <h2 class="text-center">Login</h2>
          <form className="p-4 mt-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              style={{ borderColor: errors.email ? "red" : "" }}
              className="form-control" />
            {errors.email && <p style={{ color: "red" }}>Enter a valid email address.</p>}
            <br />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              style={{ borderColor: errors.password ? "red" : "" }}
              className="form-control" />
            {errors.password && (
              <p style={{ color: "red" }}>
                Password must be at least 6 characters, include one letter and one number.
              </p>
            )}
            <br />

            <button type="submit" className="btn btn-outline-secondary">Login</button>
          </form>
          <hr  className=""/>
          <p className="text-center text-secondary"
            onClick={() => setIsLogin(false)}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Go to Signup page...!
          </p>
        </div>
      ) : (
        <div id="signup" className="p-4 w-75 m-auto mt-3">
          <h2 className="text-center">Signup</h2>
          <form onSubmit={handleSubmit} className="p-4 mt-3">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formState.username}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              style={{ borderColor: errors.username ? "red" : "" }}
           className="form-control" />
            {errors.username && (
              <p style={{ color: "red" }}>
                Username must be 3-16 characters and alphanumeric.
              </p>
            )}
            <br />

            <input
              type="text"
              placeholder="Email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              style={{ borderColor: errors.email ? "red" : "" }}
              className="form-control"/>
            {errors.email && <p style={{ color: "red" }}>Enter a valid email address.</p>}
            <br />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              style={{ borderColor: errors.password ? "red" : "" }}
              className="form-control"/>
            {errors.password && (
              <p style={{ color: "red" }}>
                Password must be at least 6 characters, include one letter and one number.
              </p>
            )}
            <br />

            <button type="submit" className="btn btn-outline-secondary">Signup</button>
          </form>
          <hr />
          <p className="text-center text-secondary"
            onClick={() => setIsLogin(true)}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Go to Login page...!
          </p>
        </div>
      )}
    </div>
  );
}

export default Signup;

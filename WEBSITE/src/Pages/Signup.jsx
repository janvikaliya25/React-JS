
// // import { useState } from "react"
// // import { useNavigate } from "react-router-dom"
// // import axios from 'axios'

// // function Signup(){
// //     const [state,setState]=useState({
// //         username:"",
// //         email:"",
// //         password:""
// //     })
// //     const navigate=useNavigate()
// //     const handleChange=(e)=>{
// //         const [name,value]=e.target
// //         setState({...state,[name]:value})
// //     }

// //     const handleSubmit=(e)=>{
// //         e.preventDefault()
// //         axios.post(`http://localhost:3000/user`,state)
// //         .then((res)=>{
// //             console.log(res)
// //             navigate("/Login")
// //         })
// //         .catch((err)=>{
// //             console.log(err)
// //         })
// //     }

// //     console.log(state)
// //     return(
// //         <div>
// //             <h5>Signup</h5>
// //             <form action="" onSubmit={handleSubmit}>
// //                 <input  name="username" placeholder="Username" onChange={handleChange}/>
// //                 <input  name="email"  placeholder="email" onChange={handleChange}/>
// //                 <input  name="password"  placeholder="password" onChange={handleChange}/>
// //                 <input type="submit" name="submit"/>
// //             </form>
// //         </div>
// //     )
// // }
// // export default Signup   

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Signup() {
//   const [state, setState] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({}); 

//   const navigate = useNavigate();


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState({ ...state, [name]: value });

 
//     if (touched[name]) {
//       validateField(name, value);
//     }
//   };

  
//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     setTouched({ ...touched, [name]: true });
//     validateField(name, value);
//   };


//   const validateField = (name, value) => {
//     let error = "";

//     if (name === "username" && !value) {
//       error = "Username is required";
//     }

//     if (name === "email") {
//       if (!value) {
//         error = "Email is required";
//       } else if (!/\S+@\S+\.\S+/.test(value)) {
//         error = "Invalid email format";
//       }
//     }

//     if (name === "password") {
//       if (!value) {
//         error = "Password is required";
//       } else if (value.length < 6) {
//         error = "Password must be at least 6 characters";
//       }
//     }

//     setErrors({ ...errors, [name]: error });
//   };


//   const validateForm = () => {
//     const newErrors = {};
//     if (!state.username) newErrors.username = "Username is required";
//     if (!state.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(state.email)) {
//       newErrors.email = "Invalid email format";
//     }
//     if (!state.password) {
//       newErrors.password = "Password is required";
//     } else if (state.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       axios
//         .post(`http://localhost:3000/user`, state)
//         .then((res) => {
//           console.log(res);
//           navigate("/Login");
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   };

//   return (
//     <div className="border border-dark w-50 m-auto mt-5 bg-dark" style={{height:"400px"}}>
//         <div className="w-75 m-auto h-75 mt-5 p-4" style={{background:"white"}}>
//       <h5 className="text-center">Signup</h5>
//       <form action="" onSubmit={handleSubmit} className=" w-75 m-auto p-4">
//         <div>
//           <input
//             name="username"
//             placeholder="Username"
//             value={state.username}
//             onChange={handleChange}
//             onFocus={() => setTouched({ ...touched, username: true })}
//             onBlur={handleBlur}
//           className="form-control"/>
//           {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
//         </div>
//         <div className="mt-2">
//           <input
//             name="email"
//             placeholder="Email"
//             value={state.email}
//             onChange={handleChange}
//             onFocus={() => setTouched({ ...touched, email: true })}
//             onBlur={handleBlur}
//             className="form-control" />
//           {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
//         </div>
//         <div className="mt-2">
//           <input
//             name="password"
//             type="password"
//             placeholder="Password"
//             value={state.password}
//             onChange={handleChange}
//             onFocus={() => setTouched({ ...touched, password: true })}
//             onBlur={handleBlur}
//             className="form-control"/>
//           {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
//         </div>
//         {/* <input type="submit" name="submit"/> */}
//         <button type="submit" className="mt-2 btn btn-outline-secondary">submit</button>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default Signup;




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
        error =
          "Username must be 3-15 characters";
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
      } else if (!passwordRegex.test(value)) {
        error =
          "Password must be at least 6 characters.";
      }
    }

    setErrors({ ...errors, [name]: error });
  };

 
  const validateForm = () => {
    const newErrors = {};
    if (!state.username) {
      newErrors.username = "Username is required";
    } else if (!/^[a-zA-Z0-9_]{3,15}$/.test(state.username)) {
      newErrors.username =
        "Username must be 3-15 characters";
    }

    if (!state.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(state.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!state.password) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        state.password
      )
    ) {
      newErrors.password =
        "Password must be at least 6 and one special character.";
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
          console.log(res);
          navigate("/Login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div
      className="border border-dark w-50 m-auto mt-5 bg-dark"
      style={{ height: "500px" }}
    >
      <div
        className="w-75 m-auto h-75 p-4 mt-5"
        style={{ background: "white"}}
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

export default Signup;

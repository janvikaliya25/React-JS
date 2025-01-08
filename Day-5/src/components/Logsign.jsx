// import React, { useState } from 'react'
// import './Logsign.css'
// function Logsing(){
//     const [state,setState]=useState(true)
//     const [username,setusername]=useState("")
//     const [email,setemail]=useState("")
//     const [password,setpassword]=useState("")
//     const [arr,setarr]=useState([])
//     const [logemail,setlogemail]=useState("")
//     const [logpassword,setlogpassword]=useState("")

//     const handle = ()=>{
//         let obj ={
//             username,
//             email,
//             password
//         }
//         setarr([...arr,obj])
//         setusername("")
//         setemail("")
//         setpassword("")
//     }
//     console.log(arr)

//     const loginhandle = ()=>{
//         arr.filter((e)=>{
//             if(e.email==logemail && e.password==logpassword){
//                 alert("you have login succesfully")
//             }
//             else{
//                 alert("login not succesfully")
//             }
//         })

//         console.log(logemail,logpassword)


//     }


//     return(
//         <div id="main" class="w-50 m-auto mt-5">
//             <h1 class="text-center">Login/Signup</h1>
//             <div id="form">
//             { state==true?
//             // login form
//             <div id="login" class="mt-5 p-3">
//                 <h1 class="text-center">Log in Form</h1>
//                 <div class="p-5 w-75 m-auto mt-3">
//                     <form>
//                         <input type="email" placeholder="Enter your email" onChange={(e)=>{setlogemail(e.target.value)}} class="form-control"/><br />
//                         <input type="password" placeholder="Enter your password" onChange={(e)=>{setlogpassword(e.target.value)}} class="form-control"/><br />
//                         <button class="btn btn-outline-secondary" onClick={loginhandle}>Submit</button><br /><br />
//                     </form>
//                     <hr />
//                     <p class="text-center"  onClick={()=>setState(false)}>New to Flipkart? Create an account</p>
//                 </div>
//             </div>
//               // login form
//             :
//             // signup form
//             <div id="signup" class="mt-5">
//                 <h1 class="text-center mt-5">Signup Form</h1>
//                 <div class="p-5 w-75 m-auto mt-3">
//                   <form action="">
//                     <input type="text" placeholder="Enter your name" onChange={(e)=>{setusername(e.target.value)}} value={username} class="form-control"/><br />
//                     <input type="email" placeholder="Enter your email" onChange={(e)=>{setemail(e.target.value)}} value={email} class="form-control"/><br />
//                     <input type="password" placeholder="Enter your password" onChange={(e)=>{setpassword(e.target.value)}} value={password} class="form-control"/><br />
//                     <button class="btn btn-outline-secondary" onClick={handle}>Submit</button><br /><br />
//                   </form>
//                   <hr />
//                   <p class="text-center"  onClick={()=>setState(true)}>Existing User?Log in</p>
//                 </div>
//             </div>
//              // signup form
//              }
//             </div>
//         </div>
//     )
// }

// export default Logsing

// import React, { useState } from "react";
// import "./Logsign.css";
// import swal from 'sweetalert';


// function Logsing() {
//     const [state, setState] = useState(true); // Toggle between Login and Signup forms
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [arr, setArr] = useState([]); // Array to store users
//     const [logEmail, setLogEmail] = useState("");
//     const [logPassword, setLogPassword] = useState("");

//     // Handle Signup
//     const handle = (e) => {
//         e.preventDefault(); // Prevent form submission

//         // Basic validation
//         if (!username || !email || !password) {
//             Swal.fire({
//                 title: "Drag me!",
//                 icon: "success",
//                 draggable: true
//               });
//             // alert("All fields are required for signup.");
//             return;
              
//         }

//         // Check if email already exists
//         const existingUser = arr.find((user) => user.email === email);
//         if (existingUser) {
//             alert("Email already registered. Please use a different email.");
//             return;
//         }

//         // Create a new user object
//         const obj = {
//             username,
//             email,
//             password,
//         };

//         // Add the new user to the array
//         setArr([...arr, obj]);
//         alert("Signup successful!");

//         // Clear form fields
//         setUsername("");
//         setEmail("");
//         setPassword("");
//         setState(true); // Switch to login form after successful signup
//     };

//     // Handle Login
//     const loginhandle = (e) => {
//         e.preventDefault(); // Prevent form submission

//         // Basic validation
//         if (!logEmail || !logPassword) {
//             // alert("All fields are required for login.");
//             // return;

//             Swal.fire({
//                 title: "All fields are required for login!",
//                 icon: "success",
//                 draggable: true
//               });              
//         }

//         // Check if user exists with matching email and password
//         const user = arr.find(
//             (user) => user.email === logEmail && user.password === logPassword
//         );

//         if (user) {
//             alert("Log in succesfully");
//         } else if(email!=logEmail){
//             alert("Invalid email. Please try again.");
//         }
//         else if(password!=logPassword) {
//             alert("Invalid password. Please try again.");
//         }

//         // Clear login fields
//         setLogEmail("");
//         setLogPassword("");
//     };

//     return (
//         <div id="main" className="w-50 m-auto mt-5">
//             <h1 className="text-center">Login/Signup</h1>
//             <div id="form">
//                 {state ? (
//                     // Login Form
//                     <div id="login" className="mt-5 p-3">
//                         <h1 className="text-center">Login Form</h1>
//                         <div className="p-5 w-75 m-auto mt-3">
//                             <form>
//                                 <input
//                                     type="email"
//                                     placeholder="Enter your email"
//                                     onChange={(e) => setLogEmail(e.target.value)}
//                                     value={logEmail}
//                                     className="form-control"
//                                 />
//                                 <br />
//                                 <input
//                                     type="password"
//                                     placeholder="Enter your password"
//                                     onChange={(e) => setLogPassword(e.target.value)}
//                                     value={logPassword}
//                                     className="form-control"
//                                 />
//                                 <br />
//                                 <button
//                                     className="btn btn-outline-secondary"
//                                     onClick={loginhandle}
//                                 >
//                                     Submit
//                                 </button>
//                                 <br />
//                                 <br />
//                             </form>
//                             <hr />
//                             <p
//                                 className="text-center"
//                                 onClick={() => setState(false)}
//                             >
//                                 New to Flipkart? Create an account
//                             </p>
//                         </div>
//                     </div>
//                 ) : (
//                     // Signup Form
//                     <div id="signup" className="mt-5">
//                         <h1 className="text-center mt-5">Signup Form</h1>
//                         <div className="p-5 w-75 m-auto mt-3">
//                             <form>
//                                 <input
//                                     type="text"
//                                     placeholder="Enter your name"
//                                     onChange={(e) => setUsername(e.target.value)}
//                                     value={username}
//                                     className="form-control"
//                                 />
//                                 <br />
//                                 <input
//                                     type="email"
//                                     placeholder="Enter your email"
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     value={email}
//                                     className="form-control"
//                                 />
//                                 <br />
//                                 <input
//                                     type="password"
//                                     placeholder="Enter your password"
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     value={password}
//                                     className="form-control"
//                                 />
//                                 <br />
//                                 <button
//                                     className="btn btn-outline-secondary"
//                                     onClick={handle}
//                                 >
//                                     Submit
//                                 </button>
//                                 <br />
//                                 <br />
//                             </form>
//                             <hr />
//                             <p
//                                 className="text-center"
//                                 onClick={() => setState(true)}
//                             >
//                                 Existing User? Log in
//                             </p>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Logsing;





// import React, { useState } from "react";
// import "./Logsign.css";
// import Swal from "sweetalert2"; 
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'


// function Logsing() {
//     const [state, setState] = useState(true); 
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [arr, setArr] = useState([]); 
//     const [logEmail, setLogEmail] = useState("");
//     const [logPassword, setLogPassword] = useState("");

 
//     const handleSignup = (e) => {
//         e.preventDefault(); 

        
//         if (!username || !email || !password) {
//             Swal.fire({
//                 title: "Error!",
//                 text: "All fields are required for signup.",
//                 icon: "error",
//             });
//             return;
//         }

       
//         const existingUser = arr.find((user) => user.email === email);
//         if (existingUser) {
//             Swal({
//                 title: "Error!",
//                 text: "Email already registered. Please use a different email.",
//                 icon: "warning",
//             });
//             return;
//         }

      
//         const obj = {
//             username,
//             email,
//             password,
//         };

        
//         setArr([...arr, obj]);
//         Swal({
//             title: "Success!",
//             text: "Signup successful!",
//             icon: "success",
//         });

        
//         setUsername("");
//         setEmail("");
//         setPassword("");
//         setState(true); 
//     };

    
//     const handleLogin = (e) => {
//         e.preventDefault(); 

        
//         if (!logEmail || !logPassword) {
//             Swal({
//                 title: "Error!",
//                 text: "All fields are required for login.",
//                 icon: "error",
//             });
//             return;
//         }


//         const user = arr.find(
//             (user) => user.email === logEmail && user.password === logPassword
//         );

//       if(email!=logEmail) {
//             Swal({
//                 title: "Error!",
//                 text: "Invalid email. Please try again.",
//                 icon: "error",
//             });
//         }
//         else if(password!=logPassword){
//             Swal({
//                 title: "Error!",
//                 text: "Invalid password. Please try again.",
//                 icon: "error",
//             });
//         }
//          else if (user) {
//             Swal({
//                 title: "Welcome!",
//                 text:"You have login succsesfully",
//                 icon: "success",
//             });
//         }

        
//         setLogEmail("");
//         setLogPassword("");
//     };

//     return (
//         <div id="main" className="w-50 m-auto mt-5">
//             <h1 className="text-center">Login/Signup</h1>
//             <div id="form">
//                 {state ? (
//                     // Login Form
//                     <div id="login" className="mt-5 p-3">
//                         <h1 className="text-center">Login Form</h1>
//                         <div className="p-5 w-75 m-auto mt-3">
//                             <form>
//                                 <input
//                                     type="email"
//                                     placeholder="Enter your email"
//                                     onChange={(e) => setLogEmail(e.target.value)}
//                                     value={logEmail}
//                                     className="form-control"
//                                 />
//                                 <br />
//                                 <input
//                                     type="password"
//                                     placeholder="Enter your password"
//                                     onChange={(e) => setLogPassword(e.target.value)}
//                                     value={logPassword}
//                                     className="form-control"
//                                 />
//                                 <br />
//                                 <button
//                                     className="btn btn-outline-secondary"
//                                     onClick={handleLogin}
//                                 >
//                                     Submit
//                                 </button>
//                                 <br />
//                                 <br />
//                             </form>
//                             <hr />
//                             <p
//                                 className="text-center"
//                                 onClick={() => setState(false)}
//                             >
//                                 New to Flipkart? Create an account
//                             </p>
//                         </div>
//                     </div>
//                 ) : (
//                     // Signup Form
//                     <div id="signup" className="mt-5">
//                         <h1 className="text-center mt-5">Signup Form</h1>
//                         <div className="p-5 w-75 m-auto mt-3">
//                             <form>
//                                 <input
//                                     type="text"
//                                     placeholder="Enter your name"
//                                     onChange={(e) => setUsername(e.target.value)}
//                                     value={username}
//                                     className="form-control"
//                                 />
//                                 <br />
//                                 <input
//                                     type="email"
//                                     placeholder="Enter your email"
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     value={email}
//                                     className="form-control"
//                                 />
//                                 <br />
//                                 <input
//                                     type="password"
//                                     placeholder="Enter your password"
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     value={password}
//                                     className="form-control"
//                                 />
//                                 <br />
//                                 <button
//                                     className="btn btn-outline-secondary"
//                                     onClick={handleSignup}
//                                 >
//                                     Submit
//                                 </button>
//                                 <br />
//                                 <br />
//                             </form>
//                             <hr />
//                             <p
//                                 className="text-center"
//                                 onClick={() => setState(true)}
//                             >
//                                 Existing User? Log in
//                             </p>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Logsing;



import React, { useState } from "react";
import "./Logsign.css";
import Swal from "sweetalert2"; // Correct import

function Logsing() {
    const [state, setState] = useState(true);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [arr, setArr] = useState([]);
    const [logEmail, setLogEmail] = useState("");
    const [logPassword, setLogPassword] = useState("");

    // Handle Signup
    const handleSignup = (e) => {
        e.preventDefault();

        if (!username || !email || !password) {
            Swal.fire({
                title: "Error!",
                text: "All fields are required for signup.",
                icon: "error",
            });
            return;
        }

        const existingUser = arr.find((user) => user.email === email);
        if (existingUser) {
            Swal.fire({
                title: "Error!",
                text: "Email already registered. Please use a different email.",
                icon: "warning",
            });
            return;
        }

        const obj = { username, email, password };
        setArr([...arr, obj]);

        Swal.fire({
            title: "Success!",
            text: "Signup successful!",
            icon: "success",
        });

        setUsername("");
        setEmail("");
        setPassword("");
        setState(true); // Switch to login form
    };

    // Handle Login
    const handleLogin = (e) => {
        e.preventDefault();

        if (!logEmail || !logPassword) {
            Swal.fire({
                title: "Error!",
                text: "All fields are required for login.",
                icon: "error",
            });
            return;
        }

        const user = arr.find(
            (user) => user.email === logEmail && user.password === logPassword
        );

        if (user) {
            Swal.fire({
                title: "Welcome!",
                text: "You have logged in successfully.",
                icon: "success",
            });
        } else if(email!=logEmail) {
            Swal.fire({
                title: "Error!",
                text: "Invalid email. Please try again.",
                icon: "error",
            });
        }
        else {
            Swal.fire({
                title: "Error!",
                text: "Invalid password. Please try again.",
                icon: "error",
            });
        }

        setLogEmail("");
        setLogPassword("");
    };

    return (
        <div id="main" className="w-50 m-auto mt-5">
            <h1 className="text-center">Login/Signup</h1>
            <div id="form">
                {state ? (
                    <div id="login" className="mt-5 p-3">
                        <h1 className="text-center">Login Form</h1>
                        <div className="p-5 w-75 m-auto mt-3">
                            <form>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    onChange={(e) => setLogEmail(e.target.value)}
                                    value={logEmail}
                                    className="form-control"
                                />
                                <br />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    onChange={(e) => setLogPassword(e.target.value)}
                                    value={logPassword}
                                    className="form-control"
                                />
                                <br />
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={handleLogin}
                                >
                                    Submit
                                </button>
                                <br />
                                <br />
                            </form>
                            <hr />
                            <p
                                className="text-center"
                                onClick={() => setState(false)}
                            >
                                New to Flipkart? Create an account
                            </p>
                        </div>
                    </div>
                ) : (
                    <div id="signup" className="mt-5">
                        <h1 className="text-center mt-5">Signup Form</h1>
                        <div className="p-5 w-75 m-auto mt-3">
                            <form>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    className="form-control"
                                />
                                <br />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className="form-control"
                                />
                                <br />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    className="form-control"
                                />
                                <br />
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={handleSignup}
                                >
                                    Submit
                                </button>
                                <br />
                                <br />
                            </form>
                            <hr />
                            <p
                                className="text-center"
                                onClick={() => setState(true)}
                            >
                                Existing User? Log in
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Logsing;

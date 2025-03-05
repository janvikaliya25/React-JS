import { useState } from "react";
import { Link, useNavigate } from "react-router";  
import { signInWithEmailAndPassword} from "firebase/auth"
import {auth} from"../../firebase"

export default function Login() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()

  console.log(username,email,password)

  const submit=async()=>{
      await signInWithEmailAndPassword(auth,email,password)
      .then((res)=>{
          console.log(res)
          navigate('/DashBoard')
      })
      .catch((err)=>{
          alert(err)
      })
  }
  return (
    <div
      className="border shadow-lg transition duration-300 ease-in-out hover:shadow-blue-500/50"
      style={{
        marginTop: "100px",
        marginLeft: "30%",
        height: "450px",
        width: "40%",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      <h1 className="text-center mt-4">Log in</h1>
      <div
        className="border p-5 w-75 m-auto mt-4 transition duration-300 ease-in-out hover:shadow-blue-300"
        style={{
          height: "300px",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          transition: "box-shadow 0.3s ease-in-out",
        }}
      >
        <input type="email" placeholder="Enter your email" className="form-control" onChange={(e)=>{setEmail(e.target.value)}}/> <br />
        <input type="password" placeholder="Enter your password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}}/> <br />
        <button className="btn btn-primary form-control" onClick={submit}>Log in</button>
        <p className="text-center mt-4">
          New User?
          <Link to="/"> Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

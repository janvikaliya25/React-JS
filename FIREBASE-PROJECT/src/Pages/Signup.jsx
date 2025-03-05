
import { useState } from "react";
import { Link, useNavigate } from "react-router";    
import{createUserWithEmailAndPassword} from "firebase/auth"
import {auth,db} from "../../firebase"
import {doc,setDoc} from "firebase/firestore"

export default function Signup() {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    console.log(username,email,password)

    const submit=async()=>{
        await createUserWithEmailAndPassword(auth,email,password)
        .then((user)=>{
            console.log(user.user)
            setDoc(doc(db,"users",user.user.uid),{username,email,password})
            navigate('/DashBoard')
        })
        .catch((err)=>{
            alert(err)
        })
    }

  return (
    <div
      className="border shadow-lg"
      style={{
        marginTop: "100px",
        marginLeft: "30%",
        height: "500px",
        width: "40%",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}
    >
      <h1 className="text-center mt-4">Signup</h1>
      <div
        className="border p-5 w-75 m-auto mt-4 shadow-sm"
        style={{
          height: "350px",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <input type="text" placeholder="Enter your name" className="form-control" onChange={(e)=>{setUsername(e.target.value)}} /> <br />
        <input type="email" placeholder="Enter your email" className="form-control"  onChange={(e)=>{setEmail(e.target.value)}}/> <br />
        <input type="password" placeholder="Enter your password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} /> <br />
        <button className="btn btn-primary form-control" onClick={submit}>Submit</button>
        <p className="text-center mt-4">
          Existing User?
          <Link to="/Login"> Log in</Link>
        </p>
      </div>
    </div>
  );
}

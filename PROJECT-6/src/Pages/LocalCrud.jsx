import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function LocalCrud(){
    const [state,setState]=useState({
        Image:"",
        Name:"",
        Rate:"",
        Type:""
    })

    const navigate=useNavigate()

    const handleChange=(e)=>{
        const {name,value}=e.target
        setState[{...state,[name]:value}];
    }
    console.log(state)

    const handleSubmit=(e)=>{
        e.preventDefault()
        let a=JSON.parse(localStorage.getItem("data")) || [];

        const movie=[...a,state];

        localStorage.setItem("data",JSON.stringify(movie))

        console.log(state)

        navigate("/")
    }
    return(
        <div className="border mt-5 m-auto w-50" style={{height:"450px"}}>
            <h1 className="text-center mt-3">Movie Details</h1>
            <form action="" className="border w-75 m-auto mt-4 p-3" onSubmit={handleSubmit}>
                <input type="text" name="Image" onChange={handleChange} placeholder="Enter Movie URL" className="form-control"/> <br />
                <input type="text" name="Name" onChange={handleChange} placeholder="Enter Movie name" className="form-control"/> <br />
                <input type="text" name="Rate" onChange={handleChange} placeholder="Enter Mivie rating" className="form-control"/> <br />
                <input type="text" name="Type" onChange={handleChange} placeholder="Enter movie's type" className="form-control"/> <br />
                <button type="submit" className="btn btn-danger">Submit</button>
            </form>
        </div>
    )
}
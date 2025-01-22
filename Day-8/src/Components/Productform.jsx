import { useState } from "react"
import Productlist from "./Productlist"

function Productform({handlechange,handlesubmit}){
 
    // const [state,setState]=useState({
    //     Image:"",
    //     Title:"",
    //     Price:""
    // })
    // const [arr,setArr]=useState([])

    // const handlechange=(e)=>{
        
    //     const {name, value}=e.target
    //     setState({...state,[name]:value})

    // }

    // const handlesubmit =(e)=>{
    //     e.preventDefault()

    //     setArr([...arr,state])
    // }


    return(
        <div className="border">
            <h1>Product form</h1>
            <div>
                <form action="" onSubmit={handlesubmit}>
                    <input type="text" className="border border-black" name="Image" onChange={handlechange} placeholder="Enter product image"/> <br /><br />
                    <input type="text" className="border border-black" name="Title" onChange={handlechange} placeholder="Enter title"/><br /><br />
                    <input type="text" className="border border-black" name="Price" onChange={handlechange} placeholder="Enter price"/><br /><br />
                    <button type="submit" className="border border-black">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Productform

import Productform from "../Components/Productform"
import Productlist from "../Components/Productlist"
import { useState } from "react"

function Product(){
    const [swich,setSwich]=useState(true)
    const [state,setState]=useState({
        Image:"",
        Title:"",
        Price:""
    })
    const [arr,setArr]=useState([])
    
    const handlechane=(e)=>{
        
        const {name, value}=e.target
        setState({...state,[name]:value})
        

    }
    console.log(state)

    const handlesubmit =(e)=>{
        e.preventDefault()
        setArr([...arr,state])
    }
    console.log(arr)
    return(
        <>
        <button onClick={()=>{setSwich(false)}} className="border">Product</button>
        <button onClick={()=>{setSwich(true)}} className="border">Form</button>

        {swich ?
            <Productform handlechange={handlechane} handlesubmit={handlesubmit}></Productform>:
            <Productlist arr={arr}></Productlist>}

            {/* <Productform></Productform>
            <Productlist></Productlist> */}
        </>
    )
}

export default Product
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
        <div className="border">
            <div className="border border-black ">
                <button onClick={()=>{setSwich(false)}} className="border h-12 ml-[200px] w-40 rounded-lg">Product</button>
                <button onClick={()=>{setSwich(true)}} className="border h-12 ml-[800px] w-40 rounded-lg">Form</button>
            </div>

            <div>
                {swich ?
                   <Productform handlechange={handlechane} handlesubmit={handlesubmit}></Productform>:
                   <Productlist arr={arr}></Productlist>}
            </div>    

            {/* <Productform></Productform>
            <Productlist></Productlist> */}
        </div>
    )
}

export default Product
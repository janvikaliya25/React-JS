import { useState } from "react"
import{useNavigate} from 'react-router-dom'
// import axios from 'axios'
function Signup(){
    const [state,setState]=useState({
        username:"",
        email:"",
        password:""
    })

    const navigate=useNavigate()

    const handleChange=(e)=>{
        const[name,value]=e.target
        setState({...state,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()


    }
    return(
        <div>
            <h4>Sign up</h4>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="username" value={state.username} onChange={handleChange} placeholder="Enter the Username"/>
                <input type="email" name="email" id="" value={state.email} onChange={handleChange} placeholder="Enter Your Email"/>
                <input type="password" name="password" value={state.password} onChange={handleChange} placeholder="Enter the password"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Signup
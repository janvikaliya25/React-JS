import { useEffect, useState } from "react"
import {useParams,useNavigate} from 'react-router-dom'

function EditProductPage(){
    const[data,setData]=useState(JSON.parse(localStorage.getItem("data"))||[])
    const navigate = useNavigate()
    const dat=useParams()

    const [state,setState]=useState({
        img:"",
        title:"",
        price:""
    })

useEffect =(()=>{
    let a=data.filter((el)=>{
        return el.id==d.id
    })
    setState(a[0])
},[])

useEffect =(()=>{
    localStorage.setItem("data",JSON.stringify(data))
},[data])

console.log(state)


const handleChange=(e)=>{
    const {name,value}=e.target
    setState({...state,[name]:value});
}

const handleSubmit=(e)=>{
    e.preventDefault()

    let a=data.map((el)=>{
        if(el.id==d.id){
            return state
        }
        else{
            return el;
        }
    })
    setData(a)
    navigate("/Product")

}
    return(
       <div>
          <h1>Edit product page</h1>
          <form action="" onSubmit={handleSubmit}>
            <input type="text" name="img" value={state.img} onChange={handleChange} placeholder="Enter image URL"/>
            <input type="text" name="title" value={state.title} onChange={handleChange} placeholder="Enter title"/>
            <input type="text" name="price" value={state.price} onChange={handleChange} placeholder="Enter price"/>
          </form>
       </div>
    )
}

export default EditProductPage
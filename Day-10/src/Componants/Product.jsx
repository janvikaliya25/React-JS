import { useState } from "react"

function Product(){
    const [state,setState]=useState(JSON.parse(localStorage.getItem("data"))||[])

    const handleDelete=()=>{
        let a=state.filter((i)=>{
            return e.id!=i
        })
        setState(a)
    }
    return(
        <div>
            {
               state.map((e)=>{
                return<>
                <img src={e.img} alt="" />
                <p>{e.title}</p>
                <p>{e.price}</p>
                <button onClick={()=>handleDelete(e.id)}>delete</button>
                <button>edit</button>
                </>
               }) 
            }
        </div>
    )
}
export default Product
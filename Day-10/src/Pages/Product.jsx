// import { useEffect, useState } from "react"

import { useEffect, useState  } from "react"
import { Link } from "react-router-dom"

// function Product(){
//     const [state,setState]=useState(JSON.parse(localStorage.getItem("data"))||[])

//     useEffect=(()=>{
//         localStorage.setItem("data",JSON.stringify(state))
//     },[state])

//     const handleDelete=(i)=>{
//         let a=state.filter((e)=>{
//             return e.id!=i
//         })
//         setState(a)
//     }
//     return(
//         <div>
//             <h1>product</h1>
//             {
//                state.map((e)=>{
//                 return<>
//                 <img src={e.img} alt={e.title} />
//                 <p>{e.title}</p>
//                 <p>{e.price}</p>
//                 <button onClick={()=>handleDelete(e.id)}>delete</button>
//                 <button>edit</button>
//                 </>
//                }) 
//             }
//         </div>
//     )
// }
// export default Product

function Product()
{
    var [state,setState]=useState(JSON.parse(localStorage.getItem("data"))||[])
    console.log(state)

    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(state))
    },[state])

    function handledelete(id)
    {
        var a=state.filter((el)=>{
            if(el.id!=id)
            {
                return id
            }
        })
        setState(a)
    }
    return(
        <>
        <h1>product</h1>
            {state.map((el)=>{
               return <> 
               <img src={el.img} alt="" width="30%"/>
               <p>{el.title}</p>
                <p>{el.price}</p>
                <button onClick={()=>handledelete(el.id)}>delete</button>
                <Link to={`/Product/edit/${el.id}`}> <button >Edit</button></Link>
                <br />
                </>
            })}
        </>
    )
}

export default Product
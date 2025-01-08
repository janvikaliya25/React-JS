// import React, { useState } from 'react'
// import './form.css'

// function Form(){
//     let [state,setState]=useState(true)
//     let [image,setimage]=useState("")
//     let [name,setname]=useState("")
//     let [price,setprice]=useState("")
//     let [arr,setarr]=useState([])

//     let handle = ()=>{
//         let obj={
//             image,
//             name,
//             price
//         }
//         setarr([...arr,obj])
//         setimage("")
//         setname("")
//         setprice("")
//         console.log(arr)
//     }

   

//     return(
//         <div>
//               <button onClick={()=>setState(true)}>Form</button>
//             <button onClick={()=>setState(false)}>Product</button>
          
//             {state ?
//         <div class="border p-5 m-auto mt-5" id="form">
//             <h1>Form</h1>
//             <div>
//             <input type="text" placeholder="Enter image src" onChange={(e)=>{setimage(e.target.value)}} value={image} class="form-control mt-4"/>
//             <input type="text" placeholder="Enter product name" onChange={(e)=>{setname(e.target.value)}} value={name} class="form-control mt-4"/>
//             <input type="number" placeholder="Enter product price" onChange={(e)=>{setprice(e.target.value)}} value={price} class="form-control mt-4"/>
//            <button onClick={handle} class="btn btn-outline-secondary mt-4">submit</button>
//            </div>
//            <p onClick={()=>setState(false)} class="text-center">Go to Product page</p>
//        </div>
//         :
//         <div>
//             <h1>product</h1>
//             <div>
//                 {
//                     arr.map((el,i)=>{
//                         console.log(el.image,el.name,el.price)
//                         return <>
//                         <div>
//                             <div>
//                                <img src={el.image} alt={el.name}/>
//                             </div>
//                             <div>
//                                 <p>{el.name}</p>
//                                 <p>{el.price}</p>
//                             </div>
//                         </div>    
//                         </>
//                     })
//                 }
//             </div>
//             <p onClick={()=>setState(true)}>Go to form</p>
//         </div>
 
//        }
//        </div>
//     )

// }
// export default Form

import React, { useState } from 'react';
import './form.css';

function Form() {
    const [state, setState] = useState(true); // Toggle between Form and Product view
    const [image, setImage] = useState(''); // State for image URL
    const [name, setName] = useState(''); // State for product name
    const [price, setPrice] = useState(''); // State for product price
    const [arr, setArr] = useState([]); // State to store array of products

    const handle = () => {
        // Create a new product object
        const obj = {
            image,
            name,
            price,
        };

        // Add the new object to the array
        setArr((prevArr) => [...prevArr, obj]);

        // Reset form fields
        setImage('');
        setName('');
        setPrice('');
    };

    return (
        <div>
            {/* Toggle buttons */}
            <div id="nav" class="m-auto d-flex justify-content-between align-items-center">
            <button onClick={() => setState(true)} class="btn btn-secondary ms-5" id="btn">Form</button>
            <button onClick={() => setState(false)} class="btn btn-secondary me-5" id="btn2">Product</button>
            </div>

            {state ? (
                // Form View
                <div className="border border-secondary border-3 p-5 m-auto mt-5" id="form">
                    <h1 class="text-center">Form</h1>
                    <div>
                        {/* Form inputs */}
                        <input
                            type="text"
                            placeholder="Enter image src"
                            onChange={(e) => setImage(e.target.value)}
                            value={image}
                            className="form-control mt-4"
                        />
                        <input
                            type="text"
                            placeholder="Enter product name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="form-control mt-4"
                        />
                        <input
                            type="number"
                            placeholder="Enter product price"
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                            className="form-control mt-4"
                        />
                        <button onClick={handle} className="btn btn-outline-secondary mt-4" id="btn3">
                            Submit
                        </button>
                    </div>
                    <hr  class="mt-4"/>
                    <p onClick={() => setState(false)} className="text-center mt-3 text-danger">
                        Go to Product page? Show your product.
                    </p>
                </div>
            ) : (
                // Product View
                <div>
                    <h1 class="text-center mt-3">Products</h1>
                    {arr.length > 0 ? (
                        <table className="table table-bordered table-striped w-50 m-auto mt-3">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arr.map((el, i) => (
                                    <tr key={i}>
                                        <td>
                                            <img
                                                src={el.image}
                                                alt={el.name}
                                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                            />
                                        </td>
                                        <td>{el.name}</td>
                                        <td>${el.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p class="text-center mt-4">No products added yet!</p>
                    )}
                    <p onClick={() => setState(true)} class="text-center mt-5 text-danger">Go to Form? Add more product.</p>
                </div>
            )}
        </div>
    );
}

export default Form;

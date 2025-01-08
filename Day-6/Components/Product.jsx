import { useEffect, useState } from "react"
import "./Product.css"

function Product() {
    let [state, setState] = useState(0)
    let [arr, setArr] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((res) => {
                console.log(res.products)
                setArr(res.products)
            })
            .catch((err) => {
                console.log(err)
            })
            
    }, [])

    
    return (
        <div id="main">
            <div id="nav" class="d-flex justify-content-between align-items-center">
                <h1 class="ms-5">Logo</h1>
               <button onClick={() => { setState(state + 1) }} id="btn" class="me-5 ">submit</button>
            </div>

            <div>
                <h1 class="text-center">Product</h1>
                {state ?
                            <div class="border d-flex justify-content-evenly align-items-center flex-wrap">
                            {arr.map((products)=>(
                                <div class="border border-2 border-dark p-4" id="childe">
                                <img src={products.thumbnail} alt="" />
                                <h4>{products.title}</h4>
                                <p>Brand Name: {products.brand}</p>
                                <p>Price: {products.price}</p>
                                <button class="btn btn-outline-secondary">Cart</button>
                                </div>
                            ))}
                        </div>
                     :
                    // products
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <p
                        style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "#007BFF",
                        }}
                    >
                        Loading products...
                    </p>
                    </div>
          }</div>
        </div>
    )
}

export default Product
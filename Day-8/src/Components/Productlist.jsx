function Productlist({arr}){
    return(
        <div>
        <h1>Product</h1>
         <div>
         {arr.map((e)=>{
            // console.log(e.Image,e.Price,e.Title)
              return(
                <div>
                    <img src={e.Image} alt="" />
                    <h5>{e.Title}</h5>
                    <p> Price: {e.Price}</p>
                </div>
              )
         })}
         </div>

        </div>
    )
}

export default Productlist
// import React from "react"
// import{Routes,Route} from 'react-router-dom'
// import Home from "../Pages/Home"
// import Cart from "../Pages/Cart"
// import EditProductPage from "../Pages/EditProductPage"
// import Login from "../Pages/Login"
// import PageNotFound from "../Pages/PageNotFound"
// import Product from "../Pages/Product"
// import SingleProductPage from "../Pages/SingleProductPage"
// import Signup from "../Pages/Signup"
// function MainRoutes(){
//     return(
//         <div>
//           <Routes>
//             <Route path='/' element={<Home></Home>}></Route>
//             <Route path='/Cart' element={<Cart></Cart>}></Route>
//             <Route path='/Login' element={<Login></Login>}></Route>
//             <Route path='/Signup' element={<Signup></Signup>}></Route>
//             <Route path='/EditProductPage' element={<EditProductPage></EditProductPage>}></Route>
//             <Route path='/Product' element={<Product></Product>}></Route>
//             <Route path="SingleProductPage/:id" element={<SingleProductPage></SingleProductPage>}></Route>
//             <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
//           </Routes>
//         </div>
//     )
// }

// export default MainRoutes

import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import EditProductPage from "../Pages/EditProductPage";
import Login from "../Pages/Login";
import PageNotFound from "../Pages/PageNotFound";
import Product from "../Pages/Product";
import SingleProductPage from "../Pages/SingleProductPage";
import Signup from "../Pages/Signup";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/EditProductPage' element={<EditProductPage />} />
        <Route path='/Product' element={<Product />} />
        <Route path="/SingleProductPage/:id" element={<SingleProductPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;

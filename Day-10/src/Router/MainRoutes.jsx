import React from "react"
import Home from '../Pages/Home'
import Form from '../Pages/Form'
import Product from '../Pages/Product'
import PageNotFound from "../Pages/PageNotFound"
import {Routes,Route} from "react-router-dom"
import EditProductPage from "../Pages/EditProductPage"


function MainRoutes(){
    return(
        <>
         <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Form' element={<Form/>}></Route>
            <Route path='/Product' element={<Product/>}></Route>
            <Route path="/EditProductPage" element={<EditProductPage/>}></Route>
            <Route path='*' element={<PageNotFound/>}></Route>
         </Routes>
        </>
    )
}
export default MainRoutes
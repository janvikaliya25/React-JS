import React from "react"
import Home from '../Componants/Home'
import Form from '../Componants/Form'
import Product from '../Componants/Product'
import {Routes,Route} from "react-router-dom"

function MainRoutes(){
    return(
        <>
         <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Form' element={<Form/>}></Route>
            <Route path='/Product' element={<Product/>}></Route>
         </Routes>
        </>
    )
}
export default MainRoutes
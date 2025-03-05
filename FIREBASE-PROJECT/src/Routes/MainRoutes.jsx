import { Route, Routes } from "react-router";
import React from "react";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import DashBoard from "../Pages/DashBoard";

export default function MainRoutes(){
    return(
        <div>
        <Routes>
            <Route path='/' element={<Signup></Signup>}></Route>
            <Route path='/Login' element={<Login></Login>}></Route>
            <Route path='/DashBoard' element={<DashBoard></DashBoard>}></Route>
        </Routes>
        </div>
    )
}
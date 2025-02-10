import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import LocalCrud from "../Pages/LocalCrud";
import PageNotFound from "../Pages/PageNotFound";

export default function MainRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="LocalCrud" element={<LocalCrud></LocalCrud>}></Route>
                <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
            </Routes>
        </div>
    )
}
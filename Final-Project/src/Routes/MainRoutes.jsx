import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Form from "../Pages/Form";

function MainRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="Form" element={<Form/>}/>
                <Route path="Form/:id" element={<Form/>}/>
            </Routes>
        </div>
    )
}

export default MainRoutes;
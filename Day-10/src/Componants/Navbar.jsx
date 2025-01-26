import { NavLink } from "react-router-dom"
import './Navbar.css'
function Navbar(){
    return(
        <>
        <h1>Nav</h1>
        <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Form'>Form</NavLink>
        <NavLink to='/Product'>Product</NavLink>
        <NavLink to='/EditProductPage'>EditProductPage</NavLink>
        <NavLink to='*'>PageNotFound</NavLink>
        </div>
        </>
    )
}
export default Navbar
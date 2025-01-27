// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import "Navbar" from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
      // <div className="border border-danger" style={{height:"600px"}}>
      <div className='border border-dark border-2 d-flex justify-content-evenly align-items-center' style={{height:"80px"}}>
            <Link className='text-decoration-none text-dark' to={'/'}>Home</Link>
            <Link className='text-decoration-none text-dark' to={"/Cart"}>Cart</Link>
            <Link className='text-decoration-none text-dark' to={"/Login"}>Login</Link>
            <Link className='text-decoration-none text-dark' to={"/Product"}>Product</Link>
            <Link className='text-decoration-none text-dark' to={"/EditProductPage"}>EditProductPage</Link>
            <Link className='text-decoration-none text-dark' to={"/SingleProductPage"}>SingleProductPage</Link>
            <Link className='text-decoration-none text-dark' to={'/Signup'}>Signup</Link>
            <Link className='text-decoration-none text-dark' to={"*"}>PageNotFound</Link>
      </div>
      // </div>
    )
}
export default Navbar
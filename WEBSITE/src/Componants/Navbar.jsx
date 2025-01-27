import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={"/"}><Navbar.Brand >Home</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/Cart"}><Navbar.Brand>Cart</Navbar.Brand></Link>
            <Link to={"/Login"}><Navbar.Brand>Login</Navbar.Brand></Link>
            <Link to={"/Product"}><Navbar.Brand>Product</Navbar.Brand></Link>
            <Link to={"/EditProductPage"}><Navbar.Brand>EditProductPage</Navbar.Brand></Link>
            <Link to={"/SingleProductPage"}><Navbar.Brand>SingleProductPage</Navbar.Brand></Link>
            <Link to={"*"}><Navbar.Brand>PageNotFound</Navbar.Brand></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )
}
export default Navbar
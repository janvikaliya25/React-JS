
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbarcode() {
  return (
    <Navbar expand="lg" bg='light' className="border-bottom shadow-sm" style={{ height: "70px", zIndex: "2", position: "sticky", top: "0" }}>
     
      <Navbar.Brand as={Link} to="/" className="fw-bold text-dark h-100 d-flex justify-content-evenly align-items-center" style={{ width: "10%", marginLeft: "2%" }}>
        <img src="https://www.sugarcosmetics.com/cdn/shop/files/SUGAR_Cosmetics_Logo.png?v=1734589067&width=280" alt="Sugar Cosmetics Logo" style={{ width: "90%", height: "40px" }} />
      </Navbar.Brand>

     
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
       
        <Nav className="me-auto" style={{ width: "65%", marginLeft: "5%" }}>
          <Nav.Link as={Link} to="" className="text-dark" style={{ fontSize: "12px" }}>NEW</Nav.Link>
          <Nav.Link as={Link} to="" className="text-dark ms-4" style={{ fontSize: "12px" }}>LIPS</Nav.Link>
          <Nav.Link as={Link} to="" className="text-dark ms-4" style={{ fontSize: "12px" }}>EYES</Nav.Link>
          <Nav.Link as={Link} to="" className="text-dark ms-4" style={{ fontSize: "12px" }}>FACE</Nav.Link>
          <Nav.Link as={Link} to="" className="text-dark ms-4" style={{ fontSize: "12px" }}>NAILS</Nav.Link>
          <Nav.Link as={Link} to="" className="text-dark ms-4" style={{ fontSize: "12px" }}>SKIN</Nav.Link>
          <Nav.Link as={Link} to="" className="text-dark ms-4" style={{ fontSize: "12px" }}>OFFERS</Nav.Link>
          <Nav.Link as={Link} to="" className="text-dark ms-4" style={{ fontSize: "12px" }}>GIFTING</Nav.Link>
          <Nav.Link as={Link} to="" className="text-dark ms-4" style={{ fontSize: "12px" }}>SUGAR POP</Nav.Link>
          <Nav.Link as={Link} to="" className="text-dark ms-4" style={{ fontSize: "12px" }}>SUGAR PLAY</Nav.Link>

          
          <NavDropdown title="MORE" id="navbarScrollingDropdown" className="text-dark ms-4" style={{ fontSize: "12px" }}>
            <NavDropdown.Item as={Link} to="/Product" className="text-dark" style={{ fontSize: "12px" }}>PRODUCT</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/EditProductPage" className="text-dark" style={{ fontSize: "12px" }}>EDIT PRODUCT PAGE</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/Support" style={{ fontSize: "12px" }}>SUPPORT</NavDropdown.Item>
          </NavDropdown>
        </Nav>

       
        <Nav className="me-3 d-flex justify-content-evenly align-items-center" style={{ width: "15%" }}>
          <Nav.Link as={Link} to="/Cart" className="text-dark">
            <i className="bi bi-cart-plus"></i>
          </Nav.Link>
          <Nav.Link as={Link} to="/Signup" className="text-dark">
            <i className="fa-regular fa-user"></i>
          </Nav.Link>
          <Nav.Link className="text-dark">
            <i className="bi bi-search"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
console.log("Navbarcode Component Loaded");

export default Navbarcode;
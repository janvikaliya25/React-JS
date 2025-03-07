
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarCode() {
  return (
    <>
  
      <Navbar expand="lg" className="bg-body-tertiary" style={{ height: "65px" }}>
        <Container>
        
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://in.bmscdn.com/webin/common/icons/logo.svg"
              alt="Logo"
              style={{ height: "40px" }}
            />
          </Navbar.Brand>

        
          <Form className="d-none d-lg-flex flex-grow-1 mx-3 position-relative">
            <i
              className="fa-solid fa-magnifying-glass text-secondary position-absolute"
              style={{ left: "10px", top: "50%", transform: "translateY(-50%)" }}
            ></i>
            <Form.Control
              type="text"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              className="ps-4"
              style={{ fontSize: "14px" }}
            />
          </Form>

       
          <div className="d-flex align-items-center">
            <p className="m-0 me-3 d-none d-md-block">
              Location <i className="fa-solid fa-angle-down"></i>
            </p>
            <Button as={Link} to="/LocalCrud" variant="danger" size="sm" className="me-3">
              Add Movies
            </Button>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
        </Container>
      </Navbar>

    
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-2">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
              <Nav.Link as={Link} to="/stream">Stream</Nav.Link>
              <Nav.Link as={Link} to="/events">Events</Nav.Link>
              <Nav.Link as={Link} to="/plays">Plays</Nav.Link>
              <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
              <Nav.Link as={Link} to="/activities">Activities</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/list-your-show">List Your Show</Nav.Link>
              <Nav.Link as={Link} to="/corporates">Corporates</Nav.Link>
              <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
              <Nav.Link as={Link} to="/gift-card">Gift Card</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

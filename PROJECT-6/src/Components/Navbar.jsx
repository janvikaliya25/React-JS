import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom"
export default function NavbarCode(){
    return(
        <div className="" style={{height:"110px"}}>
            <header className="container m-auto d-flex justify-content-between align-items-center" style={{height:"65px"}}>
               <Nav.Link as={Link} to="/" className="d-flex justify-content  align-items-center" style={{width:"15%",height:"100%"}}>
                   <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" />
               </Nav.Link>
                <div className="h-100 d-flex justify-content-evenly align-items-center p-3" style={{width:"45%",position:"relative"}}>
                    <i class="fa-solid fa-magnifying-glass text-secondary" style={{position:"absolute",left:"30px"}}></i>
                    <input type="text" placeholder="Search for Movies,Events,Plays,Sports and Activities" className="form-control ps-5" style={{color:"gray",fontSize:"14px"}}/>
                </div>
                <div className=" h-100 w-25 d-flex justify-content-evenly align-items-center">
                    <p className="mt-3"> location <span><i class="fa-solid fa-angle-down" style={{fontSize:"12px"}}></i></span></p>
                    <Nav.Link as={Link} to="/LocalCrud"><button className="btn btn-danger" style={{fontSize:"13px"}}>Add Movies</button></Nav.Link>
                    <p className="mt-3"><i class="fa-solid fa-bars "></i></p>
                </div>
            </header>

            <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{height:"44px"}}>
  <div class="container">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-between align-items-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active">Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Stream</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" >Plays</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" >Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" >Activities</a>
        </li>
      </ul>

      <ul className=" navbar-nav" style={{fontSize:"13px"}}>
      <li class="nav-item ms-3">
          <a class="nav-link">ListYourShow</a>
        </li>
        <li class="nav-item ms-3">
          <a class="nav-link " >Corporates</a>
        </li>
        <li class="nav-item ms-3">
          <a class="nav-link " >Offers</a>
        </li>
        <li class="nav-item ms-3">
          <a class="nav-link" >Gift Card</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container">
    <Link to="/" className="text-decoration-none text-light"><h1 className="" style={{fontSize:"25px"}}>Recipe Book</h1></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item mt-2 ms-5">
          <Link to="/"  className="text-decoration-none text-light"><p className="">Home</p></Link>
        </li>
        <li class="nav-item mt-2 ms-5">
          <Link to="/"  className="text-decoration-none text-light"><p className="">Recipe Details</p></Link>
        </li>
        <li class="nav-item mt-2 ms-5">
          <Link to="/"  className="text-decoration-none text-light"><p className="">Recipe List</p></Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
       <Link to="/Form"> <button class="btn btn-danger" type="submit">Recipe Form</button></Link>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Navbar;
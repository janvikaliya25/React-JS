
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./home.css"; 
import Headline from "./headline";

function Home() {
  return (
    <div>  
      <section className="home-section bg-dark text-white d-flex align-items-center justify-content-evenly vh-100 gap-5">
        
        {/* Introduction Section */}
        {/* Introduction Section */}
           <div className="" style={{ width: "43%" }}>
            <h2 className="display-5 fw-bold">Welcome to My Portfolio</h2>
               <h3 className="">Hello, I'm <span>Janvi Kaliya</span></h3>
               <Headline/>
               <a href="https://github.com/janvikaliya25" className="" id="a">Github : janvikaliya25 <i class="fa-solid fa-arrow-right" style={{fontSize:"12px"}}></i></a> <br />
               <a href="https://www.linkedin.com/in/janvi-kaliya-a73a522a9/" id="a">Linkdin : Janvi Kaliya <i class="fa-solid fa-arrow-right" style={{fontSize:"12px"}}></i></a>
               <div className="mt-3">
                  <Link to="/projects" className="btn btn-gradient btn-lg me-3 shadow">View Projects</Link>
                  <Link to="/contact" className="btn btn-outline-gradient btn-lg shadow">Hire Me</Link>
               </div>
          </div>


        {/* Image Section */}
        <div className="image-container" style={{ width: "30%", height: "500px" }}>
          <img src="https://static.vecteezy.com/system/resources/previews/044/428/120/non_2x/business-woman-illustration-on-transparent-background-free-png.png" 
               alt="Profile" 
               className="h-100 w-100" />
        </div>

      </section>
    </div>
  );
}

export default Home;


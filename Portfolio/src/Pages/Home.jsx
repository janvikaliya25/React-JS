
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./home.css"; 

function Home() {
  return (
    <div>  
      <section className="home-section bg-dark text-white d-flex align-items-center justify-content-evenly vh-100 gap-5">
        
        {/* Introduction Section */}
        {/* Introduction Section */}
           <div className="animated-border" style={{ width: "43%" }}>
               <h1 className="display-4 fw-bold">Hello, I'm <span>Janvi Kaliya</span></h1>
               <p className="lead fs-2">Frontend Developer | React Enthusiast</p>
               <div className="mt-4">
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



import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="bg-dark text-white text-center d-flex align-items-center justify-content-center vh-100 d-flex justify-conten-evenly align-items-center gap-5 ">
        <div className="border border-light border-4 p-5" style={{width:"50%"}}>
          <h1 className="display-4 fw-bold">Hello, I'm <span className="">Janvi Kaliya</span></h1>
          <p className="lead">Frontend Developer | React Enthusiast</p>
          <div className="mt-4">
            <Link to="/projects" className="btn btn-primary btn-lg me-3 shadow">View Projects</Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg shadow">Hire Me</Link>
          </div>
        </div>
        <div  className="border border-light border-4" style={{width:"30%",height:"400px"}}>
          <img src="c:\Users\user\Pictures\Saved Pictures\Photos\7.jpg" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Home;

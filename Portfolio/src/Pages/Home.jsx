// function Home() {
//     return (
//       <div className="border border-danger border-4" style={{height:"500px",marginTop:"60px"}}>
//         <h1 className="mt-5">Welcome to My Portfolio</h1>
//       </div>
//     );
//   }
  
//   export default Home;
  
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-5xl font-bold mb-4">Hello, I'm <span className="text-blue-500">[Your Name]</span></h1>
//       <p className="text-xl text-gray-300">Frontend Developer | React Enthusiast</p>
//       <div className="mt-6">
//         <Link to="/projects" className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-lg shadow-lg mr-4">View Projects</Link>
//         <Link to="/contact" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-lg">Hire Me</Link>
//       </div>
//     </div>
//   );
// }

// export default Home;

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-white text-center d-flex align-items-center justify-content-center vh-100 d-flex justify-conten-evenly align-items-center gap-5 ">
        <div className="border border-light border-4 p-5" style={{width:"40%"}}>
          <h1 className="display-4 fw-bold">Hello, I'm <span className="">Janvi Kaliya</span></h1>
          <p className="lead">Frontend Developer | React Enthusiast</p>
          <div className="mt-4">
            <Link to="/projects" className="btn btn-primary btn-lg me-3 shadow">View Projects</Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg shadow">Hire Me</Link>
          </div>
        </div>
        <div  className="border border-light border-4" style={{width:"40%"}}></div>
      </section>
    </div>
  );
}

export default Home;

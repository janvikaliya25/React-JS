
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaReact,
  FaJs,
  FaBootstrap,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaProjectDiagram,
} from "react-icons/fa";
import { SiTailwindcss, SiC, SiJquery, SiDatabricks } from "react-icons/si";
import "./Skills.css";

const skills = [
  { icon: <FaHtml5 size={50} color="#E34F26" />, name: "HTML", description: "Structuring web pages." },
  { icon: <FaCss3Alt size={50} color="#1572B6" />, name: "CSS", description: "Styling with CSS." },
  { icon: <FaJs size={50} color="#F7DF1E" />, name: "JavaScript", description: "Modern JavaScript (ES6+)." },
  { icon: <FaBootstrap size={50} color="#7952B3" />, name: "Bootstrap", description: "Responsive UI." },
  { icon: <FaReact size={50} color="#61DAFB" />, name: "React.js", description: "Building UIs with React." },
  { icon: <FaNodeJs size={50} color="#68A063" />, name: "Node.js", description: "Backend development." },
  { icon: <FaDatabase size={50} color="#4DB33D" />, name: "MongoDB", description: "NoSQL databases." },
  { icon: <SiTailwindcss size={50} color="#38B2AC" />, name: "Tailwind CSS", description: "Utility-first framework." },
  { icon: <SiJquery size={50} color="#0769AD" />, name: "jQuery", description: "Simplifying interactions." },
  { icon: <SiC size={50} color="#A8B9CC" />, name: "C Language", description: "Programming basics." },
  { icon: <FaProjectDiagram size={50} color="#FF5733" />, name: "DSA", description: "Data Structures & Algorithms." },
  { icon: <SiDatabricks size={50} color="#FF5733" />, name: "Media Query", description: "Responsive design." },
];

export default function Skills() {
  return (
    <div className="container-fluid bg-dark text-white py-5 mt-5">
      <div className="text-center">
        <img
          src="your-profile-image.jpg"
          className="rounded-circle shadow-lg img-fluid border"
          width="120px"
          height="120px"
        //   alt="Profile"
        />
        <h1 className="mt-3">I am Janvi Kaliya</h1>
        <p className="text-muted">Full-Stack Developer passionate about creating web applications.</p>
      </div>

      {/* skills section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">My Skills</h2>
        <div className="row">
           {skills.map((skill, index) => (
              <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                 <div className="p-4 rounded shadow-lg skill-card">
                 <div className="icon-container mb-2">{skill.icon}</div>
                 <h5 className="mt-2">{skill.name}</h5>
                 <p className="text-light small">{skill.description}</p>
                 </div>
              </div>
            ))}
        </div>
      </div>

      {/* <div className="container mt-5">
        <h2>My Github Repository</h2>
      </div> */}
    </div>
  );
}
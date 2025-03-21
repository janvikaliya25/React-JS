
import React from "react";
import "./about.css"; 

function About() {
  const education = [
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Saurashtra University",
      year: "2023-2026",
      description: "Specialized in full-stack web development."
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Shree Sahajanand High School",
      year: "2021-2023",
      description: "Commerce stream with Statistics & Accounting."
    }
  ];

  return (
    <div className="container-fluid px-4 bg-dark text-white" style={{ marginTop: "62px" }}>
      
      {/* About Me Section */}
      <h1 className="text-center text-info fw-bold pt-3">About Me</h1>
            <div className="about-container">
        <div className="about-image">
          <img src="" alt="" />
        </div>
        <div className="about-text">
          <h2 className="text-info fw-bold mb-4">FRONTEND DEVELOPER</h2>
          <p className="lead text-light">
            I am <strong>Janvi Kaliya</strong>, a passionate <strong>Frontend Developer</strong> skilled in building modern, responsive, and dynamic web applications.
            I specialize in <strong>HTML5, CSS3, Media Query, jQuery, JavaScript, React.js, Tailwind CSS, and Bootstrap</strong> to create visually appealing and high-performance websites.
            I love crafting user-friendly interfaces and continuously learning new technologies.
          </p>
        </div>
      </div>


      {/* Education Section */}
      <div className="container mt-5">
        <h2 className=" text-info fw-bold mb-4">Education</h2>
        <div className="row justify-content-center">
          {education.map((edu, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-6">
              <div className="card edu-card text-white shadow-lg mb-4 p-4 border border-info rounded-3">
                <h5 className="text-info fw-bold">{edu.degree}</h5>
                <p className="text-warning">{edu.institution} | {edu.year}</p>
                <p className="text-light">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 container">
         <h2 className="text-info fw-bold mb-4">Course</h2>
         <div className="row justify-content">
         <div  className="col-12 col-sm-6 ">
              <div className="card edu-card text-white shadow-lg mb-4 p-4 border border-info rounded-3">
                <h5 className="text-info fw-bold">Full-Stack Development</h5>
                <p className="text-warning">Red and White Skill Education | 2023-2025</p>
                <p className="text-light">Developed multiple projects, including a responsive e-commerce website, a movie ticket booking platform, and a portfolio website, implementing real-world functionalities and best coding practices.</p>
              </div>
            </div>
         </div>
      </div>
    </div>
  );
}

export default About;

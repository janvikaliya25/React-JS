
// import resume from "../assets/Image/First Project.jpg";
// import './resume.css'
// function Resume() {
//     return (
//         <div className="bg-dark" style={{ marginTop: "60px" }}>
//             <h1 className="text-info text-center fw-bold pt-5 mb-4">Resume</h1>
//             <div className="container-fluid">
//                 <div className="border m-auto mt-5 mb-5 resume-container" style={{ width: "40%", height: "800px" }}>
//                     <img src={resume} alt="" className="h-100 w-100" />
//                 </div>
//                 <button className="btn btn-danger resume-btn" style={{ marginLeft: "43%", height: "50px", width: "180px", borderRadius: "10px" }}>
//                     Download Resume
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Resume;

import resume from "../assets/Image/First Project.jpg";
import './resume.css';

function Resume() {
    const handleDownload = () => {
        const resumePath = process.env.PUBLIC_URL + "/My_Resume.pdf"; 
        const link = document.createElement("a");
        link.href = resumePath;
        link.download = "My_Resume.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="bg-dark" style={{ marginTop: "60px" }}>
            <h1 className="text-info text-center fw-bold pt-5 mb-4">Resume</h1>
            <div className="container-fluid">
                <div className="border m-auto mt-5 mb-5 resume-container" style={{ width: "40%", height: "800px" }}>
                    <img src={resume} alt="Resume" className="h-100 w-100" />
                </div>
                <div className="">
                    <button 
                        onClick={handleDownload} 
                        className="btn btn-danger resume-btn mb-4"
                        style={{ marginLeft: "43%", height: "50px", width: "180px", borderRadius: "10px", textAlign: "center", display: "inline-block", lineHeight: "35px" }}
                    >
                        Download Resume
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Resume;

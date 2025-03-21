
import resume from "../assets/Image/First Project.jpg";
import './resume.css'
function Resume() {
    return (
        <div className="bg-dark" style={{ marginTop: "60px" }}>
            <h1 className="text-info text-center fw-bold pt-5 mb-4">Resume</h1>
            <div className="container-fluid">
                <div className="border m-auto mt-5 mb-5 resume-container" style={{ width: "40%", height: "800px" }}>
                    <img src={resume} alt="" className="h-100 w-100" />
                </div>
                <button className="btn btn-danger resume-btn" style={{ marginLeft: "43%", height: "50px", width: "180px", borderRadius: "10px" }}>
                    Download Resume
                </button>
            </div>
        </div>
    );
}

export default Resume;

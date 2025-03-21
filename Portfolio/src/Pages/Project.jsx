
import './project.css'
import img1 from "../assets/Image/first.png"
import img2 from "../assets/Image/second.png"
import img3 from "../assets/Image/third.png"
import img4 from "../assets/Image/fourth.png"
import img5 from "../assets/Image/fifth.png"
import img6 from "../assets/Image/sixth.png"
function Project() {
    return (
        <div className="container-fluid bg-dark mt-5">
            <h1 className="text-info fw-bold text-center pt-5">project</h1>
            <div className="border border-light d-flex justify-content-between align-items-center flex-wrap m-auto mt-3 project-container" style={{ width: "86%" }}>
                <div className="border border-secondary mt-5 project-card" style={{ width: "31%", height: "750px" }}>
                    <div className="h-75 w-100 border border-danger">
                        <img src={img6} alt="" className="w-100 h-100" />
                    </div>
                    <div className="border border-info w-100 h-25">
                        <h5 className='text-info mt-3'>React js Project</h5>
                        <p className='text-secondary fw-bold'>Suger Cosmetics Website</p>
                        <p className='text-light' style={{fontSize:"13px"}}>"Sugar Cosmetics is a modern e-commerce website featuring a sleek UI, product filtering, sorting, and a secure checkout process. It offers a user-friendly shopping experience with responsive design and fast performance."</p>
                    </div>
                </div>
                <div className="border border-secondary mt-5 project-card" style={{ width: "31%", height: "750px" }}>
                    <div className="h-75 w-100 border border-danger">
                        <img src={img5} alt="" className="w-100 h-100" />
                    </div>
                    <div className="border border-info w-100 h-25">
                    <h5 className='text-info mt-3'>React js Project</h5>
                        <p className='text-secondary fw-bold'>My First Project in react</p>
                        <p className='text-light' style={{fontSize:"13px"}}>"This project is my first step into the world of React.js, featuring a well-structured component-based UI, state management, and responsive design. It includes key React concepts such as props, hooks, and routing to enhance functionality."</p>
                    </div>
                </div>
                <div className="border border-secondary mt-5 project-card" style={{ width: "31%", height: "750px" }}>
                    <div className="h-75 w-100 border border-danger">
                        <img src={img4} alt="" className="w-100 h-100" />
                    </div>
                    <div className="border border-info w-100 h-25">
                        <h5  className='text-info mt-3'>JS project</h5>
                        <p  className='text-secondary fw-bold'>Weather API</p>
                        <p className='text-light' style={{fontSize:"13px"}}>"This JavaScript-based weather app retrieves real-time weather data using a public API. Users can search for any city and get details like temperature, humidity, wind speed, and weather conditions. The UI is designed to be simple and responsive for a smooth user experience."</p>
                    </div>
                </div>
                <div className="border border-secondary mt-5 project-card" style={{ width: "31%", height: "750px" }}>
                    <div className="h-75 w-100 border border-danger">
                        <img src={img3} alt="" className="w-100 h-100" />
                    </div>
                    <div className="border border-info w-100 h-25">
                        <h5  className='text-info mt-3'>Bootstrap Project</h5>
                        <p  className='text-secondary fw-bold'>First UI</p>
                        <p className='text-light' style={{fontSize:"13px"}}>"My first Bootstrap UI project is a fully responsive web design built using Bootstrap’s grid system and components. It includes a sleek navigation bar, buttons, cards, modals, and a well-structured layout, ensuring a smooth user experience across all devices."</p>
                    </div>
                </div>
                <div className="border border-secondary mt-5 project-card" style={{ width: "31%", height: "750px" }}>
                    <div className="h-75 w-100 border border-danger">
                        <img src={img2} alt="" className="w-100 h-100" />
                    </div>
                    <div className="border border-info w-100 h-25">
                        <h5 className='text-info mt-3'>Bootstrap Project</h5>
                        <p className='text-secondary fw-bold'>Second UI</p>
                        <p className='text-light' style={{fontSize:"13px"}}>My second Bootstrap UI project builds upon my first, incorporating a more polished design with improved responsiveness. It includes a structured layout, a stylish navigation bar, interactive elements like buttons and modals, and a visually appealing card-based design."</p>
                    </div>
                </div>
                <div className="border border-secondary mt-5 project-card" style={{ width: "31%", height: "750px" }}>
                    <div className="h-75 w-100 border border-danger">
                        <img src={img1} alt="" className="w-100 h-100" />
                    </div>
                    <div className="border border-info w-100 h-25">
                        <h5 className='text-info mt-3'>Bootstrap Project</h5>
                        <p className='text-secondary fw-bold'>Third UI</p>
                        <p className='text-light' style={{fontSize:"13px"}}>"My third Bootstrap UI project showcases a more advanced layout with enhanced styling and responsiveness. It includes a well-structured navigation bar, dynamic components like carousels and modals, and a visually appealing grid system for a seamless user experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;

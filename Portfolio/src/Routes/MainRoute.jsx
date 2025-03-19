import Home from "../Pages/Home";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";
import Resume from "../Pages/Resume";
import About from "../Pages/About";
import { Route, Routes } from "react-router";

function MainRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}

export default MainRoute;
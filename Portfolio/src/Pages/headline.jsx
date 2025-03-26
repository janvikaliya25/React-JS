
import { Typewriter } from "react-simple-typewriter";
import "./Headline.css";

function Headline() {
    return (
        <div className="headline-container">
            <h1 className="headline fw-light">
                <Typewriter
                    words={["I'm a Frontend Developer","I'm a Backend Developre","I'm a Full-Stack Developer", "I Love Creating Websites"]}
                    loop={0} // 0 means infinite loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000} // Pause before deleting
                />
            </h1>
        </div>
    );
}

export default Headline;

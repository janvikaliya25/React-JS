
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer-container mt-5">
           
            <div className="d-flex flex-wrap justify-content-center align-items-center top-section">
                <div className="container d-flex flex-wrap align-items-center gap-3">
                    <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="Hut Icon" className="footer-icon" />
                    <div className="footer-text">
                        <h5 className="fw-bold">List your show</h5>
                        <p>Got a show, event, activity, or a great experience? Partner with us & get listed on BookMyShow.</p>
                    </div>
                    <button className="btn btn-danger contact-btn">Contact Today</button>
                </div>
            </div>

           
            <div className="middle-section">
                <div className="container d-flex flex-wrap justify-content-center text-center">
                    <div className="info-box">
                        <img src="" alt="" />
                        <p>24/7 CUSTOMER CARE</p>
                    </div>
                    <div className="info-box">
                        <img src="" alt="" />
                        <p>RESEND BOOKING CONFIRMATION</p>
                    </div>
                    <div className="info-box">
                        <img src="" alt="" />
                        <p>SUBSCRIBE TO THE NEWSLETTER</p>
                    </div>
                </div>
            </div>

         
            <div className="bottom-section">
                <div className="container">
                    <h5>MOVIES NOW SHOWING IN RAJKOT</h5>
                    <p>Chhaava | Sanam Teri Kasam | Umbaro | Loveyapa | Deva | Sky Force | Faati Ne? | Thandle | Interstellar</p>

                    <h5>UPCOMING MOVIES IN RAJKOT</h5>
                    <p>Athu Vaangina Ethu Elavasam | Brahma Anandam | Fire (2025) | 2k Love Story | Illti | Kismat | Badava | Thala</p>

                    <h5>MOVIES BY GENRE</h5>
                    <p>Action | Drama | Romance | Comedy | Thriller | Historical | Adventure | Sci-Fi | Anime | Classic</p>

                    <h5>MOVIES BY LANGUAGE</h5>
                    <p>Hindi | Gujarati | English | Telugu | Tamil | Sindhi | Japanese | Khasi | Tulu</p>

                    <h5>SPORTS EVENTS IN RAJKOT</h5>
                    <p>Cricket | Running | Chess | Football | Badminton | Boxing | Card Games | Athletics | MMA | Horse Race</p>

                    <h5>EVENTS IN TOP CITIES</h5>
                    <p>Mumbai | Delhi-NCR | Chennai | Bangalore | Hyderabad | Pune | Ahmedabad | Kolkata | Kochi</p>

                    <h5>CINEMAS IN TOP CITIES</h5>
                    <p>Mumbai | Delhi-NCR | Chennai | Bangalore | Hyderabad | Pune | Ahmedabad | Kolkata | Kochi</p>

                    <h5>PLAYS IN TOP CITIES</h5>
                    <p>Mumbai | Delhi-NCR | Bangalore | Chennai | Hyderabad | Pune | Ahmedabad | Kolkata | Kochi</p>

                    <h5>COUNTRIES</h5>
                    <p>Indonesia | Singapore | UAE | Sri Lanka | West Indies</p>

                    <h5>HELP</h5>
                    <p>About Us | Contact Us | Careers | Press | Sitemap | FAQs | Terms & Conditions | Privacy Policy</p>

                    <h5>BOOKMYSHOW EXCLUSIVES</h5>
                    <p>Lollapalooza India | BookAChange | Corporate Vouchers | Gift Cards | List My Show | Offers | Stream | Trailers</p>

                    <hr />


                    <div className="social-icons text-center">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-pinterest-p"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

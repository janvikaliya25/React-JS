
import './section6.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Section6() {
    return (
        <div className=" mt-5" id="section6">
            <div className="row justify-content-center align-items-center" style={{ height: "690px" }}>
                
              
                <div className="col-lg-4 col-md-6 col-sm-10 col-12 d-flex justify-content-center">
                    <div className="img-container">
                        <img 
                            src="https://www.sugarcosmetics.com/cdn/shop/files/Glow-Blush-HP-Banner_1200-X-1600_1_b5d826d9-951c-4a35-9a63-edd6cf7c1a42.jpg?v=1734677203&width=880" 
                            alt="" 
                            className="h-100 w-100 img-fluid"
                        />
                    </div>
                </div>

               
                <div className="col-lg-4 col-md-6 col-sm-10 col-12 text-center p-5 d-flex flex-column justify-content-center">
                    <h6 className="mt-3 title-text">
                        Cloud Nine Niacinamide Glow Blush
                    </h6>
                    <h4 className="mt-3 heading-text">
                        Ready to take your blush game to cloud nine?
                    </h4>
                    <p className="mt-4 description-text">
                        Blush brighter, care deeper with our Cloud Nine Niacinamide Glow Blush that gives your cheeks the look straight out of a dream. 
                        Infused with 8 botanical oils, Niacinamide, Kojic Acid, and Vitamin C, it pampers your skin while giving you that lit-from-within flush. 
                        Just a dab of this weightless formula gives you glowing, radiant cheeks. Choose from playful shades like peachy pink or flirty raspberry, 
                        made to flatter every Indian skin tone. Glow-getter, are you in?
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Section6;

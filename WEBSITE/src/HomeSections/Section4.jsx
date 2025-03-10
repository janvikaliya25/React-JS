
import { useState } from "react";

function Section4() {
    const [state, setState] = useState(true);

    return (
        <div className="container-fluid mt-5 mx-auto" style={{ width: "94%" }}>
            <p className="text-center" style={{ wordSpacing: "5px", fontSize: "12px", letterSpacing: "3px" }}>
                TRENDING AT SUGAR
            </p>
            <h1 className="text-center fw-light" style={{ fontSize: "30px", letterSpacing: "5px" }}>
                <span onClick={() => setState(false)} 
                    style={{ cursor: "pointer", marginRight: "15px", borderBottom: !state ? "2px solid black" : "none" }}>
                    NEW LAUNCHES
                </span>
                <span onClick={() => setState(true)} 
                    style={{ cursor: "pointer", borderBottom: state ? "2px solid black" : "none" }}
                    className="ms-5">
                    BESTSELLERS
                </span>
            </h1>

            {state ? (
                // BESTSELLERS Section
                <div className="row mt-5">
                    <div className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center">
                        <div className="w-100">
                            <img src="https://www.sugarcosmetics.com/cdn/shop/files/Matte-As-Hell-Crayon-Lipstick-Minis-Set-of-3.jpg?v=1738665419&width=500" alt="" className="w-100"/>
                        </div>
                        <div className="w-100 p-2 text-center">
                            <p className="mt-3" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "3px" }}>
                                Matte As Hell Crayon Lipstick Minis Set of 3
                            </p>
                            <p style={{ letterSpacing: "2px", fontSize: "12px" }}>Rs. 999.00
                                <span className="text-secondary" style={{ textDecoration: "line-through" }}> Rs. 1,799.00 </span>
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center">
                        <div className="w-100">
                            <img src="https://www.sugarcosmetics.com/cdn/shop/files/Limited-Edition-Nothing-Else-Matter-Longwear-Lipstick.jpg?v=1738665333&width=500" alt="" className="w-100"/>
                        </div>
                        <div className="w-100 p-2 text-center">
                            <p className="mt-3" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "3px" }}>
                                Limited Edition Nothing Else Matter Longwear Lipstick
                            </p>
                            <p style={{ letterSpacing: "2px", fontSize: "12px" }}>Rs. 599.00</p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center">
                        <div className="w-100">
                            <img src="https://www.sugarcosmetics.com/cdn/shop/files/Matte-Attack-Transferproof-Lipstick-Kit_6c5f12be.jpg?v=1741518790&width=500" alt="" className="w-100"/>
                        </div>
                        <div className="w-100 p-2 text-center">
                            <p className="mt-3" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "3px" }}>
                                Matte Attack Transferproof Lipstick
                            </p>
                            <p style={{ letterSpacing: "2px", fontSize: "12px" }}>Rs. 749.00</p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center">
                        <div className="w-100">
                            <img src="https://www.sugarcosmetics.com/cdn/shop/files/Auto-Correct-Creaseless-Concealer.jpg?v=1736172284&width=500" alt="" className="w-100"/>
                        </div>
                        <div className="w-100 p-2 text-center">
                            <p className="mt-3" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "3px" }}>
                                Auto Correct Creaseless Concealer
                            </p>
                            <p style={{ letterSpacing: "2px", fontSize: "12px" }}>Rs. 299.00
                                <span className="text-secondary" style={{ textDecoration: "line-through" }}> Rs. 599.00 </span>
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                // NEW LAUNCHES Section 
                <div className="row mt-5">
                    <div className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center">
                        <div className="w-100">
                            <img src="https://www.sugarcosmetics.com/cdn/shop/files/Glide-Peptide-SPF50-PA-Lip-Treatment-Kit-2.jpg?v=1741518633&width=500" alt="" className="w-100"/>
                        </div>
                        <div className="w-100 p-2 text-center">
                            <p className="mt-3" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "3px" }}>
                                Glide Peptide SPF50 PA+++ Lip Treatment
                            </p>
                            <p style={{ letterSpacing: "2px", fontSize: "12px" }}>Rs. 349.00</p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center">
                        <div className="w-100">
                            <img src="https://www.sugarcosmetics.com/cdn/shop/files/Cloud-Nine-Niacinamide-Glow-Blush-2_c0863876.jpg?v=1740048818&width=500" alt="" className="w-100"/>
                        </div>
                        <div className="w-100 p-2 text-center">
                            <p className="mt-3" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "3px" }}>
                                Cloud Nine Niacinamide Glow Blush
                            </p>
                            <p style={{ letterSpacing: "2px", fontSize: "12px" }}>Rs. 599.00</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center">
                        <div className="w-100">
                            <img src="https://www.sugarcosmetics.com/cdn/shop/files/SUGAR-Drop-A-Tint-Lip-Oil-Kit-2_99588a73.jpg?v=1741519129&width=500" alt="" className="w-100"/>
                        </div>
                        <div className="w-100 p-2 text-center">
                            <p className="mt-3" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "3px" }}>
                                SUGAR Drop A Tint Lip Oil
                            </p>
                            <p style={{ letterSpacing: "2px", fontSize: "12px" }}>Rs. 599.00</p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center">
                        <div className="w-100">
                            <img src="https://www.sugarcosmetics.com/cdn/shop/files/Partner-In-Shine-Transferproof-Lip-Gloss_3b994c2d.jpg?v=1740048465&width=500" alt="" className="w-100"/>
                        </div>
                        <div className="w-100 p-2 text-center">
                            <p className="mt-3" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "3px" }}>
                                Partner In Shine Transferproof Lip Gloss
                            </p>
                            <p style={{ letterSpacing: "2px", fontSize: "12px" }}>Rs. 699.00</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Section4;

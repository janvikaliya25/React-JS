
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Section5() {
    const [state, setState] = useState(true);

    return (
        <div className="container-fluid mt-5 mx-auto" style={{ width: "94%" }}>
          
            <h1 className="text-center fw-light" style={{ fontSize: "30px", letterSpacing: "5px" }}>
                <span 
                    onClick={() => setState(false)} 
                    style={{ 
                        cursor: "pointer", 
                        marginRight: "15px", 
                        borderBottom: !state ? "2px solid black" : "none"
                    }}
                >
                    ELITE EDITION
                </span>
                <span 
                className="ms-5"
                    onClick={() => setState(true)} 
                    style={{ 
                        cursor: "pointer", 
                        borderBottom: state ? "2px solid black" : "none"
                    }}
                >
                    ON-THE-GO ESSENTIALS
                </span>
            </h1>

            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={3}
                spaceBetween={40}
                navigation
                // pagination={{ clickable: true }}
                breakpoints={{
                    1280: { slidesPerView: 3 },
                    1024: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    640: { slidesPerView: 1 },
                    480: { slidesPerView: 1 },
                }}
                className="mt-5"
            >
                {state ? (
                    // BESTSELLERS Section
                    <div >
                        <SwiperSlide>
                            <div className="" style={{height:"580px"}}>
                                <div  style={{height:"445px"}}>
                                    <img src="https://www.sugarcosmetics.com/cdn/shop/files/Matte-As-Hell-Crayon-Lipstick-Minis-Set-of-3.jpg?v=1738665419&width=500" alt="" className="h-100 w-100"/>
                                </div>
                                <div className=" w-100 p-3" style={{height:"130px"}}>
                                    <p className="text-center" style={{wordSpacing:"5px",letterSpacing:"3px",textTransform:"uppercase",fontSize:"12px"}}>Matte As Hell Crayon Lipstick Minis Set
                                    </p>
                                    <p className="text-center" style={{letterSpacing:"2px",fontSize:"12px"}}>Rs. 999.00
                                    <span className="text-secondary" style={{textDecoration:"line-through"}}> Rs. 1,799.00
                                    </span></p>
                                    <p className="text-center"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(1372)</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div  style={{height:"580px"}}>
                                <div  style={{height:"445px"}}>
                                    <img src="https://www.sugarcosmetics.com/cdn/shop/files/Kritis-Beauty-Favourites-5.png?v=1741518731&width=500" alt="" className="h-100 w-100"/>
                                </div>
                                <div className=" w-100 p-3" style={{height:"130px"}}>
                                    <p className="text-center" style={{wordSpacing:"5px",letterSpacing:"3px",textTransform:"uppercase",fontSize:"12px"}}>Kriti's Beauty Favourites
                                    </p>
                                    <p className="text-center" style={{letterSpacing:"2px",fontSize:"12px"}}>Rs. 999.00
                                    <span className="text-secondary" style={{textDecoration:"line-through"}}> Rs. 1,317.00
                                    </span></p>
                                    <p className="text-center"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(5)</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div  style={{height:"580px"}}>
                                <div  style={{height:"445px"}}>
                                    <img src="https://www.sugarcosmetics.com/cdn/shop/files/Vineetas-Favourite-Makeup-Kit_6e849469.jpg?v=1740047992&width=500" alt="" className="h-100 w-100"/>
                                </div>
                                <div className=" w-100 p-3" style={{height:"130px"}}>
                                    <p className="text-center" style={{wordSpacing:"5px",letterSpacing:"3px",textTransform:"uppercase",fontSize:"12px"}}>Vineeta's Favourite Makeup Kit
                                    </p>
                                    <p className="text-center" style={{letterSpacing:"2px",fontSize:"12px"}}>Rs. 2,999.00
                                    <span className="text-secondary" style={{textDecoration:"line-through"}}> Rs. 3,894.00
                                    </span></p>
                                    <p className="text-center"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(4)</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div  style={{height:"580px"}}>
                                <div  style={{height:"445px"}}>
                                    <img src="https://www.sugarcosmetics.com/cdn/shop/files/Pretty-Picks-Makeup-Kit.jpg?v=1736178672&width=500" alt="" className="h-100 w-100"/>
                                </div>
                                <div className=" w-100 p-3" style={{height:"130px"}}>
                                    <p className="text-center" style={{wordSpacing:"5px",letterSpacing:"3px",textTransform:"uppercase",fontSize:"12px"}}>Pretty Picks Makeup Kit
                                    </p>
                                    <p className="text-center" style={{letterSpacing:"2px",fontSize:"12px"}}>Rs. 1,499.00
                                    <span className="text-secondary" style={{textDecoration:"line-through"}}> Rs. 2,567.00
                                    </span></p>
                                    <p className="text-center"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(3)</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div  style={{height:"580px"}}>
                                <div  style={{height:"445px"}}>
                                    <img src="https://www.sugarcosmetics.com/cdn/shop/files/On-Point-Makeup-Kit_94bed3b4.jpg?v=1740048616&width=500" alt="" className="h-100 w-100"/>
                                </div>
                                <div className=" w-100 p-3" style={{height:"130px"}}>
                                    <p className="text-center" style={{wordSpacing:"5px",letterSpacing:"3px",textTransform:"uppercase",fontSize:"12px"}}>On Point Makeup Kit
                                    </p>
                                    <p className="text-center" style={{letterSpacing:"2px",fontSize:"12px"}}>Rs. 848.00
                                    <span className="text-secondary" style={{textDecoration:"line-through"}}> Rs. 1,523.00
                                    </span></p>
                                    <p className="text-center"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(2)</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{height:"580px"}}>
                                <div  style={{height:"445px"}}>
                                    <img src="https://www.sugarcosmetics.com/cdn/shop/files/All-in-one-Makeup-Kit.jpg?v=1736178670&width=500" alt="" className="h-100 w-100"/>
                                </div>
                                <div className=" w-100 p-3" style={{height:"130px"}}>
                                    <p className="text-center" style={{wordSpacing:"5px",letterSpacing:"3px",textTransform:"uppercase",fontSize:"12px"}}>All in one Makeup Kit
                                    </p>
                                    <p className="text-center" style={{letterSpacing:"2px",fontSize:"12px"}}>Rs. 1,799.00
                                    <span className="text-secondary" style={{textDecoration:"line-through"}}> Rs. 3,500.00
                                    </span></p>
                                    <p className="text-center"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(3)</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div  style={{height:"580px"}}>
                                <div  style={{height:"445px"}}>
                                    <img src="https://www.sugarcosmetics.com/cdn/shop/files/Born-to-Lead-Makeup-Kit.jpg?v=1740568385&width=700" alt="" className="h-100 w-100"/>
                                </div>
                                <div className=" w-100 p-3" style={{height:"130px"}}>
                                    <p className="text-center" style={{wordSpacing:"5px",letterSpacing:"3px",textTransform:"uppercase",fontSize:"12px"}}>Born to Lead Makeup Kit
                                    </p>
                                    <p className="text-center" style={{letterSpacing:"2px",fontSize:"12px"}}>Rs. 1,299.00
                                    <span className="text-secondary" style={{textDecoration:"line-through"}}> Rs. 2,045.00
                                    </span></p>
                                    <p className="text-center"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(67)</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                ) : (
                    // NEW LAUNCHES Section
                    <div >
                    <SwiperSlide>
                        <div  style={{height:"580px"}}>
                            <div  style={{height:"445px"}}>
                                <img src="https://www.sugarcosmetics.com/cdn/shop/files/Bridal-Makeup-Kit.jpg?v=1736171329&width=500" alt="" className="h-100 w-100"/>
                            </div>
                            <div className=" w-100 p-3" style={{height:"130px"}}>
                                <p className="text-center" style={{wordSpacing:"5px",letterSpacing:"3px",textTransform:"uppercase",fontSize:"12px"}}>Bridal Makeup Kit
                                </p>
                                <p className="text-center" style={{letterSpacing:"2px",fontSize:"12px"}}>Rs. 1,799.00
                                <span className="text-secondary" style={{textDecoration:"line-through"}}> Rs. 3,470.00
                                </span></p>
                                <p className="text-center"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(5)</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{height:"580px"}}>
                            <div  style={{height:"445px"}}>
                                <img src="https://www.sugarcosmetics.com/cdn/shop/files/The-XOXO-Beauty-Kit_42f9a942.jpg?v=1739617067&width=700" alt="" className="h-100 w-100"/>
                            </div>
                            <div className=" w-100 p-3" style={{height:"130px"}}>
                                <p className="text-center" style={{wordSpacing:"5px",letterSpacing:"3px",textTransform:"uppercase",fontSize:"12px"}}>The XOXO Beauty Kit
                                </p>
                                <p className="text-center" style={{letterSpacing:"2px",fontSize:"12px"}}>Rs. 1,299.00
                                <span className="text-secondary" style={{textDecoration:"line-through"}}> Rs. 1,935.00
                                </span></p>
                                <p className="text-center"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(34)</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div  style={{height:"580px"}}>
                            <div style={{height:"445px"}}>
                                <img src="https://www.sugarcosmetics.com/cdn/shop/files/Head-Turner-Makeup-Kit.jpg?v=1736170870&width=700" alt="" className="h-100 w-100"/>
                            </div>
                            <div className=" w-100 p-3" style={{height:"130px"}}>
                                <p className="text-center" style={{wordSpacing:"5px",letterSpacing:"3px",textTransform:"uppercase",fontSize:"12px"}}>Head Turner Makeup Kit
                                </p>
                                <p className="text-center" style={{letterSpacing:"2px",fontSize:"12px"}}>Rs. 1,199.00
                                <span className="text-secondary" style={{textDecoration:"line-through"}}>Rs. 1,759.00
                                </span></p>
                                <p className="text-center"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(47)</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div  style={{height:"580px"}}>
                            <div  style={{height:"445px"}}>
                                <img src="https://www.sugarcosmetics.com/cdn/shop/files/Lovestruck-Lipstick-Kit_f06931bf.jpg?v=1740049521&width=700" alt="" className="h-100 w-100"/>
                            </div>
                            <div className=" w-100 p-3" style={{height:"130px"}}>
                                <p className="text-center" style={{wordSpacing:"5px",letterSpacing:"3px",textTransform:"uppercase",fontSize:"12px"}}>Lovestruck Lipstick Kit
                                </p>
                                <p className="text-center" style={{letterSpacing:"2px",fontSize:"12px"}}>Rs. 999.00
                                <span className="text-secondary" style={{textDecoration:"line-through"}}> Rs. 1,500.00
                                </span></p>
                                <p className="text-center"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(8)</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
                )}
            </Swiper>
        </div>
    );
}

export default Section5;


import React from "react";
import Slider from "react-slick";

function Section8() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="mt-5" style={{height:"500px"}}>
      <h1 className="text-center fw-light" style={{fontSize:"30px",letterSpacing:"5px",wordSpacing:"5px"}}>PRICE DROP</h1>
      <div className="mt-5">
        <Slider {...settings}>
          <div className="slider-item">
            <img
              className="img-fluid" 
              src="https://www.sugarcosmetics.com/cdn/shop/files/BTR-Eyeshadow-Palette-LP--1600x400---shade02_1.gif?v=1740737407&width=1600"
              alt="Slide 1"
            />
          </div>
          <div className="slider-item">
            <img
              className="img-fluid"
              src="https://www.sugarcosmetics.com/cdn/shop/files/Clearance-Range-Products-LP-1600x400_2.gif?v=1737973789&width=1600"
              alt="Slide 2"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Section8;

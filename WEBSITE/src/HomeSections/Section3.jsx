
import React from "react";
import Slider from "react-slick";

function Section3() {
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
      <h1 className="text-center fw-light" style={{fontSize:"30px",letterSpacing:"5px"}}>DEAL FOR YOU!</h1>
      <div className="mt-5">
        <Slider {...settings}>
          <div className="slider-item">
            <img
              className="img-fluid" 
              src="https://www.sugarcosmetics.com/cdn/shop/files/500-off--LP-1600x400_3.gif?v=1739885560&width=1600"
              alt="Slide 1"
            />
          </div>
          <div className="slider-item">
            <img
              className="img-fluid"
              src="https://www.sugarcosmetics.com/cdn/shop/files/1600x400_3303a932-a180-46ea-a8c9-03120e528c44.jpg?v=1741370125&width=1600"
              alt="Slide 2"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Section3;

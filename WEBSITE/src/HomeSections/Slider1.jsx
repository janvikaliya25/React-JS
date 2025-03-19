
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function Slider1() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           arrows: false,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="border" style={{ height: "600px" }}>
//       <div>
//         <Slider {...settings}>
//           <div className="slider-item">
//             <img
//               className="img-fluid"
//               src="https://www.sugarcosmetics.com/cdn/shop/files/500-off--LP-1600x400_3.gif?v=1739885560&width=1600"
//               alt="Slide 1"
//             />
//           </div>
//           <div className="slider-item">
//             <img
//               className="img-fluid"
//               src="https://www.sugarcosmetics.com/cdn/shop/files/1600x400_3303a932-a180-46ea-a8c9-03120e528c44.jpg?v=1741370125&width=1600"
//               alt="Slide 2"
//             />
//           </div>
//           <div className="slider-item">
//             <img
//               className="img-fluid"
//               src="https://www.sugarcosmetics.com/cdn/shop/files/sample-slide3.jpg"
//               alt="Slide 3"
//             />
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default Slider1;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slider1() {
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
    <div className="border" style={{ height: "600px", overflow: "hidden" }}>
      <Slider {...settings}>
        <div className="slider-item">
          <img
            className="w-full h-full object-cover"
            src="https://www.sugarcosmetics.com/cdn/shop/files/LA-LA-Love-Free-gift-HP-3200x1200_1.jpg?v=1739879590&width=1600"
            alt="Slide 1"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
          />
        </div>
        <div className="slider-item">
          <img
            className="w-full h-full object-cover"
            src="https://www.sugarcosmetics.com/cdn/shop/files/Summer-collection-3200x1200_1.jpg?v=1741764602&width=1600"
            alt="Slide 2"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
          />
        </div>
        <div className="slider-item">
          <img
            className="w-full h-full object-cover"
            src="https://www.sugarcosmetics.com/cdn/shop/files/AOF-DEWY-HP-3200x1200.jpg?v=1742207575&width=2000"
            alt="Slide 3"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Slider1;


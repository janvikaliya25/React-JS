
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
  return (
    <div className=" d-flex align-items-center">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={-50}
        slidesPerView={1.1}
        slidesNext={1.1}
        loop={true} 
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        style={{ height: "320px",backgroundColor:"#c6c7c7" }}
      >
          <SwiperSlide style={{width:"100%"}}  className=' d-flex  align-items-center'>
          <img
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg"
            alt="Slide 1"
            className="d-block m-auto"
            style={{ borderRadius: "10px"}}
          />
        </SwiperSlide>
        <SwiperSlide style={{width:"100%"}}  className=' d-flex align-items-center'>
          <img
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1739253823682_12thfebsentimentaaaldesktopcarusel.jpg"
            alt="Slide 2"
            className="d-block m-auto"
            style={{ borderRadius: "10px"}}
          />
        </SwiperSlide>

        <SwiperSlide style={{width:"100%"}}  className=' d-flex align-items-center'>
          <img
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg"
            alt="Slide 3"
            className="d-block  m-auto"
            style={{ borderRadius: "10px"}}
          />
        </SwiperSlide>

        <SwiperSlide style={{width:"100%"}} className=' d-flex  align-items-center'>
          <img
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1739253823682_12thfebsentimentaaaldesktopcarusel.jpg"
            alt="Slide 4"
            className="d-block  m-auto"
            style={{ borderRadius: "10px"}}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
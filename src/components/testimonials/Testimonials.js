import { useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Autoplay } from "swiper";
import './Testimonials.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
    return (
      <section className="testimonials-section-container">
        <div className="testimonials-information">
          <div className="testimonials-title">
            <FaLocationArrow className="arrow-icon" />
            <span>Testimonials</span>
            <p className="microverse-date">Get to know me better!</p>
          </div>
        </div>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            mousewheel={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Mousewheel, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
      </section>
    );
  };
  
export default Testimonials;
  
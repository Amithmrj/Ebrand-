import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Ppp.css"; // Custom CSS
import Itemcard from "../Components/Itemcard";

const ItemCardSlider = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={3}
        loop={true}
      >
        <SwiperSlide><Itemcard /></SwiperSlide>
        <SwiperSlide><Itemcard /></SwiperSlide>
        <SwiperSlide><Itemcard /></SwiperSlide>
        <SwiperSlide><Itemcard /></SwiperSlide>
        <SwiperSlide><Itemcard /></SwiperSlide>
        <SwiperSlide><Itemcard /></SwiperSlide>
      </Swiper>

      <div className="custom-navigation">
        <button className="custom-prev">Prev</button>
        <button className="custom-next">Next</button>
      </div>
    </div>
  );
};

export default ItemCardSlider;
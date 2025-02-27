import React, { forwardRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel.css";
import { Pagination } from "swiper/modules";
import ImageOverlay from "./ImageOverlay";

export default function MyCarousel({ onClickBox }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };
  return (
    <div>
      <div className="carousel-container">
        <Swiper
          onSlideChange={handleSlideChange}
          slidesPerView={1}
          spaceBetween={10}
          loop={false}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination]}
          className=" mySwiper "
        >
          <style>
            {`.swiper-pagination-bullet-active {
  background: white !important;
}
.swiper-pagination-bullet {
  background: rgba(255, 255, 255, 0.5);
}`}
          </style>
          <SwiperSlide>
            <ImageOverlay />
          </SwiperSlide>
          <SwiperSlide>
            <ImageOverlay />
          </SwiperSlide>
          <SwiperSlide>
            <ImageOverlay />
          </SwiperSlide>
        </Swiper>
        <button
          className={`join-module ${currentIndex === 0 ? "show" : "hide"}`}
          onClick={onClickBox}
        >
          <div className="join-content">
            <p>加入我们</p>
            <span>J&nbsp;o&nbsp;i&nbsp;n&nbsp;&nbsp;U&nbsp;S</span>
          </div>
          <div className="joinIcon"></div>
        </button>
      </div>
    </div>
  );
}

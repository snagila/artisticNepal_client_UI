import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css/bundle";
import "./productSwiper.css";
import "swiper/css/effect-fade";

const ProductSwiper = ({ images }) => {
  return (
    <Swiper
      direction="horizontal"
      loop={true}
      effect={"fade"}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Navigation, EffectFade]}
      className="productpage"
    >
      {images?.map((image, i) => (
        <SwiperSlide key={i}>
          <img
            src={image}
            alt={`Product Image ${i + 1}`}
            className="swiperimage"
          />
        </SwiperSlide>
      ))}

      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default ProductSwiper;

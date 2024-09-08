import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css/bundle";
import "./productSwiper.css";
import "swiper/css/effect-fade";

const ProductOnCategorySwiper = ({ product }) => {
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
      className="mySwiper"
    >
      {[...product.thumbnail, ...product.images].map((image, i) => (
        <SwiperSlide key={i}>
          <img src={image} alt={`Product Image ${i + 1}`} />
        </SwiperSlide>
      ))}

      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default ProductOnCategorySwiper;

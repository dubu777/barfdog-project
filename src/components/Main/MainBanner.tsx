"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  layoutContainer,
  mainLayoutWrapper,
} from "@/styles/common.css";
import { bannerImage, bannerImageWrapper, customSwiper, wrapperBox } from "./MainBanner.css";

const bannerData = [
  {
    id: 1,
    link: "",
    imgSrc: "/banners.jpg",
    alt: "구매 유지 혜택 안내",
  },
  {
    id: 2,
    link: "",
    imgSrc: "/banners2.jpg",
    alt: "건강한 변화 경험하기",
  },
  {
    id: 3,
    link: "",
    imgSrc: "/banners3.webp",
    alt: "신규레시피 출시",
  },
  {
    id: 4,
    link: "",
    imgSrc: "/banners4.png",
    alt: "바프독으로 바꿔야 하는 이유 두번째",
  },
];

const MainBannerSlider = () => {

  return (
    <div className={layoutContainer}>
      <div className={mainLayoutWrapper}>

    <div className={wrapperBox}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className={customSwiper}
      >
        {bannerData.map((banner) => (
          <SwiperSlide key={banner.id}>
              <div className={bannerImageWrapper}>
              <img
                src={banner.imgSrc}
                alt={banner.alt}
                className={bannerImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      </div>
    </div>
  );
};

export default MainBannerSlider;

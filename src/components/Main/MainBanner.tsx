"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import 'swiper/css/effect-fade';
import { layoutContainer, mainLayoutWrapper } from "@/styles/common.css";
import {
  bannerImage,
  bannerImageWrapper,
  customSwiper,
  wrapperBox,
} from "./MainBanner.css";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";

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
            loop={true}
            pagination={{ clickable: true }}
            className={customSwiper}
            autoplay={{ delay: 5000 }}
            effect="fade"
            speed={1500}
            fadeEffect={{ crossFade: true }}
            modules={[Autoplay, EffectFade]}
          >
            {bannerData.map((banner) => (
              <SwiperSlide key={banner.id}>
                <div className={bannerImageWrapper}>
                  <Image
                    src={banner.imgSrc}
                    alt={banner.alt}
                    layout="fill"
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

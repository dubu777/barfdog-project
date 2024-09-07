'use client'
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { getSliderSettings2 } from '@/settings/bannerSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bannerData = [
  {
    id: 1,
    link: '',
    imgSrc:
      '/banners.jpg',
    alt: '구매 유지 혜택 안내',
  },
  {
    id: 2,
    link: '',
    imgSrc:
      '/banners2.jpg',
    alt: '건강한 변화 경험하기',
  },
  {
    id: 3,
    link: '',
    imgSrc:
      '/banners3.webp',
    alt: '신규레시피 출시',
  },
  {
    id: 4,
    link: '',
    imgSrc:
      '/banners4.png',
    alt: '바프독으로 바꿔야 하는 이유 두번째',
  },
];

const MainBannerSlider = () => {

  const settings = getSliderSettings2();
  return (
    <div className="main-banner-slider">
      <Slider {...settings}>
        {bannerData.map((banner) => (
          <div key={banner.id} style={{ position: 'relative'}}>
            <a href={banner.link}>
              <Image
                src={banner.imgSrc}
                alt={banner.alt}
                width={1268}
                height={600}
                layout="responsive"
                objectFit="cover"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainBannerSlider;

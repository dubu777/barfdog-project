import React, { useState, useEffect } from "react";
import Prev from "/public/prev.svg";
import Next from "/public/next.svg";
import * as styles from "@/components/Subscribe/SubscribeRecipe/SubscribeRecipe.css";

// 커스텀 화살표 컴포넌트
export const CustomPrevArrow = (props: any) => {
  const { className, style, onClick, currentSlide } = props;
  return currentSlide === 0 ? null : (
    <div
      className={`${styles.customPrev} ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <Prev />
    </div>
  );
};

export const CustomNextArrow = (props: any) => {
  const { className, style, onClick, currentSlide, slideCount } = props;
  return currentSlide === slideCount / 2 ? null : (
    <div
      className={`${styles.customNext} ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <Next />
    </div>
  );
};

// 슬라이더 설정
export const GetSliderSettings = (
  currentSlide: number,
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
) => {
  const [isScreenLarge, setIsScreenLarge] = useState<boolean>(false);

  useEffect(() => {
    // 브라우저 환경에서만 실행
    const handleResize = () => {
      setIsScreenLarge(window.innerWidth > 1300);
    };

    handleResize(); // 초기화

    // 창 크기 변경 시 다시 체크
    window.addEventListener("resize", handleResize);

    // Cleanup 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    // variableWidth: false,
    swipeToSlide: true,
    nextArrow: isScreenLarge ? <CustomNextArrow currentSlide={currentSlide}/> : undefined, // 1300px 이상에서만 nextArrow 보임
    prevArrow: isScreenLarge ? <CustomPrevArrow currentSlide={currentSlide}/> : undefined, // 1300px 이상에서만 prevArrow 보임
    beforeChange: (_: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: undefined, // 1300px 이하에서는 nextArrow 숨김
          prevArrow: undefined, // 1300px 이하에서는 prevArrow 숨김
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
};

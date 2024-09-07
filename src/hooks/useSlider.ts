import { useState, useRef } from "react";
import Slider from "react-slick";

export function useSlider() {
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 인덱스
  const sliderRef = useRef<Slider | null>(null); // 슬라이더 참조

  return {
    currentSlide,
    setCurrentSlide,
    sliderRef,
  };
}

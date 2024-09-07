import React, { useState, useEffect } from "react";
import Prev from "/public/prev.svg";
import Next from "/public/next.svg";


import * as styles from "@/components/Subscribe/SubscribeRecipe/SubscribeRecipe.css";


export const CustomPrevArrow2 = (props: any) => {
  const { className, style, onClick} = props;
  return (
    <div
      className={`${styles.customPrev} ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <Prev />
    </div>
  );
};

export const CustomNextArrow2 = (props: any) => {
  const { className, style, onClick} = props;
  return (
    <div
      className={`${styles.customNext} ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <Next />
    </div>
  );
};


export const getSliderSettings2 = () => {

  return {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    autoPlay: true,
    autoplaySpeed: 3000,
  };
};

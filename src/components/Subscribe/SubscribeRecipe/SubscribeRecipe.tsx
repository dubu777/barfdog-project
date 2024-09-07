"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./SubscribeRecipe.css";
import Image from "next/image";
import { recipes } from "@/constants/recipes";
import Prev from "/public/prev.svg";
import Next from "/public/next.svg";
import { getSliderSettings } from "@/settings/sliderSettings";
import { useSlider } from "@/hooks/useSlider";
import { div } from "framer-motion/client";

interface SubscribeRecipeProps {
  onRecipeSelect: (recipeId: string) => void;
}

export default function SubscribeRecipe({
  onRecipeSelect,
}: SubscribeRecipeProps) {
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);
  const { currentSlide, setCurrentSlide, sliderRef } = useSlider();

  const handleSelectRecipe = (recipeId: string) => {
    setSelectedRecipe(recipeId);
    onRecipeSelect(recipeId);
  };


  const settings = getSliderSettings(currentSlide, setCurrentSlide);

  return (
    <section className={styles.recipeContainer}>
    <section className={styles.recipeSection}>
      <h2 className={styles.recipeTopTitle}>구매하실 레시피 한 가지를 선택해 주세요</h2>
      <h2 className={styles.recipeTopSubtitle}>풀플랜만 두 개의 레시피를 선택할 수 있습니다.</h2>

      <div className={styles.swiperWrapper}>
        <Slider ref={sliderRef}  {...settings} >
          {recipes.map((recipe, index) => (
            <label
              key={index}
              htmlFor={recipe.id}
              onClick={() => handleSelectRecipe(recipe.id)}
              className={styles.recipeLabel({
                isSelected: selectedRecipe === recipe.id,
              })}
            >
              <div className={styles.recipeContent}>
                <figure className={styles.recipeImageWrapper}>
                  <Image src={recipe.imageUrl} alt={recipe.title2} fill />
                </figure>
                <p className={styles.recipeTitle}>{recipe.title1}</p>
                <p className={styles.recipeTitle2}>{recipe.title2}</p>
                <p className={styles.recipeDescription}>{recipe.description}</p>
                <p className={styles.recipeNotice}>더 알아보기</p>
              </div>
              <input
                id={recipe.id}
                type="radio"
                value={recipe.id}
                className={styles.inputHide}
              />
              <span
                className={styles.selectButton({
                  isSelected: selectedRecipe === recipe.id,
                })}
              >
                {selectedRecipe === recipe.id ? "선택됨" : "레시피 선택"}
              </span>
            </label>
          ))}
        </Slider>
      </div>
    </section>
    </section>
  );
}

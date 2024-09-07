"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./MainRecipe.css";
import Image from "next/image";
import { recipes } from "@/constants/recipes";
import { useSlider } from "@/hooks/useSlider";
import { layoutContainer, layoutWrapper } from "@/styles/common.css";
import { GetSliderSettings3 } from "@/settings/mainRecipeSlider";
import Link from "next/link";

export default function MainRecipe() {
  const { currentSlide, setCurrentSlide, sliderRef } = useSlider();

  const settings = GetSliderSettings3(currentSlide, setCurrentSlide);

  return (
    <div className={layoutContainer}>
      <div className={layoutWrapper}>
        <section className={styles.recipeContainer}>
          <section className={styles.recipeSection}>
            <h2 className={styles.recipeTopTitle}>
            &quot;진짜 생식&quot;
              <br />
              바프독의 8가지 레시피
            </h2>

            <div className={styles.swiperWrapper}>
              <Slider ref={sliderRef} {...settings}>
                {recipes.map((recipe, index) => (
                  <label
                    key={index}
                    htmlFor={recipe.id}
                    className={styles.recipeLabel}
                  >
                    <div className={styles.recipeContent}>
                      <figure className={styles.recipeImageWrapper}>
                        <Image src={recipe.imageUrl} alt={recipe.title2} fill />
                      </figure>
                      <p className={styles.recipeTitle2}>{recipe.title2}</p>
                      <p className={styles.recipeDescription}>
                        {recipe.description}
                      </p>
                      <span className={styles.selectButton}>+ 더보기</span>
                    </div>
                  </label>
                ))}
              </Slider>
            </div>
            <div className={styles.buttonBox}>
              <div className={styles.buttonBox2}>
                <Link type="button" href={"/"} className={styles.buttonBox3}>
                  정기구독 신청하기
                </Link>
              </div>
            </div>
          </section>
        </section>
      </div>
   </div>
  );
}

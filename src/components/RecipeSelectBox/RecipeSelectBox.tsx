"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/swiper-bundle.min.css";
import * as styles from "./RecipeSelectBox.css";
import Image from "next/image";

interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

interface RecipeSelectBoxProps {
  recipes: Recipe[];
  onSelectRecipe: (recipeId: string) => void;
}

export default function RecipeSelectBox({ recipes, onSelectRecipe }: RecipeSelectBoxProps) {
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);

  const handleSelectRecipe = (recipeId: string) => {
    setSelectedRecipe(recipeId);
    onSelectRecipe(recipeId);
  };

  return (
    <div className={styles.swiperContainer}>
      <Swiper slidesPerView={3} spaceBetween={20}>
        {recipes.map((recipe) => (
          <SwiperSlide key={recipe.id}>
            <div className={styles.recipeSlide}>
              <label
                htmlFor={recipe.id}
                onClick={() => handleSelectRecipe(recipe.id)}
                className={`${styles.recipeLabel} ${selectedRecipe === recipe.id ? styles.selected : ""}`}
              >
                <div className={styles.recipeContent}>
                  <figure className={styles.recipeImageWrapper}>
                    <Image src={recipe.imageUrl} alt={recipe.title} fill />
                  </figure>
                  <p className={styles.recipeTitle}>{recipe.title}</p>
                  <p className={styles.recipeSubtitle}>{recipe.subtitle}</p>
                  <p className={styles.recipeDescription}>{recipe.description}</p>
                </div>
                <input id={recipe.id} type="checkbox" value={recipe.id} />
                <span className={styles.checkbox}>
                  {selectedRecipe === recipe.id ? "선택됨" : "레시피 선택"}
                </span>
              </label>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

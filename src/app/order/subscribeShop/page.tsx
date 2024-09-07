"use client";
import React from "react";
import * as styles from "./SubscribeShop.css";
import { useSurveyForm } from "@/hooks/useSurveyForm";
import { useRouter } from "next/navigation";
import SubscribeRecommend from "@/components/Subscribe/SubscribeRecommend/SubscribeRecommend";
import SubscribeAmount from "@/components/Subscribe/SubscribeAmount/SubscribeAmount";
import SubscribeRecipe from "@/components/Subscribe/SubscribeRecipe/SubscribeRecipe";
import Link from "next/link";
import { useSubscribe } from "@/hooks/useSubscribe";



export default function SubscribePage() {
  const { formData } = useSurveyForm();
  const router = useRouter();


  const {
    selectedRecipe,
    selectedPlan,
    handleRecipeSelect,
    handlePlanSelect,
  } = useSubscribe();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className={styles.SuscribeContainer}>
      <SubscribeRecommend name={formData.name} />
      <SubscribeAmount
        selectedRecipe={selectedRecipe}
        handlePlanSelect={handlePlanSelect}
        selectedPlan={selectedPlan}
      />
      <SubscribeRecipe onRecipeSelect={handleRecipeSelect} />
      <section className={styles.SuscribeButtonWrapper}>
        <button className={styles.prevButton} onClick={handleBack}>
          뒤로가기
        </button>
        <Link href="/order/ordersheet/subscribe">
          <button className={styles.nextButton}>맞춤레시피 구매하기</button>
        </Link>
      </section>
    </div>
  );
}

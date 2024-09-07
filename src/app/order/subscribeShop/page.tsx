// pages/SubscribePage.tsx
"use client";
import React from "react";
import * as styles from "./SubscribeShop.css";
import { useSurveyForm } from "@/hooks/useSurveyForm";
import { useRouter, useSearchParams } from "next/navigation";
import SubscribeRecommend from "@/components/Subscribe/SubscribeRecommend/SubscribeRecommend";
import SubscribeAmount from "@/components/Subscribe/SubscribeAmount/SubscribeAmount";
import SubscribeRecipe from "@/components/Subscribe/SubscribeRecipe/SubscribeRecipe";
import Link from "next/link";
import { useSubscribe } from "@/hooks/useSubscribe";

interface Props {
  params: { id: string };
}

export default function SubscribePage({ params }: Props) {
  const { formData } = useSurveyForm();
  const searchParams = useSearchParams();
  const router = useRouter();
  const surveyReportsId = searchParams.get("surveyReportsId");
  const id = '4407';
  
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
        <Link href={`/order/ordersheet/subscribe/${id}`} passHref>
          <button className={styles.nextButton}>맞춤레시피 구매하기</button>
        </Link>
      </section>
    </div>
  );
}

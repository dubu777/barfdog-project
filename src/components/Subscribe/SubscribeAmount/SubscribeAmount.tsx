import { useState, useEffect } from "react";
import * as styles from "./SubscribeAmount.css";
import { Plan, plansData } from "@/constants/planData";
import PlanBox from "@/components/PlanSelectBox/PlanSelectBox";
import { calculatePrices } from "@/utils/calculatePrices";

interface SubscribeAmountProps {
  selectedRecipe: string | null;
  handlePlanSelect: (id: string) => void;
  selectedPlan: string | null;
}

export default function SubscribeAmount({ selectedRecipe,handlePlanSelect, selectedPlan}: SubscribeAmountProps) {


  return (
    <section className={styles.SubscribeAmountContainer}>
      <div className={styles.SubscribeAmountTitle}>
        <p>급여량에 따른 정기배송 수량을 선택해주세요.</p>
        <p className={styles.SubscribeAmountsubtitle}>
          레시피를 선택하시면 가격이 노출됩니다.
        </p>
      </div>
      <div className={styles.SubscribePlanBox}>
        {plansData.map((plan: Plan) => (
          <PlanBox
            key={plan.id}
            {...plan}
            isSelected={selectedPlan === plan.id}
            onSelect={handlePlanSelect}
            option={selectedRecipe}
          />
        ))}
      </div>
    </section>
  );
}

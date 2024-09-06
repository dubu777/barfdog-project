import { useState } from "react";
import * as styles from "./SubscribeAmount.css";
import { Plan, plansData } from "@/constants/planData";
import { calculatePrices } from "@/utils/calculatePrices";
import PlanBox from "@/components/PlanBox/PlanBox";

export default function SubscribeAmount() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (id: string) => {
    setSelectedPlan(id);
  };

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
            option="beef"
          />
        ))}
      </div>
    </section>
  );
}

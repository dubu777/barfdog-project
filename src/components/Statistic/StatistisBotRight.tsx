"use client";

import * as React from "react";
import * as styles from "./StatisticSection.css";
import { formDataToChartData } from "@/utils/formDataToChartData";
import { SurveyFormData } from "@/types/survey";

interface StatisticsTopSectionProps {
  formData: SurveyFormData;
}

export default function StatisticsBotRightSection({
  formData,
}: StatisticsTopSectionProps) {

  return (
    <section className={styles.statisticsBRightContainer}>
      <h2 className={styles.statisticsBRightTitle}>바프독 생식기준 결과</h2>
      <div className={styles.statisticsBRightWrapper}>
        
        
        <div className={styles.resultTextWrapper}>
          <div className={styles.resultTextBox}>
            <p className={styles.resultTitle}>{formData.name}의</p>
            <p className={styles.resultTitle}>하루 권장 칼로리</p>
          </div>
          <p className={styles.resultAmountText}>426Kcal</p>
        </div>

        <div className={styles.resultTextWrapper}>
          <p className={styles.resultTitle}>하루 권장 식사량</p>
          <p className={styles.resultAmountText}>308.7g</p>
        </div>

        <div className={styles.resultTextWrapper}>
          <div className={styles.resultTextOneWrapper}>
            <p className={styles.resultTitle}>한끼 권장 식사량</p>
            <p className={styles.resultSubtitle}>(하루 두끼 기준)</p>
          </div>
          <p className={styles.resultAmountText}>154.3g</p>
        </div>


      </div>
    </section>
  );
}

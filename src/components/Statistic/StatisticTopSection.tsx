"use client";

import * as React from "react";
import * as styles from "./StatisticSection.css";
import { formDataToChartData } from "@/utils/formDataToChartData";
import { SurveyFormData } from "@/types/survey";

interface StatisticsTopSectionProps {
  formData: SurveyFormData;
}

export default function StatisticsTopSection({
  formData,
}: StatisticsTopSectionProps) {
  const chartData = formDataToChartData(formData);
  const filteredChartData = chartData.filter((chart) =>
    ["birth", "weight", "activityLevel"].includes(chart.name)
  );

  return (
    <section className={styles.statisticsTopContainer}>
      <div className={styles.statisticsTopWrapper}>
        {filteredChartData.map((chart, index) => (
          <React.Fragment key={index}>
          <div className={styles.statisticsTopBox}>
            <p className={styles.statisticsTitle}>{chart.title}</p>
            
            <div className={styles.stickBox}>
              {chart.sticks.map((stick, idx) => (
                
                <span
                  key={idx}
                  className={`${styles.stick} ${
                    stick.isRed ? styles.redStick : ""
                  }`}
                  style={{ height: stick.height }}
                />
              ))}
            </div>
            <div className={styles.topTextBox}>
              <div className={styles.textRow}>
                <div className={styles.leftText}>{chart.averageText}</div>
                <div className={styles.rightText}>{chart.averageValue}</div>
              </div>
              <div className={styles.textRow}>
                <div className={styles.leftText}>{chart.customText}</div>
                <div className={styles.rightText}>{chart.customValue}</div>
              </div>
            </div>
            
          </div>
            </React.Fragment>
        ))}
      </div>
    </section>
  );
}

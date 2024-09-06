"use client";

import * as React from "react";
import * as styles from "./StatisticSection.css";
import { formDataToChartData } from "@/utils/formDataToChartData";
import { SurveyFormData } from "@/types/survey";

interface StatisticsTopSectionProps {
  formData: SurveyFormData;
}

export default function StatisticsRightSection({
  formData,
}: StatisticsTopSectionProps) {
  const chartData = formDataToChartData(formData);
  const filteredChartData = chartData.filter((chart) =>
    ["snackCountLevel"].includes(chart.name)
  );
  const dogSizes = ["대형견", "중형견", "소형견"];

  return (
    <section className={styles.statisticsRightContainer}>
      <h2 className={styles.statisticsTitle}>견종별 간식 횟수</h2>
      <div className={styles.statisticsRightChartWrapper}>
        {dogSizes.map((dogSize, index) => (
          <React.Fragment key={index}>
            <div>{dogSize}</div>
            <span
              className={styles.horizonStick}
              style={{ width: filteredChartData[0].sticks[index].height }}
            />{" "}
          </React.Fragment>
        ))}
        <div>{formData.name}</div>
        <span
          className={styles.horizonRedStick}
          style={{ width: `${filteredChartData[0].sticks[3].height}` }}
        />
      </div>
    </section>
  );
}

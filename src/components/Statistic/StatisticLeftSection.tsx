"use client";

import * as React from "react";
import * as styles from "./StatisticSection.css";
import { formDataToChartData } from "@/utils/formDataToChartData";
import { SurveyFormData } from "@/types/survey";
import DogIcon from "/public/dog.svg";
import DotIcon from "/public/dot.svg";

interface StatisticsLeftSectionProps {
  formData: SurveyFormData;
}

export default function StatisticsLeftSection({
  formData,
}: StatisticsLeftSectionProps) {
  const chartData = formDataToChartData(formData);
  const filteredChartData = chartData.filter((chart) =>
    ["walkingCountPerWeek"].includes(chart.name)
  );
  const totalWalkingTime =
    Number(formData.walkingTimePerOneTime) *
    Number(formData.walkingCountPerWeek);

  return (
    <section className={styles.statisticsLeftContainer}>
      <>
      <div className={styles.statisticsLeftTitle}>
        {formData.name}의 산책 점검
      </div>
      <div className={styles.statisticsWrapper}>
        <div className={styles.statisticsLeftBox}>
          <p className={styles.leftBoxSubtitle}>산책 점수</p>
          <div className={styles.leftBoxText}>
            상위
            <br />
            100%
          </div>
        </div>
        <div className={styles.statisticsRightBox}>
          <div className={styles.statisticsRightWrapper}>
            <div className={styles.statisticsRightTitleWrapper}>
              <div className={styles.statisticsImageWrapper}>
                <DogIcon />
              </div>
              일주일 산책 횟수
            </div>
            <p className={styles.statisticsRightText}>
              {formData.walkingCountPerWeek}회
            </p>
          </div>
          <div className={styles.statisticsRightWrapper}>
            <div className={styles.statisticsRightTitleWrapper}>
              <div className={styles.statisticsImageWrapper}>
                <DotIcon />
              </div>
              일주일 총 산책시간
            </div>
            <p className={styles.statisticsRightText}>{totalWalkingTime}시간</p>
          </div>
        </div>
      </div>
      </>
      <div className={styles.statisticsLeftChatWrapper}>
        <div className={styles.statisticsLeftTitle}>
          견종별 산책 시간
          <p className={styles.statisticsSubtitle}>(일주일기준)</p>
        </div>
        <div className={styles.statisticsLeftWrapper}>
          {filteredChartData.map((chart, index) => (
            <div key={index} className={styles.statisticsLeftChartBox}>
              <div className={styles.leftStickBox}>
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
              {chart.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

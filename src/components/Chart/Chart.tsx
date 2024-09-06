'use client'

import * as React from 'react';
import * as styles from './Chart.css';
import { useSurveyForm } from '@/hooks/useSurveyForm';
import { formDataToChartData } from '@/utils/formDataToChartData';


const CandleChart = () => {
  const { formData } = useSurveyForm();
const chartData = formDataToChartData(formData)
const filteredChartData = chartData.filter(chart =>
  ['birth', 'weight', 'activityLevel'].includes(chart.name)
);
console.log(chartData, 'ccc');
console.log(formData, 'fff');
  return (
    <section className={styles.statisticsTopContainer}>
    <div className={styles.statisticsTopWrapper}>
      {filteredChartData.map((chart, index) => (
        <div key={index} className={styles.statisticsTopBox}>
          <p className={styles.statisticsTitle}>{chart.title}</p>
          <div className={styles.stickBox}>
            {chart.sticks.map((stick, idx) => (
              <span
                key={idx}
                className={`${styles.stick} ${
                  stick.isRed ? styles.redStick : ''
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
      ))}
      </div>
    </section>
  );
};

export default CandleChart;

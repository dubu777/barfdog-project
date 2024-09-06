"use client";

import Link from "next/link";
import * as styles from "./Statistic.css";
import { useSurveyForm } from "@/hooks/useSurveyForm";
import StatisticsTopSection from "@/components/Statistic/StatisticTopSection";
import StatisticsLeftSection from "@/components/Statistic/StatisticLeftSection";
import StatisticsRightSection from "@/components/Statistic/StatisticRightSection";
import StatisticsBotRightSection from "@/components/Statistic/StatistisBotRight";
import { formatDate } from "@/utils/formatDate";

interface Props {
  params: { id: string };
}

export default function StatisticPage({ params }: Props) {
  const { formData } = useSurveyForm();
  const today = formatDate(new Date());
  const id = params.id;
  return (
    <div className={styles.statisticsWrapper}>
      <section className={styles.statisticsMainTitleWrapper}>
        <h1 className={styles.statisticsMainTitle}>
          {formData.name}의 맞춤 레포트
        </h1>
        <p className={styles.statisticsMainSubtitle}>{today} 설문 결과</p>
      </section>
      <main className={styles.statisticsContainer}>
        <StatisticsTopSection formData={formData} />
        <StatisticsLeftSection formData={formData} />
        <StatisticsRightSection formData={formData} />
        <StatisticsBotRightSection formData={formData} />
      </main>
      <section className={styles.statisticsNotificationWrapper}>
        <div>※ 해당 결과지는 바프독 고객을 대상으로한 참고용 결과이니,</div>
        <div>자세한 반려견의 건강상태는 수의사와 상담해 주세요.</div>
      </section>
      <section className={styles.confirmButtonWrapper}>
        <Link
          className={styles.confirmButton}
          href={`/order/subscribeShop?surveyReportsId=${id}`}
        >
          맞춤 플랜 확인하기
        </Link>
      </section>
    </div>
  );
}

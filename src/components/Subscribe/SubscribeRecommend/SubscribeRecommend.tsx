"use client";

import * as styles from "./SubscribeRecommend.css";
import { useSurveyForm } from "@/hooks/useSurveyForm";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { resultSubtitle } from "@/components/Statistic/StatisticSection.css";


interface SubscribeRecommendProps {
  name: string
}

export default function SubscribeRecommend({name}: SubscribeRecommendProps) {

  return (
    <section className={styles.SuscribeContainer}>
      <h1 className={styles.SuscribeTitle}>결과지를 종합해본 결과</h1>
      <div className={styles.SuscribeResultWrapper}>
        <div className={styles.SuscribeResultBox}>
          <div className={styles.SuscribeResultLeft}>
            <figure className={styles.SuscribeResultImgBox}>
              <Image
                src="/recipes.jpg"
                alt="추천 레시피 이미지"
                width={260}
                height={260}
              />
            </figure>
            <figcaption className={styles.SuscribeResultImgText}>
              프리미엄 치킨
            </figcaption>
            <figcaption className={styles.SuscribeResultImgText}>
              Premium CHICKEN
            </figcaption>
          </div>
          <div className={styles.SuscribeRightTitleWrapper}>
            <div>{name}에게는</div>
            <div>
              첫 생식에 빠른 적응 <b>Premium CHICKEN</b>
            </div>
            <div> 레시피를 추천합니다.</div>
          </div>

          <div>
            <div className={styles.SuscribeRightContenteWrapper}>
              <span className={styles.SuscribeText}>
                {name}의 하루 권장 칼로리
              </span>
              <span className={styles.SuscribeAmountText}>426.1kcal</span>
              <span className={styles.SuscribeText}>하루 권장 식사량</span>
              <span className={styles.SuscribeAmountText}>308.7g</span>
              <div className={styles.resultTextWrapper}>
                <span className={styles.SuscribeText}>한끼 권장 식사량</span>
                <span className={resultSubtitle}>(하루 두끼 기준)</span>
              </div>
              <span className={styles.SuscribeAmountText}>154.3g</span>
            </div>
            <div className={styles.resultNotification}>
              바프독 생식기준 결과
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

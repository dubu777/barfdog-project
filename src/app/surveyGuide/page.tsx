import * as styles from "./surveyGuide.css";
import GuideIcon from '/public/survey-guide.svg';

export default function surveyGuidePage() {
  return (
    <div className={styles.surveyGuideContainer}>
      <div className={styles.surveyGuideWrapper}>
        <div className={styles.surveyWrapper}>
          <div className={styles.surveyBox}>
            <div className={styles.imageBox}>
              <GuideIcon/>
            </div>
            <div className={styles.guideMessageWrapper}>
              내 반려견에게 꼭 맞는 맞춤 플랜을 위한<br/>
              정보작성이 1분 가량 소요됩니다.
            </div>
          </div>
          <div className={styles.guideButtonWrapper}>
            <button className={styles.guideButton}>반려견 정보작성 시작하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

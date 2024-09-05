import Image from "next/image";
import { nextButton, prevButton, surveyButtonWrapper } from "@/components/Survey/SurveyForm/SurveyForm.css";

interface SurveyNavigationButtonsProps {
  currentSection: number;
  nextSection: () => void;
  prevSection: () => void;
  maxSection: number;
}

export default function SurveyNavigationButtons({
  currentSection,
  nextSection,
  prevSection,
  maxSection,
}: SurveyNavigationButtonsProps) {
  return (
    <div className={surveyButtonWrapper}>
      <button
        className={prevButton({ visible: currentSection > 1 })}
        onClick={prevSection}
        disabled={currentSection === 1}
      >
        <Image
          src="/survey_left_arrow.png"
          alt="이전버튼"
          width={12}
          height={12}
        />
        이전
      </button>

      {currentSection < maxSection ? (
        <button className={nextButton} onClick={nextSection}>
          다음
          <Image
            src="/survey_right_arrow.png"
            alt="다음버튼"
            width={12}
            height={12}
          />
        </button>
      ) : (
        <button className={nextButton} onClick={() => alert("설문을 제출합니다.")}>
          제출하기
          <Image
            src="/survey_right_arrow.png"
            alt="제출버튼"
            width={12}
            height={12}
          />
        </button>
      )}
    </div>
  );
}

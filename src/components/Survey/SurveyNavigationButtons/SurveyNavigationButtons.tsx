import Image from "next/image";
import {
  nextButton,
  prevButton,
  surveyButtonWrapper,
} from "@/components/Survey/SurveyForm/SurveyForm.css";
import { useRouter } from "next/navigation";
import { SurveyFormData } from "@/types/survey";

interface SurveyNavigationButtonsProps {
  currentSection: number;
  nextSection: () => void;
  prevSection: () => void;
  maxSection: number;
  formData: SurveyFormData;
}

export default function SurveyNavigationButtons({
  currentSection,
  nextSection,
  prevSection,
  maxSection,
  formData,
}: SurveyNavigationButtonsProps) {
  const router = useRouter();

  const handleSubmit = () => {
  router.push(`/survey/statistics`)
  }

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
        <button
          className={nextButton}
          onClick={handleSubmit}
        >
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

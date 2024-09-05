import { useState } from "react";
import { SurveyFormData } from "@/types/survey";

export function useValidation(formData: SurveyFormData, currentSection: number) {
  const [errors, setErrors] = useState<string[]>([]);

  const validateSection = (): boolean => {
    const newErrors: string[] = [];

    switch (currentSection) {
      case 1:
        if (!formData.name) {
          newErrors.push("이름 필수 항목입니다.");
        }
        if (!formData.gender) {
          newErrors.push("성별 필수 항목입니다.");
        }
        if (!formData.birth) {
          newErrors.push("출생년월 항목이 비어있습니다.");
        }
        if (!formData.dogSize) {
          newErrors.push("체형 필수 항목입니다.");
        }
        if (!formData.dogType) {
          newErrors.push("견종 필수 항목입니다.");
        }
        if (!formData.weight) {
          newErrors.push("몸무게 항목이 비어있습니다.");
        }
        if (formData.neutralization === null) {
          newErrors.push("중성화 여부 항목이 비었습니다.");
        }
        break;
      case 2:
        if (!formData.activityLevel) {
          newErrors.push("반려견 활동 수준을 선택해주세요.");
        }
        if (!formData.walkingCountPerWeek) {
          newErrors.push("일주일 산책 횟수를 입력해주세요.");
        }
        if (!formData.walkingTimePerOneTime) {
          newErrors.push("1회 산책 시간을 입력해주세요.");
        }
        if (!formData.dogStatus) {
          newErrors.push("반려견 상태 필수 항목입니다.");
        }
        break;
      case 3:
        if (!formData.snackCountLevel) {
          newErrors.push("간식 급여 횟수 필수 항목입니다.");
        }
        if (!formData.recommendRecipeId) {
          newErrors.push("특별히 챙겨주고 싶은 부분 필수 항목입니다.");
        }
        break;
      default:
        return true;
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const resetErrors = () => {
    setErrors([]);
  };

  return {
    errors,
    validateSection,
    resetErrors,
  };
}

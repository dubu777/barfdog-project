import { SurveyFormData } from "@/types/survey";
import { surveySectionContainer, walkingInputWrapper } from "./SurveySection.css";
import { surveyInputWrapper, surveyTitle } from "@/styles/common.css";
import { ACTIVITY_INFO } from "@/constants/survey";
import SurveyList from "../SurveyList/SurveyList";
import LabelCheckboxList from "@/components/LabelCheckboxList/LabelCheckboxList";
import SelectBox from "@/components/SelectBox/SelectBox";

interface Survey2ActivityInfoProps {
  formData: SurveyFormData;
  handleChange: <K extends keyof SurveyFormData>(
    name: K,
    value: SurveyFormData[K]
  ) => void;
}

export default function Survey2ActivityInfo({
  formData,
  handleChange,
}: Survey2ActivityInfoProps) {
  return (
    <section className={surveySectionContainer}>
      <div className={surveyInputWrapper}>
        <h2 className={surveyTitle}>{ACTIVITY_INFO.activityLevel.title}</h2>
        <LabelCheckboxList
          options={ACTIVITY_INFO.activityLevel.options}
          name={ACTIVITY_INFO.activityLevel.name}
          selectedValue={formData.activityLevel}
          onChange={(value) =>
            handleChange(ACTIVITY_INFO.activityLevel.name, value as string)
          }
        />
      </div>
      <div className={surveyInputWrapper}>
        <h2 className={surveyTitle}>{ACTIVITY_INFO.walkingCountPerWeek.title}</h2>
        <div className={walkingInputWrapper}>
        <SelectBox
          id={ACTIVITY_INFO.walkingCountPerWeek.id}
          options={ACTIVITY_INFO.walkingCountPerWeek.options}
          placeholder={ACTIVITY_INFO.walkingCountPerWeek.placeholder}
          unit={ACTIVITY_INFO.walkingCountPerWeek.unit}
          frontWord={ACTIVITY_INFO.walkingCountPerWeek.frontWord}
          selectedValue={formData.walkingCountPerWeek}
          onSelect={(value) => handleChange(ACTIVITY_INFO.walkingCountPerWeek.name, value as string)}
        />
        <SelectBox
          id={ACTIVITY_INFO.walkingTimePerOneTime.id}
          options={ACTIVITY_INFO.walkingTimePerOneTime.options}
          placeholder={ACTIVITY_INFO.walkingTimePerOneTime.placeholder}
          unit={ACTIVITY_INFO.walkingTimePerOneTime.unit}
          frontWord={ACTIVITY_INFO.walkingTimePerOneTime.frontWord}
          selectedValue={formData.walkingTimePerOneTime}
          onSelect={(value) => handleChange(ACTIVITY_INFO.walkingTimePerOneTime.name, value as string)}
        />
        </div>
      </div>
      <div className={surveyInputWrapper}>
        <p className={surveyTitle}>{ACTIVITY_INFO.dogStatus.title}</p>
        <SurveyList
          options={ACTIVITY_INFO.dogStatus.options}
          name={ACTIVITY_INFO.dogStatus.name}
          selectedValue={formData.dogStatus}
          onChange={(value) => handleChange(ACTIVITY_INFO.dogStatus.name, value as string)}
          type="col"
        />
      </div>
    </section>
  );
}

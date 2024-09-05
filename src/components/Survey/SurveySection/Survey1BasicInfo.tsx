import { SurveyFormData } from "@/types/survey";
import { surveySectionContainer } from "./SurveySection.css";
import { surveyInputWrapper, surveyTitle } from "@/styles/common.css";
import { BASIC_INFO } from "@/constants/survey";
import SurveyTextField from "@/components/SurveyTextField/SurveyTextField";
import SurveyList from "../SurveyList/SurveyList";
import SurveyBirthInput from "../SurveyBirthInput/SurveyBirthInput";
import LabelCheckbox from "@/components/LabelCheckBox/LabelCheckBox";
import SearchableSelect from "@/components/SearchableSelect/SearchableSelect";

interface Survey1BasicInfoProps {
  year: string;
  month: string;
  formData: SurveyFormData;
  handleBirthChange: (newYear: string, newMonth: string) => void;
  handleChange: <K extends keyof SurveyFormData>(
    name: K,
    value: SurveyFormData[K]
  ) => void;
}

export default function Survey1BasicInfo({
  year,
  month,
  handleBirthChange,
  formData,
  handleChange,
}: Survey1BasicInfoProps) {
  return (
    <section className={surveySectionContainer}>
      <SurveyTextField
        id={BASIC_INFO.name.id}
        title={BASIC_INFO.name.title}
        name={BASIC_INFO.name.name}
        value={formData.name}
        placeholder={BASIC_INFO.name.placeholder}
        onChange={(value) => handleChange(BASIC_INFO.name.name, value)}
      />
      <div className={surveyInputWrapper}>
        <p className={surveyTitle}>{BASIC_INFO.gender.title}</p>
        <SurveyList
          options={BASIC_INFO.gender.options}
          name={BASIC_INFO.gender.name}
          selectedValue={formData.gender}
          onChange={(value) =>
            handleChange(BASIC_INFO.gender.name, value as string)
          }
        />
      </div>
      <div className={surveyInputWrapper}>
        <SurveyBirthInput
          year={year}
          month={month}
          onBirthChange={handleBirthChange}
        />
        <LabelCheckbox
          id={BASIC_INFO.oldDog.options.id}
          name={BASIC_INFO.oldDog.name}
          label={BASIC_INFO.oldDog.options.label}
          isChecked={formData.oldDog === true}
          onChange={(newValue) =>
            handleChange(BASIC_INFO.oldDog.name, newValue as boolean)
          }
          type="single"
        />
      </div>
      <SurveyList
        options={BASIC_INFO.dogSize.options}
        name={BASIC_INFO.dogSize.name}
        selectedValue={formData.dogSize}
        onChange={(value) =>
          handleChange(BASIC_INFO.dogSize.name, value as string)
        }
      />
      <div className={surveyInputWrapper}>
        <p className={surveyTitle}>{BASIC_INFO.dogType.title}</p>
        <SearchableSelect
          selectedValue={formData.dogType}
          options={BASIC_INFO.dogType.options}
          onChange={(value) => handleChange(BASIC_INFO.dogType.name, value)}
          placeholder={BASIC_INFO.dogType.placeholder}
        />
      </div>
      <SurveyTextField
        id={BASIC_INFO.weight.id}
        name={BASIC_INFO.weight.name}
        title={BASIC_INFO.weight.title}
        value={formData.weight}
        unit={BASIC_INFO.weight.unit}
        placeholder={BASIC_INFO.weight.placeholder}
        onChange={(value) => handleChange(BASIC_INFO.weight.name, value)}
      />
      <div className={surveyInputWrapper}>
        <p className={surveyTitle}>{BASIC_INFO.neutralization.title}</p>
        <SurveyList
          options={BASIC_INFO.neutralization.options}
          name={BASIC_INFO.neutralization.name}
          selectedValue={formData.neutralization as boolean}
          onChange={(value) =>
            handleChange(BASIC_INFO.neutralization.name, value as boolean)
          }
        />
      </div>
    </section>
  );
}

import { SurveyFormData } from "@/types/survey";
import { surveySectionContainer } from "./SurveySection.css";
import {
  notification,
  surveyInputWrapper,
  surveyTitle,
} from "@/styles/common.css";
import { ADDITIONAL_INFO } from "@/constants/survey";
import SurveyTextField from "@/components/SurveyTextField/SurveyTextField";
import SurveyList from "../SurveyList/SurveyList";
import useToggleOptions from "@/hooks/useToggleOptions";
import { AnimatePresence, motion } from "framer-motion";
import { expandFromTopVariants, slideDownVariants } from "@/constants";

interface Survey3AdditionalInfoProps {
  formData: SurveyFormData;
  handleChange: <K extends keyof SurveyFormData>(
    name: K,
    value: SurveyFormData[K]
  ) => void;
}

export default function Survey3AdditionalInfo({
  formData,
  handleChange,
}: Survey3AdditionalInfoProps) {
  const {
    dynamicOptions: inedibleOptions,
    showTextField: showInedibleTextField,
    handleFirstSelection: handleInedibleFirstSelection,
    handleAdditionalSelection: handleInedibleAdditionalSelection,
  } = useToggleOptions({
    options: ADDITIONAL_INFO.inedibleFood.options,
    initialOptionCount: 2,
    fieldName: ADDITIONAL_INFO.inedibleFood.name,
    formData: formData.inedibleFood,
    handleChange,
  });

  const {
    dynamicOptions: cautionOptions,
    showTextField: showCautionTextField,
    handleFirstSelection: handleCautionFirstSelection,
  } = useToggleOptions({
    options: ADDITIONAL_INFO.caution.options,
    initialOptionCount: 2,
    fieldName: ADDITIONAL_INFO.caution.name,
    formData: formData.caution,
    handleChange,
  });

  return (
    <section className={surveySectionContainer}>
      <div className={surveyInputWrapper}>
        <p className={surveyTitle}>{ADDITIONAL_INFO.snackCountLevel.title}</p>
        <SurveyList
          options={ADDITIONAL_INFO.snackCountLevel.options}
          name={ADDITIONAL_INFO.snackCountLevel.name}
          selectedValue={formData.snackCountLevel}
          onChange={(value) =>
            handleChange(ADDITIONAL_INFO.snackCountLevel.name, value as string)
          }
        />
      </div>
      <div className={surveyInputWrapper}>
        <p className={surveyTitle}>{ADDITIONAL_INFO.inedibleFood.title}</p>
        <SurveyList
          options={inedibleOptions}
          name={ADDITIONAL_INFO.inedibleFood.name}
          selectedValue={formData.inedibleFood}
          onChange={(value) => {
            handleInedibleFirstSelection(value);
            handleInedibleAdditionalSelection(value);
          }}
          type="grid"
        />
        <AnimatePresence>
          {showInedibleTextField && (
            <motion.div
              key="inedibleFood"
              variants={expandFromTopVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <SurveyTextField
                id="inedibleFoodEtc"
                name="inedibleFoodEtc"
                value={formData.inedibleFoodEtc}
                placeholder="직접 입력해주세요"
                onChange={(value) => handleChange("inedibleFoodEtc", value)}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <p className={notification}>
          ※ 바프독의 모든 생식 레시피에는
          <br />
          영양분이 가득한 육고기, 뼈, 내장, 채소 등이 들어갑니다.
          <br />
          육고기와 뼈의 경우 알러지 분류에 들어가지만
          <br />
          내장의 경우 알러지 분류에 들어가지 않으니 참고해주세요.
        </p>
      </div>
      <div className={surveyInputWrapper}>
        <p className={surveyTitle}>{ADDITIONAL_INFO.recommendRecipeId.title}</p>
        <SurveyList
          options={ADDITIONAL_INFO.recommendRecipeId.options}
          name={ADDITIONAL_INFO.recommendRecipeId.name}
          selectedValue={formData.recommendRecipeId}
          onChange={(value) =>
            handleChange("recommendRecipeId", value as number)
          }
          type="col"
        />
      </div>

      <div className={surveyInputWrapper}>
        <p className={surveyTitle}>{ADDITIONAL_INFO.caution.title}</p>
        <SurveyList
          options={cautionOptions}
          name={ADDITIONAL_INFO.caution.name}
          selectedValue={formData.caution}
          onChange={handleCautionFirstSelection}
          type="row"
        />
        <AnimatePresence>
          {showCautionTextField && (
            <motion.div
              key="caution"
              variants={expandFromTopVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <SurveyTextField
                id="cautionEtc"
                name="cautionEtc"
                value={formData.caution}
                placeholder="특이사항을 입력해주세요"
                onChange={(value) => handleChange("caution", value)}
              />
              <p className={notification}>
                ※ 질병여부 필수 작성해주세요
                <br />
                ( 질병에 따라 급여가 불가 할 수 있습니다.)
                <br />
                ex. 췌장염, 쿠싱, 심장병, 만성췌장, 고지혈 등<br />
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

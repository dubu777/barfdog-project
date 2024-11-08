"use client";
import Modal from "@/components/Modal/Modal";
import {
  confirmButton,
  confirmButtonWrapper,
  errorMessageWrapper,
  fieldContainer,
  pageContainer,
  surveyContainer,
} from "./SurveyForm.css";
import SurveyNavigationButtons from "@/components/Survey/SurveyNavigationButtons/SurveyNavigationButtons";
import SurveyPagination from "@/components/Survey/SurveyPagnation/SurveyPagnation";
import Survey1BasicInfo from "@/components/Survey/SurveySection/Survey1BasicInfo";
import Survey2ActivityInfo from "@/components/Survey/SurveySection/Survey2ActivityInfo";
import Survey3AdditionalInfo from "@/components/Survey/SurveySection/Survey3AdditionalInfo";
import { sectionVariants } from "@/constants";
import { useSurveyForm } from "@/hooks/useSurveyForm";
import useModal from "@/hooks/useModal";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";
import { useValidation } from "@/hooks/useValidation";
import { useScrollToElement } from "@/utils/scrollToElement";
import { motion, AnimatePresence } from "framer-motion";

export default function SurveyForm() {
  const { year, month, handleBirthChange, formData, handleChange } = useSurveyForm();
  const { currentSection, direction, nextSection, prevSection } =
    useSectionNavigation(3);
  const sectionTitles = ["기본정보 입력", "활동량 입력", "추가정보 입력"];
  const { isOpen, onClose, onToggle, ref } = useModal();
  const { errors, validateSection } = useValidation(formData, currentSection);
  const scrollToElement = useScrollToElement();

  const handleNextSection = () => {
    if (validateSection()) {
      nextSection();
      scrollToElement("survey-top");
    } else {
      onToggle();
    }
  };

  const handlePrevSection = () => {
    prevSection();
    scrollToElement("survey-top");
  };
console.log(formData, 'formData');

  return (
    <div className={surveyContainer} id="survey-top">
      <SurveyPagination
        currentSection={currentSection}
        totalSections={3}
        sectionTitles={sectionTitles}
      />
      <div className={pageContainer}>
        <div className={fieldContainer}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSection}
              variants={sectionVariants}
              initial={direction === 1 ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              custom={direction}
            >
              {currentSection === 1 && (
                <Survey1BasicInfo
                  year={year}
                  month={month}
                  handleBirthChange={handleBirthChange}
                  formData={formData}
                  handleChange={handleChange}
                />
              )}
              {currentSection === 2 && (
                <Survey2ActivityInfo
                  formData={formData}
                  handleChange={handleChange}
                />
              )}
              {currentSection === 3 && (
                <Survey3AdditionalInfo
                  formData={formData}
                  handleChange={handleChange}
                />
              )}
            </motion.div>
          </AnimatePresence>
          <SurveyNavigationButtons
            formData={formData}
            currentSection={currentSection}
            nextSection={handleNextSection}
            prevSection={handlePrevSection}
            maxSection={3}
          />
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        ref={ref}
        defaultCloseButton={false}
      >
        <h2>- 오류 안내 -</h2>
        <ul className={errorMessageWrapper}>
          {errors.map((error, index) => (
            <li key={index}>
              {index + 1}. {error}
            </li>
          ))}
        </ul>
        <div className={confirmButtonWrapper}>
          <button className={confirmButton} onClick={onClose}>
            확인
          </button>
        </div>
      </Modal>
    </div>
  );
}

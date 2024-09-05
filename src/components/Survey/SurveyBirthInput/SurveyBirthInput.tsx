'use client'

import * as styles from "./SurveyBirthInput.css";
import SelectBox from "@/components/SelectBox/SelectBox";
import { surveyInputWrapper, surveyTitle } from "@/styles/common.css";

const years = Array.from({ length: 50 }, (_, i) => (new Date().getFullYear() - i).toString());
const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));

interface SurveyBirthInputProps {
  year: string;
  month: string;
  onBirthChange: (year: string, month: string) => void;
}

export default function SurveyBirthInput({
  year,
  month,
  onBirthChange,
}: SurveyBirthInputProps) {

  return (
    <div className={surveyInputWrapper}>
      <p className={surveyTitle}>반려견 출생년월</p>
      <ul className={styles.birthContainer}>
        <li>
          <SelectBox
            id="yyyy"
            options={years}
            placeholder="yyyy"
            unit="년"
            onSelect={(value) => onBirthChange(value, month)}
            selectedValue={year}
          />
        </li>
        <li>
          <SelectBox
            id="mm"
            options={months}
            placeholder="mm"
            unit="월"
            onSelect={(value) => onBirthChange(year, value)}
            selectedValue={month}
          />
        </li>
      </ul>
    </div>
  );
};

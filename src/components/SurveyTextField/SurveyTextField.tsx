import React from "react";
import { unitStyle, textFieldContainer, textInputWrapper, textInput } from "./SurveyTextField.css";
import { surveyTitle } from "@/styles/common.css";

interface WeightInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  title?: string;
  unit?: string;
  placeholder?: string;
}

export default function SurveyTextField({
  id,
  name,
  value,
  onChange,
  title,
  unit,
  placeholder="",
}: WeightInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <label htmlFor={id} className={textFieldContainer}>
      {title && <h2 className={surveyTitle}>{title}</h2>}
        <div className={textInputWrapper}>
          <input
            className={textInput}
            type="text"
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
          ></input>
          {unit && <p className={unitStyle}>{unit}</p>}
        </div>
    </label>
  );
}

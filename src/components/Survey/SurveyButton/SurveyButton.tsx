'use client'
import React from "react";
import { buttonStyle, hiddenInputStyle, subTextStyle, surveyButtonContainer } from "./SurveyButton.css";

interface SurveyButtonProps {
  id: string;
  name: string;
  value: string | boolean;
  isChecked: boolean;
  label: string;
  subText?: readonly string[];
  onChange: (value: string | boolean) => void;
}

export default function SurveyButton({
  id,
  name,
  value,
  isChecked,
  label,
  subText,
  onChange,
}: SurveyButtonProps) {
  const handleChange = () => {
    onChange(value);
  };

  return (
    <li>
      <div className={surveyButtonContainer}>
      <label htmlFor={id} className={buttonStyle({ checked: isChecked })}>
      <input
        type="radio"
        id={id}
        name={name}
        value={String(value)}
        checked={isChecked}
        onChange={handleChange}
        className={hiddenInputStyle}
      />
      {label}
      </label>
      {subText && (
          <span className={subTextStyle}>
            {Array.isArray(subText) ? (
              subText.map((text, index) => (
                <React.Fragment key={index}>
                  {text}
                  <br />
                </React.Fragment>
              ))
            ) : (
              subText
            )}
          </span>
        )}
      </div>
    </li>
  );
}

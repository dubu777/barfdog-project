import React from "react";

import { surveyListContainer } from "./SurveyList.css";
import SurveyButton from "../SurveyButton/SurveyButton";

interface SurveyListProps {
  options: readonly { id: string; value: string | boolean; label: string; subText?: readonly string[]; }[];
  name: string;
  selectedValue: string | boolean;
  onChange: (value: string | boolean) => void;
  type?: "row" | "col" | 'grid';
}

export default function SurveyList({
  options,
  name,
  selectedValue,
  onChange,
  type = "row",
}: SurveyListProps) {
  return (
    <ul className={surveyListContainer({type})}>
      {options.map((option) => (
        <SurveyButton
          key={option.id}
          id={option.id}
          name={name}
          value={option.value}
          isChecked={  name === "caution"
            ? option.value === ""
              ? selectedValue !== "NONE"
              : selectedValue === option.value
            : selectedValue === option.value}
          label={option.label}
          onChange={onChange}
          subText={option.subText}
        />
      ))}
    </ul>
  );
}

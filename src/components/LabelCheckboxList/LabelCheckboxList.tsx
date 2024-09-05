import React from "react";

import { checkBoxListContainer } from "./LabelCheckboxList.css";
import LabelCheckbox from "../LabelCheckBox/LabelCheckBox";

interface LabelCheckboxListProps {
  options: readonly { id: string; value: string; label: string }[];
  name: string;
  selectedValue: string | boolean;
  onChange: (value: boolean | string) => void;
}

export default function LabelCheckboxList({
  options,
  name,
  selectedValue,
  onChange,
}: LabelCheckboxListProps) {
  return (
    <div>
      <ul className={checkBoxListContainer}>
        {options.map((option) => (
          <LabelCheckbox
            key={option.id}
            id={option.id}
            name={name}
            value={option.value}
            label={option.label}
            isChecked={selectedValue === option.value}
            onChange={onChange}
          />
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import { checkBox, checkboxContainer, CheckBoxLabel, } from "./LabelCheckbox.css";

interface LabelCheckboxProps {
  id: string;
  name: string;
  value?: string;
  label: string;
  isChecked: boolean;
  type?: 'single' | 'group'
  onChange: (value: boolean | string) => void;
}

export default function LabelCheckbox({
  id,
  name,
  value = "",
  label,
  isChecked,
  onChange,
  type='group'
}: LabelCheckboxProps) {

  const handleChange = () => {
    if (type === 'single') {
      onChange(!isChecked); 
    } else {
      onChange(value);
    }
  };

  return (
    <li className={checkboxContainer({type})}>
      <label className={CheckBoxLabel({type})} htmlFor={id}>
        <input
          type={type === 'single' ? 'checkbox' : 'radio'}
          id={id}
          name={name}
          value={value}
          checked={isChecked}
          onChange={handleChange}
          className={checkBox({isChecked, type})}
        />
        {label}
      </label>
    </li>
  );
}

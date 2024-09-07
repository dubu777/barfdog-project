import { SurveyFormData } from "@/types/survey";
import { useEffect, useState } from "react";

interface UseToggleOptionsParams {
  options: readonly { id: string; value: string | boolean | number; label: string; subText?: readonly string[]; }[];
  initialOptionCount: number;
  fieldName: keyof SurveyFormData;
  formData: SurveyFormData[keyof SurveyFormData];
  handleChange: <K extends keyof SurveyFormData>(name: K, value: SurveyFormData[K]) => void;
}

export default function useToggleOptions({
  options,
  initialOptionCount,
  fieldName,
  handleChange,
  formData,
}: UseToggleOptionsParams) {
  const [showTextField, setShowTextField] = useState(false);
  const [dynamicOptions, setDynamicOptions] = useState(
    [...options.slice(0, initialOptionCount)]
  );

  useEffect(() => {
    if (formData && formData !== "NONE") {
      setDynamicOptions([...options]);
    }
    if (fieldName === 'caution') {
      if (formData !== "NONE") {
        setShowTextField(true);
      } else {
        setShowTextField(false);
      }
    } else {

      if (formData === "ETC") {
        setShowTextField(true);
      } else {
        setShowTextField(false);
      }
    }
  }, [formData, options, fieldName]);

  const handleFirstSelection = (value: string | boolean | number) => {
    handleChange(fieldName, value);

    if (value !== "NONE") {
      setDynamicOptions([...options]);
    } else {
      setDynamicOptions([...options.slice(0, initialOptionCount)]);
      setShowTextField(false);
    }
  };

  const handleAdditionalSelection = (value: string | boolean | number) => {
    handleChange(fieldName, value);

    if (fieldName === 'caution') {
      if (value !== "NONE") {
        setShowTextField(true);
      } else {
        setShowTextField(false);
      }
    } else {
      if (value === "ETC") {
        setShowTextField(true);
      } else {
        setShowTextField(false);
      }
    }
  };

  return {
    dynamicOptions,
    showTextField,
    handleFirstSelection,
    handleAdditionalSelection,
  };
}

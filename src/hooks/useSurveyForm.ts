import { useState, useEffect } from "react";
import useSelection from "@/hooks/useSelection";
import { initialSurveyValue } from "@/constants/survey";
import { SurveyFormData } from "@/types/survey";

export function useSurveyForm() {
  const { formData, handleChange } = useSelection<SurveyFormData>(initialSurveyValue);

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  useEffect(() => {
    const savedBirth = formData.birth;
    if (savedBirth) {
      setYear(savedBirth.slice(0, 4));
      setMonth(savedBirth.slice(4, 6));
    }
  }, [formData.birth]);

  const handleBirthChange = (newYear: string, newMonth: string) => {
    setYear(newYear);
    setMonth(newMonth);

    if (newYear && newMonth) {
      handleChange("birth", `${newYear}${newMonth}`);
    }
  };

  return {
    year,
    month,
    handleBirthChange,
    formData,
    handleChange,
  };
}

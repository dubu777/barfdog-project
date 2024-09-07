'use client'

import { storageKeys } from "@/constants/key";
import { useState, useEffect } from "react";

interface UseSelectionReturnType<T> {
  formData: T;
  handleChange: (name: keyof T, value: T[keyof T]) => void;
}

export default function useSelection<T>(initialValues: T): UseSelectionReturnType<T> {
  const [formData, setFormData] = useState<T>(initialValues);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem(storageKeys.SURVEY_DATA);
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setFormData({ ...initialValues, ...parsedData });
      }
      setIsInitialized(true);
    }
  }, [initialValues]);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(storageKeys.SURVEY_DATA, JSON.stringify(formData));
    }
  }, [formData, isInitialized]);

  const handleChange = (name: keyof T, value: T[keyof T]) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return {
    formData,
    handleChange,
  };
}

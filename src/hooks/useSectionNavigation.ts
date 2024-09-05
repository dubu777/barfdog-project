import { useState } from "react";

export function useSectionNavigation(totalSections: number) {
  const [currentSection, setCurrentSection] = useState(1);
  const [direction, setDirection] = useState(0);

  const nextSection = () => {
    setDirection(1);
    setCurrentSection((prev) => (prev < totalSections ? prev + 1 : prev));
  };

  const prevSection = () => {
    setDirection(-1);
    setCurrentSection((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return {
    currentSection,
    direction,
    nextSection,
    prevSection,
  };
}

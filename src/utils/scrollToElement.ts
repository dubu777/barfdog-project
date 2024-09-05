import { useCallback } from "react";

export function useScrollToElement() {
  const scrollToElement = useCallback((elementId: string, behavior: ScrollBehavior = 'smooth') => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior, block: "start" });
    }
  }, []);

  return scrollToElement;
}

import { useState } from "react";

export function useSubscribe() {
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleRecipeSelect = (recipeId: string) => {
    setSelectedRecipe(recipeId);
  };

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  return {
    selectedRecipe,
    selectedPlan,
    handleRecipeSelect,
    handlePlanSelect,
  };
}

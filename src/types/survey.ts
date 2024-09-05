interface SurveyFormData {
  name: string;
  gender: string;
  birth: string;
  oldDog: boolean;
  dogSize: string;
  dogType: string;
  weight: string;
  neutralization: boolean | null;
  activityLevel: string;
  walkingCountPerWeek: string;
  walkingTimePerOneTime: string;
  dogStatus: string;
  snackCountLevel: string;
  inedibleFood: string;
  inedibleFoodEtc: string;
  recommendRecipeId: string | null;
  caution: string;
}

export type{SurveyFormData}
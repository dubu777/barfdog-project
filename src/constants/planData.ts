// constants/plansData.ts

export const plansData = [
  {
    id: "FULL",
    title: "풀플랜",
    subtitle: "하루에 두 끼를 바프독으로 먹어요",
    imageSrc: "/subscribe_full_plan.png",
    bestLabel: "BEST",
    mealsPerDay: 2,
    weeks: 2,
    packs: 28,
    discount: "5",
    finalPrice: "0원",
    pricePerPack: "0원",
  },
  {
    id: "HALF",
    title: "하프플랜",
    subtitle: "하루에 두 끼를 바프독으로 먹어요",
    imageSrc: "/subscribe_half_plan.png",
    bestLabel: "",
    mealsPerDay: 1,
    weeks: 4,
    packs: 28,
    discount: "3",
    finalPrice: "0원",
    pricePerPack: "0원",
  },
  {
    id: "TOPPING",
    title: "토핑플랜",
    subtitle: "토핑용으로 바프독으로 섞어서 먹어요",
    imageSrc: "/subscribe_half_plan.png",
    bestLabel: "NEW",
    mealsPerDay: 1,
    weeks: 4,
    packs: 20,
    discount: "0",
    finalPrice: "0원",
    pricePerPack: "0원",
  },
];


export interface Plan {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  bestLabel?: string;
  mealsPerDay: number;
  weeks: number;
  packs: number;
  discount: string;
  finalPrice: string;
  pricePerPack: string;
}
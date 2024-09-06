// utils/calculatePrices.ts

export const pricePerPackMap: Record<string, number> = {
  starter: 6681,
  beef: 8083,
  buckandlamb: 8627,
  lambandbeef: 8651,
  premiumChicken: 6156,
  premiumTurkey: 8785,
  premiumLamb: 8352,
  premiumBeef: 7917,
};

// 옵션 별 그램수
export const gramsPerPackMap: Record<string, number> = {
  starter: 152.2,
  beef: 144.6,
  buckandlamb: 145,
  lambandbeef: 133.3,
  premiumChicken: 154.3,
  premiumTurkey: 163,
  premiumLamb: 141.8,
  premiumBeef: 146.9,
};

export function calculatePrices(planId: string, option: string) {
  const pricePerPack = pricePerPackMap[option] || 0;
  const gramsPerPack = gramsPerPackMap[option] || 0;
  let totalPrice = 0;
  let discount = 0;

  switch (planId) {
    case "FULL":
      totalPrice = pricePerPack * 28;
      discount = 0.05; // 5% 할인
      break;
    case "HALF":
      totalPrice = pricePerPack * 28;
      discount = 0.03; // 3% 할인
      break;
    case "TOPPING":
      totalPrice = pricePerPack * 20;
      discount = 0; // 할인 없음
      break;
    default:
      totalPrice = 0;
      break;
  }

  const finalPrice = Math.round(totalPrice - totalPrice * discount);
  const roundedTotalPrice = Math.round(totalPrice);

  return {
    totalPrice: roundedTotalPrice.toLocaleString() + "원",
    finalPrice: finalPrice.toLocaleString() + "원",
    pricePerPack: pricePerPack.toLocaleString() + "원",
    gramsPerPack: gramsPerPack + "g", // 그램수 반환
  };
}

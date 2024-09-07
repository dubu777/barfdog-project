export const pricePerPackMap: Record<string, number> = {
  STARTER_PREMIUM: 6681,
  TURKEY_BEEF: 8083,
  DUCK_LAMB: 8627,
  LAMB_BEEF: 8651,
  PREMIUM_CHICKEN: 6156,
  PREMIUM_TURKEY: 8785,
  PREMIUM_LAMB: 8352,
  PREMIUM_BEEF: 7917,
};


export const gramsPerPackMap: Record<string, number> = {
  STARTER_PREMIUM: 152.2,
  TURKEY_BEEF: 144.6,
  DUCK_LAMB: 145,
  LAMB_BEEF: 133.3,
  PREMIUM_CHICKEN: 154.3,
  PREMIUM_TURKEY: 163,
  PREMIUM_LAMB: 141.8,
  PREMIUM_BEEF: 146.9,
};

export function calculatePrices(planId: string | null, option: string | null) {
  console.log(planId, option);
  
  if (!planId || !option) {
    return {
      totalPrice: "0원",
      finalPrice: "0원",
      pricePerPack: "0원",
      gramsPerPack: "0g",
    };
  }

  const pricePerPack = pricePerPackMap[option] || 0;
  const gramsPerPack = gramsPerPackMap[option] || 0;
  let totalPrice = 0;
  let discount = 0;

  switch (planId) {
    case "FULL":
      totalPrice = pricePerPack * 28;
      discount = 0.05;
      break;
    case "HALF":
      totalPrice = pricePerPack * 28;
      discount = 0.03; 
      break;
    case "TOPPING":
      totalPrice = pricePerPack * 20;
      discount = 0;
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
    gramsPerPack: gramsPerPack + "g",
  };
}

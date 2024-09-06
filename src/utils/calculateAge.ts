// util.ts
export const calculateAge = (birth: string): string => {
  if (!birth) return '알 수 없음';

  const birthYear = parseInt(birth.slice(0, 4)); // 출생년도
  const birthMonth = parseInt(birth.slice(4, 6)); // 출생 월

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // 월은 0부터 시작하므로 +1 필요
  const currentDay = today.getDate();

  let ageYears = currentYear - birthYear;
  let ageMonths = currentMonth - birthMonth;

  if (ageMonths < 0) {
    ageYears -= 1;
    ageMonths += 12;
  }

  if (currentDay < 1) {
    ageMonths -= 1;
  }

  if (ageYears === 0) {
    return `${ageMonths}개월`;
  }

  return `${ageYears}살`;
};

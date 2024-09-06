import { SurveyFormData } from "@/types/survey";
import { calculateAge } from "./calculateAge";

const sizeWeightMap = {
  SMALL: 5,
  MIDDLE: 15,
  LARGE: 30,
};

const sizeWeightLabels: {
  SMALL: string;
  MIDDLE: string;
  LARGE: string;
} = {
  SMALL: "소형견",
  MIDDLE: "중형견",
  LARGE: "대형견",
};

const snackCountLevelMap: {
  LITTLE: number;
  NORMAL: number;
  MUCH: number;
} = {
  LITTLE: 20,
  NORMAL: 50,
  MUCH: 80,
};

const activityLevelMap: {
  VERY_LITTLE: number;
  LITTLE: number;
  NORMAL: number;
  MUCH: number;
  VERY_MUCH: number;
} = {
  VERY_LITTLE: 10,
  LITTLE: 25,
  NORMAL: 50,
  MUCH: 75,
  VERY_MUCH: 100,
};

const activityLevelLabels: {
  [key in keyof typeof activityLevelMap]: string;
} = {
  VERY_LITTLE: "매우 적어요",
  LITTLE: "적어요",
  NORMAL: "보통",
  MUCH: "많아요",
  VERY_MUCH: "매우 많아요",
};

export const formDataToChartData = (formData: SurveyFormData) => {
  // 각 사이즈별 평균 체중
  const averageWeight =
    sizeWeightMap[formData.dogSize as keyof typeof sizeWeightMap] || 0;

  // 체중을 퍼센트로 계산 (평균을 기준으로 100%)
  const weightPercentage = Math.min(
    (parseInt(formData.weight) / averageWeight) * 100,
    100
  );

  const walkingCountPercentage = Math.min(
    (parseInt(formData.walkingCountPerWeek) / 7) * 100,
    100
  );
  const walkingTimePercentage = Math.min(
    (parseInt(formData.walkingTimePerOneTime) / 5) * 100,
    100
  );

  const activityPercentage =
    activityLevelMap[formData.activityLevel as keyof typeof activityLevelMap] ||
    0;

    const activityLevelLabel = activityLevelLabels[
      formData.activityLevel as keyof typeof activityLevelLabels
    ]

    const sizeWeightLabel = sizeWeightLabels[
      formData.dogSize as keyof typeof sizeWeightLabels
    ]
  const snackCountLevelWidth =
  snackCountLevelMap[formData.snackCountLevel as keyof typeof snackCountLevelMap] || 0;

    return [
      {
        title: "바프독을 시작하는 나이",
        name: 'birth',
        sticks: [
          { height: "100%" },
          { height: "23.3%" },
          { height: "3.3%"},
          { height: "0%"},
          { height: "0%"},
        ],
        averageText: "전체 평균",
        averageValue: "4살",
        customText: formData.name,
        customValue: `${calculateAge(formData.birth)}`,
      },
      {
        title: `${sizeWeightLabel} 평균 체중`,
        name: 'weight',
        sticks: [
          { height: "37.1%" },
          { height: "100%",  },
          { height: `${weightPercentage}%`, isRed: true},
          { height: "0%"},
          { height: "0%"},
        ],
        averageText: "전체 평균",
        averageValue: `${averageWeight}kg`,
        customText: formData.name,
        customValue: `${formData.weight}kg`,
      },
      {
        title: "주간 산책 빈도",
        name: 'walkingCountPerWeek',
        sticks: [
          { height: `${walkingCountPercentage}%`, isRed: true },
          { height: "60%" },
        ],
        text: "우리 지역에서",
      },
      {
        title: "주간 산책 빈도",
        name: 'walkingCountPerWeek',
        sticks: [
          { height: `${walkingCountPercentage}%`,isRed: true },
          { height: "70%" },
        ],
        text: "또래 중에서",
      },
      {
        title: "주간 산책 빈도",
        name: 'walkingCountPerWeek',
        sticks: [
          { height: `${walkingCountPercentage}%`, isRed: true },
          { height: "80%" },
        ],
        text: `${sizeWeightLabel} 중에서`,
      },
      {
        title: "산책 시간(한 번당)",
        name: 'walkingTimePerOneTime',
        sticks: [
          { height: `${walkingTimePercentage}%` },
          { height: "100%" },
          { height: "0%", isRed: true },
        ],
        averageText: "전체 평균",
        averageValue: "5시간",
        customText: formData.name,
        customValue: `${formData.walkingTimePerOneTime}시간`,
      },
      {
        title: "견종별 간식 횟수",
        name: "snackCountLevel",
        sticks: [
          { height: "50%" }, 
          { height: "60%" },
          { height: "70%" },
          { height: `${snackCountLevelWidth}%`, isRed: true },
        ],
      },
    
      {
        title: `${sizeWeightLabel} 평균 활동량`,
        name: 'activityLevel',
        sticks: [
          { height: `${activityPercentage}%`, isRed: true },
          { height: "100%" },
          { height: "2.9%" },
          { height: "5.9%"},
          { height: "29.4%"},
        ],
        averageText: "전체 평균",
        averageValue: "보통",
        customText: formData.name,
        customValue: activityLevelLabel,
      },
    ];
  };
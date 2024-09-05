const initialSurveyValue = {
  name: "",
  gender: "",
  birth: "",
  oldDog: false,
  dogSize: "",
  dogType: "",
  weight: "",
  neutralization: null,
  activityLevel: "NORMAL",
  walkingCountPerWeek: "",
  walkingTimePerOneTime: "",
  dogStatus: "",
  snackCountLevel: "",
  inedibleFood: "NONE",
  inedibleFoodEtc: "",
  recommendRecipeId: null,
  caution: "NONE",
} as const;

const BASIC_INFO = {
  name: {
    id: "name",
    name: "name",
    placeholder: "이름을 입력해주세요",
    title: "반려견 이름",
  },
  gender: {
    title: "반려견 성별",
    name: "gender",
    options: [
      { id: "gender-MALE", value: "MALE", label: "수컷" },
      { id: "gender-FEMALE", value: "FEMALE", label: "암컷" },
    ],
  },
  birth: {
    title: "반려견 출생년월",
  },
  oldDog: {
    name: "oldDog",
    options: {
      id: "oldDog",
      label: "노령견입니다.",
    },
  },
  dogSize: {
    title: "반려견 크기",
    name: "dogSize",
    options: [
      { id: "dogSize-SMALL", value: "SMALL", label: "소형견" },
      { id: "dogSize-MIDDLE", value: "MIDDLE", label: "중형견" },
      { id: "dogSize-LARGE", value: "LARGE", label: "대형견" },
    ],
  },
  dogType: {
    title: "견종선택",
    name: "dogType",
    placeholder: "견종을 입력하세요",
    options: [
      "품종 모름",
      "믹스",
      "골든 리트리버",
      "골든두들",
      "그레이 하운드",
      "그레이트 데인",
      "그레이트 피레니즈",
      "그린란드견",
      "기슈견",
      "꼬똥 드 툴레아",
      "나폴리탄 마스티프",
      "뉴기니고산개",
      "뉴펀들랜드",
      "닥스훈트",
      "도고 아르헨티노",
      "도베르만 핀셔",
      "라사압소",
      "라페이로 도 알렌테조",
      "래브라도 리트리버",
      "레온베르거",
      "로트와일러",
      "마스티프",
      "말티즈",
      "미니어처 슈나우저",
      "미니어처 핀셔",
      "바셋 하운드",
      "베들링턴 테리어",
      "벨지언 쉽독",
      "보더 콜리",
      "보르도 마스티프",
      "보르조이",
      "보비에 드 플랜더스",
      "보스턴 테리어",
      "복서",
      "불도그",
      "불리 쿠타",
      "브리어드",
      "블러드 하운드",
      "비글",
      "비숑 프리제",
      "빠삐용",
      "사모예드",
      "사플라니낙",
      "삽살개",
      "샤페이",
      "세인트 버나드",
      "솔로이츠 쿠인틀레",
      "스코티쉬 테리어",
      "스키퍼키",
      "스피츠",
      "시코쿠견",
      "실키 테리어",
      "아메리칸 불리",
      "아메리칸 스태퍼드셔 테리어",
      "아이디",
      "아키타견",
      "아펜핀셔",
      "아프간 하운드",
      "알래스칸 클리카이",
      "에스트렐라 마운틴 독",
      "오브차카",
      "요크셔 테리어",
      "웨스트 하이랜드 화이트테리어",
      "재패니즈 스피츠",
      "재패니즈 친",
      "잭 러셀 테리어",
      "저먼 셰퍼드",
      "제주개",
      "진돗개",
      "차우차우",
      "치와와",
      "카네 코르소",
      "카발리에 킹 찰스 스파니엘",
      "코리안 마스티프",
      "코몬도르",
      "코커 스파니엘",
      "콜리",
      "고든 세터",
      "그레이트 스위스 마운틴 도그",
      "글렌 오브 이말 테리어",
      "노르웨지안 부훈트",
      "노르웨이 엘크 하운드",
      "노리치 테리어",
      "노바 스코셔 덕 톨링 레트리버",
      "노퍽 테리어",
      "댄디 딘몬트 테리어",
      "도고 까나리오",
      "도그 드 보르도",
      "도사견",
      "동경이",
      "라포니안 허더",
      "레이크랜드 테리어",
      "로디지아 리지백",
      "로첸",
      "미니어처 불 테리어",
      "바센지",
      "버니즈 마운틴 도그",
      "벨기에 말리노이즈",
      "벨기에 테뷰런",
      "벨지안 그리펀",
      "보더 테리어",
      "보스롱",
      "볼로네즈",
      "불 마스티프",
      "불 테리어",
      "브뤼셀 그리펀",
      "브리타니",
      "블랙 러시안 테리어",
      "블랙 앤드 탄 쿤하운드",
      "비어디드 콜리",
      "비즐라",
      "살루키",
      "서식스 스패니얼",
      "셔틀랜드 쉽독",
      "소프트 코티드 휘튼 테리어",
      "스무스 폭스 테리어",
      "스웨디쉬 발훈트",
      "스카이 테리어",
      "스코티시 디어하운드",
      "스태퍼드셔 불 테리어",
      "스탠더드 슈나우저",
      "스패니쉬 그레이 하운드",
      "스패니쉬 마스티프",
      "스피노네 이탈리아노",
      "시바 이누",
      "실리엄 테리어",
      "아메리칸 불도그",
      "아메리칸 아키다",
      "아메리칸 에스키모 도그",
      "아메리칸 워터 스패니얼",
      "아메리칸 코커 스패니얼",
      "아메리칸 폭스하운드",
      "아이리시 소프트코티드 휘튼 테리어",
      "아이리시 레드 앤드 화이트 세터",
      "아이리시 세터",
      "아이리시 울프 하운드",
      "아이리시 워터 스패니얼",
      "아이리시 테리어",
      "알래스칸 맬러뮤트",
      "에어데일 테리어",
      "오스트레일리안 실키 테리어",
      "오스트레일리안 켈피",
      "오스트레일리안 셰퍼드",
      "오스트레일리안 캐틀 도그",
      "오스트레일리안 테리어",
      "오터 하운드",
      "올드 잉글리시 쉽독",
      "와이머라너",
      "와이어 폭스 테리어",
      "와이어헤어드 포인팅 그리펀",
      "웰시 스프링어 스패니얼",
      "웰시 테리어",
      "이비전 하운드",
      "이탤리언 그레이하운드",
      "잉글리시 세터",
      "잉글리시 스프링어 스패니얼",
      "잉글리시 코커 스패니얼",
      "잉글리시 토이 스패니얼",
      "잉글리시 폭스하운드",
      "자이언트 슈나우저",
      "저먼 쇼트헤어드 포인터",
      "저먼 와이어헤어드 포인터",
      "저먼 핀셔",
      "저먼 헌팅 테리어",
      "차이니즈 샤페이",
      "차이니즈 크레스티드",
      "체서피크 베이 레트리버",
      "카디건 웰시 코기",
      "컬리코티드 레트리버",
      "케리 블루 테리어",
      "케언 테리어",
      "케이넌 도그",
      "케이스혼트",
      "쿠바스",
      "쿠이커혼제",
      "클럼버 스패니얼",
      "토이 폭스 테리어",
      "티베탄 마스티프",
      "티베탄 스패니얼",
      "티베탄 테리어",
      "파라오 하운드",
      "파슨 러셀 테리어",
      "패터데일 테리어",
      "퍼그",
      "페키니즈",
      "펨브록 웰시 코기",
      "포르투기즈 워터 도그",
      "포메라니안",
      "포인터",
      "폭스 테리어",
      "폴리시 롤런드 시프도그",
      "폼피츠",
      "푸미",
      "풀리",
      "풍산개",
      "프렌치 불도그",
      "프티 바세 그리퐁 방댕",
      "플랫코티드 레트리버",
      "플롯 하운드",
      "피니시 스피츠",
      "피레니안 마스티프",
      "피레니안 쉽독",
      "피레니안 셰퍼드",
      "필드 스패니얼",
      "필라 브라질레이로",
      "핏 불 테리어",
      "해리어",
      "하바니즈",
      "홋카이도 이누",
      "휘핏",
      "달마시안",
      "시베리안 허스키",
      "시추",
      "말티푸",
      "맨체스터 테리어(스탠다드)",
      "맨체스터 테리어(토이)",
      "푸들(미니어처)",
      "푸들(스탠다드)",
      "푸들(토이)",
      "아나톨리아 셰퍼드(캉갈)"
    ],
  },
  weight: {
    id: "weight",
    title: "반려견 몸무게",
    name: "weight",
    unit: "kg",
    placeholder: "00.0",
  },
  neutralization: {
    title: "중성화 여부",
    name: "neutralization",
    options: [
      { id: "neutralization했습니다", value: true, label: "했습니다" },
      { id: "neutralization안했습니다", value: false, label: "안했습니다" },
    ],
  },
} as const;

const ACTIVITY_INFO = {
  activityLevel: {
    title: "반려견 활동 수준",
    name: "activityLevel",
    options: [
      {
        id: "activityLevel-VERY_LITTLE",
        value: "VERY_LITTLE",
        label: "매우 적어요",
      },
      { id: "activityLevel-LITTLE", value: "LITTLE", label: "" },
      { id: "activityLevel-NORMAL", value: "NORMAL", label: "보통" },
      { id: "activityLevel-MUCH", value: "MUCH", label: "" },
      {
        id: "activityLevel-VERY_MUCH",
        value: "VERY_MUCH",
        label: "매우 많아요",
      },
    ],
  },
  walkingCountPerWeek: {
    title: "일주일 산책 횟수",
    id: "walkingCountPerWeek",
    name: "walkingCountPerWeek",
    frontWord: "평균",
    unit: "회",
    placeholder: "n",
    options: Array.from({ length: 7 }, (_, i) => (i + 1).toString()),
  },
  walkingTimePerOneTime: {
    title: "일주일 산책 횟수",
    id: "walkingTimePerOneTime",
    name: "walkingTimePerOneTime",
    frontWord: "1회 당",
    unit: "시간",
    placeholder: "n",
    options: Array.from({ length: 24 }, (_, i) => (0.5 + i * 0.5).toString()),
  },
  dogStatus: {
    title: "현재 상태는",
    name: "dogStatus",
    options: [
      { id: "dogStatus-HEALTHY", value: "HEALTHY", label: "건강해요" },
      { id: "dogStatus-NEED_DIET", value: "NEED_DIET", label: "다이어트 필요" },
      { id: "dogStatus-OBESITY", value: "OBESITY", label: "심각한 비만" },
      { id: "dogStatus-PREGNANT", value: "PREGNANT", label: "임신한 상태" },
      { id: "dogStatus-LACTATING", value: "LACTATING", label: "수유 중" },
    ],
  },
} as const;

const ADDITIONAL_INFO = {
  snackCountLevel: {
    title: "간식 급여 횟수는",
    name: "snackCountLevel",
    options: [
      {
        id: "snackCountLevel-LITTLE",
        value: "LITTLE",
        label: "적어요",
        subText: ["식사에", "상관없는 양"],
      },
      {
        id: "snackCountLevel-NORMAL",
        value: "NORMAL",
        label: "적당해요",
        subText: ["식사에 어느정도", "상관있는 양"],
      },
      {
        id: "snackCountLevel-MUCH",
        value: "MUCH",
        label: "많아요",
        subText: ["식사에 상당한", "영향이 있는 양"],
      },
    ],
  },
  inedibleFood: {
    title: "반려견은 못먹는 음식이",
    name: "inedibleFood",
    options: [
      { id: "inedibleFood-", value: "", label: "있어요" },
      { id: "inedibleFood-NONE", value: "NONE", label: "없어요" },
      { id: "inedibleFood-닭", value: "닭", label: "닭" },
      { id: "inedibleFood-칠면조", value: "칠면조", label: "칠면조" },
      { id: "inedibleFood-소", value: "소", label: "소" },
      { id: "inedibleFood-오리", value: "오리", label: "오리" },
      { id: "inedibleFood-양", value: "양", label: "양" },
      { id: "inedibleFood-ETC", value: "ETC", label: "기타" },
    ],
  },
  recommendRecipeId: {
    title: "특별히 챙겨주고 싶은 부분은",
    name: "recommendRecipeId",
    options: [
      {
        id: "recommendRecipeId-5",
        value: "5",
        label: "소화 부담이 적어 생식에 빠른 적응",
      },
      {
        id: "recommendRecipeId-6",
        value: "6",
        label: "튼튼한 성장을 위한 영양 보충",
      },
      {
        id: "recommendRecipeId-7",
        value: "7",
        label: "축 처진 반려견을 위한 에너지 보충",
      },
      {
        id: "recommendRecipeId-8",
        value: "8",
        label: "빛나는 피부와 모질 & 체중관리",
      },
      { id: "recommendRecipeId-9", value: "9", label: "첫 생식에 빠른 적응" },
      { id: "recommendRecipeId-10", value: "10", label: "성장기 활력을 위한" },
      {
        id: "recommendRecipeId-11",
        value: "11",
        label: "활동량이 많은 아이를 위한",
      },
      { id: "recommendRecipeId-12", value: "12", label: "면역력 향상을 위한" },
    ],
  },
  caution: {
    title: "기타 특이사항(질병 등)이",
    name: "caution",
    options: [
      { id: "caution-", value: "", label: "있어요" },
      { id: "caution-NONE", value: "NONE", label: "없어요" },
    ],
  },
} as const;

export { initialSurveyValue, BASIC_INFO, ACTIVITY_INFO, ADDITIONAL_INFO };
// 퀴즈 질문 데이터
export const questions = [
  {
    id: 1,
    question: "시험기간인 당신... 어디서 공부할 것인가",
    options: [
      { text: "분좋카~", type: "white" },
      { text: "Cube is my space~", type: "nude" },
      { text: "학술정보관 2층 4층 노상일은 우리 집", type: "original" },
      { text: "아고라로 고고", type: "almond" }
    ]
  },
  {
    id: 2,
    question: "다음 날 9시 수업... 당신의 수업 참여 스타일은?",
    options: [
      { text: "30분 일찍 와서 명당자리 착석!", type: "white" },
      { text: "어쩔 수 없이 지각 ㅠㅠ", type: "nude" },
      { text: "무조건 9시까지 정각 출석", type: "original" },
      { text: "What is 출석? give me 출코", type: "almond" }
    ]
  },
  {
    id: 3,
    question: "이성을 보는 데 중요하게 여기는 것은?",
    options: [
      { text: "설레는 키차이", type: "white" },
      { text: "성격이 잘 맞아야지!", type: "nude" },
      { text: "얼굴이 최고야!!", type: "original" },
      { text: "Money is the best", type: "almond" }
    ]
  },
  {
    id: 4,
    question: "술자리에서의 당신의 유형",
    options: [
      { text: "술은 좀 ;; (몰래 밑잔 깔기)", type: "white" },
      { text: "멋쟁이 토마토 (토하고 마시고 토하고 마시고)", type: "nude" },
      { text: "적당히 마시다가 집 가야징 ㅎㅎ", type: "original" },
      { text: "무조건 마시고 죽자!!", type: "almond" }
    ]
  },
  {
    id: 5,
    question: "당신이 제일 좋아하는 술은?",
    options: [
      { text: "분위기있는 양주 (하이볼)", type: "white" },
      { text: "황금비율 쏘맥", type: "nude" },
      { text: "Beer", type: "original" },
      { text: "술은 무조건 참이슬 처음처럼 새로 청하지!!", type: "almond" }
    ]
  },
  {
    id: 6,
    question: "올해 학생회가 준비한 행사 중 가장 좋았던 행사는?",
    options: [
      { text: "인공chill능과 chill해지기 (3월 친목행사)", type: "white" },
      { text: "모여봐요 AI의 숲 (6월 행사)", type: "nude" },
      { text: "AI:MTHON (7~8월 행사)", type: "original" },
      { text: "PUMPKIM FESTA (10월 행사)", type: "almond" }
    ]
  },
  {
    id: 7,
    question: "아래 4명 중 한 사람을 선택해야 한다면?",
    options: [
      { text: "같이 한국시리즈 보자는 서현우", type: "white" },
      { text: "스타벅스 사주겠다고 하는 최윤형", type: "nude" },
      { text: "레이저 아레나 무료입장 시켜주겠다는 임수원", type: "original" },
      { text: "옆에서 과제 대신 해주겠다는 이나영", type: "almond" }
    ]
  },
  {
    id: 8,
    question: "X와 이별하고 환승연애에 출연한 당신! X와 이별한 이유는?",
    options: [
      { text: "연락 빈도가 맞지 않아서 (답장이 너무 느리거나 너무 빠름)", type: "white" },
      { text: "상대방이 공감 부재 대문자 T or 톡 치면 우는 슈퍼 F", type: "nude" },
      { text: "너무 많은 여사친/남사친 (이성 문제)", type: "original" },
      { text: "둘 중 한명의 마음이 식음", type: "almond" }
    ]
  },
  {
    id: 9,
    question: "당신이 원하는 연애는?",
    options: [
      { text: "매일 봐도 질리지 않는 설레는 연애", type: "white" },
      { text: "친구처럼 편한 연애", type: "nude" },
      { text: "서로 존중하고 신뢰하는 성숙한 연애", type: "original" },
      { text: "불도저같은 불 같은 연애", type: "almond" }
    ]
  },
  {
    id: 10,
    question: "당신이 지금 받고 싶은 빼빼로는~?",
    options: [
      { text: "색다른 화이트 초코와 과자의 조합 화이트 뺴뺴로", type: "white" },
      { text: "겉바속달 초코필드(누드) 빼빼로", type: "nude" },
      { text: "Classic is the best 오리지널 빼빼로", type: "original" },
      { text: "아삭아삭 아몬드의 맛 아몬드 빼빼로", type: "almond" }
    ]
  }
];

const basePath = (import.meta.env.BASE_URL ?? '/');
const normalizedBasePath = basePath.endsWith('/') ? basePath : `${basePath}/`;
const withBasePath = (relativePath) => `${normalizedBasePath}${relativePath.replace(/^\//, '')}`;

// 결과 타입 데이터
export const results = [
  {
    type: 'white',
    title: '화이트 쿠키 빼빼로',
    description: '깔끔하고 순수한 당신! 심플하면서도 세련된 감각을 가지고 있어요. 밝고 긍정적인 에너지로 주변을 환하게 만드는 매력이 있습니다.',
    traits: [
      '✨ 깔끔하고 정돈된 스타일 선호',
      '🤍 순수하고 밝은 이미지',
      '💫 심플하지만 세련된 감각',
      '🌟 긍정적이고 밝은 에너지'
    ],
    image: withBasePath('images/white.png'),
    emoji: '🤍'
  },
  {
    type: 'nude',
    title: '초코필드 빼빼로',
    description: '자연스럽고 편안한 당신! 따뜻하고 부드러운 매력으로 사람들에게 편안함을 주는 스타일이에요. 은은한 매력이 돋보입니다.',
    traits: [
      '🌾 자연스럽고 편안한 분위기',
      '☕ 따뜻하고 부드러운 성격',
      '🧸 포근하고 아늑한 매력',
      '🤎 은은하면서도 깊은 인상'
    ],
    image: withBasePath('images/nude.png'),
    emoji: '🤎'
  },
  {
    type: 'original',
    title: '오리지널 빼빼로',
    description: '정통적이고 클래식한 당신! 변하지 않는 가치와 전통을 중요시하며, 믿음직하고 안정적인 매력이 있어요. 언제나 든든한 존재입니다.',
    traits: [
      '🍫 클래식하고 정통적인 스타일',
      '⭐ 변하지 않는 가치 추구',
      '🎯 믿음직하고 안정적',
      '📚 깊이 있고 진중한 매력'
    ],
    image: withBasePath('images/original.png'),
    emoji: '🍫'
  },
  {
    type: 'almond',
    title: '아몬드 빼빼로',
    description: '독특하고 개성 넘치는 당신! 특별함을 추구하며 자신만의 스타일을 가지고 있어요. 남들과 다른 유니크한 매력으로 눈길을 사로잡습니다.',
    traits: [
      '🌰 독특하고 개성 있는 스타일',
      '✨ 특별함을 추구하는 성향',
      '🎨 창의적이고 유니크한 감각',
      '💎 남들과 다른 매력 포인트'
    ],
    image: withBasePath('images/armond.png'),
    emoji: '🌰'
  }
];

// 점수에 따른 결과 계산 함수
export const calculateResult = (answers) => {
  // 각 타입별 점수 초기화
  const scores = {
    white: 0,
    nude: 0,
    original: 0,
    almond: 0
  };

  // 각 답변에 대해 해당 타입 점수 +1
  answers.forEach((answer, index) => {
    const question = questions[index];
    const selectedOption = question.options[answer];
    scores[selectedOption.type]++;
  });

  // 가장 높은 점수를 받은 타입 찾기
  let maxScore = 0;
  let resultType = 'white'; // 기본값

  for (const [type, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      resultType = type;
    }
  }

  // 해당 타입의 결과 반환
  return results.find(r => r.type === resultType) || results[0];
};

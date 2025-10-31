// 퀴즈 질문 데이터
export const questions = [
  {
    id: 1,
    question: "친구와의 약속 장소를 정할 때 나는?",
    options: [
      { text: "깔끔하고 모던한 카페", type: "white" },
      { text: "아늑하고 따뜻한 분위기의 카페", type: "nude" },
      { text: "전통적이고 정통적인 장소", type: "original" },
      { text: "독특하고 개성 있는 곳", type: "almond" }
    ]
  },
  {
    id: 2,
    question: "옷을 고를 때 중요하게 생각하는 것은?",
    options: [
      { text: "심플하고 깔끔한 디자인", type: "white" },
      { text: "편안하고 부드러운 느낌", type: "nude" },
      { text: "클래식하고 정석적인 스타일", type: "original" },
      { text: "유니크하고 특별한 디자인", type: "almond" }
    ]
  },
  {
    id: 3,
    question: "SNS 프로필 사진을 고를 때 나는?",
    options: [
      { text: "밝고 깨끗한 느낌의 사진", type: "white" },
      { text: "자연스럽고 편안한 사진", type: "nude" },
      { text: "정면을 보는 정석 사진", type: "original" },
      { text: "개성 있고 특이한 각도의 사진", type: "almond" }
    ]
  },
  {
    id: 4,
    question: "주말에 하고 싶은 활동은?",
    options: [
      { text: "깔끔한 공간에서 정리정돈", type: "white" },
      { text: "집에서 편하게 휴식", type: "nude" },
      { text: "평소 하던 취미 활동", type: "original" },
      { text: "새로운 것 도전하기", type: "almond" }
    ]
  }
];

// 결과 타입 데이터
export const results = [
  {
    type: 'white',
    title: '화이트 초코',
    description: '깔끔하고 순수한 당신! 심플하면서도 세련된 감각을 가지고 있어요. 밝고 긍정적인 에너지로 주변을 환하게 만드는 매력이 있습니다.',
    traits: [
      '✨ 깔끔하고 정돈된 스타일 선호',
      '🤍 순수하고 밝은 이미지',
      '💫 심플하지만 세련된 감각',
      '🌟 긍정적이고 밝은 에너지'
    ],
    image: '🤍'
  },
  {
    type: 'nude',
    title: '누드 초코',
    description: '자연스럽고 편안한 당신! 따뜻하고 부드러운 매력으로 사람들에게 편안함을 주는 스타일이에요. 은은한 매력이 돋보입니다.',
    traits: [
      '🌾 자연스럽고 편안한 분위기',
      '☕ 따뜻하고 부드러운 성격',
      '🧸 포근하고 아늑한 매력',
      '🤎 은은하면서도 깊은 인상'
    ],
    image: '🤎'
  },
  {
    type: 'original',
    title: '오리지널 초코',
    description: '정통적이고 클래식한 당신! 변하지 않는 가치와 전통을 중요시하며, 믿음직하고 안정적인 매력이 있어요. 언제나 든든한 존재입니다.',
    traits: [
      '🍫 클래식하고 정통적인 스타일',
      '⭐ 변하지 않는 가치 추구',
      '🎯 믿음직하고 안정적',
      '📚 깊이 있고 진중한 매력'
    ],
    image: '🍫'
  },
  {
    type: 'almond',
    title: '아몬드 초코',
    description: '독특하고 개성 넘치는 당신! 특별함을 추구하며 자신만의 스타일을 가지고 있어요. 남들과 다른 유니크한 매력으로 눈길을 사로잡습니다.',
    traits: [
      '🌰 독특하고 개성 있는 스타일',
      '✨ 특별함을 추구하는 성향',
      '🎨 창의적이고 유니크한 감각',
      '💎 남들과 다른 매력 포인트'
    ],
    image: '🌰'
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

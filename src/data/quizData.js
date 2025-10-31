// 퀴즈 질문 데이터
export const questions = [
  {
    id: 1,
    question: "친구가 갑자기 고민 상담을 요청했을 때 나는?",
    options: [
      { text: "일단 공감하며 이야기를 들어준다", score: { agen: 10 } },
      { text: "구체적인 해결책을 제시한다", score: { teto: 10 } }
    ]
  },
  {
    id: 2,
    question: "약속 시간을 정할 때 나는?",
    options: [
      { text: "대충 '저녁때' 이런 식으로 정한다", score: { agen: 10 } },
      { text: "정확히 '오후 6시 30분' 이렇게 정한다", score: { teto: 10 } }
    ]
  },
  {
    id: 3,
    question: "여행을 갈 때 나는?",
    options: [
      { text: "계획 없이 즉흥적으로 다닌다", score: { agen: 10 } },
      { text: "일정표를 만들어서 계획적으로 다닌다", score: { teto: 10 } }
    ]
  },
  {
    id: 4,
    question: "방을 정리할 때 나는?",
    options: [
      { text: "대충 보이는 곳만 치운다", score: { agen: 10 } },
      { text: "구석구석 철저하게 정리한다", score: { teto: 10 } }
    ]
  },
  {
    id: 5,
    question: "프로젝트를 시작할 때 나는?",
    options: [
      { text: "일단 시작하고 보는 스타일", score: { agen: 10 } },
      { text: "계획을 세우고 시작하는 스타일", score: { teto: 10 } }
    ]
  },
  {
    id: 6,
    question: "메시지에 답장할 때 나는?",
    options: [
      { text: "생각날 때 답장한다", score: { agen: 10 } },
      { text: "바로바로 답장한다", score: { teto: 10 } }
    ]
  },
  {
    id: 7,
    question: "쇼핑을 할 때 나는?",
    options: [
      { text: "구경하다가 맘에 드는 걸 산다", score: { agen: 10 } },
      { text: "필요한 것 리스트를 만들어서 산다", score: { teto: 10 } }
    ]
  },
  {
    id: 8,
    question: "회의 시간에 나는?",
    options: [
      { text: "자유롭게 의견을 나누는 게 좋다", score: { agen: 10 } },
      { text: "안건에 따라 체계적으로 진행하는 게 좋다", score: { teto: 10 } }
    ]
  },
  {
    id: 9,
    question: "책상 위 상태는?",
    options: [
      { text: "필요한 건 다 꺼내놓는 스타일", score: { agen: 10 } },
      { text: "깔끔하게 정돈하는 스타일", score: { teto: 10 } }
    ]
  },
  {
    id: 10,
    question: "식당을 선택할 때 나는?",
    options: [
      { text: "그때그때 기분에 따라 정한다", score: { agen: 10 } },
      { text: "미리 검색해서 정한다", score: { teto: 10 } }
    ]
  },
  {
    id: 11,
    question: "업무를 처리할 때 나는?",
    options: [
      { text: "여러 일을 동시에 진행한다", score: { agen: 10 } },
      { text: "하나씩 순서대로 처리한다", score: { teto: 10 } }
    ]
  },
  {
    id: 12,
    question: "새로운 기기를 샀을 때 나는?",
    options: [
      { text: "일단 켜보고 만지면서 배운다", score: { agen: 10 } },
      { text: "설명서를 읽어본다", score: { teto: 10 } }
    ]
  }
];

// 결과 타입 데이터
export const results = [
  {
    type: 'extreme-agen',
    title: '완벽한 에겐남',
    score: { min: 0, max: 30 },
    description: '당신은 완벽한 에겐남입니다! 자유로운 영혼으로 계획보다는 즉흥을 선호하고, 융통성 있게 상황에 대처하는 스타일이에요. 틀에 박힌 것보다 창의적이고 유연한 사고를 가지고 있습니다.',
    traits: [
      '✨ 즉흥적이고 자유로운 성향',
      '🎨 창의적이고 유연한 사고',
      '🌊 상황에 따라 유연하게 대처',
      '💭 틀에 박히지 않은 행동'
    ],
    image: '🎭'
  },
  {
    type: 'mild-agen',
    title: '약간 에겐남',
    score: { min: 31, max: 50 },
    description: '에겐남 성향이 강하지만 때로는 계획적인 모습도 보이는 당신! 상황에 따라 유연하게 대처하면서도 필요할 때는 체계적으로 행동할 수 있어요. 균형잡힌 삶을 살아가는 스타일입니다.',
    traits: [
      '⚖️ 균형잡힌 사고방식',
      '🎯 상황에 따른 유연한 대처',
      '🌟 자유로우면서도 책임감 있음',
      '🎪 즉흥성과 계획성의 조화'
    ],
    image: '🎨'
  },
  {
    type: 'neutral',
    title: '중립적인 성향',
    score: { min: 51, max: 69 },
    description: '에겐남과 테토남의 중간! 상황에 따라 유연하게 대처하기도 하고, 계획적으로 움직이기도 하는 균형잡힌 성향을 가지고 있어요. TPO에 맞춰 적절하게 행동할 수 있는 능력이 뛰어납니다.',
    traits: [
      '🎭 상황 판단 능력이 뛰어남',
      '🔄 유연성과 체계성의 완벽한 균형',
      '🎯 필요에 따라 스타일 전환 가능',
      '🌈 다양한 상황에 적응력이 좋음'
    ],
    image: '⚖️'
  },
  {
    type: 'mild-teto',
    title: '약간 테토남',
    score: { min: 70, max: 90 },
    description: '테토남 성향이 강하지만 가끔은 즉흥적인 모습도 보이는 당신! 기본적으로는 체계적이고 계획적이지만, 상황에 따라 융통성을 발휘할 수도 있어요. 안정감 있으면서도 재미있는 스타일입니다.',
    traits: [
      '📋 체계적이고 계획적',
      '✨ 때로는 융통성도 발휘',
      '🎯 목표 지향적이면서 유연함',
      '⏰ 시간 관리에 능함'
    ],
    image: '📊'
  },
  {
    type: 'extreme-teto',
    title: '완벽한 테토남',
    score: { min: 91, max: 120 },
    description: '당신은 완벽한 테토남입니다! 철저한 계획과 체계를 중요시하며, 모든 일을 순서대로 정리하는 것을 선호해요. 책임감이 강하고 신뢰할 수 있는 사람으로, 주변 사람들에게 든든한 존재입니다.',
    traits: [
      '📌 완벽주의적 성향',
      '📅 철저한 계획과 일정 관리',
      '✅ 체계적이고 조직적',
      '🎯 높은 책임감과 신뢰성'
    ],
    image: '📐'
  }
];

// 점수에 따른 결과 계산 함수
export const calculateResult = (answers) => {
  let totalScore = 0;

  answers.forEach((answer, index) => {
    const question = questions[index];
    const selectedOption = question.options[answer];
    if (selectedOption.score.teto) {
      totalScore += selectedOption.score.teto;
    }
  });

  // 점수에 맞는 결과 찾기
  const result = results.find(r => totalScore >= r.score.min && totalScore <= r.score.max);
  return result || results[2]; // 기본값으로 중립 반환
};

# 성향 테스트 웹사이트 - 에겐남/테토남

한양대학교 학생회 행사용으로 제작된 성향 테스트 웹사이트입니다. 사용자의 성향을 12가지 질문을 통해 분석하고 결과를 제공합니다.

## 🎓 한양대학교 브랜딩

- **HANYANG BLUE** (#0e4a84) 교색 적용
- 한양대학교 로고 및 학생회 브랜딩
- 하냥이 마스코트 캐릭터 포함

## 📋 기능

- ✨ 12개의 질문으로 구성된 성향 테스트
- 🎨 한양대 블루 & 골드 테마 UI
- 📊 진행 상황 표시
- 🔄 로딩 애니메이션
- 🎯 5가지 결과 타입
- 📸 소셜 공유 기능 (인스타그램 스토리, 링크 복사)
- 📱 반응형 디자인 (모바일 최적화)
- 🦁 하냥이 마스코트 애니메이션

## 🚀 시작하기

### 필요 사항

- Node.js (v16 이상)
- npm 또는 yarn

### 설치 및 실행

1. 의존성 패키지 설치:
```bash
cd personality-test
npm install
```

2. **(중요) 이미지 파일 추가**:
   - `public/images/` 폴더에 다음 이미지를 추가하세요:
     - `hanyang-logo.png` - 한양대학교 로고 (권장: 200x200px)
     - `hanyangi.png` - 하냥이 마스코트 (권장: 300x300px)
   - 자세한 내용은 아래 **이미지 추가 가이드** 참조
   - 이미지가 없어도 실행 가능 (이모지로 대체 표시)

3. 개발 서버 실행:
```bash
npm run dev
```

4. 브라우저에서 `http://localhost:5173` 접속

### 빌드

프로덕션 빌드를 생성하려면:
```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

## 🖼️ 이미지 추가 가이드

### 필요한 이미지

웹사이트에 한양대학교 브랜딩을 완성하려면 다음 이미지가 필요합니다:

#### 1. 한양대학교 로고 (`hanyang-logo.png`)
- **위치**: `public/images/hanyang-logo.png`
- **권장 크기**: 200px × 200px 이상
- **형식**: PNG (투명 배경 권장)
- **표시 위치**: 시작 페이지 상단
- **다운로드**:
  - [한양대학교 공식 홈페이지](https://www.hanyang.ac.kr/)
  - 학생회 담당자에게 문의
  - [한양대 로고 가이드라인](https://www.hanyang.ac.kr/web/www/logo)

#### 2. 하냥이 마스코트 (`hanyangi.png`)
- **위치**: `public/images/hanyangi.png`
- **권장 크기**: 300px × 300px 이상
- **형식**: PNG (투명 배경 권장)
- **표시 위치**: 결과 페이지 우측 하단 (떠다니는 애니메이션)
- **다운로드**: 한양대학교 학생회 또는 공식 캐릭터 담당부서

### 이미지 추가 방법

1. 위의 이미지 파일을 준비합니다
2. `public/images/` 폴더에 파일을 복사합니다
3. 파일명이 정확한지 확인합니다:
   - `hanyang-logo.png`
   - `hanyangi.png`
4. 개발 서버를 재시작합니다 (`npm run dev`)

### 이미지가 없는 경우

이미지 파일이 없어도 웹사이트는 정상적으로 작동합니다:
- 한양대 로고 → 🎓 (학사모 이모지)
- 하냥이 → 🦁 (사자 이모지)

이미지를 추가하면 자동으로 이모지 대신 실제 이미지가 표시됩니다.

### 저작권 주의사항

⚠️ **중요**: 한양대학교 로고와 마스코트는 한양대학교의 지적 재산입니다.
- 반드시 공식 출처에서 다운로드하여 사용하세요
- 학교 행사 및 공식 용도로만 사용하세요
- 상업적 이용 시 별도 허가가 필요할 수 있습니다

## 🎨 커스터마이징 가이드

### 1. 질문 수정하기

`src/data/quizData.js` 파일에서 질문을 수정할 수 있습니다:

```javascript
export const questions = [
  {
    id: 1,
    question: "질문 내용",
    options: [
      { text: "선택지 1", score: { agen: 10 } },
      { text: "선택지 2", score: { teto: 10 } }
    ]
  },
  // 더 많은 질문 추가...
];
```

- `question`: 질문 내용
- `options`: 선택지 배열
- `score`: 각 선택지의 점수 (agen: 에겐남 점수, teto: 테토남 점수)

### 2. 결과 타입 수정하기

같은 파일에서 결과 타입도 수정할 수 있습니다:

```javascript
export const results = [
  {
    type: 'result-type',
    title: '결과 타이틀',
    score: { min: 0, max: 30 },
    description: '결과 설명...',
    traits: [
      '✨ 특징 1',
      '🎨 특징 2',
      // ...
    ],
    image: '🎭' // 이모지 또는 이미지 URL
  },
  // 더 많은 결과 타입...
];
```

### 3. 색상 테마 변경하기

`src/styles/index.css` 파일에서 CSS 변수를 수정하여 색상을 변경할 수 있습니다:

```css
:root {
  --hanyang-blue: #0e4a84;              /* 한양대 블루 (메인 색상) */
  --hanyang-blue-dark: #0a3661;         /* 어두운 블루 */
  --hanyang-blue-light: #1565a8;        /* 밝은 블루 */
  --accent-gold: #fbbf24;               /* 골드 악센트 색상 */
  --accent-gold-light: #fcd34d;         /* 밝은 골드 */
  --text-primary: #ffffff;              /* 주요 텍스트 색상 */
  --text-secondary: #e0e7ef;            /* 보조 텍스트 색상 */
}
```

**참고**: 한양대학교 공식 색상(HANYANG BLUE #0e4a84)이 기본으로 적용되어 있습니다.

### 4. 제목 및 설명 변경하기

- 페이지 제목: `index.html` 파일의 `<title>` 태그
- 시작 페이지: `src/pages/StartPage.jsx`
- 메타 태그: `index.html` 파일의 `<meta>` 태그들

### 5. 브랜딩 텍스트 변경하기

시작 페이지의 "한양대학교 학생회" 텍스트를 변경하려면:

`src/pages/StartPage.jsx` 파일에서:
```jsx
<div className="start-branding">한양대학교 학생회</div>
```

이 부분을 원하는 텍스트로 수정하세요.

## 📁 프로젝트 구조

```
personality-test/
├── src/
│   ├── components/         # 재사용 가능한 컴포넌트
│   ├── data/
│   │   └── quizData.js    # 질문 및 결과 데이터
│   ├── pages/
│   │   ├── StartPage.jsx  # 시작 페이지
│   │   ├── QuestionPage.jsx # 질문 페이지
│   │   ├── LoadingPage.jsx  # 로딩 페이지
│   │   └── ResultPage.jsx   # 결과 페이지
│   ├── styles/            # CSS 파일들
│   ├── App.jsx           # 메인 앱 컴포넌트
│   └── main.jsx          # 엔트리 포인트
├── public/               # 정적 파일
├── index.html           # HTML 템플릿
├── package.json         # 프로젝트 설정
└── vite.config.js       # Vite 설정
```

## 🎯 주요 특징

### 점수 계산 로직

- 각 질문의 선택지는 `agen` 또는 `teto` 점수를 가집니다
- 총 점수는 0-120점 범위입니다
- 점수 범위에 따라 5가지 결과 중 하나가 표시됩니다

### 반응형 디자인

- 모바일, 태블릿, 데스크톱 모두 지원
- 터치 인터페이스 최적화

### 애니메이션

- 페이지 전환 애니메이션
- 버튼 호버 효과
- 로딩 스피너 애니메이션

## 📦 배포

### Vercel

1. [Vercel](https://vercel.com) 계정 생성
2. 프로젝트를 GitHub에 푸시
3. Vercel에서 Import
4. 자동 배포 완료

### Netlify

1. [Netlify](https://netlify.com) 계정 생성
2. `npm run build` 실행
3. `dist` 폴더를 Netlify에 드래그 앤 드롭

### GitHub Pages

```bash
npm run build
# dist 폴더의 내용을 gh-pages 브랜치에 배포
```

## 💡 추가 개선 아이디어

- [ ] 결과 이미지 저장 기능
- [ ] 통계 데이터 수집 (응답 분포 등)
- [ ] 다국어 지원 (i18n)
- [ ] 더 많은 질문 타입 (슬라이더, 이미지 선택 등)
- [ ] 결과 비교 기능
- [ ] 카카오톡 공유 완전 구현

## 📝 라이선스

MIT License

## 🤝 기여

이슈나 PR은 언제든지 환영합니다!

---

Made with ❤️ using React + Vite

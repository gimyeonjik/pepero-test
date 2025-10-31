import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/ResultPage.css'

function ResultPage({ result, onReset }) {
  const navigate = useNavigate();
  const [hanyangiExists, setHanyangiExists] = useState(false);

  useEffect(() => {
    // 하냥이 이미지 존재 여부 확인
    const img = new Image();
    img.onload = () => setHanyangiExists(true);
    img.onerror = () => setHanyangiExists(false);
    img.src = '/images/hanyangi.png';
  }, []);

  const handleRestart = () => {
    onReset();
    navigate('/');
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `나는 ${result.title}! 나의 성향 테스트 결과를 확인해보세요!`;

    switch (platform) {
      case 'instagram':
        // 인스타그램 스토리 공유
        // 모바일에서는 앱으로 연결, 웹에서는 안내 메시지
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
          // 모바일: 인스타그램 앱 실행 (설치되어 있는 경우)
          window.location.href = 'instagram://story-camera';
          // 앱이 없는 경우를 대비한 안내
          setTimeout(() => {
            alert('결과 화면을 캡처하여 인스타그램 스토리에 공유해주세요!');
          }, 1000);
        } else {
          // PC: 캡처 안내
          alert('결과 화면을 캡처(스크린샷)하여 인스타그램 스토리에 공유해주세요!');
        }
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          alert('링크가 복사되었습니다!');
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="result-page">
      <div className="hanyangi-mascot">
        {hanyangiExists ? (
          <img src="/images/hanyangi.png" alt="하냥이" className="hanyangi-image" />
        ) : (
          <div className="hanyangi-emoji">🦁</div>
        )}
      </div>
      <div className="result-container">
        <div className="result-emoji">{result.image}</div>
        <h1 className="result-title">{result.title}</h1>
        <p className="result-description">{result.description}</p>

        <div className="traits-container">
          <h3>나의 특징</h3>
          <ul className="traits-list">
            {result.traits.map((trait, index) => (
              <li key={index}>{trait}</li>
            ))}
          </ul>
        </div>

        <div className="share-container">
          <h3>결과 공유하기</h3>
          <div className="share-buttons">
            <button className="share-button instagram" onClick={() => handleShare('instagram')}>
              📸 인스타그램 스토리
            </button>
            <button className="share-button copy" onClick={() => handleShare('copy')}>
              🔗 링크 복사
            </button>
          </div>
        </div>

        <button className="restart-button" onClick={handleRestart}>
          다시 테스트하기
        </button>
      </div>
    </div>
  )
}

export default ResultPage

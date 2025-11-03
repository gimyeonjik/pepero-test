import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/ResultPage.css'

const basePath = (import.meta.env.BASE_URL ?? '/');
const normalizedBasePath = basePath.endsWith('/') ? basePath : `${basePath}/`;
const withBasePath = (relativePath) => `${normalizedBasePath}${relativePath.replace(/^\//, '')}`;

function ResultPage({ result, onReset }) {
  const navigate = useNavigate();
  const [hanyangiExists, setHanyangiExists] = useState(false);
  const [isImageError, setIsImageError] = useState(false);

  useEffect(() => {
    // 사자 이미지 존재 여부 확인
    const img = new Image();
    img.onload = () => setHanyangiExists(true);
    img.onerror = () => setHanyangiExists(false);
    img.src = withBasePath('images/lion.png');
  }, []);

  useEffect(() => {
    setIsImageError(false);
  }, [result]);

  const handleRestart = () => {
    onReset();
    navigate('/');
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    const text = `나는 ${result.title}! 나의 성향 테스트 결과를 확인해보세요!`;

    navigator.clipboard.writeText(`${text}\n${url}`).then(() => {
      alert('링크가 복사되었습니다!');
    });
  };

  return (
    <div className="result-page">
      <div className="hanyangi-mascot">
        {hanyangiExists ? (
          <img src={withBasePath('images/lion.png')} alt="하냥이" className="hanyangi-image" />
        ) : (
          <div className="hanyangi-emoji">🦁</div>
        )}
      </div>
      <div className="result-container">
        <div className="result-visual">
          {!isImageError ? (
            <img
              src={result.image}
              alt={`${result.title} 이미지`}
              className="result-image"
              onError={() => setIsImageError(true)}
            />
          ) : (
            <div className="result-emoji-fallback" aria-hidden="true">
              {result.emoji}
            </div>
          )}
        </div>
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
            <button className="share-button copy" onClick={handleCopyLink}>
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

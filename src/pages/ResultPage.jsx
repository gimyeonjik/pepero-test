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

        <p className="instagram-notice">
          <strong>위 결과 화면을 캡쳐하여 인스타그램 스토리에 게시해 주세요!</strong>
        </p>

        <button className="restart-button" onClick={handleRestart}>
          다시 테스트하기
        </button>
      </div>
    </div>
  )
}

export default ResultPage

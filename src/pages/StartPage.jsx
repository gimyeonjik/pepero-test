import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/StartPage.css'

const basePath = (import.meta.env.BASE_URL ?? '/');
const normalizedBasePath = basePath.endsWith('/') ? basePath : `${basePath}/`;
const withBasePath = (relativePath) => `${normalizedBasePath}${relativePath.replace(/^\//, '')}`;

function StartPage() {
  const navigate = useNavigate();
  const [logoExists, setLogoExists] = useState(false);
  const [peperoExists, setPeperoExists] = useState(false);

  useEffect(() => {
    // 한양대 로고 이미지 존재 여부 확인
    const img = new Image();
    img.onload = () => setLogoExists(true);
    img.onerror = () => setLogoExists(false);
    img.src = withBasePath('images/lion.png');

    const peperoImg = new Image();
    peperoImg.onload = () => setPeperoExists(true);
    peperoImg.onerror = () => setPeperoExists(false);
    peperoImg.src = withBasePath('images/pepero.png');
  }, []);

  const handleStart = () => {
    navigate('/question');
  };

  return (
    <div className="start-page">
      <div className="start-container">
        <div className="hanyang-logo-container">
          {logoExists ? (
            <img src={withBasePath('images/lion.png')} alt="한양대학교 로고" className="hanyang-logo" />
          ) : (
            <div className="hanyang-logo-emoji">🎓</div>
          )}
        </div>
        <div className="start-branding">한양대학교 ERICA 인공지능학과 학생회 [ai:m]</div>
        <div className="start-emoji">
          {peperoExists ? (
            <img src={withBasePath('images/pepero.png')} alt="빼빼로 이미지" className="start-pepero" />
          ) : (
            <span role="img" aria-label="초콜릿">🍫</span>
          )}
        </div>
        <h1 className="start-title">나는 어떤 빼빼로일까?</h1>
        <p className="start-description">
          당신의 빼빼로 성향을 알아보는 10가지 질문
        </p>
        <button className="start-button" onClick={handleStart}>
          테스트 시작하기
          <span className="arrow">→</span>
        </button>
        <div className="start-info">
          <p>⏱️ 약 2분 소요</p>
        </div>
      </div>
    </div>
  )
}

export default StartPage

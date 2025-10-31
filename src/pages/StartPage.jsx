import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/StartPage.css'

function StartPage() {
  const navigate = useNavigate();
  const [logoExists, setLogoExists] = useState(false);

  useEffect(() => {
    // 한양대 로고 이미지 존재 여부 확인
    const img = new Image();
    img.onload = () => setLogoExists(true);
    img.onerror = () => setLogoExists(false);
    img.src = '/images/lion.png';
  }, []);

  const handleStart = () => {
    navigate('/question');
  };

  return (
    <div className="start-page">
      <div className="start-container">
        <div className="hanyang-logo-container">
          {logoExists ? (
            <img src="/images/lion.png" alt="한양대학교 로고" className="hanyang-logo" />
          ) : (
            <div className="hanyang-logo-emoji">🎓</div>
          )}
        </div>
        <div className="start-branding">한양대학교 ERICA 인공지능학과 학생회 [ai:m]</div>
        <div className="start-emoji">🤔</div>
        <h1 className="start-title">나는 에겐남일까<br />테토남일까?</h1>
        <p className="start-description">
          당신의 성향을 알아보는 12가지 질문
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

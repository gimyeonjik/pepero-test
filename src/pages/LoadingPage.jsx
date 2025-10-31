import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { calculateResult } from '../data/quizData'
import '../styles/LoadingPage.css'

function LoadingPage({ answers, onResult }) {
  const navigate = useNavigate();

  useEffect(() => {
    // 결과 계산
    const timer = setTimeout(() => {
      const result = calculateResult(answers);
      onResult(result);
      navigate('/result');
    }, 2000);

    return () => clearTimeout(timer);
  }, [answers, onResult, navigate]);

  return (
    <div className="loading-page">
      <div className="loading-container">
        <div className="spinner-container">
          <div className="spinner"></div>
          <div className="spinner-inner"></div>
        </div>
        <h2 className="loading-text">결과를 분석하고 있어요...</h2>
        <p className="loading-subtext">잠시만 기다려주세요</p>
      </div>
    </div>
  )
}

export default LoadingPage

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { questions } from '../data/quizData'
import '../styles/QuestionPage.css'

function QuestionPage({ answers, onAnswerSelect, onReset }) {
  const navigate = useNavigate();
  const currentQuestionIndex = answers.length;
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  useEffect(() => {
    // 모든 질문에 답했으면 로딩 페이지로 이동
    if (currentQuestionIndex >= questions.length) {
      navigate('/loading');
    }
  }, [currentQuestionIndex, navigate]);

  const handleAnswer = (optionIndex) => {
    onAnswerSelect(optionIndex);
  };

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className="question-page">
      <div className="question-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="question-counter">
          {currentQuestionIndex + 1} / {questions.length}
        </div>

        <h2 className="question-text">{currentQuestion.question}</h2>

        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className="option-button"
              onClick={() => handleAnswer(index)}
            >
              {option.text}
            </button>
          ))}
        </div>

        {currentQuestionIndex > 0 && (
          <button className="reset-button" onClick={() => {
            onReset();
            navigate('/');
          }}>
            처음으로 돌아가기
          </button>
        )}
      </div>
    </div>
  )
}

export default QuestionPage

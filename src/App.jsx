import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import StartPage from './pages/StartPage'
import QuestionPage from './pages/QuestionPage'
import LoadingPage from './pages/LoadingPage'
import ResultPage from './pages/ResultPage'

function App() {
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswerSelect = (answer) => {
    setAnswers([...answers, answer]);
  };

  const handleReset = () => {
    setAnswers([]);
    setResult(null);
  };

  return (
    <Router basename="/pepero-test">
      <div className="app">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route
            path="/question"
            element={
              <QuestionPage
                answers={answers}
                onAnswerSelect={handleAnswerSelect}
                onReset={handleReset}
              />
            }
          />
          <Route
            path="/loading"
            element={
              <LoadingPage
                answers={answers}
                onResult={setResult}
              />
            }
          />
          <Route
            path="/result"
            element={
              result ?
                <ResultPage result={result} onReset={handleReset} /> :
                <Navigate to="/" />
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App

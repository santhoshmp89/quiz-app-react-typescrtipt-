import React, { useState } from 'react';

import { QuestionCard } from './components/QuestionCard';
import { fetchQuestions, QuestionState } from './API';
import { ButtonSecondary } from './components/Button';

const TotalQuestionNr = 5;

export interface AnswerObject {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const results = await fetchQuestions();
    setNumber(0);
    setUserAnswer([]);
    setLoading(false);
    setQuestions(results);
  }

  const handleNext = () => {
    const nextQuestion = number + 1;
    if(nextQuestion === TotalQuestionNr) {
      setGameOver(true);
    } else {
      setNumber(prev => prev + 1);
    }
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if(correct) {
        setScore(prev => prev + 1);
      }

      setUserAnswer(prev => {
        return [...prev, {
          question: questions[number].question,
          answer,
          correct,
          correctAnswer: questions[number].correct_answer
        }]
      });

    }
  }

  return (
    <div className="App">
      <h1>Quiz</h1>
      {
        gameOver || userAnswer.length === TotalQuestionNr ? <ButtonSecondary onClick={startQuiz}>Start</ButtonSecondary> : null
      }

      {
        !gameOver ? <p>Score: {score}</p> : null
      }

      { loading ? <p>Loading Questions...</p> : null }

      {
        !loading && !gameOver ?
        <QuestionCard 
          question={questions[number]?.question}
          totalQuestions={TotalQuestionNr}
          questionNr={number+1}
          answers={questions[number]?.answers}
          userAnswer={userAnswer ? userAnswer[number] : undefined}
          callBack={checkAnswer}
        /> : null
      }

      {
        !loading &&
        !gameOver &&
        userAnswer.length === number + 1
        && number !== TotalQuestionNr - 1
        ? <ButtonSecondary onClick={handleNext}>Next</ButtonSecondary> : null
      } 
    </div>
  );
}

export default App;

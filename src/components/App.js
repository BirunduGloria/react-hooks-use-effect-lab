import React, { useState } from "react";
import Question from "./Question";

function App() {
  const [questions] = useState([
    {
      id: 1,
      prompt: "What is the capital of France?",
      answers: ["Berlin", "Paris", "Madrid", "Rome"],
      correctIndex: 1
    },
    {
      id: 2,
      prompt: "What is 2 + 2?",
      answers: ["3", "4", "5", "22"],
      correctIndex: 1
    }
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  function handleAnswer(isCorrect) {
    console.log("Answered:", isCorrect);
    setCurrentQuestionIndex((index) => index + 1);
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <main>
      {currentQuestion ? (
        <Question
          question={currentQuestion}
          onAnswered={handleAnswer}
        />
      ) : (
        <h1>No more questions!</h1>
      )}
    </main>
  );
}

export default App;

import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10); // Countdown starts at 10

  useEffect(() => {
    // If time runs out, trigger incorrect answer and reset timer
    if (timeRemaining === 0) {
      onAnswered(false);          // Treat unanswered as incorrect
      setTimeRemaining(10);       // Reset timer for next question
      return;
    }

    // Decrease timeRemaining by 1 after 1 second
    const timerId = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup to avoid memory leaks or overlapping timers
    return () => clearTimeout(timerId);
  }, [timeRemaining, onAnswered]);

  // Handle user clicking an answer
  function handleAnswer(answer) {
    const isCorrect = answer === question.correctAnswer;
    onAnswered(isCorrect);        // Report result
    setTimeRemaining(10);         // Reset timer for next question
  }

  return (
    <div className="question-container">
      <h2>{question.prompt}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(answer)}>
              {answer}
            </button>
          </li>
        ))}
      </ul>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;

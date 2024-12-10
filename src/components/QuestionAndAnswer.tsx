import React, { useState, useEffect } from 'react';

interface QuestionAndAnswerProps {
  questions: string[];
  onAnswerUpdate: (index: number, answer: string) => void;
  updatedAnswers?: { index: number; answer: string }[];
}

export const QuestionAndAnswer: React.FC<QuestionAndAnswerProps> = ({
  questions,
  onAnswerUpdate,
  updatedAnswers = [],
}) => {
  const [answers, setAnswers] = useState<string[]>(
    Array(questions.length).fill('')
  );

  useEffect(() => {
    updatedAnswers.forEach(({ index, answer }) => {
      const newAnswers = [...answers];
      newAnswers[index] = answer;
      setAnswers(newAnswers);
    });
  }, [updatedAnswers]);

  const handleAnswerChange = (index: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
    onAnswerUpdate(index, answer);
  };

  return (
    <div data-component="QuestionAndAnswer">
      {questions.map((question, index) => (
        <div key={index} className="question-answer-pair">
          <div className="question">{question}</div>
          <input
            type="text"
            value={answers[index]}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
            placeholder="Your answer..."
          />
        </div>
      ))}
    </div>
  );
};

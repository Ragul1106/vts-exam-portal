import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const correctAnswers = ['Left', 'Left', 'Left', 'Left', 'Left'];

const TechnicalExamPart2 = () => {
  const navigate = useNavigate();
  const questions = [
    '6. Where can label text be aligned?',
    '7. Where can label text be aligned?',
    '8. Where can label text be aligned?',
    '9. Where can label text be aligned?',
    '10. Where can label text be aligned?',
  ];
  const options = ['Top', 'Right', 'Center', 'Left'];
  const [answers, setAnswers] = useState({});

  const handleChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const goToPrevious = () => {
    navigate('/technical-exam-page1');
  };

   useEffect(() => {
          document.title = 'VTS_Exam_Portal | Technical exam Part2';
        }, []);

  const handleSubmit = () => {
    const part1Answers = JSON.parse(localStorage.getItem('technicalExamPart1')) || {};
    let correctCount = 0;

    correctAnswers.forEach((ans, i) => {
      if (part1Answers[i] === ans) correctCount += 1;
      if (answers[i] === ans) correctCount += 1;
    });

    const score = correctCount * 3;
    const name = localStorage.getItem('currentTraineeName') || 'Unknown';

    const results = JSON.parse(localStorage.getItem('technicalExamResults')) || [];
    results.push({ name, score, date: new Date().toLocaleString('en-GB') });

    localStorage.setItem('technicalExamResults', JSON.stringify(results));
    localStorage.removeItem('technicalExamPart1');

    navigate('/thank-you', { state: { score } });
  };

  return (
    <div className="d-flex">
      <div className="flex-grow-1 p-4" style={{ backgroundColor: '#f7fdf0' }}>
        <style>
          {`
            input[type="radio"].form-check-input:checked {
              background-color: black !important;
              border-color: black !important;
            }
          `}
        </style>

        <h3 className="text-center mb-4 fw-bold">Figma Technical Questions</h3>
        <div className="rounded p-4 fs-3" style={{ backgroundColor: '#f0facc' }}>
          {questions.map((question, qIndex) => (
            <div className="mb-5" key={qIndex}>
              <p className="fw-medium fs-3">{question}</p>
              <div className="row">
                {options.map((opt, oIndex) => (
                  <div className="col-md-3 col-sm-6 mb-2" key={oIndex}>
                    <div className="form-check">
                      <input
                        className="form-check-input custom-radio-input bg-transparent border-black"
                        type="radio"
                        name={`q${qIndex}`}
                        id={`q${qIndex}_opt${oIndex}`}
                        value={opt}
                        onChange={() => handleChange(qIndex, opt)}
                        checked={answers[qIndex] === opt}
                      />
                      <label className="form-check-label" htmlFor={`q${qIndex}_opt${oIndex}`}>
                        {opt}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-center gap-4 mt-4">
            <button
              className="btn btn-primary px-4"
              style={{ backgroundColor: '#0c1248', border: 'none' }}
              onClick={goToPrevious}
            >
              Previous
            </button>
            <button
              className="btn px-4"
              style={{ backgroundColor: '#d6ff63', color: '#000' }}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalExamPart2;

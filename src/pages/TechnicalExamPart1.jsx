import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TechnicalExamPart1 = () => {
  const navigate = useNavigate();
  const questions = [
    '1. Where can label text be aligned?',
    '2. Where can label text be aligned?',
    '3. Where can label text be aligned?',
    '4. Where can label text be aligned?',
    '5. Where can label text be aligned?',
  ];
  const options = ['Top', 'Right', 'Center', 'Left'];
  const [answers, setAnswers] = useState({});

  const handleChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const goToNext = () => {
    localStorage.setItem('technicalExamPart1', JSON.stringify(answers));
    navigate('/technical-exam-page2');
  };

  const goToPrevious = () => {
    navigate('/exam');
  };

   useEffect(() => {
          document.title = 'VTS_Exam_Portal | Technical exam Part1';
        }, []);

  return (
    <div className="flex-grow-1 p-4" >
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

        <div className="d-flex justify-content-center gap-3 me-5 mt-4">
          <button
            className="btn mx-5 btn-primary"
            style={{ backgroundColor: '#0c1248', border: 'none' }}
            onClick={goToPrevious}
          >
            Previous
          </button>
          <button
            className="btn"
            style={{ backgroundColor: '#d6ff63', color: '#000' }}
            onClick={goToNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnicalExamPart1;

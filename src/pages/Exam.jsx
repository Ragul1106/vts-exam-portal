import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Exam = ({ name, image, today, radiumGreen = '#d7f96a' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const userData = location.state || {};
  const localName = localStorage.getItem('userName');
  const localImage = localStorage.getItem('userImage');

  const userName = localName || name || userData.name || 'Trainee';
  const userImage = localImage || image || userData.image || 'https://via.placeholder.com/50';

  const currentDate =
    today ||
    new Date().toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 w-100 col-md-10 col-lg-8">
  
          <div className="d-flex align-items-center p-3 rounded mb-3 w-100">
            <img
              src={userImage}
              alt={userName}
              className="rounded-circle me-3"
              width="50"
              height="50"
            />
            <div>
              <h6 className="mb-2 fs-3">Welcome {userName}</h6>
              <small className="text-muted fs-4">It’s {currentDate}</small>
            </div>
          </div>

          <h5 className="mb-3 fs-2">Upcoming Exams</h5>

          <div className="card p-3 w-100" style={{ backgroundColor: radiumGreen }}>
     
            <div className="mb-4">
              <div className="d-flex fs-4 p-2 justify-content-between align-items-center mb-2">
                <strong>Technical Questions</strong>
                <button
                  className="btn btn-dark btn-sm mb-4"
                  onClick={() => {
                    localStorage.setItem('currentTraineeName', userName);
                    navigate('/technical-exam-page1');
                  }}
                >
                  Start Exam
                </button>
              </div>
              <div className="d-flex justify-content-between align-items-center border border-primary p-2 rounded bg-transparent">
                <div className="mb-3 fs-4 ">
                  <strong>Figma Technical Questions</strong><br />
                  <small className="text-muted">Duration: 30 Minutes</small>
                </div>
                <div className="text-end">
                  <small className="fw-bold">July 15, 2025</small><br />
                  <small className="text-muted">2:30 PM</small>
                </div>
              </div>
            </div>

            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <strong>Practical Questions</strong>
                <button
                  className="btn btn-dark btn-sm mb-3"
                  onClick={() => {
                    localStorage.setItem('currentTraineeName', userName);
                    navigate('/technical-exam-page1');
                  }}
                >
                  Start Exam
                </button>
              </div>
              <div className="d-flex mb-5 justify-content-between align-items-center border border-primary p-3 rounded bg-transparent">
                <div className="mb-3 fs-4">
                  <strong>Figma Practical Questions</strong><br />
                  <small className="text-muted">Duration: 1 Day</small>
                </div>
                <div className="text-end ">
                  <small className="fw-bold">July 16, 2025</small><br />
                  <small className="text-muted">4:00 PM</small>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;
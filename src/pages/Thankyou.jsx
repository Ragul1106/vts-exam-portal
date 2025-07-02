import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import successImg from '../assets/images/Submitted img.png';  

const ThankYou = () => {
  const navigate = useNavigate();
   useEffect(() => {
          document.title = 'VTS_Exam_Portal | Thankyou';
        }, []);

  return (
    <div className="d-flex">

      <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center p-4">
        <img
          src={successImg}
          alt="Success"
          style={{ width: 300, height: 300 }}
          className="mb-4"
        />

        <h4 className="fw-semibold fs-3 mb-5" style={{ maxWidth: 480 }}>
          Thank&nbsp;you — your response has&nbsp;been&nbsp;submitted
        </h4>

        <button
          className="btn fw-bold px-5 fs-3"
          style={{ backgroundColor: '#d6ff63' }}
          onClick={() => navigate('/result')}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default ThankYou;

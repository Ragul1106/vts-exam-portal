import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaChalkboardTeacher } from 'react-icons/fa';
import TraineeCard from '../components/TraineeCard';
import { onlineTrainees } from '../data/OnlineTrainee';
import { offlineTrainees } from '../data/OfflineTrainee';

const TrainerCard = ({
  name,
  domain,
  role,
  experience,
  email,
  phone,
  image,
  img,
  onlineTrainees: staticOnline = 0,
  offlineTrainees: staticOffline = 0,
  numberOfTrainees,
}) => {
  const [showModal, setShowModal] = useState(false);
   useEffect(() => {
          document.title = 'VTS_Exam_Portal | Trainers';
        }, []);

  const trainerOnline = onlineTrainees.filter((t) => t.trainer === name);
  const trainerOffline = offlineTrainees.filter((t) => t.trainer === name);
  const combinedTrainees = [...trainerOnline, ...trainerOffline];

  const fallbackTrainees =
    combinedTrainees.length === 0 && numberOfTrainees
      ? parseInt(numberOfTrainees)
      : combinedTrainees.length;

  const getEmailFromName = (name) => {
    return name ? `${name.toLowerCase().replace(/\s+/g, '')}@gmail.com` : 'not-provided@example.com';
  };

  const generateRandomPhone = () => {
    const startDigits = ['6', '8', '9'];
    const firstDigit = startDigits[Math.floor(Math.random() * startDigits.length)];
    let remainingDigits = '';
    for (let i = 0; i < 9; i++) {
      remainingDigits += Math.floor(Math.random() * 10);
    }
    return firstDigit + remainingDigits;
  };

  const fallbackEmail = email || getEmailFromName(name);
  const fallbackPhone = phone || generateRandomPhone();

  return (
    <>
      <div className="card p-3 mt-2" style={{ backgroundColor: '#b3e6ff', width: '300px', position: 'relative' }}>
        <FaChalkboardTeacher className="position-absolute top-0 end-0 m-2" size={18} />

        <div className="d-flex align-items-center mb-3">
          <img
            src={image || img || 'https://via.placeholder.com/100'}
            alt={name}
            className="rounded-circle me-3"
            width="60"
            height="60"
          />
          <h5 className="m-0">{name}</h5>
        </div>

        <p><strong>Domain:</strong> {domain || role || 'N/A'}</p>
        <p><strong>Experience:</strong> {experience || 1} yrs</p>
        <p><strong>Trainees:</strong> {fallbackTrainees} (🟢 {trainerOnline.length || staticOnline} / ⚪ {trainerOffline.length || staticOffline})</p>
        <p><FaEnvelope className="me-2" />{fallbackEmail}</p>
        <p><FaPhone className="me-2" />{fallbackPhone}</p>

        <div className="d-flex justify-content-end mt-2">
          <button className="btn btn-dark btn-sm" onClick={() => setShowModal(true)}>
            View Trainees
          </button>
        </div>
      </div>


      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={() => setShowModal(false)}>
          <div className="modal-dialog modal-lg modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header bg-dark text-white">
                <h5 className="modal-title">Trainees under {name}</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="row gx-3 gy-4">
                  {combinedTrainees.length > 0 ? (
                    combinedTrainees.map((trainee) => (
                      <div className="col-md-6" key={trainee.id}>
                        <TraineeCard {...trainee} />
                      </div>
                    ))
                  ) : (
                    <p className="text-muted">No trainees assigned.</p>
                  )}
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrainerCard;

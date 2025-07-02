import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import TraineeCard from '../components/TraineeCard';
import { offlineTrainees } from '../data/OfflineTrainee.jsx';

const OfflineTrainees = () => {

   useEffect(() => {
        document.title = 'VTS_Exam_Portal | Offline Trainees';
      }, []);

  return (
    <div className="d-flex">
      <div className="container-fluid">
        <h5 className="mt-3">
          <Link to="/trainers" className="text-decoration-none text-black mx-1">
            Trainer Name
          </Link>
          &gt;
          <Link to="/online-trainees" className="text-decoration-none text-black mx-1">
            Online Trainees
          </Link>
          &gt;
          <Link to="/offline-trainees" className="text-decoration-none mx-1 text-black">
            Offline Trainees
          </Link>
        </h5>

        <div className="container mt-4">
          <div className="row gx-2 gy-3">
            {offlineTrainees.map((trainee) => (
              <div className="col-md-4 d-flex justify-content-center" key={trainee.id}>
                <TraineeCard {...trainee} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfflineTrainees;

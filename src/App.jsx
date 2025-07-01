import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import MobileSidebar from "./components/MobileSidebar";
import LoginForm from "./pages/LoginPage";
import Overview from "./pages/Overview";
import TrainersList from "./pages/TrainersList";
import OnlineTrainees from "./pages/OnlineTrainees";
import OfflineTrainees from "./pages/OfflineTrainees";
import TraineeProfile from "./pages/TraineeProfile";
import FilterSection from "./components/FilterSection";
import UploadQuestionPaper from './pages/UploadQuestionsPaper';
import TechnicalExamPart1 from './pages/TechnicalExamPart1';
import TechnicalExamPart2 from './pages/TechnicalExamPart2';
import Exam from "./pages/Exam";
import ThankYou from "./pages/Thankyou";
import Result from "./pages/Result";

const AppLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <div className="container-fluid">
      <div className="row">
        {!isLoginPage && (
          <nav className="col-lg-2 d-none d-lg-block bg-dark sidebar p-0">
            <Sidebar />
          </nav>
        )}
        
        {!isLoginPage && (
          <>
            <div className="d-lg-none bg-dark p-2 text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">VTS Exam Portal</h5>
              <button
                className="btn btn-outline-light"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileSidebar"
              >
                ☰
              </button>
            </div>
            <MobileSidebar />
          </>
        )}

        <main className={isLoginPage ? "col-12" : "col-lg-10 ms-sm-auto px-md-4 mt-3"}>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/trainers" element={<TrainersList />} />
            <Route path="/online-trainees" element={<OnlineTrainees />} />
            <Route path="/offline-trainees" element={<OfflineTrainees />} />
            <Route path="/trainee" element={<TraineeProfile />} />
            <Route path="/designing" element={<FilterSection />} />
            <Route path="/upload-paper" element={<UploadQuestionPaper />} />
            <Route path="/technical-exam-page1" element={<TechnicalExamPart1 />} />
            <Route path="/technical-exam-page2" element={<TechnicalExamPart2 />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;

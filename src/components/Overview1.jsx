import React from "react";
import notificationIcon from "../assets/images/Notification.png";
import profilePic from "../assets/images/Img 1.png";
import { FaSearch } from "react-icons/fa";
import traineesIcon from "../assets/images/Total Trainees.png";
import coursesIcon from "../assets/images/courses.png";
import examsIcon from "../assets/images/Exams.png";

const today = new Date();
const formattedDate = today.toLocaleDateString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const OverviewHeader = () => {
  return (
    <div className="container py-4">
      <div className="row align-items-center mb-4">
        <div className="col-md-4 text-md-start text-center mb-2 mb-md-0">
          <h4 className="fw-bold">Good Morning!!!</h4>
          <p className="text-muted mb-0">It's {formattedDate}</p>
        </div>

        <div className="col-md-4 d-flex justify-content-center mb-2 mb-md-0">
          <div className="input-group" style={{ maxWidth: "300px", width: "100%" }}>
            <input type="text" className="form-control border-black p-3" placeholder="Search" />
            <button className="btn text-dark border-black p-3 px-4" style={{ backgroundColor: "#d8f275" }}>
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="col-md-4 d-flex justify-content-end gap-3" style={{ paddingRight: "20px" }}>
          <img
            src={notificationIcon}
            alt="Notification"
            width={25}
            height={25}
            style={{ marginRight: "20px", marginTop:"20px" }}
          />
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-circle"
            width={55}
            height={55}
            style={{ marginRight: "100px" }}
          />
        </div>

      </div>
      <div className="row g-3">
        <div className="col-md-4">
          <div className="p-3 rounded bg-warning-subtle d-flex justify-content-between align-items-center">
            <div className="mb-3">
              <small className="text-muted">Total Trainees</small>
              <h5 className="fw-bold mb-0">500</h5>
            </div>
            <div
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{ backgroundColor: "#fff", width: "50px", height: "50px", border: "2px solid #f1c40f" }}
            >
              <img src={traineesIcon} alt="Trainees" width={25} />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 rounded bg-success-subtle d-flex justify-content-between align-items-center">
            <div className="mb-3">
              <small className="text-muted">Active Courses</small>
              <h5 className="fw-bold mb-0">15</h5>
            </div>
            <div
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{ backgroundColor: "#fff", width: "50px", height: "50px", border: "2px solid #28a745" }}
            >
              <img src={coursesIcon} alt="Courses" width={25} />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="p-3 rounded d-flex justify-content-between align-items-center"
            style={{ backgroundColor: "#ec40af" }}
          >
            <div className="mb-3">
              <small>Upcoming Exams</small>
              <h5 className="fw-bold mb-0">12</h5>
            </div>
            <div
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{ backgroundColor: "#fff", width: "50px", height: "50px", border: "2px solid #fff" }}
            >
              <img src={examsIcon} alt="Exams" width={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewHeader;

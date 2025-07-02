import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import priyaImg from "../assets/images/Img 1.png";
import rithikaImg from "../assets/images/Img 2.png";
import reshmaImg from "../assets/images/Img 3.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const OverviewRow2 = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const staticTrainers = [
    { name: "Priya", role: "UI/UX Designer", trainees: 15, img: priyaImg },
    { name: "Rithika", role: "UI/UX Designer", trainees: 15, img: rithikaImg },
    { name: "Reshma", role: "UI/UX Designer", trainees: 15, img: reshmaImg },
  ];

  const staticExams = [
    { title: "Figma Technical Questions", duration: "30 Minutes", date: "July 15, 2025", time: "2:30 PM" },
    { title: "Figma Practical Questions", duration: "1 Day", date: "July 16, 2025", time: "4:00 PM" },
  ];

  const [dynamicTrainers, setDynamicTrainers] = useState([]);
  const [dynamicExams, setDynamicExams] = useState([]);
  const [showAllTrainers, setShowAllTrainers] = useState(false);
  

  const [formData, setFormData] = useState({ name: "", role: "", trainees: "", img: "" });
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const storedTrainers = JSON.parse(localStorage.getItem("dynamicTrainers")) || [];
    const storedExams = JSON.parse(localStorage.getItem("dynamicExams")) || [];
    setDynamicTrainers(storedTrainers);
    setDynamicExams(storedExams);
  }, []);

  useEffect(() => {
    localStorage.setItem("dynamicTrainers", JSON.stringify(dynamicTrainers));
  }, [dynamicTrainers]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, img: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, role, trainees, img } = formData;

    if (!name || !role || !trainees || isNaN(trainees)) {
      setFormError("All fields are required and trainees must be a number.");
      return;
    }

    const isDuplicate = [...staticTrainers, ...dynamicTrainers].some(
      (trainer) => trainer.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicate) {
      setFormError("Trainer with this name already exists.");
      return;
    }

    setDynamicTrainers([...dynamicTrainers, { name, role, trainees: parseInt(trainees), img }]);
    setFormData({ name: "", role: "", trainees: "", img: "" });
    setFormError("");

    const modal = bootstrap.Modal.getInstance(document.getElementById("trainerModal"));
    modal.hide();
  };

  const deleteTrainer = (name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      setDynamicTrainers(dynamicTrainers.filter((t) => t.name !== name));
    }
  };

  const displayedTrainers = showAllTrainers
    ? [...staticTrainers, ...dynamicTrainers]
    : [...staticTrainers, ...dynamicTrainers].slice(0, 3);

  return (
    <div className="container my-1 ">

      <div className="modal fade mt-5" id="trainerModal" tabIndex="-1">
        <div className="modal-dialog">
          <form className="modal-content" onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Add New Trainer</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              {formError && <div className="alert alert-danger">{formError}</div>}
              <div className="mb-3">
                <label className="form-label">Trainer Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Role</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Number of Trainees</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.trainees}
                  onChange={(e) => setFormData({ ...formData, trainees: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Trainer Image</label>
                <input type="file" className="form-control" accept="image/*" onChange={handleImageUpload} />
              </div>
              {formData.img && (
                <div className="text-center">
                  <img
                    src={formData.img}
                    alt="Preview"
                    className="rounded-circle"
                    style={{ width: 80, height: 80, objectFit: "cover" }}
                  />
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-success">Save Trainer</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            </div>
          </form>
        </div>
      </div>

      <div className="row g-4 align-items-start">

        <div className="col-md-6 d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center mb-4 px-1">
            <h5 className="fw-bold mb-0">Active Trainers</h5>
            <span
              className="text-primary fw-semibold text-decoration-none"
              style={{ cursor: "pointer" }}
              onClick={() => setShowAllTrainers(!showAllTrainers)}
            >
              {showAllTrainers ? "Show Less" : "View All"}
            </span>
          </div>
          <div className="rounded p-3 flex-grow-1 d-flex flex-column" style={{ backgroundColor: "#d8f275" }}>
            <div className="d-flex justify-content-end mb-3">
              <button
                className="btn btn-dark btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#trainerModal"
              >
                + Add New
              </button>
            </div>

            {displayedTrainers.map((trainer, idx) => (
              <div key={idx} className="d-flex align-items-center justify-content-between mb-5">
                <div className="d-flex align-items-center">
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="rounded-circle me-3"
                    style={{ width: 50, height: 50, objectFit: "cover" }}
                  />
                  <div>
                    <div className="fw-bold">{trainer.name}</div>
                    <div className="text-muted" style={{ fontSize: "0.9rem" }}>{trainer.role}</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2 me-lg-3">
                  <span
                    className="badge text-dark px-3 py-2"
                    style={{ fontSize: "0.9rem", backgroundColor: "bisque" }}
                  >
                    {trainer.trainees} Trainees
                  </span>
                  {dynamicTrainers.some((t) => t.name === trainer.name) && (
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => deleteTrainer(trainer.name)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Exams Section */}
        <div className="col-md-6 d-flex flex-column pt-2" style={{ marginTop: "65px" }}>
          <div className="rounded p-3 flex-grow-1 d-flex flex-column" style={{ backgroundColor: "#d8f275" }}>
            <div className="d-flex justify-content-between align-items-center mt-3 mb-5 px-2">
              <h5 className="fw-bold mb-0">Upcoming Exams</h5>
              <button className="btn btn-dark btn-sm py-2 px-4" onClick={() => navigate("/upload-paper")}>
                Upload New Exam
              </button>
            </div>

            {[...staticExams, ...dynamicExams].map((exam, idx) => (
              <div key={idx} className="border border-primary rounded p-2 mb-5 bg-transparent">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <div className="fw-semibold">{exam.title}</div>
                    <div className="text-muted" style={{ fontSize: "0.9rem" }}>
                      Duration: {exam.duration}
                    </div>
                  </div>
                  <div className="text-end">
                    <div className="fw-bold">{exam.date}</div>
                    <div style={{ fontSize: "0.9rem" }}>{exam.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewRow2;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaFilter } from "react-icons/fa";
import OverviewRow2 from "./Overview2";
import OverviewRow3 from "./Overview3";
import AddTraineeModal from "../components/AddTrainees";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

const FilterSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAddTrainee, setShowAddTrainee] = useState(false);
  const [formData, setFormData] = useState({
    traineeName: "",
    courseName: "",
    duration: "",
    mode: "",
  });

  const navigate = useNavigate();

   useEffect(() => {
          document.title = 'VTS_Exam_Portal | Designing';
        }, []);

  const toggleModal = () => setShowModal(!showModal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    toggleModal();

    if (formData.mode === "online") {
      navigate("/online-trainees");
    } else if (formData.mode === "offline") {
      navigate("/offline-trainees");
    } else {
      alert("Please select Online or Offline mode");
    }
  };

  return (
    <div className="d-flex">
      <div className="container py-4 flex-grow-1">
        <div className="d-flex flex-wrap justify-content-around align-items-center mb-4 gap-3">
          <div className="input-group" style={{ maxWidth: "320px", width: "100%" }}>
            <input
              type="text"
              className="form-control border-black p-3"
              placeholder="Search"
            />
            <button
              className="btn text-dark border-black p-3 px-4"
              style={{ backgroundColor: "#d8f275" }}
            >
              <FaSearch />
            </button>
          </div>

          <div className="d-flex gap-5" style={{ marginRight: "200px" }}>
            <button className="btn btn-dark d-flex align-items-center gap-2 px-3" style={{ marginRight: "10px" }} onClick={toggleModal}>
              <FaFilter /> Filter
            </button>

            <button className="btn btn-dark" onClick={() => setShowAddTrainee(true)}>
              + Add Trainee
            </button>

            {showAddTrainee && (
              <AddTraineeModal setShowAddTrainee={setShowAddTrainee} />
            )}
          </div>
        </div>

        <OverviewRow2 />
        <OverviewRow3 />
      </div>

      {showModal && (
        <>
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content animate__animated animate__fadeIn w-75 px-3 mx-5">
                <div className="modal-header">
                  <h5 className="modal-title">Filter By</h5>
                  <button type="button" className="btn-close" onClick={toggleModal}></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label>Trainee's Name</label>
                    <input
                      className="form-control w-75"
                      type="text"
                      name="traineeName"
                      value={formData.traineeName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Course Name</label>
                    <input
                      className="form-control w-75"
                      type="text"
                      name="courseName"
                      value={formData.courseName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Duration</label>
                    <input
                      className="form-control w-75"
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Class Mode</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="mode"
                        value="online"
                        checked={formData.mode === "online"}
                        onChange={handleChange}
                        id="online"
                      />
                      <label className="form-check-label" htmlFor="online">Online</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="mode"
                        value="offline"
                        checked={formData.mode === "offline"}
                        onChange={handleChange}
                        id="offline"
                      />
                      <label className="form-check-label" htmlFor="offline">Offline</label>
                    </div>
                  </div>
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  <button className="btn px-4" style={{ backgroundColor: "#d8f275" }} onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </div>
  );
};

export default FilterSection;

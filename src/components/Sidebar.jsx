import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import overview from "../assets/images/Overview.png";
import design from "../assets/images/Design.png";
import exam from "../assets/images/Exam.png";
import result from "../assets/images/result.png";
import { FaCode } from "react-icons/fa";
import "../assets/Sidebar.css";

const Sidebar = () => {
  const handleNavClick = () => {
    const offcanvasElement = document.querySelector(".offcanvas");
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }
  };

  return (
    <>
      {/* Logo Section */}
      <div className="bg-light text-dark border-black border p-3 d-flex align-items-center gap-2">
        <img src={logo} alt="Logo" width={40} height={40} className="rounded-circle mt-3" />
        <div>
          <h6 className="mb-0 mt-3 fs-5 px-3 fw-bold">
            VTS Exam <br /> Portal
            {/* <small>Portal</small>  */}
          </h6>
        </div>
      </div>

      {/* Nav Menu */}
      <ul className="nav flex-column p-3">
        <li className="nav-item mb-2">
          <NavLink
            to="/overview"
            onClick={handleNavClick}
            className={({ isActive }) =>
              `nav-link hover-custom d-flex align-items-center gap-2 ${isActive ? "active-custom" : ""}`
            }
          >
            <img src={overview} alt="Overview" width={20} height={20} />
            Overview
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/designing"
            onClick={handleNavClick}
            className={({ isActive }) =>
              `nav-link hover-custom d-flex align-items-center gap-2 ${isActive ? "active-custom" : ""}`
            }
          >
            <img src={design} alt="Designing" width={20} height={20} />
            Designing
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/development"
            onClick={handleNavClick}
            className={({ isActive }) =>
              `nav-link hover-custom d-flex align-items-center gap-2 ${isActive ? "active-custom" : ""}`
            }
          >
            <FaCode />
            Development
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/exam"
            onClick={handleNavClick}
            className={({ isActive }) =>
              `nav-link hover-custom d-flex align-items-center gap-2 ${isActive ? "active-custom" : ""}`
            }
          >
            <img src={exam} alt="Exam" width={20} height={20} />
            Exam
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/result"
            onClick={handleNavClick}
            className={({ isActive }) =>
              `nav-link hover-custom d-flex align-items-center gap-2 ${isActive ? "active-custom" : ""}`
            }
          >
            <img src={result} alt="Result" width={20} height={20} />
            Result
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;

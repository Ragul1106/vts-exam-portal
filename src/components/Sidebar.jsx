import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import overview from "../assets/images/Overview.png";
import design from "../assets/images/Design.png";
import exam from "../assets/images/Exam.png";
import result from "../assets/images/result.png";
import { FaCode } from "react-icons/fa";
import "../assets/Sidebar.css";

const Sidebar = ({ closeMobileSidebar }) => {
  const handleClick = () => {
    if (closeMobileSidebar) {
      closeMobileSidebar();
    }
  };

  return (
    <>
      <div className="bg-light text-dark border-black border p-3 d-flex align-items-center gap-2">
        <img src={logo} alt="Logo" width={40} height={40} className="rounded-circle mt-3" />
        <div>
          <h6 className="mb-0 mt-2 fs-5 px-3 fw-bold">
            VTS Exam <br /> Portal
          </h6>
        </div>
      </div>

      <ul className="nav flex-column p-3">
        <li className="nav-item mb-2" onClick={handleClick}>
          <NavLink
            to="/overview"
            className={({ isActive }) =>
              `nav-link hover-custom d-flex align-items-center gap-2 ${isActive ? "active-custom" : ""}`
            }
          >
            <img src={overview} alt="Overview" width={20} height={20} />
            Overview
          </NavLink>
        </li>
        <li className="nav-item mb-2" onClick={handleClick}>
          <NavLink
            to="/designing"
            className={({ isActive }) =>
              `nav-link hover-custom d-flex align-items-center gap-2 ${isActive ? "active-custom" : ""}`
            }
          >
            <img src={design} alt="Designing" width={20} height={20} />
            Designing
          </NavLink>
        </li>
        <li className="nav-item mb-2" onClick={handleClick}>
          <NavLink
            to="/upload-paper"
            className={({ isActive }) =>
              `nav-link hover-custom d-flex align-items-center  gap-2 ${isActive ? "active-custom" : ""}`
            }
          >
            <FaCode />
            Development
          </NavLink>
        </li>
        <li className="nav-item mb-2" onClick={handleClick}>
          <NavLink
            to="/exam"
            className={({ isActive }) =>
              `nav-link hover-custom d-flex align-items-center gap-2 ${isActive ? "active-custom" : ""}`
            }
          >
            <img src={exam} alt="Exam" width={20} height={20} />
            Exam
          </NavLink>
        </li>
        <li className="nav-item mb-2" onClick={handleClick}>
          <NavLink
            to="/result"
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



// import React from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../assets/images/logo.png";
// import overview from "../assets/images/Overview.png";
// import design from "../assets/images/Design.png";
// import exam from "../assets/images/Exam.png";
// import result from "../assets/images/result.png";
// import { FaCode } from "react-icons/fa";
// import "../assets/Sidebar.css";

// const Sidebar = () => {
//   return (
//     <>
//       <div className="bg-light text-dark border-black border p-3 d-flex align-items-center gap-2">
//         <img src={logo} alt="Logo" width={40} height={40} className="rounded-circle mt-3" />
//         <div>
//           <h6 className="mb-0 mt-2 fs-5 px-3 fw-bold">
//             VTS Exam <br /> Portal
//           </h6>
//         </div>
//       </div>

//       <ul className="nav flex-column p-3">
//         <li className="nav-item mb-2">
//           <NavLink
//             to="/overview"
//             className={({ isActive }) =>
//               `nav-link hover-custom d-flex align-items-center gap-2 ${isActive ? "active-custom" : ""}`
//             }
//           >
//             <img src={overview} alt="Overview" width={20} height={20} />
//             Overview
//           </NavLink>
//         </li>
//         <li className="nav-item mb-2">
//           <NavLink
//             to="/designing"
//             className={({ isActive }) =>
//               `nav-link hover-custom d-flex align-items-center gap-2 ${isActive ? "active-custom" : ""}`
//             }
//           >
//             <img src={design} alt="Designing" width={20} height={20} />
//             Designing
//           </NavLink>
//         </li>
//         <li className="nav-item mb-2">
//           <NavLink
//             to="/upload-paper"
//             className={({ isActive }) =>
//               `nav-link hover-custom d-flex align-items-center  gap-2 ${isActive ? "active-custom" : ""}`
//             }
//           >
//             <FaCode />
//             Development
//           </NavLink>
//         </li>
//         <li className="nav-item mb-2">
//           <NavLink
//             to="/exam"
//             className={({ isActive }) =>
//               `nav-link hover-custom d-flex align-items-center gap-2 ${isActive ? "active-custom" : ""}`
//             }
//           >
//             <img src={exam} alt="Exam" width={20} height={20} />
//             Exam
//           </NavLink>
//         </li>
//         <li className="nav-item mb-2">
//           <NavLink
//             to="/result"
//             className={({ isActive }) =>
//               `nav-link hover-custom d-flex align-items-center gap-2 ${isActive ? "active-custom" : ""}`
//             }
//           >
//             <img src={result} alt="Result" width={20} height={20} />
//             Result
//           </NavLink>
//         </li>
//       </ul>
//     </>
//   );
// };

// export default Sidebar;

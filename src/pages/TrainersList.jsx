import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TrainerCard from "../pages/TrainerCard";

import priyaImg from "../assets/images/Img 1.png";
import rithikaImg from "../assets/images/Img 2.png";
import reshmaImg from "../assets/images/Img 3.png";

const TrainersList = () => {
  const [allTrainers, setAllTrainers] = useState([]);

  const defaultTrainers = [
    {
      name: "Priya",
      image: priyaImg,
      domain: "UI/UX Design",
      experience: 4,
      email: "priya@example.com",
      phone: "9876543210",
    },
    {
      name: "Rithika",
      image: rithikaImg,
      domain: "Frontend Development",
      experience: 3,
      email: "rithika@example.com",
      phone: "8765432109",
    },
    {
      name: "Reshma",
      image: reshmaImg,
      domain: "Graphic Design",
      experience: 5,
      email: "reshma@example.com",
      phone: "7654321098",
    },
  ];

 useEffect(() => {
  const stored = JSON.parse(localStorage.getItem("dynamicTrainers")) || [];
  setAllTrainers([...defaultTrainers, ...stored]);
}, []);


  return (
    <div className="container mt-4">
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

      <h3 className="mb-4">Available Trainers</h3>

      <div className="d-flex flex-wrap gap-4">
        {allTrainers.map((trainer, index) => (
          <TrainerCard key={index} {...trainer} />
        ))}
      </div>
    </div>
  );
};

export default TrainersList;

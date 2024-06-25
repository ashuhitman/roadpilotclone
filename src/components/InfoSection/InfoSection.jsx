import React from "react";
import "./InfoSection.css";
import { FaArrowRight, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function InfoSection({ title }) {
  return (
    <div className="info-section">
      <h2>{title}</h2>
      <div className="path">
        <span className="hidden">
          <FaHome />
          <Link to="/">Home</Link>
        </span>
        <FaArrowRight />

        {title}
      </div>
    </div>
  );
}

export default InfoSection;

import React from "react";
import "./Subscribe.css";
import { FaPaperPlane } from "react-icons/fa";

function Subscribe() {
  return (
    <div className="subscribe">
      <input type="email" placeholder="Enter your Email" />
      <button>
        <FaPaperPlane />
      </button>
    </div>
  );
}

export default Subscribe;

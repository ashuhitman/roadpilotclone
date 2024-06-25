import React from "react";
import "./Pulse.css";

function Pulse({ size, color, zIndex }) {
  return (
    <div
      className="pulse"
      style={{
        height: size,
        width: size,
        zIndex: zIndex,
        backgroundColor: color,
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Pulse;

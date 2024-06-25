import React from "react";
import "./Circle.css";

function Circle({ children, h, w }) {
  return (
    <div
      className="circle-div"
      style={{ height: h, width: w, borderRadius: "50%" }}
    >
      {children}
    </div>
  );
}

export default Circle;

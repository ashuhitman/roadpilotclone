import React from "react";
import "./SpanBtn.css";

function SpanBtn({ children, bgColor, color, px, py, borderRadius }) {
  return (
    <span
      className="stylish-span"
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius,
      }}
    >
      {children}
    </span>
  );
}

export default SpanBtn;

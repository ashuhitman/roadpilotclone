import React from "react";
import "./ButtonEffect.css";

function ButtonEffect({ children, style, onClick }) {
  return (
    <button className="button-effect" style={style} onClick={onClick}>
      <span className="button-content">{children}</span>
    </button>
  );
}

export default ButtonEffect;

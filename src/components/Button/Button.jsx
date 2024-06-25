import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function Button({ children, style, onClick }) {
  return (
    <button className="button" style={style} onClick={onClick}>
      <span className="button-content">{children}</span>
    </button>
  );
}

export default Button;

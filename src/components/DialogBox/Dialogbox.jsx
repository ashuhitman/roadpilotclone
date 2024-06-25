import React, { useEffect } from "react";
import "./Dialogbox.css";
import { MdCancel } from "react-icons/md";

const Dialogbox = ({ children, toggleDialog, isOpen }) => {
  console.log(isOpen);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);
  return (
    <div className={`dialog-box ${isOpen ? "show" : "hide"}`}>
      <div className="dialog-overlay" onClick={toggleDialog}></div>
      <div className="dialog-content">
        <button className="dialog-close" onClick={toggleDialog}>
          <MdCancel />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Dialogbox;

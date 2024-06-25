import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./FixedHeader.css";

function FixedHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when user scrolls down 200px
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={isVisible ? "fixed-header" : "hide"}>
      <div className="container-fluid">
        <Header />
      </div>
    </div>
  );
}

export default FixedHeader;

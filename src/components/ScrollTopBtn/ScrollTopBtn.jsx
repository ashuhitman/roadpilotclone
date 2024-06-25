import React, { useEffect, useState } from "react";
import "./ScrollTopBtn.css";
import { FaAngleDoubleUp } from "react-icons/fa";

function ScrollTopBtn() {
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <a
      className={`scroll-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <FaAngleDoubleUp />
    </a>
  );
}

export default ScrollTopBtn;

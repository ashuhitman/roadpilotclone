import React from "react";
import "./SocialMediaIcon.css";

const iconMap = {
  FaLinkedin: <FaLinkedin />,
  FaYoutube: <FaYoutube />,
  FaInstagram: <FaInstagram />,
};

function SocialMediaIcon({ icon, href }) {
  return (
    <a className="social-media-icon" href={href}>
      <span className="icon">{iconMap[icon]}</span>
    </a>
  );
}

export default SocialMediaIcon;

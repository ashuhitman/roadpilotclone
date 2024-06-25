import React from "react";
import socialMediaList from "../../data/socialMediaList";

import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";

function HeaderTop() {
  const socialMediaList = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/road-pilot-727319221/",
      icon: <FaLinkedin />,
    },
    {
      name: "youtube",
      href: "https://www.youtube.com/@roadpilottechnologiespvtlt6022",
      icon: <FaYoutube />,
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/1stroadpilot/",
      icon: <FaInstagram />,
    },
  ];
  return (
    <div className="header-top">
      <div className="top-left">
        <ul className="contact-list">
          <li>
            <span className="icon">
              <FaPhone />
            </span>
            1800-571-55-99
          </li>
          <li>
            <span className="icon">
              <FaEnvelope />
            </span>
            <a href="mailto:info@roadpilot.co.in">info@roadpilot.co.in</a>
          </li>
        </ul>
      </div>

      <div className="top-right">
        <div className="language-box">
          <select>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
        <ul className="social-media-links">
          {socialMediaList.map((item, index) => (
            <li key={item.name}>
              <a href={item.href} target="_blank">
                <span className="icon">{item.icon}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HeaderTop;

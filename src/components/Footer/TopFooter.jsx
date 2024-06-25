import React from "react";
import "./TopFooter.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  FaAngleRight,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaMapMarker,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import Button from "../Button/Button";
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
const companyLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Cookie Policy",
    path: "/cookie-policy",
  },
  {
    name: "Hiring",
    path: "/hiring",
  },
  {
    name: "Terms of Service",
    path: "/terms-of-service",
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
];
function TopFooter() {
  return (
    <footer className="top-footer container">
      <div className="top-footer__contact">
        <div className="foot-logo heading">
          <Link to="/">
            <img src={logo} width="120px" height="60px" />
          </Link>
        </div>
        <div className="cotnent">
          <p style={{ color: "white" }}>
            {" "}
            Let's make something great together. We are trusted by over 1000+
            Drivers. Join them by using our services and grow your business.
          </p>
          <ul>
            <li>
              <span>
                <FaMapMarker />
              </span>
              E-1475 OMAXE CITY, R. B. ROAD LUCKNOW Lucknow UP 226002 IN
            </li>
            <li>
              <span>
                <FaEnvelope />
              </span>
              info@roadpilot.co.in
            </li>
            <li>
              <span>
                <FaPhone />
              </span>
              1800-571-55-99
            </li>
          </ul>
        </div>
      </div>

      <div className="top-footer__company__links">
        <h3 className="heading">Comapny Links</h3>
        <ul>
          {companyLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className="link">
                <span>
                  <FaAnglesRight />
                </span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="top-footer__links">
        <h3 className="heading">Important links</h3>
        <ul>
          <li>
            <Link to="/services" className="link">
              <span>
                <FaAnglesRight />
              </span>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              <span>
                <FaAnglesRight />
              </span>
              Contact
            </Link>
          </li>

          <li>
            <Link to="/plan" className="link">
              <span>
                <FaAnglesRight />
              </span>
              Plans
            </Link>
          </li>
        </ul>
      </div>

      <div className="top_footer__newsletter">
        <h3 className="heading">Newsletter</h3>
        <p style={{ color: "white" }}>
          Contact Plans Newsletter Get the latest updates at your notice through
          mail...
        </p>
        <div className="email">
          <input type="email" placeholder="Email..." />
          <Button style={{ borderRadius: "10px 0px 10px" }}>Subscribe</Button>
        </div>
        <ul className="social-media-links">
          {socialMediaList.map((item, index) => (
            <li key={item.name}>
              <a href={item.href} className="social-media-icon" target="_blank">
                <span>{item.icon}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default TopFooter;

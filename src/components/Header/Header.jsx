import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  FaBars,
  FaHamburger,
  FaMoon,
  FaSignInAlt,
  FaSun,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import SpanBtn from "../SpanBtn/SpanBtn";
import Button from "../Button/Button";
import Drawer from "../Drawer/Drawer";
import "./HeaderArea.css";
const navlinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Plan",
    path: "/plan",
  },
  {
    name: "Services",
    path: "/services",
  },

  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function Header() {
  // theme context
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* drawer */}
      <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <header>
        <nav>
          <ul>
            <li className="logo">
              <Link to="/">
                {" "}
                <img src={logo} width="140px" />
              </Link>
            </li>
          </ul>
          <ul className="main-navlinks">
            {navlinks.map((link, index) => (
              <li key={link.name}>
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
          <ul className="nav-items-right">
            <li className="theme-icon" onClick={toggleTheme}>
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </li>
            <li>
              <div className="mobile-menu">
                <Button
                  style={{
                    borderRadius: "10px 0px 10px",
                    padding: "10px 12px",
                  }}
                  onClick={toggleDrawer}
                >
                  <FaBars />
                </Button>
              </div>
              <div className="desk-login">
                <Link to="/user/login">
                  <Button style={{ padding: "15px 20px", fontSize: "1.2rem" }}>
                    <FaSignInAlt />
                    Login
                  </Button>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;

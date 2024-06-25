import React from "react";
import "./drawer.css";
import logo from "../../assets/images/logo.png";
import { FaCross, FaUser } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Drawer({ isOpen, toggleDrawer }) {
  return (
    <div>
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={toggleDrawer}
      ></div>
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-head">
          <img src={logo} alt="logo" width="140px" />
          <span>
            <MdCancel />
          </span>
        </div>
        <div className="drawer-body">
          <ul>
            <li>
              <Link to="/user/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/plan">Plan</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="drawer-foot">
          <Link to="/user/login">
            {" "}
            <Button
              style={{
                borderRadius: "10px 0px 10px",
                fontSize: "1.2rem",
                border: "0.05rem solid #fff",
              }}
            >
              <span>
                <FaUser />
              </span>
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Drawer;

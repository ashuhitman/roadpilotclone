import React from "react";
import "./About.css";
import { FaPhone, FaRightLeft } from "react-icons/fa6";
import aboutpic from "../../assets/images/about1.png";
import aboutpic2 from "../../assets/images/about2.png";
import { FaAngleRight, FaCheckCircle } from "react-icons/fa";
import CenterDiv from "../CenterDiv/CenterDiv";
import Circle from "../Circle/Circle";

function About() {
  return (
    <section className="about container">
      <div className="about-text">
        <CenterDiv
          spantext="About Us"
          title="Product/Services"
          para="Across the globe, it can be said that Logistics is the tail of
          commerce and trucking is the tip of the tail. Trucking operations,
          from an Indian perspective, can be said to be the lifeline of commerce
          and economic development. Road Pilot Technologies Pvt Ltd is a one of
          its kind service in India which provides a digital platform in terms
          of mobile app for the core group of people involved in the trucking
          industry i.e. Truck owners, Truck drivers, Dhabhas, and Truck
          mechanics."
        />

        <ul>
          <li>
            <span className="icon">
              <FaCheckCircle />
            </span>
            Maximize Your Sales
          </li>
          <li>
            <span className="icon">
              <FaCheckCircle />
            </span>
            Find Verified and Trusted Drivers
          </li>
          <li>
            <span className="icon">
              <FaCheckCircle />
            </span>
            Find a Job at any Location at any time
          </li>
        </ul>
        <a className="stylish">
          View more <FaAngleRight />
        </a>
      </div>
      <div className="about-img">
        <figure className="">
          <img src={aboutpic} width="100%" />
        </figure>
        <figure className="rel-img">
          <img src={aboutpic2} width="100%" />
        </figure>
        <div className="emergency-div">
          <div>
            <Circle h="60px" w="60px">
              <FaPhone />
            </Circle>
          </div>
          <div>
            <div>
              <b>For Emergency</b>
            </div>
            <div className="emg-number">1800-571-55-99</div>
          </div>
        </div>
        <div className="exp-div">
          <h2>5</h2>
          <p style={{ color: "white" }}>Years Of Exprience</p>
        </div>
      </div>
    </section>
  );
}

export default About;

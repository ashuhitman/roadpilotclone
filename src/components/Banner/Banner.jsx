import React from "react";
import "./Banner.css";
import SpanBtn from "../SpanBtn/SpanBtn";
import { FaArrowRight, FaIdCard } from "react-icons/fa";
import banner from "../../assets/images/banner.png";
import Button from "../Button/Button";
import CenterDiv from "../CenterDiv/CenterDiv";
import ButtonEffect from "../ButtonEffect/ButtonEffect";

import Pulse from "../Pulse/Pulse";

function Banner() {
  return (
    <section className="banner container">
      <div className="banner-left">
        <CenterDiv
          spantext="WELCOME TO ROAD PIOT"
          title="Your Path to Empowered Trucking"
          para=" A trusted platform for Truck Drivers and Fleet Owners to fulfil their
          need."
        />

        <div className="bottom">
          <a href="https://play.google.com/store/apps/details?id=com.lucky.roadpilot">
            <Button style={{ padding: "15px", marginBlock: "20px" }}>
              Register Drivers <FaArrowRight />
            </Button>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.lucky.roadpilot"
            className="right-btn"
          >
            <ButtonEffect>
              Register Owners <FaIdCard />
            </ButtonEffect>
          </a>
        </div>
      </div>
      <div className="banner-right">
        {/* pulse animation */}
        <Pulse />
        <img src={banner} alt="Banner Image" height="100%" width="100%" />
      </div>
    </section>
  );
}

export default Banner;

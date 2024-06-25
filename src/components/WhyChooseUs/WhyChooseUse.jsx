import React, { useState } from "react";
import "./WhyChooseUs.css";
import chooseBg from "../../assets/images/chooseus-bg.png";
import chooseImg from "../../assets/images/choose_us.png";
import { FaCheck, FaPlay } from "react-icons/fa";
import Circle from "../Circle/Circle";
import CenterDiv from "../CenterDiv/CenterDiv";
import Pulse from "../Pulse/Pulse";
import Dialogbox from "../DialogBox/Dialogbox";

function WhyChooseUse() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDialog = () => setIsOpen(!isOpen);
  return (
    <>
      <Dialogbox isOpen={isOpen} toggleDialog={toggleDialog}>
        {isOpen && (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/A8XcRVbhC18?si=KVhB3XvZGQlNa4Kw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        )}
      </Dialogbox>
      <section className="choose-area container">
        <img src={chooseBg} />
        <div className="row">
          <div>
            <div className="row-center">
              <CenterDiv
                spantext="Why Choose Us"
                title="Truck Driver-Centric Focus"
                para=" Road Pilot stands out by prioritizing the needs and aspirations of
              truck drivers. Our app is meticulously designed to cater to the
              unique challenges they face, providing a tailored and effective
              job search and employment generation experience"
              />
            </div>
          </div>
          <div className="wc-row">
            <div className="wc-row__img">
              <Pulse zIndex="100" size="60px" />
              <button
                onClick={() => {
                  console.log("clicked", isOpen);
                  toggleDialog();
                }}
              >
                <span className="icon">
                  <FaPlay />
                </span>
              </button>
              <img src={chooseImg} width="100%" />
            </div>
            <div>
              <div className="wc-content">
                <h3>Access to Insurance Coverage</h3>
                <p>
                  We understand the pressing need for insurance among truck
                  drivers. Road Pilot offers access to health insurance and
                  personal accident insurance coverage, setting us apart from
                  other job search and employment generation apps.
                </p>
              </div>
              <div className="wc-topic">
                <div className="item">
                  <div style={{ marginRight: "20px" }}>
                    <Circle h="40px" w="40px">
                      <FaCheck />
                    </Circle>
                  </div>
                  <div>
                    <h4>Cross-Selling Opportunities</h4>
                    <p>
                      We've partnered with dhabas and truck mechanics to offer
                      you more than just job opportunities. Enjoy cross-selling
                      oppor...
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div style={{ marginRight: "20px" }}>
                    <Circle h="40px" w="40px">
                      <FaCheck />
                    </Circle>
                  </div>
                  <div>
                    <h4>Centralized Platform</h4>
                    <p>
                      Our centralized platform simplifies job search and
                      application processes, saving drivers from the hassle of
                      scouring mul...
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div style={{ marginRight: "20px" }}>
                    <Circle h="40px" w="40px">
                      <FaCheck />
                    </Circle>
                  </div>
                  <div>
                    <h4>Cross-Selling Opportunities</h4>
                    <p>
                      We've partnered with dhabas and truck mechanics to offer
                      you more than just job opportunities. Enjoy cross-selling
                      oppor...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUse;

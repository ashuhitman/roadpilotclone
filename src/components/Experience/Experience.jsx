import React, { useState } from "react";
import "./Experience.css";
import ExpCard from "../ExpCard/ExpCard";
import CenterDiv from "../CenterDiv/CenterDiv";

function Experience() {
  return (
    <section className="experience-area container">
      <div className="exp-header center">
        <CenterDiv
          spantext="Our Experience"
          title=" We At Road Pilot Are On A Mission To Restore The Lost Pride And Honor
          Of Our Truck Drivers And Fleet Owners"
          width="75%"
        />
      </div>
      <div className="exp-card-container">
        <ExpCard total="54" customerType="Mechanic" />
        <ExpCard total="12" customerType="Dhabha" />
        <ExpCard total="1138" customerType="Owners" />
        <ExpCard total="54" customerType="Drivers" />
      </div>
    </section>
  );
}

export default Experience;

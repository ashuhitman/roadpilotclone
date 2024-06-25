import React from "react";
import "./Testimonial.css";
import CenterDiv from "../CenterDiv/CenterDiv";

function Testimonial() {
  return (
    <section className="testimonial-area center container">
      <CenterDiv
        title="What Do They Say About Us."
        spantext="Testimonial"
        para="What do Truck Drivers and Fleet Owners Think about Us ?"
      />
    </section>
  );
}

export default Testimonial;

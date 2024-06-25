import React from "react";
import "./FAQ.css";
import CenterDiv from "../CenterDiv/CenterDiv";
import faqImg from "../../assets/images/faq.jpg";
function FAQ() {
  return (
    <section className="faq-area container">
      <div className="center faq-head">
        <CenterDiv
          spantext="FAQ"
          title="Frequently Asked Question."
          para="Most frequently asked questions by the Drivers and Owners"
        ></CenterDiv>
      </div>
      <div className="faq-img mt">
        <img src={faqImg} />
      </div>
    </section>
  );
}

export default FAQ;

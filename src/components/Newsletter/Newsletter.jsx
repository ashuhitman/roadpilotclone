import React from "react";
import "./Newsletter.css";
import thumbimg from "../../assets/images/newsletter.jpg";
import CenterDiv from "../CenterDiv/CenterDiv";
import Subscribe from "../Subscribe/Subscribe";

function Newsletter() {
  return (
    <section className="newsletter-area container">
      <div className="newsletter-area__left">
        <CenterDiv
          spantext="News Letter"
          title="Subscribe Our News letters"
          para="Get the latest updates at your notice through mail."
        />
        <div>
          <Subscribe />{" "}
        </div>
      </div>

      <div className="newsletter-area__right">
        <figure>
          <img src={thumbimg} width="100%" />
        </figure>
      </div>
    </section>
  );
}

export default Newsletter;

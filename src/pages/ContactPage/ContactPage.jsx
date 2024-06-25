import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import { FaEnvelope, FaMapMarker, FaPaperPlane, FaPhone } from "react-icons/fa";
import "./ContactPage.css";
import Button from "../../components/Button/Button";
import contactThumb from "../../assets/images/contact.jpg";

function ContactPage() {
  return (
    <PageLayout title="Contact Us">
      <>
        <div className="boxes container">
          <div className="box-item">
            <div className="item-head">
              <h3>Call Us</h3>
            </div>
            <div className="item-content">
              <span className="icon">
                <FaPhone />
              </span>
              1800-571-55-99
            </div>
          </div>
          <div className="box-item">
            <div className="item-head">
              <h3>Email</h3>
            </div>
            <div className="item-content">
              <span className="icon">
                <FaEnvelope />
              </span>
              <a href="mailto:info@roadpilot.co.in">info@roadpilot.co.in</a>
            </div>
          </div>
          <div className="box-item">
            <div className="item-head">
              <h3>Office</h3>
            </div>
            <div className="item-content">
              <span className="icon">
                <FaMapMarker />
              </span>
              E-1475 OMAXE CITY, R. B. ROAD LUCKNOW Lucknow UP 226002 IN
            </div>
          </div>
        </div>
        <div className="contact-form container">
          <figure>
            <img src={contactThumb} width="100%" height="100%" />
          </figure>
          <div className="form-content ">
            <h2>Contact Us</h2>
            <form>
              <div className="input-group">
                <p>Name</p>
                <input type="text" />
              </div>
              <div className="input-group">
                <p>Email</p>
                <input type="text" />
              </div>
              <div className="input-group">
                <p>Subject</p>
                <input type="text" />
              </div>
              <div className="input-group">
                <p>Message</p>
                <textarea type="text" style={{ height: "80px" }} />
              </div>
              <div className="input-group">
                <Button>
                  Send Your Message
                  <span>
                    <FaPaperPlane />
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="map-box container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.1743279942457!2d80.94229087424311!3d26.770712476732033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb75c5bf7e81%3A0x5b9d04bd568aae57!2sADDYA%20MULTISERVICES%20PRIVATE%20LTD!5e0!3m2!1sen!2sin!4v1719240649875!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </>
    </PageLayout>
  );
}

export default ContactPage;

import React from "react";
import "./PlanCard.css";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Button from "../Button/Button";
import cornerImg from "../../assets/images/price-top.png";
import { Link } from "react-router-dom";

function PlanCard({ title, price, type, features }) {
  return (
    <div className="plan-card">
      <img src={cornerImg} className="left-img top-img" />
      <img src={cornerImg} className="right-img top-img" />
      <div className="plan-card__head">
        <h2>{title}</h2>
        <h3>
          ₹ {price}
          <span style={{ fontSize: "0.9rem", color: "gray" }}>/{type}</span>
        </h3>
      </div>
      <div className="plan-card__content">
        <ul>
          {features.map((feature, i) => (
            <li key={feature}>
              <span className="icon">
                {" "}
                <FaCheckCircle />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="plan-card__foot">
        <Link to="/user/login">
          <Button style={{ padding: "15px 20px", fontSize: "1.2rem" }}>
            Get Started{" "}
            <span>
              <FaArrowRight />
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PlanCard;

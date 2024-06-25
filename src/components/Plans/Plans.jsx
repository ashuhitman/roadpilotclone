import React from "react";
import "./Plans.css";
import CenterDiv from "../CenterDiv/CenterDiv";
import PlanCard from "../PlanCard/PlanCard";
import { plansData } from "../../data/plansData";

function Plans() {
  return (
    <section className="plan-area container">
      <div className="plan-head center">
        <CenterDiv
          spantext="Our Subscription Plan"
          title="Subscription Plans For Our Users"
          para=" As per the services that we are providing for the users we have
            developed best User-Friendly subscription plans."
        />
      </div>
      <div className="plan-card-container mt">
        {plansData.map((plan, index) => (
          <PlanCard
            key={index}
            title={plan.title}
            price={plan.price}
            type={plan.type}
            features={plan.features}
          />
        ))}
      </div>
    </section>
  );
}

export default Plans;

import React from "react";
import Layout from "../../components/Layout/Layout";
import InfoSection from "../../components/InfoSection/InfoSection";
import { FaArrowRight, FaHome } from "react-icons/fa";
import Plans from "../../components/Plans/Plans";

function PlanPage() {
  return (
    <Layout>
      <InfoSection title="Plans" page="Plans" />
      <Plans />
    </Layout>
  );
}

export default PlanPage;

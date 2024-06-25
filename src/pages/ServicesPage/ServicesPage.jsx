import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import Solutions from "../../components/Solutions/Solutions";
import Plans from "../../components/Plans/Plans";

function ServicesPage() {
  return (
    <>
      <PageLayout title="Services" page="Services">
        <Plans />
      </PageLayout>
    </>
  );
}

export default ServicesPage;

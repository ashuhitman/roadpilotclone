import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import About from "../../components/About/About";
import FAQ from "../../components/FAQ/FAQ";
import Newsletter from "../../components/Newsletter/Newsletter";

function AboutPage() {
  return (
    <>
      <PageLayout title="About" page="About">
        <About />
        <FAQ />
        <Newsletter />
      </PageLayout>
    </>
  );
}

export default AboutPage;

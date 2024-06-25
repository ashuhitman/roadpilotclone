import React from "react";
import Layout from "../Layout/Layout";
import InfoSection from "../InfoSection/InfoSection";

function PageLayout({ children, title, page }) {
  return (
    <>
      <Layout>
        <InfoSection title={title} page={page}></InfoSection>
        {children}
      </Layout>
    </>
  );
}

export default PageLayout;

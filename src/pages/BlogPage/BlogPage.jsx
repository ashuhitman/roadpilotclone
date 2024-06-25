import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import Blog from "../../components/Blog/Blog";
import FAQ from "../../components/FAQ/FAQ";
import Newsletter from "../../components/Newsletter/Newsletter";
import { blogData } from "../../data/blogData";

function BlogPage() {
  return (
    <>
      <PageLayout title="Blog" page="Blog">
        <Blog blogData={blogData} />
        <FAQ />
        <Newsletter />
      </PageLayout>
    </>
  );
}

export default BlogPage;

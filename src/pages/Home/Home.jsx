import React from "react";
import "./Home.css";
import Layout from "../../components/Layout/Layout";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Solutions from "../../components/Solutions/Solutions";
import WhyChooseUse from "../../components/WhyChooseUs/WhyChooseUse";
import Experience from "../../components/Experience/Experience";
import Plans from "../../components/Plans/Plans";
import Vision from "../../components/Vision/Vision";
import Testimonial from "../../components/Testimonial/Testimonial";
import Newsletter from "../../components/Newsletter/Newsletter";
import { FaQ } from "react-icons/fa6";
import Blog from "../../components/Blog/Blog";
import FAQ from "../../components/FAQ/FAQ";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.png";
import { blogData } from "../../data/blogData";
// get blog data from server

function Home() {
  return (
    <Layout>
      <>
        {/* Banner section */}
        <Banner />
        {/* About section */}
        <About />
        {/* Solutions section */}
        <Solutions />
        {/* Why Choose us section */}
        <WhyChooseUse />
        {/* Experience section */}
        <Experience />
        {/* Subscription plan section */}
        <Plans />
        {/* Vision section */}
        <Vision />
        {/* Testimonial section} */}
        <Testimonial />
        {/* Newsletter section */}
        <Newsletter />
        {/* Frequently asked questions section */}
        <FAQ />
        {/* Blog section */}
        <Blog blogData={blogData} />
      </>
    </Layout>
  );
}

export default Home;

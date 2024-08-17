import AboutPage from "@/components/AboutPage/AboutPage";
import BrandOne from "@/components/BrandOne/BrandOne";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const About = () => {
  return (
    <Layout pageTitle="About Us">
      <PageHeader pageTitle="About Us" />
      <AboutPage />
      <BrandOne />
    </Layout>
  );
};

export default About;

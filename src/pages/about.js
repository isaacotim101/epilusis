import AboutPage from "@/components/AboutPage/AboutPage";
import JoinOne from "@/components/JoinOne/JoinOne";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import TeamOne from "@/components/TeamOne/TeamOne";
import React from "react";

const About = () => {
  return (
    <Layout pageTitle="About">
      <PageHeader pageTitle="About" />
      <AboutPage />
      <JoinOne className="join-one__about" />
      <TeamOne />
    </Layout>
  );
};

export default About;

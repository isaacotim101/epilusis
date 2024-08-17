import ProgramDetailsPage from "@/components/ProgramDetails/ProgramDetails";
//import ProgramDetailsPage from "@/components/";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const ProgramDetails = () => {
  return (
    <Layout pageTitle="Program">
      <PageHeader pageTitle="Program" />
      <ProgramDetailsPage />
    </Layout>
  ); 
};

export default ProgramDetails;

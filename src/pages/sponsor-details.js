import SponsorDetailsPage from "@/components/SponsorDetails/SponsorDetails";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const SponsorDetails = () => {
  return (
    <Layout pageTitle="Educate a child">
      <PageHeader pageTitle="Educate a child" />
      <SponsorDetailsPage />
    </Layout>
  );
};

export default SponsorDetails;

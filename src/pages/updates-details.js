import Layout from "@/components/Layout/Layout";
import UpdatesDetailsPage from "@/components/UpdatesDetailsPage/NewsDetailsPage";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const UpdatesDetails = () => {
  return (
    <Layout pageTitle="Updates Details">
      <PageHeader pageTitle="Updates Details" />
      <UpdatesDetailsPage />
    </Layout>
  );
};

export default UpdatesDetails;
import StoriesDetailsPage from "@/components/StoriesDetails/StoriesDetails";
//import StoriesDetailsPage from "@/components/";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const StoriesDetails = () => {
  return (
    <Layout pageTitle="Success Stories">
      <PageHeader pageTitle="Success Stories" />
      <StoriesDetailsPage />
    </Layout>
  );
};

export default StoriesDetails;

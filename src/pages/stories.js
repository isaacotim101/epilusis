import StoriesPage from "@/components/StoriesPage/Storiespage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Stories = () => {
  return (
    <Layout pageTitle="Success Stories">
      <PageHeader pageTitle="Success Stories" />
      <StoriesPage />
    </Layout>
  );
};

export default Stories;

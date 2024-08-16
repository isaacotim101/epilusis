import Layout from "@/components/Layout/Layout";
import Sermons from "@/components/NewsPage/NewsPage";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Sermon = () => {
  return (
    <Layout pageTitle="Sermons">
      <PageHeader pageTitle="Sermons" />
      <Sermons />
    </Layout>
  );
};

export default Sermon;

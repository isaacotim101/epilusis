import Layout from "@/components/Layout/Layout";
import UpdatesPage from "@/components/UpdatePage/UpdatesPage";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Updates = () => {
  return (
    <Layout pageTitle="Updates">
      <PageHeader pageTitle="Updates" />
      <UpdatesPage />
    </Layout>
  );
};

export default Updates;

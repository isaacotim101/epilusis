import CausesPage from "@/components/CausesPage/CausesPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Causes = () => {
  return (
    <Layout pageTitle="Campaigns & Fundraising">
      <PageHeader pageTitle="Campaigns & Fundraising" />
      <CausesPage />
    </Layout>
  );
};

export default Causes;

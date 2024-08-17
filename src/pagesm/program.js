import ProgramPage from "@/components/program/Program";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Program = () => {
  return (
    <Layout pageTitle="Programs">
      <PageHeader pageTitle="Programs" />
      <ProgramPage />
    </Layout>
  );
}; 

export default Program;

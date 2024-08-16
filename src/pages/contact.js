import Epilusis from "@/components/Epilusis/Epilusis";
import ContactPage from "@/components/ContactPage/ContactPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <PageHeader pageTitle="Contact" />
      <ContactPage />
      <Epilusis />
    </Layout>
  );
};

export default Contact;

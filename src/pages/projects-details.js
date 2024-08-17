import ProjectsDetailsPage from "@/components/ProjectsDetails/ProjectsDetails";
//import ProjectsDetailsPage from "@/components/";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const ProjectsDetails = () => {
  return (
    <Layout pageTitle="Succesful Projects">
      <PageHeader pageTitle="Succesful Projects" />
      <ProjectsDetailsPage />
    </Layout>
  );
};

export default ProjectsDetails;

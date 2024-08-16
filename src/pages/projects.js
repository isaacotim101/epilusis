import ProjectsPage from "@/components/SuccessProjects/SuccessProjects";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Projects = () => {
  return (
    <Layout pageTitle="Successful Projects">
      <PageHeader pageTitle="Successful Projects" />
      <ProjectsPage />
    </Layout>
  );
};

export default Projects;
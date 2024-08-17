import BecomeVolunteer from "@/components/BecomeVolunteer/BecomeVolunteer";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import TeamOne from "@/components/TeamOne/TeamOne";
import React from "react";

const Volunteers = () => {
  return (
    <Layout pageTitle="Team">
      <PageHeader pageTitle="Team" />
      <TeamOne className="team-page" />
      <BecomeVolunteer />
    </Layout>
  );
};

export default Volunteers;

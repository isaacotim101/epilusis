import CausesOne from "@/components/CausesOne/CausesOne";
import Charity from "@/components/Charity/Charity";
import HelpingOne from "@/components/HelpingOne/HelpingOne";
import HelpThem from "@/components/HelpThem/HelpThem";
import JoinOne from "@/components/JoinOne/JoinOne";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import NewsOne from "@/components/NewsOne/NewsOne";

const Home = () => {
  return (
    <Layout pageTitle="African Hearts">
      <MainSlider />
      <Charity />
      <CausesOne />
      <NewsOne />
      <JoinOne />
      <HelpingOne />
      <HelpThem />
    </Layout>
  );
};

export default Home;

import CausesOne from "@/components/CausesOne/CausesOne";
import BrandOne from "@/components/BrandOne/BrandOne";
import Charity from "@/components/Charity/Charity";
import HelpingOne from "@/components/HelpingOne/HelpingOne";
import HelpThem from "@/components/HelpThem/HelpThem";
import JoinOne from "@/components/JoinOne/JoinOne";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import NewsOne from "@/components/NewsOne/NewsOne";
import UpdatesOne from "@/components/UpdateSlider/Slider";
import SponsorSlider from "@/components/SponsorSlider/Slider";
const Home = () => {
  return (
    <Layout pageTitle="African Hearts">
      <MainSlider />
      <Charity />
      <HelpingOne />
      <SponsorSlider/>
      <NewsOne />
      <BrandOne />
      <JoinOne />
      <HelpThem />
    </Layout>
  );
};

export default Home;

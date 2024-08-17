import BrandOne from "@/components/BrandOne/BrandOne";
import Charity from "@/components/Charity/Charity";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSliderTwo/MainSliderTwo";
import NewsOne from "@/components/NewsOne/NewsOne";
const Home = () => {
  return (
    <Layout pageTitle=" Epilusis Ministries International">
      <MainSlider />
      <Charity />
      <NewsOne />
      <BrandOne />
    </Layout>
  );
};

export default Home;

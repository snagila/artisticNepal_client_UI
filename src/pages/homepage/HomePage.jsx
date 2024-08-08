import React from "react";

import HomepageBanner from "../../components/homepage_components/homepagebanner/HomepageBanner";
import Header from "../../components/homepage_components/header/Header";
import CustomCarousel from "../../components/homepage_components/carousel/Carousel";

const HomePage = () => {
  return (
    <>
      <HomepageBanner />
      <Header />
      <CustomCarousel />
    </>
  );
};

export default HomePage;

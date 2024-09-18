import React, { useEffect } from "react";

import HomepageBanner from "../../components/homepage_components/homepagebanner/HomepageBanner";
import Header from "../../components/homepage_components/header/Header";
import CustomCarousel from "../../components/homepage_components/carousel/Carousel";
import Description from "../../components/homepage_components/nepaliArt_description/Description";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../redux/categoryRedux/categoryActions";
import { getProductsAction } from "../../redux/productRedux/productActions";
import { Container } from "react-bootstrap";

const HomePage = () => {
  const { categories } = useSelector((state) => state.category);

  return (
    <>
      {" "}
      <Header categories={categories} />
      <CustomCarousel categories={categories} />
      <Description />
      <Container></Container>
    </>
  );
};

export default HomePage;

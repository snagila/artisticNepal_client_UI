import React, { useEffect } from "react";

import HomepageBanner from "../../components/homepage_components/homepagebanner/HomepageBanner";
import Header from "../../components/homepage_components/header/Header";
import CustomCarousel from "../../components/homepage_components/carousel/Carousel";
import Description from "../../components/homepage_components/nepaliArt_description/Description";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../redux/categoryRedux/categoryActions";
import { getProductsAction } from "../../redux/productRedux/productActions";
import { Container } from "react-bootstrap";
import ScrollTable from "../../components/reusable_Components/scrollableTable/ScrollTable";

const HomePage = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state.product);
  // console.log(products);
  // console.log(categories);

  useEffect(() => {
    dispatch(getCategoriesAction());
    dispatch(getProductsAction());
  }, []);
  return (
    <>
      {" "}
      <Header categories={categories} />
      <CustomCarousel categories={categories} />
      <Description />
      <Container>
        <ScrollTable products={products} categories={categories} />
      </Container>
    </>
  );
};

export default HomePage;

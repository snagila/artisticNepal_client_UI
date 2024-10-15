import Header from "../../components/homepage_components/header/Header";
import CustomCarousel from "../../components/homepage_components/carousel/Carousel";
import Description from "../../components/homepage_components/nepaliArt_description/Description";
import { useSelector } from "react-redux";
import ProductOnSale from "../../components/homepage_components/ProductOnSale";
import ProductCategory from "../../components/homepage_components/ProductCategory/ProductCategory";

const HomePage = () => {
  const { categories } = useSelector((state) => state.category);
  const { orders } = useSelector((state) => state.order);

  return (
    <>
      {" "}
      <Header categories={categories} />
      <CustomCarousel categories={categories} />
      <ProductOnSale />
      <Description />
      <ProductCategory />
      {/* Top selling product */}
      {/* {orders.map((order) => console.log(order))} */}
      {/* <ProductCard /> */}
      <Description />
    </>
  );
};

export default HomePage;

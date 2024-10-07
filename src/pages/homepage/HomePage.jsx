import Header from "../../components/homepage_components/header/Header";
import CustomCarousel from "../../components/homepage_components/carousel/Carousel";
import Description from "../../components/homepage_components/nepaliArt_description/Description";
import { useSelector } from "react-redux";
import ProductCard from "../../components/reusable_Components/productCard/ProductCard";
import ProductOnSale from "../../components/homepage_components/ProductOnSale";

const HomePage = () => {
  const { categories } = useSelector((state) => state.category);
  const { orders } = useSelector((state) => state.order);

  return (
    <>
      {" "}
      <Header categories={categories} />
      <CustomCarousel categories={categories} />
      <Description />
      {/* Top selling product */}
      <ProductOnSale />
      {/* {orders.map((order) => console.log(order))} */}
      {/* <ProductCard /> */}
    </>
  );
};

export default HomePage;

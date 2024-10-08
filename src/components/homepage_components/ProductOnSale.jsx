import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import ScrollTable from "../reusable_Components/scrollableTable/ScrollTable";
import { Row } from "react-bootstrap";

const ProductOnSale = () => {
  const { products } = useSelector((state) => state.product);
  const currentDate = Date.now();
  //   console.log(products);
  const onSaleProducts = useMemo(
    () =>
      products.filter((product) => {
        const salesStartDate = new Date(product.salesStartDate).getTime();
        const salesEndDate = new Date(product.salesEndDate).getTime();
        return salesStartDate <= currentDate && salesEndDate >= currentDate;
      }),
    [products, currentDate]
  );

  return (
    <>
      <Row className="p-4">
        <h3 className=" p-auto ">On Sale </h3>
        <ScrollTable products={onSaleProducts} />
      </Row>
    </>
  );
};

export default ProductOnSale;

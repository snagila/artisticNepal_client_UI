import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import ScrollTable from "../reusable_Components/scrollableTable/ScrollTable";
import { Button, Row } from "react-bootstrap";

const ProductOnSale = () => {
  const { products } = useSelector((state) => state.product);
  const currentDate = Date.now();
  const onSaleProducts = useMemo(
    () =>
      products.filter((product) => {
        const salesStartDate = new Date(product.salesStartDate).getTime();
        const salesEndDate = new Date(product.salesEndDate).getTime();
        return salesStartDate <= currentDate && salesEndDate >= currentDate;
      }),
    [products, currentDate]
  );
  console.log(onSaleProducts);
  return (
    <>
      <Row className="px-2 m-auto">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className=" p-auto ">On Sale</h3>
          <Button size="sm" variant="outline-danger">
            View All Sale
          </Button>
        </div>

        <ScrollTable products={onSaleProducts} />
      </Row>
    </>
  );
};

export default ProductOnSale;

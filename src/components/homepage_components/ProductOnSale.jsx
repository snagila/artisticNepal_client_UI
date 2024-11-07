import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import ScrollTable from "../reusable_Components/scrollableTable/ScrollTable";
import { Row, Spinner } from "react-bootstrap";

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

  return (
    <>
      <Row className="p-4">
        <h3 className=" p-auto ">On Sale </h3>
        {products.length > 0 ? (
          <ScrollTable products={onSaleProducts} />
        ) : (
          <div
            style={{ height: "30vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Spinner animation="border" role="status" />
          </div>
        )}
      </Row>
    </>
  );
};

export default ProductOnSale;

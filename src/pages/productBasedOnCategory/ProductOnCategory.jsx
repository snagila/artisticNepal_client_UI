import React from "react";
import "./productOnCategory.css";
import Header from "../../components/homepage_components/header/Header";

import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductSwiper from "../../components/productOnCategorySwiper/ProductSwiper";

const ProductOnCategory = () => {
  const { id } = useParams();
  const { categories } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state.product);
  const productCategory = categories?.find(
    (category) => category.category === id
  );
  const sameCategoryProduct = products?.filter(
    (product) => product.category === id
  );
  // const gridArea = {
  //   container: {
  //     display: "grid",
  //     gridTemplateRows: "320px auto",
  //     gridTemplateColumns: "1fr 1fr 1fr 1fr",
  //     gap: "10px",
  //   },
  //   container1:{

  //   }
  // };

  return (
    <>
      <Header />

      <Row className=" ">
        <div className="p-1 " style={{ backgroundColor: "rgb(255, 252, 246)" }}>
          <Container>
            <Row className="">
              <Col>
                <span className="fs-4 fw-bold">
                  {productCategory?.category}
                </span>{" "}
                &nbsp; ({sameCategoryProduct.length} products found)
              </Col>
              <Col className="d-flex justify-content-end ">
                <Form.Select className="  w-25 ">
                  <option>Filter Product</option>
                  <option>Newest</option>
                  <option>Price (Low - High)</option>
                  <option>Price(High -Low)</option>
                  {/* Add more options here */}
                </Form.Select>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <Row className="">
              {sameCategoryProduct?.map((product) => (
                <Col
                  className="mt-3 d-flex align-items-center justify-content-center "
                  key={product._id}
                >
                  <Card
                    style={{
                      width: "18rem",
                      backgroundColor: "rgb(245,239,232)",
                      border: "none",
                    }}
                  >
                    <Link to={`/products/product/${product.sku}`}>
                      <ProductSwiper
                        images={[...product.thumbnail, ...product.images]}
                        swiperFrom={"productOnCategory"}
                      />
                    </Link>

                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </Row>
      {/* </Container> */}
    </>
  );
};

export default ProductOnCategory;

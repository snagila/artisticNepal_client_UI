import React, { useEffect, useState } from "react";
import Header from "../../components/homepage_components/header/Header";
import { Badge, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductSwiper from "../../components/productOnCategorySwiper/ProductSwiper";

const ProductOnCategory = () => {
  const { categories } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state.product);

  const [sortedProducts, setSortedProducts] = useState([]);

  const { id } = useParams();

  const productCategory = categories?.find(
    (category) => category.category === id
  );
  const sameCategoryProduct = products?.filter(
    (product) => product.category === id
  );

  const handleSelectChange = (e) => {
    const value = e.target.value;
    let sortedArray = [...sameCategoryProduct];
    if (value === "priceAscending") {
      sortedArray.sort((a, b) => a.price - b.price);
    } else if (value === "priceDescending") {
      sortedArray.sort((a, b) => b.price - a.price);
    } else {
      sortedArray.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    }
    setSortedProducts(sortedArray);
  };

  useEffect(() => {
    setSortedProducts(sameCategoryProduct);
  }, [id, products, categories]);

  return (
    <>
      <Header />

      <Row className=" ">
        <div className="p-1 " style={{ backgroundColor: "rgb(255, 252, 246)" }}>
          <Container>
            <Row className="">
              <Col className="text-nowrap">
                <span className="fs-4 fw-bold">
                  {productCategory?.category}
                </span>{" "}
                &nbsp; ({sameCategoryProduct.length} products found)
              </Col>
              <Col className="d-flex justify-content-end ">
                <Form.Select className="  w-25 " onChange={handleSelectChange}>
                  <option>Filter Product</option>
                  <option value={"newest"}>Newest</option>
                  <option value={"priceAscending"}>Price (Low - High)</option>
                  <option value={"priceDescending"}>Price(High -Low)</option>
                  {/* Add more options here */}
                </Form.Select>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <Row className="">
              {(id ? sortedProducts : sameCategoryProduct)?.map((product) => (
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
                    className="position-relative"
                  >
                    <Link to={`/products/product/${product.sku}`}>
                      <ProductSwiper
                        images={[...product.thumbnail, ...product.images]}
                        swiperFrom={"productOnCategory"}
                      />
                    </Link>
                    {/* On Sale Badge */}
                    {product.salesPrice && (
                      <Badge
                        className="bg-danger position-absolute top-0 end-0 p-2 m-1"
                        style={{ zIndex: 1 }}
                      >
                        {(
                          ((product.price - product.salesPrice) /
                            product.price) *
                          100
                        ).toFixed(2)}
                        % off
                      </Badge>
                    )}

                    <Card.Body>
                      <Card.Title className="d-flex justify-content-between w-100">
                        <div>{product.name}</div>
                        <div>
                          {product.salesPrice ? (
                            <span className="text-danger">
                              ${product.salesPrice}
                            </span>
                          ) : (
                            <span className="text-secondary">
                              {" "}
                              ${product.price}
                            </span>
                          )}
                        </div>
                        <span className="text-secondary"></span>
                      </Card.Title>
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

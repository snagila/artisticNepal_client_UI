import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductCategory = () => {
  const { categories } = useSelector((state) => state.category);
  console.log(categories);
  return (
    <>
      <Row className="justify-content-evenly gap-2 p-2">
        {categories?.map((category) => (
          <Col
            key={category._id}
            xs={5}
            md={3}
            className="d-flex flex-column justify-content-center mb-4"
          >
            <Link to={`/products/${category.category}`} className="withoutLink">
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={category.categoryThumbnail?.map(
                    (thumbnail) => thumbnail
                  )}
                  className="img-fluid"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
            </Link>
            <div className="fs-3 p-2">{category.category}</div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductCategory;
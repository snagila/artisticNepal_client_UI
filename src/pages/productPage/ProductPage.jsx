import React, { useEffect, useState } from "react";
import "./productPage.css";
import { useParams } from "react-router-dom";
import { getAProductAction } from "../../redux/productRedux/productActions";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/homepage_components/header/Header";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

const ProductPage = () => {
  const [productPicDisplay, setProductPicDisplay] = useState("");
  const selectQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  const [productDescription, setProductDescription] = useState(
    product.description.slice(0, 400)
  );
  const { id } = useParams();
  const allImages = product.thumbnail
    ?.map((picture) => picture)
    .concat(product.images?.map((images) => images));

  const showFullDescription = () => {};
  useEffect(() => {
    dispatch(getAProductAction(id));
  }, [id]);
  useEffect(() => {
    if (product?.thumbnail) {
      setProductPicDisplay(product.thumbnail?.map((picture) => picture));
    }
  }, [product]);
  return (
    <>
      <Header />
      <Container className="m-auto" fluid>
        <Row className="productPageRow1">
          <Col className=" productPageCol1" xs={12} md={1}>
            <Col xs={12} className="sidePicturesDiv">
              {allImages?.map((image, index) => (
                <Col key={index} className="mb-1">
                  <img
                    src={image}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    onClick={() => {
                      setProductPicDisplay(image);
                    }}
                  />
                </Col>
              ))}
            </Col>
          </Col>
          <Col className="mainProductImageCol " xs={12} md={5}>
            <Image src={productPicDisplay} />
          </Col>
          <Col className="productDescriptionCol" xs={12} md={6}>
            <Row className="">
              <Row className="productName-row">
                <h3 className="p-0">{product.name}</h3>
              </Row>
              <Row className="fw-bold fs-4 " style={{ color: "#696969" }}>
                {" "}
                $ {product.price}
              </Row>
              <Row>Reviews:</Row>
              <Row className="mt-2">
                <Row className="mb-2">
                  <Col xs={2} className="d-flex  align-items-center p-0">
                    Quantity:
                  </Col>
                  <Col>
                    <Form.Select className="w-50">
                      {selectQuantity.map((quantity, i) => (
                        <option key={i}>{quantity}</option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>
                <Col className="p-0 ">
                  <Button
                    className="w-100 "
                    style={{ background: "#444444", borderColor: "#444444" }}
                  >
                    Add to bag
                  </Button>
                </Col>
                <Col className="p-0 ps-1">
                  {" "}
                  <Button variant="outline-danger" size="md">
                    {" "}
                    <FaHeart />
                  </Button>
                </Col>
              </Row>

              {/* <Row>
                <div className=" p-0"> Overview</div>
                {product.description}
                <Button>Read more</Button>
              </Row> */}
            </Row>
          </Col>
        </Row>

        <Row className="pt-5 productDescriptionRow">
          <span className="">Description:</span>
          <span>
            {productDescription}...
            {productDescription.length > 400 ? (
              <button
                className="product-readmore-button"
                onClick={() =>
                  setProductDescription(product.description.slice(0, 400))
                }
              >
                Read Less..
              </button>
            ) : (
              <button
                className="product-readmore-button"
                onClick={() => setProductDescription(product.description)}
              >
                Read More..
              </button>
            )}
          </span>
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;

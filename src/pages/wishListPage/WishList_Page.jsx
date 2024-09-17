import React from "react";
import Header from "../../components/homepage_components/header/Header";
import { useSelector } from "react-redux";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const WishList_Page = () => {
  const { wishList } = useSelector((state) => state.wishList);

  return (
    <>
      <Header />
      <Container>
        <Row>
          {wishList.map((item) => (
            <Col
              className="mt-3  d-flex justify-content-center"
              key={item._id}
              xs={12}
              md={3}
            >
              <Card
                style={{
                  width: "18rem",
                  backgroundColor: "rgb(245,239,232)",
                  border: "none",
                  height: "25rem",
                }}
              >
                <div className="d-flex flex-column align-items-between justify-content-between">
                  <Row>
                    {" "}
                    <Link to={`/products/product/${item.sku}`}>
                      <Card.Img
                        variant="top"
                        style={{ minHeight: "18rem" }}
                        src={item.thumbnail?.map((item) => item)}
                      />
                    </Link>
                  </Row>
                  <Row>
                    <Card.Body>
                      <Row>
                        <Card.Title className="d-flex justify-content-center">
                          {item.name}
                        </Card.Title>
                      </Row>
                      <Row>
                        <Col>
                          <Button variant="outline-secondary" className="w-100">
                            Add to cart
                          </Button>
                        </Col>
                        <Col>
                          <Button variant="outline-danger" className="w-100">
                            Remove
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default WishList_Page;

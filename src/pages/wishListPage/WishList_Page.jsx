import React from "react";
import Header from "../../components/homepage_components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  addWishlistitemsToCartAction,
  deleteWishlistItemAction,
} from "../../redux/wishListRedux/wishListActions";

const WishList_Page = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.helper);
  const { wishList } = useSelector((state) => state.wishList);
  const { user } = useSelector((state) => state.user);

  const handleAddToCart = (item) => {
    dispatch(addWishlistitemsToCartAction(item));
  };

  const handleOnDelete = (itemSKU, itemName) => {
    dispatch(deleteWishlistItemAction(itemSKU, itemName));
  };
  return (
    <>
      <Header />
      <Container>
        {wishList?.length === 0 && user._id && (
          <Row>
            <Row className="mt-3  d-flex justify-content-center fs-3 fst-italic">
              WishList
            </Row>
            <Row className="fs-2 text-danger d-flex justify-content-center pt-5">
              {" "}
              No items yet :(
            </Row>
          </Row>
        )}
        {wishList?.length === 0 && !user._id && (
          <Row>
            <Row className="mt-3  d-flex justify-content-center fs-3 fst-italic">
              WishList
            </Row>
            <Row className="fs-2 text-danger d-flex justify-content-center pt-5">
              Please
              <Link to={"/user/login"} className="withoutLink text-primary">
                login
              </Link>{" "}
              to add items.
            </Row>
          </Row>
        )}

        {wishList?.length > 0 && (
          <Row>
            <Row className="mt-3  d-flex justify-content-center fs-3 fst-italic">
              WishList
            </Row>
            <Row className="">
              {wishList.map((item) => (
                <Col className="mt-5" key={item._id} xs={6} md={3}>
                  <Card
                    style={{
                      backgroundColor: "rgb(245,239,232)",
                      border: "none",
                    }}
                  >
                    <div className="d-flex flex-column align-items-between justify-content-between position-relative">
                      <Row>
                        <Link to={`/products/product/${item.sku}`}>
                          <Card.Img
                            variant="top"
                            style={{
                              height: "15rem",
                              width: "100%",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                            src={item.thumbnail?.map((item) => item)}
                          />
                          {item.availableQuantity < 1 && (
                            <Badge
                              className="bg-danger position-absolute top-0 end-0 p-2 me-3 mt-1"
                              style={{ zIndex: 1 }}
                            >
                              Sold Out
                            </Badge>
                          )}
                        </Link>
                      </Row>
                      <Row>
                        <Card.Body>
                          <Row>
                            <Card.Title className="text-wrap">
                              {item.name}
                            </Card.Title>
                          </Row>
                          <Row className="gap-1">
                            <Col xs={12} md={5}>
                              <Button
                                variant="outline-secondary"
                                className="w-100"
                                onClick={() => handleAddToCart(item)}
                                disabled={
                                  isLoading || item.availableQuantity < 1
                                }
                              >
                                Add to cart
                              </Button>
                            </Col>
                            <Col>
                              <Button
                                variant="outline-danger"
                                className="w-100"
                                onClick={() =>
                                  handleOnDelete(item.sku, item.name)
                                }
                                disabled={isLoading}
                              >
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
          </Row>
        )}
      </Container>
    </>
  );
};

export default WishList_Page;

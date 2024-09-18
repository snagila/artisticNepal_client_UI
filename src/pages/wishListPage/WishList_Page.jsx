import React from "react";
import Header from "../../components/homepage_components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
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
          <Row className="fs-2 text-danger d-flex justify-content-center pt-5">
            {" "}
            No items yet :(
          </Row>
        )}
        {wishList?.length === 0 && !user._id && (
          <div className="fs-2 text-danger d-flex justify-content-center">
            Please &nbsp;<Link to={"/user/login"}>login</Link> &nbsp; to add
            items.
          </div>
        )}

        {wishList?.length > 0 && (
          <Row>
            {wishList.map((item) => (
              <Col
                className="mt-3  d-flex justify-content-center"
                key={item._id}
                xs={6}
                md={3}
              >
                <Card
                  style={{
                    backgroundColor: "rgb(245,239,232)",
                    border: "none",
                  }}
                >
                  <div className="d-flex flex-column align-items-between justify-content-between">
                    <Row>
                      {" "}
                      <Link to={`/products/product/${item.sku}`}>
                        <Card.Img
                          variant="top"
                          style={{ height: "15rem" }}
                          src={item.thumbnail?.map((item) => item)}
                        />
                      </Link>
                    </Row>
                    <Row>
                      <Card.Body>
                        <Row>
                          <Card.Title className="text-wrap">
                            {item.name}
                          </Card.Title>
                        </Row>
                        <Row>
                          <Col className="p-0">
                            <Button
                              variant="outline-secondary"
                              className="w-100"
                              onClick={() => handleAddToCart(item)}
                              disabled={isLoading}
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
        )}
      </Container>
    </>
  );
};

export default WishList_Page;

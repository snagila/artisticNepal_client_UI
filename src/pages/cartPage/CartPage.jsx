import React, { useEffect, useState } from "react";
import "./cartPage.css";
import Header from "../../components/homepage_components/header/Header";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  editProductQuantityAction,
  getCartItems,
} from "../../redux/cartItemRedux/cartItemsActions";
import { IoCloseSharp } from "react-icons/io5";

const CartPage = () => {
  const { isLoading } = useSelector((state) => state.helper);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cardContents = cartItems?.map((allitems) => allitems);

  const totalNumberOfItemsInCart = cardContents
    ?.map((singleItem) =>
      singleItem.items.map((item) => {
        return item.quantity;
      })
    )
    .flat()
    .reduce((acc, curr) => {
      return acc + curr;
    });

  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  return (
    <>
      <Header />
      <Container className="pt-4">
        <div className="fs-4 mb-1">
          My Cart ( {totalNumberOfItemsInCart || 0} items )
        </div>

        <Row>
          <Col xs={12} md={6}>
            {cardContents?.map((item) => {
              const cartId = item._id;

              return item.items.map((singleItem) => {
                const productIdOnCart = singleItem._id;
                const [productQuantity, setProductQuantity] = useState();

                useEffect(() => {
                  if (singleItem._id) {
                    setProductQuantity(singleItem.quantity);
                  }
                }, [singleItem._id]);
                useEffect(() => {
                  dispatch(
                    editProductQuantityAction(
                      cartId,
                      productIdOnCart,
                      productQuantity
                    )
                  );
                }, [productQuantity, productIdOnCart]);
                return (
                  <Card
                    style={{ height: "10rem", backgroundColor: "#FFFCF6" }}
                    className="mb-2 "
                    key={item?._id}
                  >
                    {isLoading ? (
                      <Spinner animation="border" size="lg" />
                    ) : (
                      <Row xs={12}>
                        {/* {console.log(singleItem)} */}
                        <Col xs={4} className="p-0 m-0">
                          <Card.Img
                            src={singleItem.thumbnail.map((image) => image)}
                            alt=""
                            height={158}
                          />
                        </Col>

                        <Col>
                          <Card.Body>
                            <Card.Title className="text-nowrap">
                              {singleItem.name}
                            </Card.Title>
                            <Card.Text className="pt-2">
                              <div className="cart-quantity">
                                <button
                                  className="cartitem-decrement-btn"
                                  onClick={() =>
                                    setProductQuantity(productQuantity - 1)
                                  }
                                >
                                  -
                                </button>

                                <button className="cartitem-quantity-btn ">
                                  {productQuantity}
                                </button>
                                <button
                                  className="cartitem-increment-btn"
                                  onClick={() =>
                                    setProductQuantity(productQuantity + 1)
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </Card.Text>
                            <div className=" d-flex justify-content-between align-items-center  fw-bold text-danger fs-4">
                              $ {singleItem.price * singleItem.quantity}
                            </div>
                          </Card.Body>
                        </Col>

                        <Col xs={1} md={1} className="p-0">
                          <IoCloseSharp size={25} />
                        </Col>
                      </Row>
                    )}
                  </Card>
                );
              });
            })}
          </Col>
          <Col>sdjhfgsdjkfgksd</Col>
        </Row>
      </Container>
    </>
  );
};

export default CartPage;

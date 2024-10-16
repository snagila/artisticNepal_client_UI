import React, { useEffect } from "react";
import "./cartPage.css";
import Header from "../../components/homepage_components/header/Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CartPage_Col1_cartItems from "../../components/cartPage_components/CartPage_Col1_cartItems";
import CartPage_Col2_payment from "../../components/cartPage_components/CartPage_Col2_payment";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const totalNumberOfItemsInCart = cartItems
    ?.map((singleItem) => {
      return singleItem.quantity;
    })
    .flat()
    ?.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

  return (
    <>
      <Header />
      <Container className="pt-4 m-auto">
        {cartItems?.length === 0 && user?._id && (
          <Row className="fs-2 text-danger d-flex justify-content-center pt-5">
            {" "}
            No items in cart yet :(
          </Row>
        )}
        {cartItems?.length === 0 && !user._id && (
          <div className="fs-2 text-danger d-flex justify-content-center">
            Please &nbsp;<Link to={"/user/login"}>login</Link> &nbsp; to add
            items.
          </div>
        )}
        {cartItems?.length > 0 && (
          <Row>
            <Col xs={12} md={8} className="">
              <Row className="fs-4 mb-1">
                {" "}
                My Cart ( {totalNumberOfItemsInCart || 0}{" "}
                {totalNumberOfItemsInCart < 2 ? "item" : "items"} )
              </Row>
              <Row className="cartPage-col1">
                {cartItems?.map((item) => {
                  return <CartPage_Col1_cartItems item={item} key={item._id} />;
                })}
              </Row>
            </Col>

            <Col className="rounded m-1">
              <Row className="d-flex align-items-center justify-content-center fw-bold fs-4">
                {" "}
                My Order Summery
              </Row>
              <Row className="p-3 mt-2" style={{ backgroundColor: "#FFFCF7" }}>
                <Col xs={12}>
                  <div>
                    {user.firstName} {user.lastName}
                  </div>
                  <div>{user.address}</div>
                  <div>{user.email}</div>
                </Col>
                <Col>
                  <Link to={"/user/dashboard"}>
                    <Button variant="outline-primary">Update Details</Button>
                  </Link>
                </Col>
              </Row>
              <Row>
                <CartPage_Col2_payment />
              </Row>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default CartPage;

import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const CartPage_Col2_payment = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
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
  const totalPrice = cartItems
    ?.map((singleItem) => {
      return singleItem.totalPrice;
    })
    .flat()
    ?.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  const deliveryCharge = totalPrice < 200 ? "$ 10" : "Free";
  const netTotal = totalPrice + (deliveryCharge === "$ 10" ? 10 : 0);
  return (
    <>
      <div className="p-3 mt-2" style={{ backgroundColor: "#FFFCF7" }}>
        <Row>
          <Col>
            {totalNumberOfItemsInCart} &nbsp;
            {totalNumberOfItemsInCart < 2 ? "item" : "items"}
          </Col>

          <Col className="text-end">${totalPrice}</Col>
        </Row>
        <hr />
        <Row>
          <Col>Delivery Charge</Col>
          <Col className="text-end">{deliveryCharge}</Col>
        </Row>
        <hr />
        <Row>
          <Col className="fw-bold">Total</Col>
          <Col className="text-end text-danger">$ {netTotal}</Col>
        </Row>
      </div>
      <Row className="p-3 mt-2">
        <Button variant="outline-secondary">Proceed To CheckOut</Button>
      </Row>
    </>
  );
};

export default CartPage_Col2_payment;

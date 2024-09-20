import React from "react";
import { Alert, Col, Image, Row } from "react-bootstrap";
import "./loggedinUserPage.css";

const OrderedItems = ({ item }) => {
  return (
    <>
      {item.orderItems.map((item) => (
        <Alert style={{ padding: "0" }} variant="none" key={item._id}>
          <Row className="ps-2">
            <Col xs={4}>
              <Image
                id="orderHistoryViewDetailsImage"
                src={item.thumbnail.map((img) => img)}
              />
            </Col>
            <Col>
              <Row>
                <Col className="d-flex justify-content-end">
                  <span>Item:</span> &nbsp;
                  <span className="fw-bold">{item.name}</span>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-end">
                  <span>Quantity:</span> &nbsp;
                  <span className="fw-bold">{item.quantity}</span>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-end">
                  <span>Total Paid:</span>&nbsp;
                  <span className="fw-bold">{item.totalPrice}</span>
                </Col>
              </Row>
            </Col>
            {/* <Col>
            <Row>Order Date: {new Date(item.)}</Row>
            <Row></Row>
            </Col> */}
          </Row>
        </Alert>
      ))}
    </>
  );
};

export default OrderedItems;

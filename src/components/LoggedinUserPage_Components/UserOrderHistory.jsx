import React, { useState } from "react";
import { Alert, Button, Col, Container, Image, Row } from "react-bootstrap";
import OrderedItems from "./OrderedItems";

const UserOrderHistory = ({ orders }) => {
  const [openIndex, setOpenIndex] = useState([]);
  const handleOnClick = (index) => {
    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter((i) => i !== index));
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };
  return (
    <>
      <Container>
        {orders.map((item, index) => (
          <Row
            key={item._id}
            className="py-2 gap-2 mt-3 rounded"
            style={{ background: "#FFFCF6" }}
          >
            {console.log(item)}
            <Col className="" xs={12} md={6}>
              <Row>
                <span> Order no:</span>
                <span className="fw-bold"> {item._id}</span>
              </Row>
              <Row>
                <span>Order Date:</span>
                <span className="fw-bold">
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
              </Row>
              <Row>
                <span>Total Paid:</span>
                <span className="fw-bold"> $ {item.orderTotal}</span>
              </Row>
              <Row>
                <span>Order Status:</span>
                <span className="fw-bold text-danger"> {item.status}</span>
              </Row>
              <Row className="ps-2 ">
                <Button
                  size="sm"
                  className="w-50 text-nowrap"
                  variant="outline-secondary"
                  onClick={() => handleOnClick(index)}
                >
                  {openIndex.includes(index) ? "Hide Details" : "View Details"}
                </Button>
              </Row>
            </Col>
            {!openIndex.includes(index) && (
              <Col>
                <Row className="pb-1">
                  <span>
                    My Order:{" "}
                    {item.orderItems
                      .map((item, i) => item.quantity)
                      .reduce((a, b) => a + b, 0)}{" "}
                    items
                  </span>{" "}
                </Row>
                <Row style={{ overflowX: "scroll" }}>
                  {item.orderItems.map((singleitem) => {
                    return singleitem.thumbnail.map((image) => {
                      return (
                        <Image
                          src={image}
                          style={{
                            height: "8rem",
                            width: "8rem",
                          }}
                        />
                      );
                    });
                  })}
                </Row>
              </Col>
            )}
            {openIndex.includes(index) && (
              <Row>
                <OrderedItems item={item} />
              </Row>
            )}
          </Row>
        ))}
      </Container>
    </>
  );
};

export default UserOrderHistory;

import React, { useState } from "react";
import "./loggedinUserPage.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import OrderedItems from "./OrderedItems";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        {orders.length === 0 && (
          <div className="text-center text-danger"> Sorry! Nothing to show</div>
        )}
        {orders.length > 0 &&
          orders.map((item, index) => (
            <Row
              key={item._id}
              className="py-2 gap-2 mt-3 rounded"
              style={{ background: "#FFFCF6" }}
            >
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
                    {openIndex.includes(index)
                      ? "Hide Details"
                      : "View Details"}
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
                  <Row>
                    <Col id="historyImagesdiv">
                      {item.orderItems.map((singleitem) => {
                        return singleitem.thumbnail.map((image) => {
                          return (
                            <Link to={`/products/product/${singleitem.sku}`}>
                              {" "}
                              <Image id="orderHistoryImage" src={image} />
                            </Link>
                          );
                        });
                      })}
                    </Col>
                    {item.orderItems.length > 2 && (
                      <Col xs={2}>
                        <div
                          className="d-flex  align-items-center p-0"
                          id="orderhistoryPlusLogo"
                        >
                          <FaPlus />
                        </div>
                      </Col>
                    )}
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

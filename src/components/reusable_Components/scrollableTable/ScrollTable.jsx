import React from "react";
import "./scrollTable.css";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ScrollTable = ({ similarCategoryProducts }) => {
  return (
    <>
      <Row>
        <h3 className=" p-2 " style={{}}>
          Similar Products
        </h3>

        <Col>
          <div className="table snaps-inline ">
            {similarCategoryProducts?.map((item, i) => (
              <Card key={item._id} className="card-main-body">
                <Card.Img
                  src={item?.thumbnail.map((image) => image)}
                  className="main-img"
                />

                <Card.Title className="p-1 ms-1">{item.name}</Card.Title>
                <Link
                  to={`/products/product/${item.sku}`}
                  className="withoutLink  "
                >
                  <Button className="w-100">View</Button>
                </Link>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ScrollTable;

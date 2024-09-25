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
              <Link
                to={`/products/product/${item.sku}`}
                className="withoutLink  "
              >
                <Card key={item._id} className="card-main-body">
                  <Card.Img
                    src={item?.thumbnail.map((image) => image)}
                    className="main-img"
                  />

                  <Card.Title className="p-1 ms-1 bg-transparent ">
                    {item.name}
                  </Card.Title>

                  {/* <Button className="w-100">View</Button> */}
                </Card>
              </Link>
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ScrollTable;

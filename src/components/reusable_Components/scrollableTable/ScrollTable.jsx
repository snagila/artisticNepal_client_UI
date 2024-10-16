import React from "react";
import "./scrollTable.css";
import { Badge, Card, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ScrollTable = ({ products }) => {
  return (
    <>
      <Row className="">
        <Col>
          <div className="table snaps-inline ">
            {products?.map((item, i) => (
              <Link
                key={item._id}
                to={`/products/product/${item.sku}`}
                className="withoutLink  "
              >
                <Card className="card-main-body position-relative">
                  <Image
                    src={item?.thumbnail.map((image) => image)}
                    className="main-img p-0 rounded"
                  />

                  {/* On Sale Badge */}
                  {item.salesPrice && item.quantity > 1 && (
                    <Badge
                      className="bg-danger position-absolute top-0 end-0 p-2 m-1"
                      style={{ zIndex: 1 }}
                    >
                      {(
                        ((item.price - item.salesPrice) / item.price) *
                        100
                      ).toFixed(2)}
                      % off
                    </Badge>
                  )}
                  {item.quantity < 1 && (
                    <Badge
                      className="bg-danger position-absolute top-0 end-0 p-2 me-3 mt-1"
                      style={{ zIndex: 1 }}
                    >
                      Sold Out
                    </Badge>
                  )}

                  <div className="p-0 ps-1 fw-bold bg-transparent text-nowrap overflow-hidden">
                    {item.name}
                  </div>
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

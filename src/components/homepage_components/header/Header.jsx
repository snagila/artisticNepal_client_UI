import React from "react";
import "./header.css";
import { Col, Row, Stack } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Row className=" header  d-flex align-items-center justify-content-center">
        <Col className="ms-5 d-flex align-items-center justify-content-between">
          <Stack direction="horizontal" gap={2} className="fs-4">
            <div>
              <GiHamburgerMenu />
            </div>
            <div id="menu">Menu</div>
          </Stack>
        </Col>

        <Col className=" fw-bold fs-3 ">
          <div>Artistic Nepal</div>
        </Col>

        <Col className="d-flex align-items-center justify-content-center ">
          <Stack className="align-items-center justify-content-center">
            <div>
              <FaHeart />
            </div>
            <div>WishList</div>
          </Stack>
          <Stack className="align-items-center justify-content-center">
            <div>
              <FaRegUser />
            </div>
            <div>Account</div>
          </Stack>
          <Stack className="align-items-center justify-content-center">
            <div>
              <FaShoppingCart />
            </div>
            <div>Cart</div>
          </Stack>
        </Col>
      </Row>
    </>
  );
};

export default Header;

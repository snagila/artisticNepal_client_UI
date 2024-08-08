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
      <Row className=" header  m-auto d-flex align-items-center justify-content-center p-3">
        <Col className=" fw-bold fs-3 d-flex flex-nowrap">
          <div>Artistic Nepal</div>
        </Col>
        <Col className="ms-5 d-flex align-items-center justify-content-between"></Col>

        <Col className="d-flex align-items-center justify-content-evenly gap-2">
          <Stack className="align-items-center justify-content-center">
            <div>
              <FaHeart />
            </div>
          </Stack>
          <Stack className="align-items-center justify-content-center">
            <div>
              <FaRegUser />
            </div>
          </Stack>
          <Stack className="align-items-center justify-content-center">
            <div>
              <FaShoppingCart />
            </div>
          </Stack>
          <Stack direction="horizontal" gap={2} className="">
            <div className="fs-4">
              <GiHamburgerMenu />
            </div>
          </Stack>
        </Col>
      </Row>
    </>
  );
};

export default Header;

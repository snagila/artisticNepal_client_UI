import React from "react";
import "./header.css";
import { Col, Row, Stack } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";

const Header = () => {
  // state to control the hamburger menu
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Row className=" header  m-auto d-flex align-items-center justify-content-center p-3">
        <Col>
          <h3 className=" fw-bold  d-flex flex-nowrap">
            <Link to="/" className="withoutLink">
              {" "}
              Artistic Nepal
            </Link>{" "}
          </h3>
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
              <GiHamburgerMenu onClick={handleShow} />
              <HamburgerMenu show={show} handleClose={handleClose} />
            </div>
          </Stack>
        </Col>
      </Row>
    </>
  );
};

export default Header;

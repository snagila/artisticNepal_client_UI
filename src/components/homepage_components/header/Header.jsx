import React from "react";
import "./header.css";
import { Col, Row } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";

const Header = ({ categories }) => {
  // state to control the hamburger menu
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Row className=" header  overflow-x-hidden ">
        <Col className="d-flex align-items-center fw-bold fs-3 ms-4">
          <Link to="/" className="withoutLink">
            {" "}
            Artistic Nepal
          </Link>{" "}
        </Col>

        <Col className="d-flex align-items-center justify-content-evenly gap-2">
          <FaHeart />
          <FaRegUser />
          <FaShoppingCart />
          <GiHamburgerMenu onClick={handleShow} />
          <HamburgerMenu
            show={show}
            handleClose={handleClose}
            categories={categories}
          />
        </Col>
      </Row>
    </>
  );
};

export default Header;

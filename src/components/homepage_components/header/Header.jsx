import React, { useEffect } from "react";
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
  const [headerHeight, setHeaderHeight] = useState("12vh");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setHeaderHeight("5vh");
      } else {
        setHeaderHeight("12vh");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Row
        className=" header  overflow-x-hidden "
        style={{ height: headerHeight, transition: "height 0.3s ease" }}
      >
        <Col className="d-flex align-items-center fw-bold fs-3 ms-4">
          <Link to="/" className="withoutLink">
            {" "}
            Artistic Nepal
          </Link>{" "}
        </Col>

        <Col className="d-flex align-items-center justify-content-evenly gap-2">
          <FaHeart />
          <Link to={`/user/login`} className="withoutLink">
            <FaRegUser />
          </Link>

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

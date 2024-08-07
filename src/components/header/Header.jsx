import React from "react";
import "./header.css";
import { Col, Row, Stack } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <Row className="bg-primary header d-flex align-items-center justify-content-between fs-5">
        <Col className="ms-5 ">
          <Stack direction="horizontal" gap={2} className="fs-3">
            <div>
              <GiHamburgerMenu />
            </div>
            <div id="menu">Menu</div>
          </Stack>
        </Col>

        <Col className="d-flex align-items-center justify-content-center flex-column">
          <img src={logo} width={100} height={80} alt="" />
        </Col>

        <Col className="text-center d-flex  align-items-center justify-content-center ">
          <Stack className="text-center  align-items-center justify-content-center">
            <div>
              <FaHeart />
            </div>
            <div>WishList</div>
          </Stack>
          <Stack>
            <div>
              <FaRegUser />
            </div>
            <div>Account</div>
          </Stack>
          <Stack>
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

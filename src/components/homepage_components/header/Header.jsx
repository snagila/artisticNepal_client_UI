import React, { useEffect } from "react";
import "./header.css";
import { Col, Row } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser, FaUserCheck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import { useSelector } from "react-redux";

const Header = ({ categories }) => {
  const { user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const totalNumberOfItemsInCart = cartItems
    ?.map((singleItem) => {
      return singleItem.quantity;
    })
    .flat()
    ?.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

  const [headerHeight, setHeaderHeight] = useState("12vh");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    let timeoutId = null;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.scrollY > 40) {
          setHeaderHeight("5vh");
        } else {
          setHeaderHeight("12vh");
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Row
        className=" header  overflow-x-hidden shadow"
        style={{ height: headerHeight, transition: "height 0.3s ease" }}
      >
        <Col className="d-flex align-items-center fw-bold fs-3 ms-4">
          <Link to="/" className="withoutLink">
            {" "}
            Artistic Nepal
          </Link>{" "}
        </Col>

        <Col className="d-flex align-items-center justify-content-evenly gap-2">
          <Link to={"/user/wishlist"} className="withoutLink">
            <FaHeart />
          </Link>

          <Link to={`/user/login`} className="withoutLink">
            {user?._id ? <FaUserCheck color="red" /> : <FaRegUser />}
          </Link>

          <Link className="withoutLink" to={"/user/cart"}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <FaShoppingCart />{" "}
              {totalNumberOfItemsInCart > 0 && (
                <span className="cart-quantity-badge">
                  {totalNumberOfItemsInCart}
                </span>
              )}
            </div>
          </Link>

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

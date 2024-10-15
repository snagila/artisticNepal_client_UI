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
          setHeaderHeight("8vh");
        } else {
          setHeaderHeight("12vh");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Row
        className=" header  overflow-hidden shadow d-flex align-items-center justify-content-between"
        style={{ height: headerHeight, transition: "height 0.3s ease" }}
      >
        <Col xs={4}>
          <div className="ps-4">
            {" "}
            <GiHamburgerMenu onClick={handleShow} size={30} />
            <HamburgerMenu
              show={show}
              handleClose={handleClose}
              categories={categories}
            />
          </div>
        </Col>
        <Col className="d-flex justify-content-center  " xs={4}>
          <div
            className="d-flex justify-content-center align-items-center  text-nowrap"
            style={{
              fontSize: headerHeight === "8vh" ? "3rem" : "4rem",
              transition: "font-size 0.3s ease",
            }}
          >
            <Link to="/" className="withoutLink qwitcher-grypen-bold ">
              Artistic Nepal
            </Link>{" "}
          </div>
        </Col>

        <Col className=" " xs={4}>
          <div className="d-flex align-items-center justify-content-end gap-3 pe-4 threemenuCol">
            <div>
              <Link to={"/user/wishlist"} className="withoutLink">
                <FaHeart />
              </Link>
            </div>
            <div>
              {" "}
              <Link to={`/user/login`} className="withoutLink">
                {user?._id ? <FaUserCheck color="red" /> : <FaRegUser />}
              </Link>
            </div>
            <div>
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
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Header;

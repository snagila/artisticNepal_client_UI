import { Stack } from "react-bootstrap";
import "./hamBurgerMenu.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaPhoneAlt } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllCategories } from "../../../axios/categoryAxios";

function HamburgerMenu({ show, handleClose }) {
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    getAllCategories();
  }, [show]);
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        keyboard={true}
        className="hamBurgerOffcanvas"
      >
        <div className=" h-75">
          <Offcanvas.Header closeButton className="text-center">
            <Offcanvas.Title>Categories</Offcanvas.Title>
          </Offcanvas.Header>
          <div className="container">
            <hr />
          </div>
          <Stack gap={2} className="menuHamburger ">
            {categories?.map((category) => (
              <Link
                to={`/products/${category.category}`}
                className="withoutLink"
                key={category._id}
              >
                <Offcanvas.Title className="fw-bold fs-4 ms-2">
                  {category.category}
                </Offcanvas.Title>
              </Link>
            ))}
          </Stack>
        </div>
        <div className="custom-offcanvas-homepage h-25">
          <Stack className="p-3 " gap={2}>
            <Stack
              direction="horizontal"
              gap={2}
              className="align-items-center "
            >
              <div>
                <BsPersonFill />
              </div>
              <div className="fw-bold">My Account</div>
            </Stack>
            <Link className="withoutLink" to={"/contact"}>
              <Stack
                direction="horizontal"
                gap={2}
                className="align-items-center "
              >
                <FaPhoneAlt style={{ cursor: "pointer" }} />

                <span className="fw-bold">Contact Us</span>
              </Stack>
            </Link>
          </Stack>
        </div>
      </Offcanvas>
    </>
  );
}

export default HamburgerMenu;

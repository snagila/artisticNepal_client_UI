import { Stack } from "react-bootstrap";
import "./hamBurgerMenu.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GoPlus } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import Painting_Categories from "./Painting_Categories";
import WoodCarvings_Categories from "./WoodCarvings_Categories";
import PrayersandMeditaion_Categories from "./PrayersandMeditaion_Categories";

function HamburgerMenu({ show, handleClose }) {
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        keyboard={true}
      >
        <div className=" h-75">
          <Offcanvas.Header closeButton className="text-center">
            <Offcanvas.Title>Categories</Offcanvas.Title>
          </Offcanvas.Header>
          <div className="container">
            <hr />
          </div>
          <Stack gap={2} className="menuHamburger ">
            <Painting_Categories />
            <WoodCarvings_Categories />
            <PrayersandMeditaion_Categories />

            <Offcanvas.Title className="fw-light fs-4">
              Khukuris
            </Offcanvas.Title>
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
            <Stack
              direction="horizontal"
              gap={2}
              className="align-items-center "
            >
              <div>
                <FaPhoneAlt />
              </div>
              <div className="fw-bold">Contact Us</div>
            </Stack>
          </Stack>
        </div>
      </Offcanvas>
    </>
  );
}

export default HamburgerMenu;

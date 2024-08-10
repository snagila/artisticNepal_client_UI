import React, { useState } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { AiOutlineMinus } from "react-icons/ai";

import { GoPlus } from "react-icons/go";

const WoodCarvings_Categories = () => {
  const [show, setShow] = useState(false);
  const handleOnClick = () => {
    show === true ? setShow(false) : setShow(true);
  };
  return (
    <Offcanvas.Title className="fw-light fs-4">
      Wood Carvings &nbsp;
      {show ? (
        <AiOutlineMinus onClick={() => handleOnClick()} />
      ) : (
        <GoPlus onClick={() => handleOnClick()} />
      )}
      {show && (
        <Stack className="ms-3 fs-5">
          <div>Masks</div>
          <div>Aakhe Jhyal</div>
        </Stack>
      )}
    </Offcanvas.Title>
  );
};

export default WoodCarvings_Categories;

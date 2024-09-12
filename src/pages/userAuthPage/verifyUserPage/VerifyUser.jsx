import React, { useEffect, useState } from "react";
import { Col, Row, Spinner, Stack } from "react-bootstrap";
import { MdVerifiedUser } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";

import { toast } from "react-toastify";
import { verifyUser } from "../../../axios/userAxios";

const VerifyUser = () => {
  const [emailVerifying, setIsEmailVerifying] = useState(true);
  const [emailVerified, setEmailVerified] = useState(false);
  const [params] = useSearchParams();
  const userEmail = params.get("e");
  const sessionToken = params.get("id");

  const verifyUserEmail = async () => {
    const result = await verifyUser({ userEmail, sessionToken });
    setIsEmailVerifying(false);

    if (result.status === "error") {
      toast.error(result.message);
      return;
    }
    if (result.status === "success") {
      setEmailVerified(true);
      return;
    }
    toast.error("Something went wrong.Try again later.");
  };

  useEffect(() => {
    verifyUserEmail();
  }, [userEmail]);
  return (
    <>
      {emailVerifying && (
        <Col className=" d-flex justify-content-center align-items-center">
          <Stack
            gap={4}
            className="vh-100 justify-content-center align-items-center"
          >
            <Spinner animation="border" variant="primary" role="status" />
            <p>Verifying email, Please Wait...</p>
          </Stack>
        </Col>
      )}
      {emailVerified && (
        <div className="authFormCentering">
          <Row>
            <MdVerifiedUser size={100} />
          </Row>
          <Row>
            <Stack>
              <p>Email successfully verified, You can login now.</p>

              <Link to="/user/login" className="btn btn-lg btn-outline-dark">
                Login Now
              </Link>
            </Stack>
          </Row>
        </div>
      )}
    </>
  );
};

export default VerifyUser;

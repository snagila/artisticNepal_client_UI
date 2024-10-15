import React from "react";
import "../userAuthPageCommonCSS.css";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserLoginForm from "../../../components/userPage-Components/userLogin/UserLoginForm";

const UserLogin = () => {
  const initialFormData = {
    email: "",
    password: "",
  };
  return (
    <>
      <div className="authFormCentering loginFormDiv">
        <Row>
          <UserLoginForm initialFormData={initialFormData} />
        </Row>
        <Row>
          <div className="pt-4">
            Forgot Password?{" "}
            <Link to="/user/reset-password">Reset Password</Link>
          </div>
        </Row>
        <Row></Row>

        <div>
          Don't have an account ? <Link to="/user/signup">Signup Now</Link>{" "}
        </div>
      </div>
    </>
  );
};

export default UserLogin;

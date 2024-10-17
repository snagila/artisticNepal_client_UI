import React from "react";
import "../userAuthPageCommonCSS.css";
import { Alert, Row } from "react-bootstrap";
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
        <Alert>
          This project is deployed using free hosting services, which allowed me
          to explore and implement various technologies without incurring costs.
          Please be patient.
        </Alert>
        <Alert variant="danger">
          Great amount of time have been spent adding datas please do not abuse
          it.
        </Alert>
        <Alert variant="info">The placeholder is login details.</Alert>
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

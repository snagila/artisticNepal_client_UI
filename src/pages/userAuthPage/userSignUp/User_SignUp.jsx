import React from "react";
import UserSignUpForm from "../../../components/userPage-Components/userSignup/UserSignUpForm";
import { Link } from "react-router-dom";

const initialFormData = {
  firstName: "",
  lastName: "",
  phone: "",
  address: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const User_SignUp = () => {
  return (
    <>
      <div className="authFormCentering">
        <UserSignUpForm initialFormData={initialFormData} />
        <div className=" mt-2">
          Already a user? &nbsp;{" "}
          <Link to="/user/login">
            <span className="fw-bold">Login Now</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default User_SignUp;

import React, { useEffect, useState } from "react";
import { Badge, Button, Form, Spinner } from "react-bootstrap";
import CustomInput from "../../reusable_Components/CustomInput";
import { userLoginFields } from "./userLoginFields";
import useForm from "../../../customHooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../axios/userAxios";
import { getUserAction } from "../../../redux/userRedux/userActions";
import { toast } from "react-toastify";

const UserLoginForm = ({ initialFormData }) => {
  const { formData, handleOnChange } = useForm(initialFormData);
  const { user } = useSelector((state) => state.user);

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await loginUser(formData);

    if (result.status === "error") {
      setIsLoading(false);
      return toast.error(result.message);
    }

    if (result.status === "success") {
      sessionStorage.setItem("accessJWT", result.data.accessJWT);
      localStorage.setItem("refreshJWT", result.data.refreshJWT);
      dispatch(getUserAction());
      setIsLoading(false);
      return;
    }
    toast.error("Something went wrong.Please try again later.");
    setIsLoading(false);
  };

  useEffect(() => {
    dispatch(getUserAction());
    // if user exists [logged in], navigate to admin homepage
    if (user?._id) {
      dispatch(getUserAction());
      navigate("/user/dashboard");
      return;
    }

    // if not try auto login
    // if (!admin._id) {
    //   dispatch(autoLoginAction());
    // }
  }, [user?._id]);
  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <Badge bg="danger">User Login</Badge>

        <hr />
        {userLoginFields.map((field, index) => (
          <CustomInput
            key={index}
            label={field.label}
            handleOnChange={handleOnChange}
            inputAttributes={{
              type: field.type,
              name: field.name,
              value: formData[field.name],
              placeholder: field.placeholder,
              required: field.required,
            }}
          />
        ))}

        <Button
          variant="outline-secondary "
          className=" w-100"
          type="submit"
          disabled={isLoading}
          size="sm"
        >
          {isLoading ? <Spinner animation="border" size="sm" /> : "Login"}
        </Button>
      </Form>
    </>
  );
};

export default UserLoginForm;

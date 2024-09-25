import React, { useState } from "react";
import useForm from "../../../customHooks/useForm";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { newPassword } from "../../../axios/userAxios";
import { toast } from "react-toastify";

const NewPasswordPage = () => {
  const initialFormData = {
    password: "",
    confirmPassword: "",
  };
  const [loading, setIsLoading] = useState(false);
  const { formData, handleOnChange, setFormData } = useForm(initialFormData);
  const { password, confirmPassword } = formData;
  const [params] = useSearchParams();
  const userEmail = params.get("e");
  const token = params.get("id");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password !== confirmPassword) {
      setIsLoading(false);
      return toast.error("Passwords do not match.");
    }

    const result = await newPassword({ password, token, userEmail });

    if (result?.status === "error") {
      setIsLoading(false);
      return toast.error(result.message);
    }

    if (result?.status === "success") {
      setIsLoading(false);
      setFormData(initialFormData);
      return toast.success(result.message);
    }

    toast.error("Something went wrong.Please try again later.");
    setIsLoading(false);
  };
  return (
    <>
      <>
        <div className="authFormCentering">
          {" "}
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label className="fw-bold">Password:</Form.Label>
              <Form.Control
                placeholder="Enter  new password"
                className="w-100"
                name="password"
                value={formData.password}
                required={true}
                type="password"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label className="fw-bold ">Confirm Password:</Form.Label>
              <Form.Control
                placeholder="Confirm  new password"
                className="w-100"
                name="confirmPassword"
                value={formData.confirmPassword}
                required={true}
                type="password"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Button type="submit" className="mt-3 ms-4 w-75">
              {loading ? <Spinner animation="border" /> : "Reset Password"}
            </Button>
          </Form>
          <Link to="/user/login" className="mt-1">
            Login Now
          </Link>
        </div>
      </>
    </>
  );
};

export default NewPasswordPage;

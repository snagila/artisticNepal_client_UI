import React from "react";
import useForm from "../../../customHooks/useForm";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewPasswordPage = () => {
  const initialFormData = {
    password: "",
    confirmPassword: "",
  };
  const { formData, handleOnChange } = useForm(initialFormData);
  return (
    <>
      <>
        <div className="authFormCentering">
          {" "}
          <Form>
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
              Reset Password
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

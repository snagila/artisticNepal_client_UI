import React, { useState } from "react";
import { Button, Form, Row, Spinner } from "react-bootstrap";
import { RiLockPasswordFill } from "react-icons/ri";
import useForm from "../../../customHooks/useForm";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../../../axios/userAxios";

const ResetPassword = () => {
  const initialFormData = { email: "" };
  const { formData, setFormData, handleOnChange } = useForm(initialFormData);
  const [loading, setIsLoading] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await resetPassword(formData);

    if (result?.status === "error") {
      toast.error(result.message);
      setIsLoading(false);
      return;
    }
    if (result?.status === "success") {
      toast.success(result.message);
      setFormData(initialFormData);
      setIsLoading(false);
      return;
    }

    toast.error("Something went wrong. Please try again later.");
    setIsLoading(false);
  };
  return (
    <>
      <>
        <div className="authFormCentering">
          <Row>
            <RiLockPasswordFill size={80} />
          </Row>
          <Row className="my-3 fw-bold">
            Please enter your email to reset your password
          </Row>
          <Row>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label className="fw-bold"></Form.Label>
                <Form.Control
                  placeholder="please enter your user email"
                  className="w-100"
                  name="email"
                  value={formData.email}
                  required={true}
                  type="email"
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Button
                type="submit"
                className="mt-3 ms-4 w-75"
                disabled={loading}
                variant="outline-secondary"
                size="sm"
              >
                {loading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  "Reset Password"
                )}
              </Button>
            </Form>
          </Row>
          <Row className="d-flex justify-content-center align-items-center mt-4 fw-bold">
            Have an account ?{" "}
            <Link
              to="/user/login"
              className="d-flex justify-content-center align-items-center"
            >
              Login Now
            </Link>
          </Row>
        </div>
      </>
    </>
  );
};

export default ResetPassword;

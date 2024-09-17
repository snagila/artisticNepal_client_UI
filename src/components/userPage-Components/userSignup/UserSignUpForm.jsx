import React, { useState } from "react";
import { Alert, Badge, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import CustomInput from "../../reusable_Components/CustomInput";
import { userSignupFormFields } from "../../../pages/userAuthPage/userSignUp/userSignupFormFields";
import useForm from "../../../customHooks/useForm";
import { toast } from "react-toastify";
import { signUpUser } from "../../../axios/userAxios";

const UserSignUpForm = ({ initialFormData }) => {
  const { formData, setFormData, handleOnChange } = useForm(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [message, setMessage] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { confirmPassword, password, ...rest } = formData;
    if (confirmPassword !== password) {
      return toast.error("Passwords do not match.");
    }
    const result = await signUpUser({ password, ...rest });
    if (result?.status === "error") {
      setIsLoading(false);
      setMessage(result.message);
      setErrorAlert(true);
      setFormData(initialFormData);
      return;
    }

    if (result?.status === "success") {
      setFormData(initialFormData);
      setIsLoading(false);
      setMessage(result.message);
      setSuccessAlert(true);

      return;
    }
    setIsLoading(false);
    toast.error("Something went wrong. Please try again later.");
  };
  return (
    <>
      <Form className="p-2" onSubmit={handleOnSubmit}>
        <div className="mb-2">
          <Badge bg="danger" className="p-2 ">
            User SignUp
          </Badge>
        </div>

        {successAlert ? (
          <Alert variant="success" className="mt-2">
            {message}
          </Alert>
        ) : (
          <Alert variant="danger" className="mt-2">
            {message}
          </Alert>
        )}

        <Row>
          {userSignupFormFields.map((field, index) => (
            <Col key={index} xs={index === 0 || index === 1 ? 6 : 12}>
              <CustomInput
                handleOnChange={handleOnChange}
                label={field.label}
                inputAttributes={{
                  name: field.name,
                  type: field.type,
                  placeholder: field.placeholder,
                  required: field.required,
                  value: formData[field.name],
                }}
              />
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center align-items-center">
          {" "}
          <Button
            variant="outline-secondary"
            className="w-50 "
            type="submit"
            size="sm"
            disabled={isLoading}
          >
            {isLoading ? <Spinner animation="border" size="sm" /> : "Submit"}
          </Button>
        </div>
      </Form>
    </>
  );
};

export default UserSignUpForm;

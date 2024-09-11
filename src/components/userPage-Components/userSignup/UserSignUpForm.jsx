import React from "react";
import { Badge, Button, Col, Form, Row } from "react-bootstrap";
import CustomInput from "../../reusable_Components/CustomInput";
import { userSignupFormFields } from "../../../pages/userAuthPage/userSignUp/userSignupFormFields";
import useForm from "../../../customHooks/useForm";

const UserSignUpForm = ({ initialFormData }) => {
  const { formData, handleOnChange } = useForm(initialFormData);
  return (
    <>
      <Form className="p-2">
        <div className="mb-2">
          <Badge bg="danger" className="p-2 ">
            User SignUp
          </Badge>
        </div>

        {/* {successAlert && (
        <Alert variant="success" className="mt-2">
          {message}
        </Alert>
      )}
      {errorAlert && (
        <Alert variant="danger" className="mt-2">
          {message}
        </Alert>
      )} */}
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
        <Button className="w-100" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default UserSignUpForm;

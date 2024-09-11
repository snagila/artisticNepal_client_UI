import React from "react";
import { Badge, Button, Form, Spinner } from "react-bootstrap";
import CustomInput from "../../reusable_Components/CustomInput";
import { userLoginFields } from "./userLoginFields";
import useForm from "../../../customHooks/useForm";

const UserLoginForm = ({ initialFormData }) => {
  const { formData, handleOnChange } = useForm(initialFormData);
  return (
    <>
      <Form>
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
              required: Form.required,
            }}
          />
        ))}

        <Button
          variant="outline-primary"
          className="btn-lg w-100"
          type="submit"
        >
          Login
        </Button>
      </Form>
    </>
  );
};

export default UserLoginForm;

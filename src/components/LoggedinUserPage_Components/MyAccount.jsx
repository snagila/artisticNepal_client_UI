import React, { useState } from "react";
import {
  Accordion,
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import {
  myAccountPassWordInput,
  myAccountUSerInput,
} from "./myAccountUserInput";
import CustomInput from "../reusable_Components/CustomInput";
import useForm from "../../customHooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  changeUserPassword,
  editUserDetailsAction,
  logoutUserAction,
} from "../../redux/userRedux/userActions";
import { toast } from "react-toastify";

const MyAccount = ({ user }) => {
  const userEmail = user.email;
  const { isLoading } = useSelector((state) => state.helper);
  const [letUserUpdateDetails, setUserUpdateDetails] = useState(false);
  const dispatch = useDispatch();
  const initialFormData = {
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    address: user.address,
    email: user.email,
  };
  const initialPassWordData = {
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  // Rename the formData for user
  const {
    formData: userFormData,
    handleOnChange: handleUserChange,
    setFormData: setUserFormData,
  } = useForm(initialFormData);

  // Rename the formData for password
  const {
    formData: passwordFormData,
    handleOnChange: handlePasswordChange,
    setFormData: setPasswordFormData,
  } = useForm(initialPassWordData);

  const handleOnDetailsSubmit = async (e) => {
    e.preventDefault();
    const action = await dispatch(
      editUserDetailsAction(userFormData, user?._id)
    );

    if (action === "success") {
      setUserUpdateDetails(false);
    }
  };

  const handleOnPasswordSubmit = async (e) => {
    e.preventDefault();
    const { newPassword, confirmNewPassword, currentPassword } =
      passwordFormData;
    if (newPassword !== confirmNewPassword) {
      return toast.error("Passwords do not match.");
    }
    const action = await dispatch(
      changeUserPassword({ currentPassword, newPassword, userEmail }, user?._id)
    );

    if (action === "success") {
      setPasswordFormData(initialFormData);
    }
  };

  const handleLogOut = () => {
    if (window.confirm("Do you want to log out?")) {
      dispatch(logoutUserAction(userEmail));
    }
  };
  return (
    <>
      <Container>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Edit Details</Accordion.Header>
            <Accordion.Body>
              <Form onSubmit={handleOnDetailsSubmit}>
                {" "}
                <Row>
                  {myAccountUSerInput.map((field, index) => (
                    <Col key={index} xs={index === 2 || index === 1 ? 6 : 12}>
                      <CustomInput
                        handleOnChange={handleUserChange}
                        label={field.label}
                        inputAttributes={{
                          name: field.name,
                          type: field.type,
                          placeholder: field.placeholder,
                          required: field.required,
                          value: userFormData[field.name],
                          disabled: field.disabled || !letUserUpdateDetails,
                        }}
                      />
                    </Col>
                  ))}
                </Row>
                <Row>
                  {!letUserUpdateDetails && (
                    <Button
                      variant="outline-secondary"
                      onClick={() => setUserUpdateDetails(true)}
                      type={"button"}
                    >
                      Edit Details
                    </Button>
                  )}

                  {letUserUpdateDetails && (
                    <Button
                      variant="outline-secondary"
                      type="submit"
                      disabled={isLoading}
                    >
                      {" "}
                      Update
                    </Button>
                  )}
                  {letUserUpdateDetails && (
                    <Button
                      variant="outline-danger"
                      className="mt-2"
                      onClick={() => setUserUpdateDetails(false)}
                    >
                      Cancel
                    </Button>
                  )}
                </Row>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Change Password </Accordion.Header>
            <Accordion.Body>
              <Form onSubmit={handleOnPasswordSubmit}>
                <Row>
                  {myAccountPassWordInput.map((field, i) => (
                    <Row key={i}>
                      <CustomInput
                        handleOnChange={handlePasswordChange}
                        label={field.label}
                        inputAttributes={{
                          name: field.name,
                          type: field.type,
                          placeholder: field.placeholder,
                          required: field.required,
                          value: passwordFormData[field.name],
                          disabled: field.disabled,
                        }}
                      />
                    </Row>
                  ))}
                </Row>
                <Row>
                  <Button
                    type="submit"
                    variant="outline-danger"
                    disabled={isLoading}
                  >
                    Submit
                  </Button>
                </Row>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="mt-3 d-flex justify-content-end ">
          {" "}
          <Button variant="danger" onClick={handleLogOut}>
            Log Out
          </Button>
        </div>
      </Container>
    </>
  );
};

export default MyAccount;

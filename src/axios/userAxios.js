import axios from "axios";

const USER_API_URL = `${import.meta.env.VITE_APP_USER_API_URL}/api/user`;

// signUp new Admin
export const signUpUser = async (formData) => {
  try {
    const response = await axios.post(USER_API_URL, formData);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

// verify user email
export const verifyUser = async (verifyUserObj) => {
  try {
    const response = await axios.post(
      `${USER_API_URL}/verify-email`,
      verifyUserObj
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

// send reset password email
export const resetPassword = async (formData) => {
  try {
    const response = await axios.post(
      `${USER_API_URL_API_URL}/reset-password`,
      formData
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// newPassword change
export const newPassword = async (data) => {
  try {
    const response = await axios.post(
      `${USER_API_URL}/reset-password/newpassword`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// login user
export const loginUser = async (formObj) => {
  try {
    const response = await axios.post(`${USER_API_URL}/login`, formObj);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

// get user data
export const getUser = async () => {
  try {
    const response = await axios.get(USER_API_URL, {
      headers: { Authorization: sessionStorage.getItem("accessJWT") },
    });

    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

import { toast } from "react-toastify";
import {
  changeUserDetails,
  getUser,
  updateUserPassword,
} from "../../axios/userAxios";
import { setUser } from "./userSlice";
import { setIsLoading } from "../helperRedux/helperSlice";

// get user user
export const getUserAction = () => async (dispatch) => {
  if (!sessionStorage.getItem("accessJWT")) {
    return;
  }
  const result = await getUser();
  if (result?.status === "error") {
    toast.error(result.message);

    return;
  }
  dispatch(setUser(result.data));
};

// change user details
export const editUserDetailsAction = (formData, userId) => async (dispatch) => {
  dispatch(setIsLoading(true));
  const result = await changeUserDetails(formData, userId);

  if (result.status === "error") {
    dispatch(setIsLoading(false));

    // toast.error(result.message);
    toast.error("to ho error");
    return;
  }
  if (result.status === "success") {
    dispatch(getUserAction());
    dispatch(setIsLoading(false));
    toast.success(result.message);
    return result.status;
  }
};

// change user password
export const changeUserPassword = (formData, userId) => async (dispatch) => {
  const result = await updateUserPassword(formData, userId);
  console.log(result);
};

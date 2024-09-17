import { getUser } from "../../axios/userAxios";
import { setUser } from "./userSlice";

// get user user
export const getUserAction = () => async (dispatch) => {
  if (!sessionStorage.getItem("accessJWT")) {
    return;
  }
  const result = await getUser();
  // console.log(result);
  if (result?.status === "error") {
    toast.error(result.message);
    return;
  }
  dispatch(setUser(result.data));
};

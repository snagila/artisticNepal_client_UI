import { getProducts } from "../../axios/productAxios";
import { setProducts } from "./productSlice";

export const getProductsAction = () => async (dispatch) => {
  const result = await getProducts();

  if (result.status === "error") {
    toast.error(result.message);
    return;
  }
  if (result.status === "success") {
    dispatch(setProducts(result.data));
  }
};

import { toast } from "react-toastify";
import { getAProductAxios, getProducts } from "../../axios/productAxios";
import { setProduct, setProducts } from "./productSlice";

export const getProductsAction = () => async (dispatch) => {
  const result = await getProducts();

  if (result.status === "error") {
    toast.error(result.message);
    return;
  }
  if (result.status === "success") {
    dispatch(setProducts(result.data));
    return;
  }
  toast.error("Something went wrong. Please try again");
};

export const getAProductAction = (productSKU) => async (dispatch) => {
  const result = await getAProductAxios(productSKU);
  if (result.status === "error") {
    return toast.error("Sorry product not found");
  } else {
    console.log(result.data);
    dispatch(setProduct(result.data));
    return;
  }

  toast.error("Something went wrong. Please try again");
};

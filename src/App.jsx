import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductOnCategory from "./pages/productBasedOnCategory/ProductOnCategory";
import ProductPage from "./pages/productPage/ProductPage";
import UserLogin from "./pages/userAuthPage/userLogin/UserLogin";
import AuthLayout from "./pages/userAuthPage/userAuthLayout/AuthLayout";
import VerifyUser from "./pages/userAuthPage/verifyUserPage/VerifyUser";
import User_SignUp from "./pages/userAuthPage/userSignUp/User_SignUp";
import ResetPassword from "./pages/userAuthPage/userResetPassWord/ResetPassword";
import NewPasswordPage from "./pages/userAuthPage/newPassWordPage/NewPasswordPage";
import User_Private_Route from "./components/LoggedinUserPage_Components/User_Private_Route";
import UserLayout from "./pages/LoggedInUserPage/UserLayout";
import CartPage from "./pages/cartPage/CartPage";
import Checkout_Page from "./pages/checkoutPage/Checkout_Page";
import WishList_Page from "./pages/wishListPage/WishList_Page";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesAction } from "./redux/categoryRedux/categoryActions";
import { getProductsAction } from "./redux/productRedux/productActions";
import { getUserAction } from "./redux/userRedux/userActions";
import { getWishListItems } from "./redux/wishListRedux/wishListActions";
import PaymentSuccessPage from "./pages/paymentPage/PaymentSuccess";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesAction());
    dispatch(getProductsAction());
    dispatch(getUserAction());
    dispatch(getWishListItems());
  }, []);
  return (
    <>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductOnCategory />} />
        <Route path="/products/product/:id" element={<ProductPage />} />

        <Route element={<AuthLayout />}>
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/signup" element={<User_SignUp />} />
          <Route path="/user/verify-email" element={<VerifyUser />} />
          <Route path="/user/reset-password" element={<ResetPassword />} />
          <Route
            path="user/reset-password/newpassword"
            element={<NewPasswordPage />}
          />
        </Route>

        <Route
          path="/user/dashboard"
          element={
            <User_Private_Route>
              <UserLayout />
            </User_Private_Route>
          }
        ></Route>

        <Route
          path="/user/checkout"
          element={
            <User_Private_Route>
              <Checkout_Page />
            </User_Private_Route>
          }
        ></Route>

        {/* cart routes */}
        <Route path={"/user/cart"} element={<CartPage />} />
        <Route path="/user/wishlist" element={<WishList_Page />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

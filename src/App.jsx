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
import UserDashboard from "./pages/LoggedInUserPage/UserDashboard";
import User_Private_Route from "./components/LoggedinUserPage_Components/User_Private_Route";
import UserLayout from "./pages/LoggedInUserPage/UserLayout";
import CartPage from "./pages/cartPage/CartPage";

function App() {
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
          <Route path="/user/verify-useremail" element={<VerifyUser />} />
          <Route path="/user/reset-password" element={<ResetPassword />} />
          <Route
            path="user/reset-password/newpassword"
            element={<NewPasswordPage />}
          />
        </Route>

        <Route
          element={
            <User_Private_Route>
              <UserLayout />
            </User_Private_Route>
          }
        >
          <Route path="/user/dashboard" element={<UserDashboard />} />
        </Route>

        {/* cart routes */}
        <Route path={"/user/cart"} element={<CartPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

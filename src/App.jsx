import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductOnCategory from "./pages/productBasedOnCategory/ProductOnCategory";
import ProductPage from "./pages/productPage/ProductPage";

function App() {
  return (
    <>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductOnCategory />} />
        <Route path="/products/product/:id" element={<ProductPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

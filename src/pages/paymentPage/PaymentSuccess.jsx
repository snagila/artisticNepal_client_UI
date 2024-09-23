import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../redux/cartItemRedux/cartItemsActions";
import Header from "../../components/homepage_components/header/Header";
import { placeOrderAction } from "../../redux/orderRedux/orderActions";

const PaymentSuccessPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const redirectStatus = searchParams.get("redirect_status");
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  useEffect(() => {
    if (redirectStatus === "succeeded" && cartItems.length >= 1 && user._id) {
      const totalPrice = cartItems
        ?.map((singleItem) => {
          return singleItem.totalPrice;
        })
        .flat()
        ?.reduce((acc, curr) => {
          return acc + curr;
        }, 0);
      dispatch(placeOrderAction(cartItems, totalPrice, user._id));
    }
  }, [redirectStatus, cartItems.length, user._id]);
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className="mb-4">Payment Successful!</h1>
            <p>Your order has been successfully processed.</p>
            <p>Thank you for shopping with us!</p>

            <Link to="/">
              <Button variant="outline-success">Continue Shopping</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PaymentSuccessPage;

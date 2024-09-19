import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Container, Stack } from "react-bootstrap";
import CheckoutForm from "./CheckOutForm";

// https://docs.stripe.com/stripe-js/react

const stripePromise = loadStripe(
  `${import.meta.env.VITE_APP_STRIPE_SECRET_KEY}`
);
const API_BASE_URL = `${import.meta.env.VITE_APP_USER_API_URL}/api/stripe`;

const PaymentPage = () => {
  const [clientSecret, setClientSecret] = useState("");

  const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret,
  };

  // Create payment Intent as soon as we load this page
  // this can be your checkout page / payment page

  useEffect(() => {
    axios
      .post(`${API_BASE_URL}/create-payment-intent`, {
        total: 15000, // send the payload required for calculating amount
      })
      .then((res) => setClientSecret(res.data.clientSecret))
      .catch((error) => {
        console.log("ERROR", error);
      });
  }, []);

  return (
    <Container>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <Stack className="justify-content-center align-items-center vh-100">
            <Alert variant="success" className="shadow-lg rounded">
              STRIPE PAYMENT INTEGRATION DEMO
            </Alert>
            <Alert>
              Card no: 4242 4242 4242 4242 <br />
              Expiry date: any future value <br />
              CVC:Use any three-digit CVC (four digits for American Express
              cards)
            </Alert>
            <CheckoutForm />
          </Stack>
        </Elements>
      )}
    </Container>
  );
};

export default PaymentPage;

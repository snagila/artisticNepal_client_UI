import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

const CheckoutForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  // STRIPE HOOKS
  const stripe = useStripe();
  const elements = useElements();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // check if the stripe config is valid
    if (!stripe || !elements) {
      return toast.error("Not ready for payment processing, please wait!");
    }

    setIsLoading(true);
    // now make payment request
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/payment-success",
      },
    });

    setIsLoading(false);

    if (result?.error) {
      // Show error to your customer (for example, payment details incomplete)
      return toast.error(
        result?.error?.message ||
          "Could not process your payment, please try again."
      );
    } else {
      // If the payment is sucessfull, we can take to payment successfull page
      console.log(result);
      toast.success(
        "Thank you for your payment! Your order has been successfully processed."
      );
    }
  };

  return (
    <Form onSubmit={(e) => handleOnSubmit(e)}>
      <Card className="p-4 shadow-lg rounded">
        {/* Test Cards
        https://docs.stripe.com/testing?testing-method=card-numbers */}
        <PaymentElement />

        <Button
          type="submit"
          variant="outline-primary"
          className="mt-4"
          disabled={isLoading}
        >
          {isLoading ? <Spinner animation="border" role="status" /> : "Pay Now"}
        </Button>
      </Card>
    </Form>
  );
};

export default CheckoutForm;
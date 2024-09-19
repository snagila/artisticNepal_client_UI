import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const redirectStatus = searchParams.get("redirect_status");
  console.log(redirectStatus);

  useEffect(() => {
    if (redirectStatus === "succeeded") {
    }
  }, [redirectStatus]);
  return (
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
  );
};

export default PaymentSuccessPage;

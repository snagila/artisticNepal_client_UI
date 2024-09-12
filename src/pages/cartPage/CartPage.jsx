import React, { useEffect } from "react";
import "./cartPage.css";
import Header from "../../components/homepage_components/header/Header";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../redux/cartItemRedux/cartItemsActions";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cardContents = cartItems?.map((allitems) => allitems);
  // console.log(cardContents);
  const totalNumberOfItemsInCart = cardContents
    ?.map((singleItem) =>
      singleItem.items.map((item) => {
        return item.quantity;
      })
    )
    .flat()
    .reduce((acc, curr) => {
      return acc + curr;
    });

  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  return (
    <>
      <Header />
      <Container className="pt-4">
        <div className="fs-4 mb-1">
          My Cart ( {totalNumberOfItemsInCart || 0} items )
        </div>
        <Row>
          <Col xs={12} md={6}>
            {cardContents?.map((item) =>
              item.items.map((singleItem) => {
                return (
                  <Card
                    style={{ height: "10rem", backgroundColor: "#FFFCF6" }}
                    className="mb-2 mainCard"
                    key={item?._id}
                  >
                    <Row>
                      {console.log(singleItem)}
                      <Col xs={4} className="p-0 m-0">
                        <Card.Img
                          src={singleItem.thumbnail.map((image) => image)}
                          alt=""
                          height={158}
                        />
                      </Col>
                      <Col>
                        <Card.Body>
                          <Card.Title>{singleItem.name}</Card.Title>
                          <Card.Text>
                            <div>Price : $ {singleItem.price} </div>
                          </Card.Text>
                        </Card.Body>
                      </Col>
                      <Col xs={1}></Col>
                    </Row>
                  </Card>
                );
              })
            )}
          </Col>
          <Col>sdjhfgsdjkfgksd</Col>
        </Row>
      </Container>
    </>
  );
};

export default CartPage;

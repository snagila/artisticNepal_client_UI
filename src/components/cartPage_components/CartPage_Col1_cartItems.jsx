import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemsFromCartAction,
  editProductQuantityAction,
} from "../../redux/cartItemRedux/cartItemsActions";
import { Link } from "react-router-dom";

const CartPage_Col1_cartItems = ({ item }) => {
  const { isLoading } = useSelector((state) => state.helper);
  const [productQuantity, setProductQuantity] = useState();
  const dispatch = useDispatch();

  const handleOnRemoveItems = (cartIdtoDelete) => {
    dispatch(deleteItemsFromCartAction(cartIdtoDelete));
  };

  useEffect(() => {
    if (item._id) {
      setProductQuantity(item.quantity);
    }
  }, [item._id]);

  useEffect(() => {
    if (productQuantity) {
      dispatch(
        editProductQuantityAction(item._id, productQuantity, item.price)
      );
    }
  }, [productQuantity]);
  return (
    <>
      <Card
        style={{ height: "10rem", backgroundColor: "#FFFCF7" }}
        className="mb-2 "
      >
        {isLoading ? (
          <Spinner animation="border" size="lg" />
        ) : (
          <Row xs={12}>
            <Col xs={4} className="p-0 m-0">
              <Link to={`/products/product/${item.sku}`}>
                <Card.Img
                  src={item.thumbnail?.map((image) => image)}
                  alt=""
                  height={158}
                />
              </Link>
            </Col>

            <Col>
              <Card.Body>
                <Card.Title className="text-wrap">{item.name}</Card.Title>
                <Card.Text className="pt-2">
                  <div className="cart-quantity">
                    <button
                      className="cartitem-decrement-btn"
                      onClick={() => setProductQuantity(productQuantity - 1)}
                    >
                      -
                    </button>

                    <button className="cartitem-quantity-btn text-wrap">
                      {productQuantity === 0
                        ? handleOnRemoveItems(item._id)
                        : productQuantity}
                    </button>
                    <button
                      className="cartitem-increment-btn"
                      onClick={() => setProductQuantity(productQuantity + 1)}
                      disabled={productQuantity === item.availableQuantity}
                    >
                      +
                    </button>
                  </div>
                </Card.Text>
                <div className=" d-flex justify-content-between align-items-center  fw-bold text-danger fs-4">
                  $ {item.price * item.quantity}
                </div>
              </Card.Body>
            </Col>

            <Col xs={1} md={1} className="p-0 text-end">
              <IoCloseSharp
                size={25}
                onClick={() => handleOnRemoveItems(item._id)}
              />
            </Col>
          </Row>
        )}
      </Card>
    </>
  );
};

export default CartPage_Col1_cartItems;

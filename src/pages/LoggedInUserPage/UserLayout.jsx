import React, { useEffect } from "react";
import "./userPage.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/homepage_components/header/Header";
import { Container, Tab, Tabs } from "react-bootstrap";
import UserOrderHistory from "../../components/LoggedinUserPage_Components/UserOrderHistory";
import { getUserOrderAction } from "../../redux/cartItemRedux/cartItemsActions";

const UserLayout = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.cart);

  const { firstName, lastName, email } = user;

  useEffect(() => {
    dispatch(getUserOrderAction(user._id));
  }, [user._id]);
  return (
    <>
      <Header />
      <Container className="pt-4">
        <Tabs
          defaultActiveKey="orders"
          id="uncontrolled-tab-example"
          className="mb-3 custom-tabs"
        >
          <Tab eventKey="orders" title="My Order History">
            <UserOrderHistory orders={orders} />
          </Tab>
          <Tab eventKey="profile" title="Profile">
            Tab content for Profile
          </Tab>
          <Tab eventKey="contact" title="Contact">
            Tab content for Contact
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default UserLayout;

import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/homepage_components/header/Header";
import { Container, Tab, Tabs } from "react-bootstrap";

const UserLayout = () => {
  const { user } = useSelector((state) => state.user);
  const { firstName, lastName, email } = user;

  return (
    <>
      <Header />
      <Container className="pt-4">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            Tab content for Home
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

import React from "react";
// import "./connector.css";
import NavbarHeader from "./NavbarHeader";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Client from "./Client/Client";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
function Connector() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            {/* <Sidebar /> */}
          </Col>
          <Col md={10} id="page-content-wrapper">
            {/* <NavbarHeader title="Dashboard" />
            <Dashboard /> */}
            {/* <NavbarHeader title="Clients" />
            <Client title="Clients" /> */}
            {/* <NavbarHeader title="Delivery Person" />
            <Client title="Delivery Person" /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Connector;

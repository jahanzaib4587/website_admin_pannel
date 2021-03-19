import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import ClientRequest from "./RequestsComponents/Requests";
import Sidebar from "./Sidebar";
import NavbarHeader from "./NavbarHeader";
import Dashboard from "./Dashboard";
import { Container, Row, Col } from "react-bootstrap";
import Client from "./Client/Client";
import Orders from "./Orders/Order";
import Categories from "./Categories/Catergories";
import Product from "./Product/Product";
import Edit_Delivery_Persons_info from "./Edit_Delivery_Persons_Info/Edit_Delivery_Person";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link,
} from "react-router-dom";
function App() {
  return (
    <div className="App ">
      <Router>
        <Switch>
          <Route exact path="/">
            <Container fluid>
              <Row>
                <Col xs={2} id="sidebar-wrapper">
                  <Sidebar />
                </Col>
                <Col md={10} id="page-content-wrapper">
                  <NavbarHeader title="Dashboard" />
                  <Dashboard />
                </Col>
              </Row>
            </Container>
          </Route>
          <Route exact path="/clients">
            <Container fluid>
              <Row>
                <Col xs={2} id="sidebar-wrapper">
                  <Sidebar />
                </Col>
                <Col md={10} id="page-content-wrapper">
                  <NavbarHeader title="Clients" />
                  <Client title="Clients" />
                </Col>
              </Row>
            </Container>
          </Route>

          <Route exact path="/deliveryperson">
            <Container fluid>
              <Row>
                <Col xs={2} id="sidebar-wrapper">
                  <Sidebar />
                </Col>
                <Col md={10} id="page-content-wrapper">
                  <NavbarHeader title="Delivery Person" />
                  <Client title="Delivery Person" />
                </Col>
              </Row>
            </Container>
          </Route>

          <Route exact path="/clientsrequests">
            <Container fluid>
              <Row>
                <Col xs={2} id="sidebar-wrapper">
                  <Sidebar />
                </Col>
                <Col md={10} id="page-content-wrapper">
                  <NavbarHeader title="Client Requests" />
                  <ClientRequest title="Client Requests" />
                </Col>
              </Row>
            </Container>
          </Route>

          <Route exact path="/deliverypersonrequests">
            <Container fluid>
              <Row>
                <Col xs={2} id="sidebar-wrapper">
                  <Sidebar />
                </Col>
                <Col md={10} id="page-content-wrapper">
                  <NavbarHeader title="Delivery Person Requests" />
                  <ClientRequest title="Delivery Person Requests" />
                </Col>
              </Row>
            </Container>
          </Route>

          <Route exact path="/orders">
            <Container fluid>
              <Row>
                <Col xs={2} id="sidebar-wrapper">
                  <Sidebar />
                </Col>
                <Col md={10} id="page-content-wrapper">
                  <NavbarHeader title="Orders" />
                  <Orders title="Orders" />
                </Col>
              </Row>
            </Container>
          </Route>

          <Route exact path="/categories">
            <Container fluid>
              <Row>
                <Col xs={2} id="sidebar-wrapper">
                  <Sidebar />
                </Col>
                <Col md={10} id="page-content-wrapper">
                  <NavbarHeader title="Categories" />
                  <Categories title="Categories" />
                </Col>
              </Row>
            </Container>
          </Route>

          <Route exact path="/product">
            <Container fluid>
              <Row>
                <Col xs={2} id="sidebar-wrapper">
                  <Sidebar />
                </Col>
                <Col md={10} id="page-content-wrapper">
                  <NavbarHeader title="Products" />
                  <Product />
                </Col>
              </Row>
            </Container>
          </Route>

          <Route exact path="/editperson">
            <Container fluid>
              <Row>
                <Col xs={2} id="sidebar-wrapper">
                  <Sidebar />
                </Col>
                <Col md={10} id="page-content-wrapper">
                  <NavbarHeader title="Edit Delivery Person's Info" />
                  <Edit_Delivery_Persons_info />
                </Col>
              </Row>
            </Container>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

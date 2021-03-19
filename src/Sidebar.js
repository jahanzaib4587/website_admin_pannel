import React from "react";
import { Nav } from "react-bootstrap";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import CategoryIcon from "@material-ui/icons/Category";
import "./sidebar.css";
function Sidebar() {
  return (
    <div>
      <Nav className="col-md-12 d-none d-md-block  sidebar" activeKey="/home">
        <div className="sidebar-sticky">
          {/* <h4 className="navbar-brand">Menu</h4> */}
          <Nav.Item className="item">
            <Nav.Link disabled className=" menu">
              <h3>Menu</h3>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/" className=" links">
              <DashboardIcon className="mr-2" />
              Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/clients" className=" links " eventKey="link-1">
              <PersonIcon className="mr-2" />
              Clients
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/clientsrequests"
              className=" links"
              eventKey="link-2"
            >
              <EmailIcon className="mr-2" />
              Client Requests
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/deliveryperson" className=" links">
              <DirectionsRunIcon className="mr-2" />
              Delivery Person
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              href="/deliverypersonrequests"
              className=" links"
              eventKey="link-2"
            >
              <div className="d-flex">
                <EmailIcon className="mr-2" />
                Delivery Person Requests
              </div>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/orders" className=" links" eventKey="link-2">
              <HorizontalSplitIcon className="mr-2" />
              Orders
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/categories" className=" links" eventKey="link-2">
              <CategoryIcon className="mr-2" />
              Categories
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/product" className=" links" eventKey="link-2">
              <TurnedInNotIcon className="mr-2" />
              Product
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/editperson" className=" links" eventKey="link-2">
              <HorizontalSplitIcon className="mr-2" />
              Edit Person's Info
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </div>
  );
}

export default Sidebar;

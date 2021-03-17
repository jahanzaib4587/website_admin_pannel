import React from "react";
import { Navbar } from "react-bootstrap";
import MenuIcon from "@material-ui/icons/Menu";
function NavbarHeader(props) {
  return (
    <div>
      <Navbar className="border-bottom ">
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <MenuIcon className="mr-3" />
          <h3 className="font-weight-bold">{props.title}</h3>
        </Navbar.Brand>
        {/* <Navbar.Toggle /> */}
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand>
            <img
              className="cursor-pointer"
              src="https://cdn.worldvectorlogo.com/logos/google-icon.svg"
              height="30px"
              width="30px"
            ></img>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
      <br></br>
    </div>
  );
}

export default NavbarHeader;

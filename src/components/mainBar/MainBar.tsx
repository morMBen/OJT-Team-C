import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./MainBar.css";
import { signOut } from "../../firebase/utills";
import React, { Component } from "react";

function MainBar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      sticky="top"
      expand="sm"
      collapseOnSelect
      className="mainBar"
    >
      <Navbar.Brand>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9OHK93NoXURI7WVklXdWG84xBdpJeFexgXKTxozM8RObLrSRPGD0BS5zQeiVKZ54qqA&usqp=CAU"
          width="40px"
          height="40px"
        />{" "}
      </Navbar.Brand>
      <Navbar.Toggle className="coloring" />
      <Navbar.Collapse>
        <Nav>
          <NavDropdown title="">
            <NavDropdown.Item href="#personal/info">
              Personal Info
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#personal/Logout" onClick={signOut}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>

      <h2 className="title">Todo's App - Team C</h2>
    </Navbar>
  );
}

export default MainBar;

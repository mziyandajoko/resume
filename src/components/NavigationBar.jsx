import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Assets from "../assets/profile.jpg";

const NavigationBar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <spa>
        <img
          src={Assets}
          alt="Profile "
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{" "}
        <img />
      </spa>
      Joko Mziyanda Resume
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">About</Nav.Link>
        <Nav.Link href="/pages/WorkExperiance">Work Experiance</Nav.Link>
        <Nav.Link href="/pages/Contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;

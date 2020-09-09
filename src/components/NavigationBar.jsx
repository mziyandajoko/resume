import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Joko Mziyanda Resume</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">About</Nav.Link>
        <Nav.Link href="/pages/Work">Work</Nav.Link>
        <Nav.Link href="/pages/ExpectIn">ExpectIn</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;

import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Assets from "../assets/profile.jpg";
import './Navigation.css';

const NavigationBar = () => (
  <Navbar className="Navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">
      <span>Joko Mziyanda</span>      
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

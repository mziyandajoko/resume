import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Layout from "./Layout";
const Link = styled.a`
  color: #90c242;
`;
const Footer = styled.div`
background-color: #d5ede3;
color: #90c242;
font-weight: bold;
`;

function Footer() {
  return (
    <React.Fragment>
      <Layout>
        <Row>
          <Col lg={3}>
            <Link href="#">facebook</Link>
          </Col>
          <Col lg={3}>
            <Link href="#">GitHub</Link>
          </Col>
          <Col lg={3}>
            <Link href="#">LinkedIn</Link>
          </Col>
          <Col lg={3}>
            <Link href="#">StackOverflow</Link>
          </Col>
        </Row>
      </Layout>
    </React.Fragment>
  );
}

export default Footer;

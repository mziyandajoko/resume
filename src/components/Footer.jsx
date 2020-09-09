import React from "react";
import { Row, Col } from "react-bootstrap";
import Layout from "./Layout";

function Footer() {
  return (
    <React.Fragment>
      <Layout>
        <Row>
          <Col lg={3}>
            <a href="#">facebook</a>
          </Col>
          <Col lg={3}>
            <a href="#">GitHub</a>
          </Col>
          <Col lg={3}>
            <a href="#">LinkedIn</a>
          </Col>
          <Col lg={3}>
            <a href="#">StackOverflow</a>
          </Col>
        </Row>
      </Layout>
    </React.Fragment>
  );
}

export default Footer;

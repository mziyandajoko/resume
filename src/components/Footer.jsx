import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Layout from "./Layout";
const Link = styled.a`
  color: #90c242;
`;
const Section = styled.div`
background-color: #d5ede3;
color: #90c242;
font-weight: bold;
padding: 5px;
height: 1000px
text-align:center;
`;

function Footer() {
  return (
    <React.Fragment>
      <Layout>
        <Section>

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
      </Section>
        </Layout>
    </React.Fragment>
  );
}

export default Footer;

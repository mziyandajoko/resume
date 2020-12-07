import React from "react";
import Layout from '../components/Layout'
import { Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";

function Contact(params) {
  return (
    <Layout>
      <h1>Contact page </h1>
      <Form>
        <Row>
          <Col className="spacer-5" sm={12} lg={4}>
            {/* <Form.Control placeholder="First name" /> */}
            <Form.Control placeholder="First name" />
          </Col>
          <Col className="spacer-5" sm={12} lg={4}>
            <Form.Control placeholder="Last name" />
          </Col>

          <Col className="spacer-5" sm={12} lg={4}>
            <Form.Control placeholder="Email Address" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="spacer-5">
            <Form.Control as="textarea" />
          </Col>
        </Row>
        <Col xs="auto" className="my-1">
          <Button type="submit">Submit</Button>
        </Col>
      </Form>
    </Layout>
  );
}

export default Contact;

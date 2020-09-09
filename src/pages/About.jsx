import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Footer from "../components/Footer";
class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <Row>
            <Col>
              <p>I'm Joko Mziyanda</p>
              <span>Web/App Developer</span>
              <div>
                <img src="" alt="Profile " />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam doloribus praesentium voluptatem esse beatae aliquam
                  dolore corrupti sequi rerum officiis eos hic quas, at
                  blanditiis libero aspernatur nemo ratione earum?
                </p>
              </div>
            </Col>
          </Row>
        </section>
        <section>
          <Row>
            <Col>
              <h1>What I can do</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <img src="" alt="Profile Image" />
            </Col>
            <Col lg={6}>
              <span>Web/App Developer</span>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam doloribus praesentium voluptatem esse beatae aliquam
                  dolore corrupti sequi rerum officiis eos hic quas, at
                  blanditiis libero aspernatur nemo ratione earum?
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <span>Web/App Developer</span>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam doloribus praesentium voluptatem esse beatae aliquam
                  dolore corrupti sequi rerum officiis eos hic quas, at
                  blanditiis libero aspernatur nemo ratione earum?
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <img src="#" alt="Profile Image" />
            </Col>
          </Row>
        </section>
        <section>
          <h1>I can help</h1>
          <h4>I'm currently available for freelance or permanent work</h4>
          <p>
            Have any Question or project that I can work on or what to know more
            about what I can offer and my experiance and expertation,please do
            get in touch.
          </p>
          <Button>Message Me</Button>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;

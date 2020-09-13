import React, { Component } from "react";
import { Row, Col, Button, Jumbotron } from "react-bootstrap";
import Footer from "../components/Footer";
import Assets from "../assets/profile.jpg";
class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <Jumbotron fluid>
            <Row>
              <Col>
                <p>I'm Joko Mziyanda</p>
                <span>a Web/App Developer</span>
                <div>
                  <h2>Hi</h2>
                  <p>
                    I am a Web/App developer based in Cape Town South South
                    Afrika with 3 years of working experiance. I have a persion
                    for web design and love to create for web and mobile
                    devieces.
                  </p>
                </div>
                <p>
                  <Button variant="primary">Message Me</Button>
                </p>
              </Col>
            </Row>
          </Jumbotron>
        </section>
        <section>
          <Row>
            <Col>
              <h2>What I can do</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <img src={Assets} alt="Profile " width="100%" height="70%" />
            </Col>
            <Col lg={6}>
              <h4>Developing what you need</h4>
              <div>
                <p>
                  I'm a Devceloper who puts client needs a heart, So I know how
                  to create your website and App to run across devieces using
                  the latest and best technologies available. Flutter for App
                  development is the technolgy I using for any app development
                  and as this is the best technolgy for Android and iOS as it
                  uses on code base.
                </p>
                <p>
                  For web development I use React as it has best advantages than
                  other frameworks and just plain HTML,CSS and JavaScript and
                  there is support for React the heavey lifting on the Dom is
                  taken care of on the background as a developer I dont have to
                  worry about the support other browsers and rendering issues.
                </p>
              </div>
            </Col>
          </Row>
        </section>
        <section>
          <h1>I can help</h1>
          <h4>I'm currently available for freelance or permanent work</h4>
          <p>
            Have any Question or project that you want to get started, think I
            can work on or what to know more about what I can offer and my
            experiance ,please do get in touch.
          </p>
          <Button>Message Me</Button>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;

import React, { Component } from "react";
import { Row, Col, Button, Jumbotron, } from "react-bootstrap";
import Footer from "../components/Footer";
import AlertDismissible from "../components/Alert";
import Assets from "../assets/profile.jpg";
import styled from "styled-components";

 styled.Jumbotron =`
  text-align: center;
  background-color: #d5ede3;
  color: #90c242;
  font-weight: bold;
  `;
  const Wrapper = styled.section`
    text-align: center;
    `;
  const Center = styled.div`
    text-align: center;
    `;
  const Name = styled.p`
  font-family: italic;
  text-align:center;
  font-size: 40px;
  `;
  const CenteredHeader = styled.h3`
  color: #d5ede3;  
  text-align: center;
  padding: 15px;
`;
class About extends Component {
 
  render() {
    return (
      <React.Fragment>
        <Jumbotron>
            
            <Row>
              <Col>
                <Name>I'm Joko Mziyanda</Name>
                <Center>                  
                  <p>
                    I am a <strong>Web/App developer</strong> based in Cape Town South
                    Afrika with 3 years of working experiance. I have a persion
                    for web design and love to create for web and mobile
                    devices.
                  </p>
                </Center>
                <p>
                 
                  <Button href="/pages/Contact">Message Me</Button>

                </p>
              </Col>
            </Row>
          
        </Jumbotron>
        <section>
          <AlertDismissible />
          <Row>
            <Col>

              <CenteredHeader>What I can do</CenteredHeader>
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
        <Wrapper>
          <CenteredHeader>I can help</CenteredHeader>
          <h6>I'm currently available for freelance or permanent work</h6>
          <Row>
            <Col lg={3}></Col>
          <Col offset={3} lg={6}>
          <p>
            Have any Question or project that you want to get started, think I
            can work on or what to know more about what I can offer and my
            experiance ,please do get in touch.
          </p>
          </Col>
          </Row>
          <Button href="/pages/Contact">Message Me</Button>
        </Wrapper>
        <br/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;

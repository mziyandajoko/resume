import React from "react";
import { Row, Col } from "react-bootstrap";
function LoadWorkData(props) {
  return (
    <React.Fragment>
      <Row>
        <Col xs={6}>
          <p>Name: {props.LoadWorkData.name}</p>
          <p>JobTitle: {props.LoadWorkData.JobTitle}</p>
          <p>Period: {props.LoadWorkData.period}</p>
          <p>Position: {props.LoadWorkData.position}</p>
          <p>RoleDiscription: {props.LoadWorkData.RoleDiscription}</p>
          <p>CompanySite: {props.LoadWorkData.CompanySite}</p>
          <p>DevTools: {props.LoadWorkData.DevTools}</p>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default LoadWorkData;

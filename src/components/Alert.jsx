import React ,{useState} from 'react';
import {  Button,Alert } from "react-bootstrap";




function AlertDismissible() {
    const [show, setShow] = useState(true);
   
    return (
      <>
        <Alert show={show} variant="warning">
          <Alert.Heading>How's it going!</Alert.Heading>
          <p>
            Please not the site is still under development phase some css and functionality is not working yet!
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Okay Close 
            </Button>
          </div>
        </Alert>
  
      </>
    );
  }
  

  export default AlertDismissible
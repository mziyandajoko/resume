import React from "react";
import { Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
const Link = styled.a`
  color: #90c242;
`;
 styled.div`
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
        <div className="container-fluid">

        <footer class="mainfooter" role="contentinfo">
  <div class="footer-middle">
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <div class="footer-pad">
        <p><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i>LinkedIn</a></p>
          
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="footer-pad">
          <p><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i>Facebook</a></p>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="footer-pad">
        <p><a href="#" class="icoGithub" title="GitHub"><i class="fa fa-GitHub"></i>GitHub</a></p>
        </div>
      </div>
    	<div class="col-md-3">
      <p><a href="#" class="icoBitBucket" title="BitBucket"><i class="fa fa-BitBucket"></i>BitBucket</a></p>				
		</div>
    </div>

  </div>
  </div>
</footer>
      </div>
    </React.Fragment>
  );
}

export default Footer;

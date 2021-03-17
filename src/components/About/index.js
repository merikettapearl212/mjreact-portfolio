import React from "react";
import {  MDBRow, MDBCol, MDBContainer, MDBCardBody, MDBMask, MDBView, MDBBtn } from "mdbreact";
import profilepic from "../../images/profilepic.png";

const About = () => {
  return (
    <MDBContainer>
      <MDBCardBody>
        <h2 className="section-title font-weight-bold text-center mt-4 pb-3">
        <span className="span-h2-underline">
          About
          </span>
        </h2>
        <p className="text-center mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </p>
        <MDBRow>
          <MDBCol lg="">
            <MDBView className="mb-lg-0 mb-4 pl-3" hover waves>
              <img
                className="img-fluid"
                src={profilepic}
                style={{height: '300px'}}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Web Developer & UX/UI Designer</strong>
            </h3>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus et aut
              officiis debitis.
            </p>
            <MDBBtn size="md">
              Download Resume
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
      </MDBContainer>
  );
}

export default About;
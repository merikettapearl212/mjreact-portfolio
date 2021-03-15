import React from "react";
import {  MDBRow, MDBCol, MDBContainer, MDBCardBody, MDBMask, MDBView, MDBBtn } from "mdbreact";

const About = () => {
  return (
    <MDBContainer>
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center mt-4">
          About
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
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
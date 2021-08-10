import React from "react";
import {  MDBRow, MDBCol, MDBContainer, MDBCardBody, MDBMask, MDBView, MDBBtn, MDBAnimation } from "mdbreact";
import profilepic from "../../images/profilepic.png";

const About = () => {
  return (
    <MDBContainer>
      <MDBCardBody>
      <MDBAnimation reveal type="fadeInRight">
        <h2 id='about' className="section-title font-weight-bold text-center mt-4 pb-3">
        <span className="span-h2-underline">
          About
          </span>
        </h2>
        <div className="text-center mx-auto mb-3">
        {/* Full-Stack Web Developer | Javascript, React, HTML, CSS, Node.js */}
        </div>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInLeft">
        <MDBRow>
          <MDBCol lg="">
            <MDBView className="mb-lg-0 mb-4 pl-5" hover waves>
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
          <MDBCol lg="8">
            <h3 className="font-weight-bold mb-1 p-0">
              Web Developer & UX/UI Designer
            </h3>
            <div className="mb-3" style={{ fontSize: "14px" }}>
              {/* Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit. */}
            </div>
            <MDBRow>
              <MDBCol>
                  <ul>
                    <li><strong>Birthday:</strong> 30 September 1991</li>
                    <li><strong>Phone:</strong> +360 286 3610</li>
                    <li><strong>City:</strong> Seattle, USA</li>
                  </ul>
              </MDBCol>
              <MDBCol >
                  <ul>
                    <li><strong>Age:</strong> 30</li>
                    <li><strong>Email:</strong> meagan.james231@gmail.com</li>
                    <li><strong>Freelance:</strong> Available</li>
                  </ul>
              </MDBCol>
            </MDBRow>
            <div className="mb-2">
            Full Stack Web Developer that strives for continuous improvement with an extensive background in customer service. Passionate about bringing ideas to life and building efficient strong applications suited to user needs. Collaborative team-player comfortable with high-stress environments while executing best practices. Communicate clearly and empathetically. Experience with and committed to working in diverse and inclusive workspaces.
              </div>
            
            <a href="https://docs.google.com/document/d/1pm8SwZ-0khfBmi8TOHGRCxdM0S9MrUUFMF3Xi7FXnZ4/edit?usp=sharing">
                <MDBBtn size="md">Download resume</MDBBtn>
            </a>
          </MDBCol>
        </MDBRow>
        </MDBAnimation>
      </MDBCardBody>
      </MDBContainer>
  );
}

export default About;
import React from "react";
import {  MDBRow, MDBCol, MDBContainer, MDBCardBody, MDBMask, MDBView, MDBBtn, MDBAnimation } from "mdbreact";
import profilepic from "../../images/profilepic.png";

const About = () => {
  return (
    <MDBContainer>
      <MDBCardBody>
      <MDBAnimation reveal type="fadeInRight">
        <h2 className="section-title font-weight-bold text-center mt-4 pb-3">
        <span className="span-h2-underline">
          About
          </span>
        </h2>
        <div className="text-center mx-auto mb-3">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </div>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInLeft">
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
          <MDBCol lg="8">
            <h3 className="font-weight-bold mb-1 p-0">
              Web Developer & UX/UI Designer
            </h3>
            <div className="mb-2" style={{ fontSize: "14px" }}>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit.
            </div>
            <MDBRow>
              <MDBCol>
                  <ul>
                    <li><strong>Birthday:</strong> 30 September 1991</li>
                    <li><strong>Phone:</strong> +123 456 7890</li>
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
                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia.
              </div>
            
            <a href="https://docs.google.com/document/d/1Pj3JYHE2Qp51QFWAfSQ6foGu6fuXGYY6nWCWLS8aBr8/edit?usp=sharing">
                <MDBBtn size="md" style={{ borderRadius: "2rem" }}>Download resume</MDBBtn>
            </a>
          </MDBCol>
        </MDBRow>
        </MDBAnimation>
      </MDBCardBody>
      </MDBContainer>
  );
}

export default About;
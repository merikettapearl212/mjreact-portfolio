import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
// MDBIcon, MDBCol,MDBRow, MDBBtn,

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 black-text mt-5">
      {/* <MDBContainer>
      <h2 className="section-title font-weight-bold text-center my-2 mb-5">
      <span className="span-h2-underline">
        Contact
        </span>
      </h2>
      
      <MDBRow>
      <MDBCol md="3" className="text-center">
        
          <ul className="list-unstyled mb-0">
            <li>
              <MDBIcon icon="map-marker-alt" size="2x" className="teal-text" />
              <p>Seattle, WA 98122, USA</p>
            </li>
            <li>
              <MDBIcon icon="phone" size="2x" className="teal-text mt-4" />
              <p>+1 555 555 555</p>
            </li>
            <li>
              <MDBIcon icon="envelope" size="2x" className="teal-text mt-4" />
              <p>meagan.james231@gmail.com</p>
            </li>
          </ul>
        </MDBCol>
        <MDBCol md="9" className="md-0 mb-5">
          <form>
            <MDBRow>
              <MDBCol md="6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your name" />
                </div>
              </MDBCol>
              <MDBCol md="6">
              <div className="form-group">
                  <input type="email" className="form-control" placeholder="Your e-mail" />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="form-group m-0">
                  <input type="text" className="form-control" placeholder="Subject" />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
              <div className="form-group ">
                <label htmlFor="exampleFormControlTextarea1"></label>
                  <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Message"
                  />
              </div>
              </MDBCol>
            </MDBRow>
          </form>
          <div className="text-center text-md-center">
            <MDBBtn size="md">
              Send Message
            </MDBBtn>
          </div>
        </MDBCol>
        
      </MDBRow>
    </MDBContainer> */}
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; 2021 Copyright: <a href="https://www.linkedin.com/in/meagan-james-502b78191/"> Meagan James</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
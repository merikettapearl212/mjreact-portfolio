import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBIcon} from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 black-text mt-5">
      <MDBContainer>
      <h2 className="h1-responsive font-weight-bold text-center my-2">
        Contact
      </h2>
      <p className="text-center w-responsive mx-auto pb-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
      <MDBCol md="3" className="text-center">
        
          <ul className="list-unstyled mb-0">
            <li>
              <MDBIcon icon="map-marker-alt" size="2x" className="teal-text" />
              <p>San Francisco, CA 94126, USA</p>
            </li>
            <li>
              <MDBIcon icon="phone" size="2x" className="teal-text mt-4" />
              <p>+ 01 234 567 89</p>
            </li>
            <li>
              <MDBIcon icon="envelope" size="2x" className="teal-text mt-4" />
              <p>contact@example.com</p>
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
    </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
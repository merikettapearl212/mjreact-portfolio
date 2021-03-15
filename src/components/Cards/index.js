import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";

class HoverPage extends React.Component {
  render() {
    return (
      <MDBAnimation reveal type="fadeInUp">
      <MDBContainer className="mt-5">
        <MDBRow className="mx-5">
          <MDBCol md="4" className="p-2">
            <MDBView hover>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="teal-strong">
                <p className="white-text">Strong overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol  className="p-2">
            <MDBView hover>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="teal-strong">
                <p className="white-text">Strong overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4" className="p-2">
            <MDBView hover>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="teal-strong">
                <p className="white-text">Strong overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
        
        <MDBRow className="mx-5">
          <MDBCol md="4" className="p-2">
            <MDBView hover>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="teal-strong">
                <p className="white-text">Strong overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4" className="p-2">
            <MDBView hover>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="teal-strong">
                <p className="white-text">Strong overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4" className="p-2">
            <MDBView hover>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="teal-strong">
                <p className="white-text">Strong overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </MDBAnimation>
    );
  }
}

export default HoverPage;
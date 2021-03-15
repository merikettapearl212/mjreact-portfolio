import React from "react";
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBView} from "mdbreact";
// import jumboimg from "../../../images/pexels-jeshootscom-442574.jpg"

const Jumbotron = () => {
  return (
    <MDBView src='https://images.pexels.com/photos/442574/pexels-photo-442574.jpeg?cs=srgb&dl=pexels-jeshootscom-442574.jpg&fm=jpg'>
        
          <MDBContainer
            className='d-flex justify-content-center align-items-center pt-0'
            style={{ height: '100%', width: '100%', paddingTop: '17rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-5 text-center'>
                <h1 className='h1-reponsive  text-uppercase font-weight-bold mb-1 pt-1'>
                Meagan<span>/</span>James</h1>
                <h5 className='mb-4 '>
                  <strong>I'm a Full-Stack Web Developer</strong>
                </h5>
                <MDBBtn>
                  portfolio
                </MDBBtn>
                <MDBBtn outline color='default'>
                  About me
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
  )
}

export default Jumbotron;
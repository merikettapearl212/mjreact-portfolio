import React from "react";
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBView, MDBAnimation} from "mdbreact";
import jumboimg from "../../images/jumboimg.jpg";


const Header = () => {
  return (
    <MDBView src={jumboimg}>
        
          <MDBContainer
            className='d-flex justify-content-center align-items-center pt-0'
            style={{ height: '80%', width: '100%', paddingTop: '17rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-5 pt-5 text-center'>
              <MDBAnimation reveal type="zoomIn">
                <h1 className='main-name mb-1 pt-1'>
                Meagan<span className="slash">/</span>James</h1>
                <h5 className='mb-4 '>
                  <strong>I'm a Full-Stack Web Developer</strong>
                </h5>
                <MDBBtn size="md">
                  portfolio
                </MDBBtn>
                <MDBBtn size="md" outline color='default'>
                  About me
                </MDBBtn>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
  )
}

export default Header;
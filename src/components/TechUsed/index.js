import {  Container, Row } from "mdbreact";
import adobeicon from "../../images/adobeicon.png";
import "../TechUsed/techused.css";


function Skills() {
    return (
        <div className="skills pb-3">
        <Container className="mt-5 pb-2">
        <h2 className="section-title font-weight-bold text-center mt-3 pt-4 pb-1">
        <span className="span-h2-underline">
         Skills
         </span>
        </h2>
        <p className="text-center w-responsive mx-auto pb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate.
        </p>
        
       
 
       <Row className="d-flex justify-content-center p-2">
          <div className="skillicons">
                <i className="fab fa-css3-alt skillicons" style={{ fontSize: "50px" }} ></i>
            </div>
            <div className="skillicons">
                <i class="fab fa-html5" style={{ fontSize: "50px" }} ></i>
            </div>
              <div className="skillicons">
              <i class="fab fa-bootstrap" style={{ fontSize: "50px" }} ></i>
              </div>
            <div className="skillicons">
              <i class="fab fa-js-square" style={{ fontSize: "50px" }} ></i>
              </div>   
          </Row>
          
          
          
        <Row className="d-flex justify-content-center p-3"> 
          <div className="skillicons">
              <i class="fab fa-react" style={{ fontSize: "50px" }} ></i>
            </div>
            <div className="skillicons">
              <i class="fab fa-node" style={{ fontSize: "50px" }} ></i>
              </div>
              <div className="skillicons">
              <i class="fab fa-mdb" style={{ fontSize: "50px" }} ></i>
              </div>

              <div className="skillicons">
              <i class="fab fa-git-alt" style={{ fontSize: "50px" }} ></i>
              </div>

              <div className="skillicons">
              <img className="adobeicon" src={adobeicon} alt="mongodb" style={{ fontColor:"grey", width: "60px" }}></img>
            </div>

            {/* <MDBCol>
              <MDBIcon fab icon="sass" style={{ fontSize: "50px" }} />
            </MDBCol> */}
       
          </Row> 
      

      </Container>
      </div>
    );
}

export default Skills;
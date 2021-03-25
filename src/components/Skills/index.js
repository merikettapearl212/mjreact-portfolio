import {  MDBContainer, MDBIcon, MDBRow} from "mdbreact";
import adobeicon from "../../images/adobeicon.png";
import "../Skills/Skills.css";


function Skills() {
    return (
        <div className="skills ">
        <MDBContainer className="mt-5 pb-2">
        <h2 className="section-title font-weight-bold text-center mt-5 pt-5 pb-1">
        <span className="span-h2-underline">
         Skills
         </span>
        </h2>
        <p className="text-center w-responsive mx-auto pb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi.
        </p>
        
      
       <MDBRow className="d-flex justify-content-center p-2">
          <div>
            <MDBIcon fab icon="css3-alt" style={{ fontSize: "50px" }} />
            </div>
            <div>
              <MDBIcon fab icon="bootstrap" style={{ fontSize: "50px" }} />
              </div>
              <div>
              <MDBIcon fab icon="html5" style={{ fontSize: "50px" }} />
              </div>
            <div>
              <MDBIcon fab icon="js-square" style={{ fontSize: "50px" }} />
              </div>   
          </MDBRow>
          
        <MDBRow className="d-flex justify-content-center p-3"> 
          <div className="">
              <MDBIcon fab icon="react" style={{ fontSize: "50px" }} />
            </div>
            <div>
              <MDBIcon fab icon="node" style={{ fontSize: "50px" }} />
              </div>
              <div>
              <MDBIcon fab icon="mdb" style={{ fontSize: "50px" }} />
              </div>

              <div>
              <MDBIcon fab icon="git-alt" style={{ fontSize: "50px" }} />
              </div>

              <div>
              <img className="adobeicon" src={adobeicon} alt="mongodb" style={{ fontColor:"grey", width: "60px" }}></img>
            </div>

            {/* <MDBCol>
              <MDBIcon fab icon="sass" style={{ fontSize: "50px" }} />
            </MDBCol> */}
       
          </MDBRow> 

      </MDBContainer>
      </div>
    );
}

export default Skills;
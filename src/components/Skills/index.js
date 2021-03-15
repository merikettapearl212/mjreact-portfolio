import { MDBIcon, MDBContainer, MDBListGroup, MDBListGroupItem } from "mdbreact";
import "../Skills/Skills.css";


function Skills() {
    return (
        <div className="skills">
        <MDBContainer className="mt-5">
        <h2 className="h1-responsive font-weight-bold text-center mt-5 pt-5">
          Contact
        </h2>
        <p className="text-center w-responsive mx-auto pb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBContainer className="mb-5 animated slideInRight" >
          <MDBListGroup style={{ width: "22rem" }}>
            <MDBListGroupItem  className="text-center" id="icons">
              <MDBIcon fab icon="css3" style={{ fontSize: "40px" }} />
            </MDBListGroupItem>
            <MDBListGroupItem className="text-center" id="icons">
              <MDBIcon fab icon="html5" style={{ fontSize: "40px" }} />
            </MDBListGroupItem>
            <MDBListGroupItem className="text-center" id="icons">
              <MDBIcon fab icon="js" style={{ fontSize: "40px" }} />
            </MDBListGroupItem>
            <MDBListGroupItem className="text-center" id="icons">
              {" "}
              <MDBIcon fab icon="react" style={{ fontSize: "40px" }} />
            </MDBListGroupItem>
            <MDBListGroupItem className="text-center" id="icons">
              {" "}
              <MDBIcon fab icon="node-js" style={{ fontSize: "40px" }} />
            </MDBListGroupItem>
            
          </MDBListGroup>

        </MDBContainer>
        
      </MDBContainer>
      </div>
    );
}

export default Skills;
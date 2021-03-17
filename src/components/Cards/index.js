import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";
import burger from "../../images/burger.png";
import traveler from "../../images/traveler.png";
import inventory from "../../images/inventory.png";
import codequiz from "../../images/codequiz.png";
import employee from "../../images/employee.png";
import workout from "../../images/workout.png";

class HoverPage extends React.Component {
  render() {
    return (
      <div>
        <MDBAnimation reveal type="fadeInLeft">
      <h2 className="section-title font-weight-bold text-center mt-5 pt-5">
        <span className="span-h2-underline">
      Portfolio
      </span>
        </h2>
        {/* <p className="text-center w-responsive mx-auto pb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p> */}
        </MDBAnimation>
        
      <MDBAnimation reveal type="fadeInRight">
      <MDBContainer className="mt-5">
        <MDBRow className="mx-5">
          <MDBCol md="4" className="p-2">
            <MDBView hover>
              <img
                src={inventory}
                className="img-fluid"
                alt=""
              />
              <MDBMask overlay="teal-strong">
                <h3 className="white-text">Inventory Tracker</h3>
                  <p className="white-text">An application that uses mySQL, Sequelize, Node.js and Handlebars to help you inventory and pack your outdoor gear.</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol  className="p-2">
            <MDBView hover>
              <img
                src={traveler}
                className="img-fluid"
                alt=""
              />
              <MDBMask overlay="teal-strong">
                <h3 className="white-text">Tourist Simulator</h3>
                  <p className="white-text">Search cities around the world and see important information such as a picture of the city, and weather information to learn about the climate.</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4" className="p-2">
            <MDBView hover>
              <img
                src={burger}
                className="img-fluid"
                alt=""
              />
              <MDBMask overlay="teal-strong">
                <h3 className="white-text">Burger App</h3>
                  <p className="white-text">A burger logger with MySQL, Node, Express, Handlebars. Where you can add, devour and delete ALL the Burgers you wish!</p>
                
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
        
        <MDBRow className="mx-5">
          <MDBCol md="4" className="p-2">
            <MDBView hover>
              <img
                src={employee}
                className="img-fluid"
                alt=""
              />
              <MDBMask overlay="teal-strong">
              <h3 className="white-text">Burger App</h3>
                <p className="white-text">Strong overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4" className="p-2">
            <MDBView hover>
              <img
                src={workout}
                className="img-fluid"
                alt=""
              />
              <MDBMask overlay="teal-strong">
              <h3 className="white-text">Burger App</h3>
                <p className="white-text">Strong overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4" className="p-2">
            <MDBView hover>
              <img
                src={codequiz}
                className="img-fluid"
                alt=""
              />
              <MDBMask overlay="teal-strong">
              <h3 className="white-text">Burger App</h3>
                <p className="white-text">Strong overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </MDBAnimation>
      </div>
    );
  }
}

export default HoverPage;
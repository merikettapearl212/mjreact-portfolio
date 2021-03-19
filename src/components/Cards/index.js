import React from "react";
import {  MDBRow, MDBAnimation } from "mdbreact";
import burger from "../../images/burger.png";
import traveler from "../../images/traveler.png";
import inventory from "../../images/inventory.png";
import codequiz from "../../images/codequiz.png";
import employee from "../../images/employee.png";
import workout from "../../images/workout.png";
import "../Cards/Cards.css";

class HoverPage extends React.Component {
  render() {
    return (
      <div>
        <MDBAnimation reveal type="fadeInLeft">
      <h2 className="section-title font-weight-bold text-center mt-5 pt-5 pb-3">
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
        <MDBRow className="justify-content-center mx-0">
        <a href="https://github.com/merikettapearl212/Project_2">
        <div class="tile"> 
        <img
                src={inventory}
                className="img-fluid"
                alt=""
              />
          <div class="text">
          <h2 class="animate-text">Inventory Tracker</h2>
          <p class="animate-text">An application that uses mySQL, Sequelize, Node.js and Handlebars to help you inventory and pack your outdoor gear. </p>
          </div>
         </div>
        </a>
        
        <a href="https://github.com/merikettapearl212/code_Quiz">
            <div class="tile"> 
            <img
                    src={codequiz}
                    className="img-fluid"
                    alt=""
                  />
              <div class="text">
              <h2 class="animate-text">Code Quiz</h2>
              <p class="animate-text">Search cities around the world and see important information such as a picture of the city, and weather information to learn about the climate. </p>
              </div>
            </div>
        </a>

        <a href="https://github.com/merikettapearl212/burger_express_handlebars"> 
          <div class="tile"> 
          <img
                src={burger}
                className="img-fluid"
                alt=""
              />
          <div class="text">
          <h2 class="animate-text">Burger App</h2>
          <p class="animate-text">A burger logger with MySQL, Node, Express, Handlebars. Where you can add, devour and delete ALL the Burgers you wish! </p>
          </div>
          </div>
        </a>
        </MDBRow>
        

        <MDBRow className="justify-content-center mx-0">
        <a href="https://github.com/merikettapearl212/Tourist-Simulator">
            <div class="tile"> 
            <img
                    src={traveler}
                    className="img-fluid"
                    alt=""
                  />
              <div class="text">
              <h2 class="animate-text">Tourist Simulator</h2>
              <p class="animate-text">Search cities around the world and see important information such as a picture of the city, and weather information to learn about the climate. </p>
              </div>
            </div>
        </a>

        <a href="https://github.com/merikettapearl212/employee_directory">
            <div class="tile"> 
            <img
                    src={employee}
                    className="img-fluid"
                    alt=""
                  />
              <div class="text">
              <h2 class="animate-text">Employee Directory</h2>
              <p class="animate-text">Search cities around the world and see important information such as a picture of the city, and weather information to learn about the climate. </p>
              </div>
            </div>
        </a>

        <a href="https://github.com/merikettapearl212/workout_Tracker">
            <div class="tile"> 
            <img
                    src={workout}
                    className="img-fluid"
                    alt=""
                  />
              <div class="text">
              <h2 class="animate-text">Workout App</h2>
              <p class="animate-text">Search cities around the world and see important information such as a picture of the city, and weather information to learn about the climate. </p>
              </div>
            </div>
        </a>

        </MDBRow>

      </MDBAnimation>
      </div>
    );
  }
}

export default HoverPage;
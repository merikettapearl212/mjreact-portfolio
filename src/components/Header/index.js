import React from "react";
import { Navbar, Nav, Container, Jumbotron} from "react-bootstrap";
import "../Header/header.css";

const Header = () => {
    return (
       <div>
        <Navbar className="navbar" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link id="home" href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Navbar>

        <Jumbotron className="header-image" style={{ boxShadow: "none"}}>
        <Container className="text-center" style={{ height: "510px"}}>
        <div className="name-container">
        <h1 className='main-name mb-1 pt-1'>
                Meagan<span className="slash">/</span>James</h1>
                <h5 className='mb-4 '>
                  <strong>I'm a Full-Stack Web Developer</strong>
                </h5>
                <button className="btn m-1" size="md" style={{ borderRadius: "5px" }}>
                  Portfolio
                </button>
                <button className="btn text-white m-1" size="md" style={{ backgroundColor: "#34b7a7", borderRadius: "5px" }}>
                  About me
                </button>
                </div>
          
        </Container>
      </Jumbotron>
      </div>

    )
}

export default Header;


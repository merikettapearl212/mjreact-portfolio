import React from "react";
import { Container, Row, Col} from "react-bootstrap";

const Contact = () => {
  return (
    
    <Container id="contact" className="mt-5">
    <h2 className="section-title font-weight-bold text-center my-2 mb-5">
    <span className="span-h2-underline">
      Contact
      </span>
    </h2>
    <Row>
    <Col md="3" className="text-center">
      
        <ul className="list-unstyled mb-0">
          <li>
          <i class="fas fa-map-marker-alt fa-2x" style={{ color: "#34b7a7"}}></i>
          <p>Seattle, WA 98122, USA</p>
          </li>

          <li>
          <i class="fas fa-phone fa-2x" style={{ color: "#34b7a7"}}></i>
            <p>+1 555 555 555</p> 
          </li>
          
          <li>
          <i class="fas fa-envelope fa-2x" style={{ color: "#34b7a7"}}></i>
            <p>meagan.james231@gmail.com</p>
          </li>
        </ul>
      </Col>
      <Col md="9" className="md-0 mb-5">
        <form>
          <Row>
            <Col md="6">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your name" />
              </div>
            </Col>
            <Col md="6">
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Your e-mail" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <div className="form-group m-0">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
            <div className="form-group ">
              <label htmlFor="exampleFormControlTextarea1"></label>
                <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Message"
                />
            </div>
            </Col>
          </Row>
        </form>
        <div className="text-center text-md-center">
          <button className="btn text-white m-1" size="md" style={{ backgroundColor: "#34b7a7", borderRadius: "5px" }}>
            Send Message
          </button>
        </div>
      </Col>
      
    </Row>
  </Container>
    );
  }


export default Contact;

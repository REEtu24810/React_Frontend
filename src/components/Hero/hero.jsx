import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import heroImage from "../../assets/hero.png"; 
// import idea from "../../assets/idea.png"
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg="6" md="6">
            <div className="hero__content">
              {/* <h3 className="hero_text">Together</h3> */}
              <h1 className="mb-4 hero__title">
                Have An Idea In Mind? <span className="uniqe">Let's Start</span> Together 
              </h1>
              <p className="mb-5 hero_pragraph">
                Worried about how to develop a good website that aligns with and sums up your business 
                idea in the best way possible? Well, look no more! 
                <b>Logixhunt</b> helps you with just that.
              </p>
            </div>
            <Button style={{ backgroundColor: 'orange', borderColor: 'orange' }} href="#start-project" className="ms-3 hero_butn">Contact Us Now</Button> {/* Changed button color to orange */}
          </Col>

          <Col lg="6" md="6" className="d-flex justify-content-center align-items-center">
            <img src={heroImage} alt="Hero" className="hero__img animated-image" />
          </Col>
          {/* <Col lg="6" md="6" className="d-flex justify-content-center align-items-center">
            <img src={idea} alt="New Image" className="hero__img animated-image" />
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Hero;

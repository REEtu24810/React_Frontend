import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import heroImage from "../../assets/hero.png";
import idea from "../../assets/idea.png";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg="6" md="6" className="d-flex justify-content-center">
            <div className="hero__content">
              <h1 className="mb-4 hero__title4">
                Have An Idea In Mind? <span className="unique">Let's Start</span> Together
              </h1>
              <p className="mb-5 hero_paragraph">
                Worried about how to develop a good website that aligns with and sums up your business
                idea in the best way possible? Well, look no more!
                <b>Logixhunt</b> helps you with just that.
              </p>
              <div className="text-center">
                <Button
                  style={{ backgroundColor: 'orange', borderColor: 'orange' }}
                  href="#start-project"
                  className="ms-3 hero_button"
                >
                  Contact Us Now
                </Button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6" className="d-flex justify-content-center">
            <div className="image__content">
              <img src={heroImage} alt="Hero" className="hero__img animated-image" />
              <img src={idea} alt="New Image" className="hero__img1" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;

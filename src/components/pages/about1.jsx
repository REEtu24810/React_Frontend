import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
// import heroImage from "../../assets/hero.png"; 
// import idea from "../../assets/idea.png"
import idea2 from "../../assets/idea2.png"
import "./about1.css";

const About1 = () => {
  return (
    <section className="about">
      <Container>
        <Row className="align-items-right justify-content-center">
        <Col lg="6" md="6" className="d-flex justify-content-center align-items-center">
  <img src={idea2} alt="Hero" className="hero__img2 animated-image1"/>
  {/* <img src={idea} alt="New Image" className="hero__img1"/> */}
</Col>
          <Col lg="6" md="6">
            <div className="hero__content">
              {/* <h3 className="hero_text">Together</h3> */}
              <h1 className="mb-4 hero__title1">
              Have Some Idea In Mind. <span className="uniqe">Want To Start?</span> 
              </h1>
              <p className="mb-5 hero_pragraph1">
              We always serve up something distinct. We mix a potent 
              combination of digital strategy with a generous splash of creative 
              juices and blend in technology-focused, customized solutions as a chaser.
              <br/>
             Start a Project, Get a Quote or Learn more about 
              how we can partner to built a successful product</p>
              
              
            </div>
            <div className="container text-center my-5">
      <Button 
        style={{ backgroundColor: 'orange', borderColor: 'orange' }} 
        href="#start-project" 
        className="ms-3 hero_butn">
        Start a Project
      </Button>
    </div> {/* Changed button color to orange */}
          </Col>

       
        </Row>
      </Container>
    </section>
  );
};

export default About1;

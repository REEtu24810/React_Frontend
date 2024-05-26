import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './about.css';

const About = () => {
  return (
    <section className="hero1">
      <Container>
        <Row className="align-items-left justify-content-center">
          <Col lg="6" md="6">
            <div className="hero__content1">
              <div className="hero_about">
                <h3 className="hero_text" style={{ width: "180px", height: "30px" }}>About Logixhun</h3>
              </div>
              <h1 className="mb-4 hero__title1" style={{ lineHeight: '1.2' }}>
                Grow Your Business With Logixhunt
              </h1>
              <p className="mb-5 hero_pragraph">
                We always are keeping good relationship with our clients and assure the best services from our end and looking 
                for long term business relationship with our clients. We have a gamut of Web Design and Development, Mobile Applications, Brand Management and Online Marketing Services; 
                hence we not only create a web presence, but give words and shape to your dreams, 
                pave path to reach out to your customers and help you to mark your prints on the web world.
              </p>
            </div>
          </Col>
          <Col>
            {/* You can add content here */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;

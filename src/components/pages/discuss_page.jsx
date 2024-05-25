import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import maintain from "../../assets/maintain.png"
import './dicuss_pages.css';

const Discuss_page = () => {
  return (
    <section className="hero1">
      <Container>
        <Row className="align-items-left justify-content-center">
          <Col lg="6" md="6">
            <div className="hero__content">
              <div className="hero_about">
                <h3 className="hero_text" style={{ width: "180px", height: "30px" }}>About Logixhun</h3>
              </div>
              <h1 className="mb-4 hero__title1">
              Have A Software Or Website & <span className="uniqe">Wanted To Update That?</span>
              </h1>
              <p className="mb-5 hero_pragraph">
              Logixhunt would like to take this privilege to propose 
              you with the scope of annual maintenance of the website of your o
              rganization/institution with an objective to keep them up to date in regard to latest 
              developments in your organization as well as latest trends and technology prevailing in the industry.
              </p>
            </div>
            <Button>Let's Discuss</Button>
          </Col>
          <Col>
            {/* You can add content here */}
          </Col>
          <Col><Col lg="6" md="6" className="d-flex justify-content-center align-items-center">
            <img src={maintain} alt="Hero" className="hero__img1 animated-image1"/>
            {/* <img src={idea} alt="New Image" className="hero__img1"/> */}
          </Col></Col>
        </Row>
      </Container>
    </section>
  );
}

export default Discuss_page;

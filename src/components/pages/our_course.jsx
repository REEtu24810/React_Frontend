import React from 'react'
import { Row, Col,Container } from 'reactstrap';
import "./our_course.css";
// import { Swiper,SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { EffectCoverflow,Pagination,Navigation } from 'swiper';
// import software_Development from '../assets/software-development.jpg';
// import  website_maintenance from '../assets/website-maintenance (1).jpg';
// import website_development from '../assets/website-development.jpg';
// import social_media from '../assets/social_media_marketing.jpg'
// import app_development from "../assets/app-development.jpg"
// import degital_marketing from '../assets/degital-marketing.jpg'
// import ecommerce_marketing from '../assets/ecommerce-marketing.jpg'



const Our_Course = () => {
 
  return (
    <div>
    <Container>
    
    <Row>
      <Col>
        <div className="main">
          <div className="course-title1">
            <h2 className="heading1">Our Course</h2>
          </div>
          <div className="mb-0 text-black text-justify transparent-bg" style={{ textAlign: "center" }}>
            <p>
              <a href="https://www.logixhunt.com" title="Website Development company in Bhilai">Logixhunt</a> houses a team of <strong>web design</strong>,
              <strong>web development</strong>, and <strong>online marketing specialists</strong> with over 15 years of combined experience to offer you
              the best in web solutions and <strong>online marketing services</strong>. We listen to you and help you execute your goals — making you more
              agile, competitive, and profitable. We are your Web Department at work.
            </p>
          </div>
        </div>
      </Col>
    </Row>
    {/* <Swiper effect='coverflow' 
    grabCursor={true}
    centeredSlides={true}
    loop={true}
    slidesPerView={'auto'}
    coverflowEffect={
        {
            rotate:0,
            stretch:0,
            depth:100,
            modifier:2.5,

        }
    }
    className='swiper_container'>
    
        <SwiperSlide>
            <img src={app_development} alt="slider_image"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={website_development} alt="slider_image"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={website_maintenance} alt="slider_image"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={ecommerce_marketing} alt="slider_image"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={degital_marketing} alt="slider_image"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={software_Development} alt="slider_image"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={social_media} alt="slider_image"></img>
        </SwiperSlide>
        <div className="slider-controler">
            <div className="slider-button-prev slider-arrow">
                <icon-icon name="arrow-back-outline"></icon-icon>
            </div>
            <div className="slider-button-next slider-arrow">
                <icon-icon name="arrow-forward-outline"></icon-icon>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </Swiper> */}

    </Container>

    </div>
  )
}

export default Our_Course
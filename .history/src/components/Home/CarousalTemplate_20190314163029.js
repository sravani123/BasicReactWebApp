import React,  { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import carousal_img_one from '../../assets/web-banners-01.jpg';
import carousal_img_two from '../../assets/web-banners-02.jpg';
import carousal_img_three from '../../assets/web-banners-03.jpg';
import carousal_img_four from '../../assets/web-banners-03.jpg';
import myImg from '../../assets/hipsters-cropped-screened.jpg';

const carousalTemplate = () =>(
   <div>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal_img_one}
        alt="First slide"
      />
     <div className="carousel-caption d-none d-md-block">
    <button type="button" className="btn btn-success btn-shedule-service"  onClick={this.handleShow}>Shedule pickup </button>
    </div>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal_img_two}
        alt="Second slide"
      />
  <div className="carousel-caption d-none d-md-block">
    <button type="button" className="btn btn-success btn-shedule-service"  onClick={this.handleShow}>Shedule pickup</button>
    </div>
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal_img_three}
        alt="Third slide"
      />
  <div className="carousel-caption d-none d-md-block">
    <button type="button" className="btn btn-success btn-shedule-service"  onClick={this.handleShow}>Shedule pickup</button>
    </div>
    
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal_img_four}
        alt="Third slide"
      />
  <div className="carousel-caption d-none d-md-block">
    <button type="button" className="btn btn-success btn-shedule-service"  onClick={this.handleShow}>Shedule pickup</button>
    </div>
    </Carousel.Item>
    
  
  </Carousel>
   </div>
);
import React from 'react'
import img1 from "../assets/images/sliderimg1.png";
import img2 from "../assets/images/sliderimg2.png";
import img3 from "../assets/images/sliderimg3.png";
import img4 from "../assets/images/sliderimg4.png";
import line from "../assets/images/yellow-line.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'react-bootstrap';

const Slidersec = () => {
        const SliderFour = {
                dots: false,
                infinite: true,
                autoplay: true,
                arrows: false,
                autoplaySpeed: 0,
                speed: 5000,
                slidesToShow: 7,
                slidesToScroll: 1,
                cssEase: "linear",
            
                responsive: [
                  {
                    breakpoint: 1170,
                    settings: {
                      slidesToShow: 5,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: false,
                    },
                  },
                  {
                    breakpoint: 780,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      dots: false,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      dots: false,
                    },
                  },
                ],
              };
  return (
    <div className='bg-blk'>
      <Container>
        <h2 className="text-white fs-lg1 m-0  fw-normal text-center ff-azo py-5">PARTNERS</h2>
        <Slider {...SliderFour}>
          <div className="d-flex justify-content-center mt-5" >
          <img src={img1} alt="#" />
          </div>
          <div className="d-flex justify-content-center">
          <img src={line} alt="#" />
          </div>          
           <div  className="d-flex justify-content-center">
          <img src={img2} alt="#" />
          </div>
           <div className="d-flex justify-content-center">
          <img src={line} alt="#" />
          </div>          
          <div className="d-flex justify-content-center mt-4" >
          <img src={img3} alt="#" />
          </div>
          <div className="d-flex justify-content-center">
          <img src={line} alt="#" />
          </div>
          <div className="d-flex justify-content-center mt-4">
          <img src={img4} alt="#" />
          </div>
          <div className="d-flex justify-content-center">
          <img src={line} alt="#" />
          </div>
          </Slider>
      </Container>
    </div>
  )
}

export default Slidersec

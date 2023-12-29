import React from 'react'
import { Container } from 'react-bootstrap'
import kong from '../assets/images/bigmainimg.webp'
import left1 from '../assets/images/left1.webp'
import left2 from '../assets/images/left2.webp'
import left3 from '../assets/images/left3.webp'
import left4 from '../assets/images/left4.webp'
import left5 from '../assets/images/left5.webp'
import right1 from '../assets/images/right1.webp'
import right2 from '../assets/images/right2.webp'
import right3 from '../assets/images/right3.webp'
import right4 from '../assets/images/right4.webp'
import right5 from '../assets/images/right5.webp'
import big1 from '../assets/images/big1.webp'
import big2 from '../assets/images/big2.webp'
import big3 from '../assets/images/big3.webp'
import big4 from '../assets/images/big4.webp'
import big5 from '../assets/images/big5.webp'
import big6 from '../assets/images/big6.webp'
import big7 from '../assets/images/big7.webp'
import big8 from '../assets/images/big8.webp'
import big9 from '../assets/images/big9.webp'
import big10 from '../assets/images/big10.webp'
import Slider from 'react-slick'
// import $ from 'jquery'

const TheKong = () => {
  // $(function () {
  //   $("#big-image img:eq(0)").nextAll().hide();
  //   $(".small-images img").click(function (e) {
  //     var index = $(this).index();
  //     $("#big-image img").eq(index).show().siblings().hide();
  //   });
  // });
  var up_kong = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    cssEase: "linear",
    pauseOnHover: false,
    speed: 2500,
    autoplaySpeed: 0,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
    ],
  }
  var down_kong = {
    dots: false,
    arrows: false,
    rtl: true,
    autoplay: true,
    infinite: true,
    cssEase: "linear",
    pauseOnHover: false,
    speed: 2500,
    autoplaySpeed: 0,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
    ]
  }
  return (
    <section className='py-5 bg-blk position-relative overflow-hidden '>
      <Container className='mb-5  pb-5'>
        <div className='d-xl-block d-none pt-5 small-images'>
          <img className='left1 img img-h z-3 cursor-pointer' src={left1} alt="kongs" />
          <img className='left2 img img-h z-3 cursor-pointer' src={left2} alt="kongs" />
          <img className='left3 img  img-h z-3 cursor-pointer' src={left3} alt="kongs" />
          <img className='left4 img img-h z-3 cursor-pointer' src={left4} alt="kongs" />
          <img className='left5 img img-h z-3 cursor-pointer' src={left5} alt="kongs" />
          <img  className='right1 img img-h z-3 cursor-pointer' src={right1} alt="kongs" />
          <img  className='right2 img img-h z-3 cursor-pointer' src={right2} alt="kongs" />
          <img className='right3 img img-h z-3 cursor-pointer' src={right3} alt="kongs" />
          <img className='right4 img img-h z-3 cursor-pointer' src={right4} alt="kongs" />
          <img className='right5 img img-h z-3 cursor-pointer' src={left1} alt="kongs" />
        </div>
        <div className='mb-5 pb-5'>
          <h2 className='text-white fs-lg1 m-0  fw-normal text-center ff-azo m-0 pb-4 ' data-aos="fade-up" data-aos-duration="2000">THE KONGS</h2>
          <Slider {...up_kong} className='d-xl-none d-block'>
            <div><img className='left_kong1_abs  img' src={left1} alt="kongs" /></div>
            <div><img className='left_kong2_abs  img' src={left2} alt="kongs" /></div>
            <div><img className='left_kong3_abs  img' src={left3} alt="kongs" /></div>
            <div><img className='left_kong4_abs img' src={left4} alt="kongs" /></div>
            <div><img className='left_kong5_abs img' src={left5} alt="kongs" /></div>
          </Slider>
          <div id='big-image' className='d-flex  justify-content-center align-items-center mb-xl-5 pb-xl-5 position-relative z-1' data-aos="zoom-in" data-aos-duration="2000">
            <img className='width_md_100 big-image' src={kong} alt="kong" />
            <span className='kongselips position-absolute '></span>
            {/* <img className='width_md_100 big_image' src={big2} alt="kong" /> */}
            {/* <img className='width_md_100 big_image' src={big3} alt="kong" /> */}
            {/* <img className='width_md_100 big_image' src={big4} alt="kong" /> */}
            {/* <img className='width_md_100 big_image' src={big5} alt="kong" /> */}
            {/* <img className='width_md_100 big_image' src={big6} alt="kong" /> */}
            {/* <img className='width_md_100 big_image' src={big7} alt="kong" /> */}
            {/* <img className='width_md_100 big_image' src={big8} alt="kong" /> */}
            {/* <img className='width_md_100 big_image' src={big9} alt="kong" /> */}
            {/* <img className='width_md_100 big_image' src={big10} alt="kong" /> */}
            {/* <img className='width_md_100 big_image' src={big1} alt="kong" /> */}
            <div className="kong_ellipse"></div>
          </div>
        </div>
      
        <Slider {...down_kong} className='d-xl-none d-block'>
          <div><img className='right_kong1_abs  img' src={right1} alt="kongs" /></div>
          <div><img className='right_kong2_abs  img' src={right2} alt="kongs" /></div>
          <div><img className='right_kong3_abs  img' src={right3} alt="kongs" /></div>
          <div><img className='right_kong4_abs  img' src={right4} alt="kongs" /></div>
          <div><img className='right_kong5_abs  img' src={right5} alt="kongs" /></div>
        </Slider>
      </Container>
    </section>
  )
}

export default TheKong
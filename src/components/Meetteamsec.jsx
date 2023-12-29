import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import meet from "../assets/images/teamimg1.png";
import meet2 from "../assets/images/teamimg2.png";
import meet3 from "../assets/images/teamimg3.png";
import inst from "../assets/images/insta-icon.svg";
import twitter from "../assets/images/twitter-icon.svg";


const Meetteamsec = () => {
   
  
  
  return (
    <section className="bg-blk py-5">      
      <Container className="mt-lg-5 pt-lg-5">
        <h2 className="text-white fs-lg1 m-0  fw-normal text-center ff-azo py-5 mt-4">Meet The Team</h2>
        <div className="line-Y"></div>
        <Row className="mb-4">
            <Col lg={6} className="d-flex justify-content-center justify-content-lg-start flex-column align-items-center align-items-lg-start" data-aos='fade-right'data-aos-duration='3000'>
                <h3 className="text-white fw-bold fs-md1 m-0 pb-2 ff-montserrat ">Jaylon Schleifer</h3>
                <p className="text-white fs-sm1 fw-normal m-0 ff-montserrat ">Carter Septimus</p>
               <img className="mb-5 scale-img mt-4" src={meet} alt="#" />
            </Col>
            <Col lg={6} className="d-flex justify-content-center justify-content-lg-start flex-column align-items-center align-items-lg-start"  data-aos='fade-left'data-aos-duration='3000'>
                <h3 className="text-white fw-semibold fs-md1 ff-montserrat m-0 pb-2">@Jaylon Schleifer</h3>
                <p className="text-white fs-sm1 fw-normal ff-montserrat m-0 pb-4">Nearly two decades in Business</p>
                <p className="text-white fw-normal fs-sm ff-montserrat m-0 pt-2 pb-2 mx-480 text-center text-lg-start  ">Faucibus risus id libero interdum in nisl nibh risus molestie. Gravida purus mauris nulla duis est eleifend. Suspendisse eu iaculis odio sit. Hac orci massa habitasse congue nulla tristique. </p>
                <p className="text-white fw-normal fs-sm ff-montserrat m-0 pb-4 mx-570 text-center text-lg-start ">Sem posuere amet, tristique pellentesque quis erat lectus mauris, ultricies. Adipiscing pharetra lectus mauris, mi pharetra magna in tempus nisi. Sed at in nisl feugiat non in amet eu facilisis. </p>
                <div className="d-flex align-items-center gap-4">
                <img className="buller-y cursor-pointer" src={inst} alt="#" />
                <img className="buller-y cursor-pointer" src={twitter} alt="#" />
                </div>
             
            </Col>
        </Row>
        <div className="line-Y"></div>
        <Row  className="mb-4">
            <Col lg={6} className="d-flex justify-content-center justify-content-lg-start flex-column align-items-center align-items-lg-start" data-aos='fade-right'data-aos-duration='3000'>
                <h3 className="text-white fw-bold fs-md1 m-0 pb-2 ff-montserrat  ">Talan Passaquindici Arcand</h3>
                <p className="text-white fs-sm1 fw-normal ff-montserrat m-0">Jakob Ekstrom Bothman</p>
               <img className="mb-5 scale-img mt-4" src={meet2} alt="#" />
            </Col>
            <Col lg={6} className="d-flex justify-content-center justify-content-lg-start flex-column align-items-center align-items-lg-start" data-aos='fade-left'data-aos-duration='3000'>
                <h3 className="text-white fw-semibold fs-md1 ff-montserrat m-0 pb-2">@Talan Passaquindici Arcand</h3>
                <p className="text-white fs-sm1 fw-normal m-0 ff-montserrat pb-4">Invester  & International Top Model</p>
                <p className="text-white fw-normal fs-sm m-0 ff-montserrat pt-2 pb-2 mx-480 text-center text-lg-start  ">Neque hendrerit lectus neque molestie facilisis. Faucibus arcu eget facilisis nisl id ultricies. Aliquet eget scelerisque posuere habitant mauris quis ridiculus rutrum consectetur.  </p>
                <p className="text-white fw-normal fs-sm m-0 ff-montserrat pb-4 mx-480 text-center text-lg-start ">Pretium vitae nunc proin nullam turpis eu blandit. Nibh ultricies gravida vestibulum nec ultricies. Eleifend egestas non nunc, nisl tristique adipiscing non diam fermentum. </p>
                <div className="d-flex align-items-center gap-4">
                <img className="buller-y cursor-pointer" src={inst} alt="#" />
                <img className="buller-y cursor-pointer" src={twitter} alt="#" />
                </div>
             
            </Col>
        </Row>
        <div className="line-Y"></div>
        <Row  className="mb-4">
            <Col lg={6} className="d-flex justify-content-center justify-content-lg-start flex-column align-items-center align-items-lg-start" data-aos='fade-right'data-aos-duration='3000'>
                <h3 className="text-white fw-bold fs-md1 m-0 ff-montserrat pb-2 ">Alfonso Franci</h3>
                <p className="text-white fs-sm1 fw-normal ff-montserrat m-0">Alfonso Dokidis</p>
               <img className="mb-5 scale-img mt-4" src={meet3} alt="#" />
            </Col>
            <Col lg={6} className="d-flex justify-content-center justify-content-lg-start flex-column align-items-center align-items-lg-start" data-aos='fade-left'data-aos-duration='3000'>
                <h3 className="text-white fw-semibold ff-montserrat fs-md1 m-0 pb-2">@Alfonso Franci</h3>
                <p className="text-white fs-sm1 fw-normal ff-montserrat m-0 pb-4">Nearly two decades in Business</p>
                <p className="text-white fw-normal fs-sm ff-montserrat m-0 pt-2 pb-2 mx-480 text-center text-lg-start  ">A ut sagittis, purus sit integer suspendisse lacus quam auctor. Interdum venenatis, sed ligula purus erat. A hac faucibus blandit euismod molestie amet nibh scelerisque. </p>
                <p className="text-white fw-normal fs-sm ff-montserrat m-0 pb-4 mx-570 text-center text-lg-start ">Fermentum aliquam fames suscipit scelerisque integer mauris sollicitudin. Tellus mattis egestas molestie elementum, elementum. Urna, in molestie ac quam nisl orci mattis. </p>
                <div className="d-flex align-items-center gap-4">
                <img className="buller-y cursor-pointer" src={inst} alt="#" />
                <img className="buller-y cursor-pointer" src={twitter} alt="#" />
                </div>
             
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Meetteamsec;

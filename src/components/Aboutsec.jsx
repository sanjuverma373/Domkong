import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import car from "../assets/images/cars.png"
import watch from "../assets/images/watches.png"
import boat from "../assets/images/boats.png"




const Aboutsec = () => {
        return (
                <div className='bg-blk pb-3 overflow-hidden '>
                        <Container className='MY-container pt-5'>
                                <Row className='align-items-center my-5 py-lg-5 pt-0'>
                                        <Col lg={5}>
                                                <h2 className='text-white fs-lg1 m-0  fw-normal mb-4 mt-4 ff-azo'>About </h2>
                                                <p className='fs-sm1 text-white m-0 mb-4 fw-normal ff-montserrat'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra  amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
                                        </Col>
                                        <Col lg={7} className=' position-relative z-1'>
                                                <span className='aboutelips position-absolute '></span>
                                                <div id="slideshow" className='position-relative'>
                                                        <div class="entire-content">
                                                                <div class="content-carrousel">
                                                                        <figure class="shadow"><img className='width-sm-100' src={boat} alt='boat' /></figure>
                                                                        <figure class="shadow "><img className='width-sm-100' src={watch} alt='watch' /></figure>
                                                                        <figure class="shadow"><img className='width-sm-100' src={car} alt='car' /></figure>
                                                                        <figure class="shadow "><img className='width-sm-100' src={boat} alt='boat' /></figure>
                                                                        <figure class="shadow"><img className='width-sm-100' src={watch} alt='watch' /></figure>
                                                                        <figure class="shadow "><img className='width-sm-100' src={car} alt='car' /></figure>
                                                                        <figure class="shadow "><img className='width-sm-100' src={boat} alt='boat' /></figure>
                                                                        <figure class="shadow "><img className='width-sm-100' src={watch} alt='watch' /></figure>
                                                                        <figure class="shadow "><img className='width-sm-100' src={car} alt='car' /></figure>
                                                                </div>
                                                        </div>
                                                </div>
                                        </Col>
                                </Row>                                
                        </Container>
                </div>
        )
}

export default Aboutsec
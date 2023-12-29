import React from 'react'
import { Accordion, Container } from 'react-bootstrap'
import footer1 from '../assets/images/footer-img1.png'
import footer2 from '../assets/images/footer-img2.png'
import footer3 from '../assets/images/footer-img3.png'
import footer4 from '../assets/images/footer-img4.png'
import footer5 from '../assets/images/footer-img5.png'
import footer6 from '../assets/images/footer-img6.png'
import Shadow from '../assets/images/footshadow.png'
import footerimg from '../assets/images/footerimg.png'

const Accordionsec = () => { 
  return (
    <section className=' accordion-bg position-relative z-1 pt-4'>
        <img className='accordion-shadow w-100' src={Shadow} alt="#" />

        <h2 className="text-white fs-lg1 m-0  fw-normal text-center ff-azo py-lg-5">FAQS</h2>
        <Container className=' mx-900 pb-0 pb-sm-5'>
        <div className='d-flex justify-content-center'>
                    <Accordion defaultActiveKey="0" className='width-967'>
                        <Accordion.Item eventKey="0" className='w-100 bg-transparent'>
                            <Accordion.Header className='ff_montserrat fs_2xmd text_ffffff mb-0 fw-bold bg-transparent'>Arcu faucibus diam feugiat magna etiam.</Accordion.Header>
                            <Accordion.Body className='text-white bg-transparent'>
                              Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. 
                            </Accordion.Body>
                            
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='w-100 bg-transparent'>
                            <Accordion.Header className='ff_montserrat fs_2xmd text_ffffff mb-0 fw-bold bg-transparent'>Fermentum tortor aenean.</Accordion.Header>
                            <Accordion.Body className='text-white bg-transparent'>
                              Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. 
                            </Accordion.Body>
                            
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='w-100 bg-transparent'>
                            <Accordion.Header className='ff_montserrat fs_2xmd text_ffffff mb-0 fw-bold bg-transparent'>Dictum est amet sollicitudin.</Accordion.Header>
                            <Accordion.Body className='text-white bg-transparent'>
                              Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                            </Accordion.Body>
                            
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='w-100 bg-transparent'>
                            <Accordion.Header className='ff_montserrat fs_2xmd text_ffffff mb-0 fw-bold bg-transparent'>Sed vulputate mi faucibus.</Accordion.Header>
                            <Accordion.Body className='text-white bg-transparent'>
                              Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                            </Accordion.Body>
                            
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='w-100 bg-transparent '>
                            <Accordion.Header className='ff_montserrat fs_2xmd text_ffffff mb-0 fw-bold bg-transparent'>Commodo placerat ultricies. </Accordion.Header>
                            <Accordion.Body className=' text-white bg-transparent'>
                              Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                            </Accordion.Body>
                            
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className='w-100 bg-transparent '>
                            <Accordion.Header className='ff_montserrat fs_2xmd text_ffffff mb-0 fw-bold bg-transparent'>Nunc amet cursus morbi donec. </Accordion.Header>
                            <Accordion.Body className=' text-white bg-transparent'>
                              Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                            </Accordion.Body>
                            
                        </Accordion.Item>
                    </Accordion>
                </div>
                <span className='accordion-elips1 position-absolute '></span>
            </Container >
            <div className=' d-flex align-items-center justify-content-center margin-top pt-sm-5 pt-0 mb-3 '>
                <img src={footerimg} alt="" />
            </div>
            <div className='d-flex justify-content-center align-items-center gap-4 pt-1 '>
               <a href="http://twitter"><img className='link common-h' src={footer1} alt="#" /></a>
                <a href="http://twitter"><img className='link common-h' src={footer2} alt="#" /></a>
                <a href="http://diamond"><img className='link common-h' src={footer3} alt="#" /></a>
                <a href="http://discord"><img className='link common-h' src={footer4} alt="#" /></a>
               <a href="https://medium.com/"><img className='link common-h' src={footer5} alt="#" /></a>
               <a href="http://telegram"><img className='link common-h' src={footer6} alt="#" /></a>
            </div>
            <div className='pb-2'><hr className='hr-line' /></div>
            <p className=' m-0 pb-4 text-white fs-sm fw-normal text-center  '>© DomPKong 2022</p>
             <span className='accordion-elips position-absolute '></span>
    </section>
  )
}

export default Accordionsec
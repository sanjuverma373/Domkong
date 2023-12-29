import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Bottle from "../assets/images/mint-bottle.png";
import shadowtop from "../assets/images/shadow-top.png";
import shadowbottom from "../assets/images/shadow-bottom.png";

const Mintsec = () => {
        let [count, setCount] = useState(1);

    function addCount() {
        setCount((prevCount) => (prevCount < 9 ? prevCount + 1 : prevCount));
    }
    function subCount() {
        setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
    }
  return (
    <section className="bg-mintimg py-5 position-relative z-1  pt-5">
        <img className="mint-shadow-t w-100" src={shadowtop} alt="#" />
        <img className="mint-shadow-b w-100" src={shadowbottom} alt="#" />
        <Container className="MY-container position-relative">
          <Row className="align-items-center">
            <Col md={6}>
              <div className="d-flex align-items-end justify-content-center justify-content-lg-start">
                <img className="width-50" src={Bottle} alt="#" />
              </div>
            </Col>
            <Col md={6} className="mt-5">              
                        
              <div className="d-flex justify-content-center justify-content-lg-start pb-5">
                <h2 className="text-white fs-lg1 m-0  fw-normal text-center ff-azo">
                  Mint NFT
                </h2>
              </div>
              <Row>
               <Col className="col-6">           
                <div>
                  <h3 className="fs-lg m-0 pb-2 ff-montserrat fw-bolder fw-900 text-white ">
                    9999
                  </h3>
                  <p className="fw-normal pt-1 fs-sm ff-montserrat text-white  mb-4 pb-2">
                    of 10,000 minted
                  </p>

                  <h3 className="fs-lg m-0 pb-2 ff-montserrat fw-bolder fw-900 text-white">
                    Max 9
                  </h3>
                  <p className="fw-normal pt-1 fs-sm ff-montserrat text-white mb-4 pb-2">
                    NFTs per transaction
                  </p>
                </div>
                </Col>
                  <Col className=" col-6">
                <div>
                  <h3 className="fs-lg m-0 pb-2 ff-montserrat fw-bolder fw-900 text-white">
                    .2 ETH
                  </h3>
                  <p className="fw-normal pt-1 ff-montserrat fs-sm text-white mb-4 pb-2">
                    per NFT
                  </p>

                  <h3 className="fs-lg m-0 pb-2 ff-montserrat fw-bolder fw-900 text-white">
                    Max 2
                  </h3>
                  <p className="fw-normal pt-1 ff-montserrat fs-sm text-white mb-4 pb-2">
                    Transaction per wallet
                  </p>
                </div>
              </Col>
              </Row>

              <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                <button className="button-common fs-lg fw-900 text-black me-2 text-center ff-montserrat" onClick={subCount}>-</button>
                <button className="button-zero fs-lg fw-900 text-white me-2 ff-montserrat text-center ">
                  <span id="number">0{count}</span>
                </button>
                <button className="button-common fs-lg fw-900 text-black ff-montserrat text-center" onClick={addCount}>+</button>
              </div>
              <div className="my-4 d-flex justify-content-center justify-content-lg-start">
                <button className="yellow-box fw-normal width-sm-100 ff-azo  fs-md1 text-black ">
                  MINT NOW
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        <span className="mintelips1 position-absolute "></span>
        <span className="mintelips2 position-absolute "></span>
    </section>
  );
};

export default Mintsec;

import React from "react";
import { Card, Col, Row, Carousel } from "react-bootstrap";
import { Animated } from "react-animated-css";
import placeholder from "../resources/images/aboutimg.png";
import pocketbartender from "../resources/images/pocketbartender.png";
import twiggington from "../resources/images/twiggington.png";
import stadcon from "../resources/images/stadcon.png";

import { MdWineBar as BarLogo } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ProjectList() {
  return (
    <>
      <Animated
        animationIn="fadeIn"
        isVisible={true}
        animationInDuration={1000}
      >
        <Row>
          <Col>
            <Card className="project__card">
              <Card.Title>
                PocketBartender
                <BarLogo />
              </Card.Title>
              <Row>
                <Col lg={6}>
                  <a href="">
                    <Card.Img src={pocketbartender} />
                  </a>
                </Col>
                <Col lg={6}>
                  <Card.Body>
                    <h2>PocketBartender (2022)</h2>
                    <p>blah blah blah</p>
                    <ul>
                      <li>blah</li>
                      <li>blah</li>
                      <li>blah</li>
                      <li>blah</li>
                    </ul>
                    <button className="btn btn--primary">Live Demo</button>
                    <a
                      className="fs-1 float-end text-white"
                      href="https://boilerplatemax.github.io/pocketbartender/"
                    >
                      <FaGithub />
                    </a>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Card className="project__card">
              <Card.Title>Stadcon Group</Card.Title>
              <Row>
                <Col lg={6}>
                  <a href="https://stadcongroup.com/">
                    <Card.Img src={stadcon} />
                  </a>
                </Col>
                <Col lg={6}>
                  <Card.Body>
                    <h2>Stadcon Group (2020)</h2>
                    <p>blah blah blah</p>
                    <ul>
                      <li>blah</li>
                      <li>blah</li>
                      <li>blah</li>
                      <li>blah</li>
                    </ul>
                    <a href="https://stadcongroup.com/">
                      <button className="btn btn--primary">Live Demo</button>
                    </a>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="project__card">
              <Card.Title>Twiggington Tree Care</Card.Title>
              <Row>
                <Col lg={6}>
                  <a href="http://twiggingtontreecare.com/">
                    <Card.Img src={twiggington} />
                  </a>
                </Col>
                <Col lg={6}>
                  <Card.Body>
                    <h2>Twiggington Tree Care (2021)</h2>
                    <p>blah blah blah</p>
                    <ul>
                      <li>blah</li>
                      <li>blah</li>
                      <li>blah</li>
                      <li>blah</li>
                    </ul>
                    <a href="http://twiggingtontreecare.com/">
                      <button className="btn btn--primary">Live Demo</button>
                    </a>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Card className="project__card">
              <Card.Title>A COLORS SHOW</Card.Title>
              <Row>
                <Col lg={6}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Soy-j7rxrL8"
                  ></iframe>
                </Col>
                <Col lg={6}>
                  <Card.Body>
                    <h2>A COLORS SHOW (2019)</h2>
                    <p>blah blah blah</p>
                    <ul>
                      <li>blah</li>
                      <li>blah</li>
                      <li>blah</li>
                      <li>blah</li>
                    </ul>
                    <button className="btn btn--primary">Live Demo</button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="project__card">
              <Card.Title>Twiggington Tree Care</Card.Title>
              <Row>
                <Col lg={6}>
                  <Card.Img src={placeholder} />
                </Col>
                <Col lg={6}>
                  <Card.Body>
                    <h2>Twiggington Tree Care (2021)</h2>
                    <p>blah blah blah</p>
                    <ul>
                      <li>blah</li>
                      <li>blah</li>
                      <li>blah</li>
                      <li>blah</li>
                    </ul>
                    <button className="btn btn--primary">Live Demo</button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Animated>
    </>
  );
}

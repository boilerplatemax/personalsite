import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeImage from "../resources/images/homeimg.png";
import { Animated } from "react-animated-css";
import resume from "../resources/resume.pdf";
export default function HomePage() {
  //Home page

  return (
    <div id="home-page">
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={true}
        animationInDuration={1500}
      >
        <Container>
          <div className="home-page__banner">
            <Row>
              <Col lg={{ span: 6 }}>
                <div className="home-page__img-holder">
                  <img src={homeImage} alt="Myself coding" />
                </div>
              </Col>
              <Col
                lg={{ span: 5, offset: -1 }}
                className="d-flex align-items-center"
              >
                <div className="p-3">
                  <h3 className="muted-text">Hi, I'm Max Shapovalov</h3>
                  <h1>Front-End React Developer</h1>

                  <div className="w-100 d-flex justify-content-start">
                    <a href="/projects" className="p-2">
                      <button className="btn btn--primary btn--large">
                        My Work
                      </button>
                    </a>
                    <a
                      href={resume}
                      className="p-2"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <button className="btn btn--secondary btn--large">
                        Resume
                      </button>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </Animated>
    </div>
  );
}

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import maxImage from "../resources/images/maxwhite.png";

export default function AboutPage() {
  //Home page
  const songs= [
    'https://open.spotify.com/embed/track/2pxCOdnHEZZ3A1XRNxjc1v?utm_source=generator',
    'https://open.spotify.com/embed/track/45uDtD6s3y0V4tkWZrPDXy?utm_source=generator',
    'https://open.spotify.com/embed/track/4lJ6YVXQ0jUk5ILu0PSrA4?utm_source=generator',
    'https://open.spotify.com/embed/track/300DUx4tdtCdGEUXR032jA?utm_source=generator',
    'https://open.spotify.com/embed/track/5xQr5TxQ77siaKfuyiJbT0?si=bdce40a799aa4a6d?utm_source=generator']
  return (
    <div id="about-page" className="mt-5">
      <Container>
        <Row>
          <Col lg={{ span: 4, offset: 0 }}>
            <img
              src={maxImage}
              className="about__img"
              alt="Myself on vacation"
            />
          </Col>
          <Col className="mb-3" lg={{ span: 7, offset: 1 }}>
            <div className="mb-3">
              <h2>My Background</h2>
              <p>
                I am recent graduate from OCAD University with a Bachelor's of
                Design in <span className="bold">Digital Futures</span>.
              </p>
              <p>
                Additionally, I have taken University of Helsinki's Open
                FullStack Developer course to expand my knowledge on web apps
                and React JS <span className="bold">Digital Futures</span>.
              </p>
            </div>

            <div className="mb-5">
              <h2>React Skills</h2>
              <ul className="about__list-double">
                <li>HTML, CSS, JSX</li>
                <li>ES6 Javascript</li>
                <li>Typescript</li>
                <li>React Hooks</li>
                <li>Github</li>
                <li>Bootstrap</li>
                <li>MongoDB</li>
                <li>UX/UI principles</li>
                <li>Testing (Jest)</li>
                <li>Firebase</li>
                <li>HTTP requests</li>
                <li>Node</li>
                <li>Next.JS</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-dark">
        <Row className="pt-5">
          <Col className="mb-3" lg={{ span: 4, offset: 2 }}>
            <div>
              <h2>My Interests</h2>
              <hr />
              <h4>Playing music</h4>
              <p>
                I have a passion for <span className="bold">music</span> and{" "}
                <span className="bold">playing guitar</span>.
              </p>
              <p>
                My love for software began when I decided to learn how to code
                games for a school project.
              </p>
              <h4>Making video games</h4>
              <p>
                I get a thrill out of learning how things function which is why
                I enjoy playing games and trying to figure out how they work.
                <a
                  href="https://udaco.itch.io/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-white"
                >
                  Check out some games that I have worked on!
                </a>
              </p>
              <h4>Travelling</h4>
              <p>
                I recently took a trip to Europe and fell in love with the
                scenic views and lively culture.
              </p>
              <p>
                My dream is to see the Great Pyramids and swim in the Dead Sea.
              </p>
            </div>
          </Col>
          <Col lg={{ span: 4, offset: -2 }}>
            <h2>What I've been listening to lately</h2>
            <hr />
            <div className="about__song-holder">
              {songs.map(
                song=>{
                  return(
                    <iframe
                title="Wake up alone Spotify"
                style={{ borderRadius: "12px" }}
                src={song}
                width="100%"
                height="302"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                as=""
                preload="true"
                key={song}
              ></iframe>
                  )
                }
              )}
              
              
            </div>
            {/* <img src={maxImage} className="about__img" /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

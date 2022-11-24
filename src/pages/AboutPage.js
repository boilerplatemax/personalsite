import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import maxImage from "../resources/images/maxwhite.png";


export default function AboutPage() {
  //Home page

  return (
    <div id="about-page" className='mt-5'> 

      <Container>

          <Row>
            <Col lg={{span:4, offset:0}}>
              <img src={maxImage} className="about__img" alt="Myself on vacation"/>
            </Col>
            <Col className='mb-3' lg={{span:7, offset:1}}>
              <div className='mb-3'>
              <h2>My Background</h2>
              <p>
                I am recent graduate from OCAD University with a Bachelor's of Design in <span className='bold'>Digital Futures</span>.
              </p>
              </div>
              <div className='mb-5'>
              <h2>What I gained from Digital Futures</h2>
              <ul className='about__list-double'>
                <li>Computer software and coding</li>
                <li>Smart phone app development</li>
                <li>Physical computing</li>
                <li>3D Modelling</li>
                <li>Game design</li>
                <li>Social media trend forecasting</li>
                <li>Computer science history</li>
                <li>Digital business</li>
                <li>Wearable computing</li>
              </ul>
              </div>

            </Col>
          </Row>
          </Container>
          <Container fluid className='bg-dark'>
          <Row className='pt-5'>
            <Col className='mb-3' lg={{span:4,offset:2}}>
              <div className='mb-3'>
              <h2>What else do I do besides code apps?</h2>
              <p>I have a passion for <span className='bold'>music</span> and <span className='bold'>playing guitar</span>.</p>
              <p>My love for software began when I decided to learn how to code games for a school project.</p>
              <h2>I enjoy creating video games</h2>
              <p>I get a thrill out of learning how things function which is why I enjoy playing games and trying to figure out how they work.</p>
              <h2>I love travelling</h2>
              <p>I recently took a trip to Europe and fell in love with the scenery and culture.</p>
              <p>My dream is to see the pyramids and swim in the dead sea.</p>


              </div>
              
            </Col>
            <Col lg={{span:4,offset:-2}}>
            <h2>What I've been listening to lately</h2>
              <hr/>
            <div className='about__song-holder'>
              <iframe title='Wake up alone Spotify' style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/2pxCOdnHEZZ3A1XRNxjc1v?utm_source=generator" width="100%" height="302" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              <iframe title='Sand People Spotify' style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/45uDtD6s3y0V4tkWZrPDXy?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              <iframe title='Ooh la la Spotify' style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/4lJ6YVXQ0jUk5ILu0PSrA4?utm_source=generator" width="100%" height="302" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              <iframe title='Palace / Curse Spotify' style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/300DUx4tdtCdGEUXR032jA?utm_source=generator" width="100%" height="302" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              <iframe title='Hands up Spotify' style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/5xQr5TxQ77siaKfuyiJbT0?si=bdce40a799aa4a6d?utm_source=generator" width="100%" height="302" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </div>
              {/* <img src={maxImage} className="about__img" /> */}
            </Col>
          </Row>

      </Container>

    </div>
  );
}

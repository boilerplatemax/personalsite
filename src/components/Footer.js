import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import certificate from '../resources/images/certificate.png'

export default function Footer() {
  return (
    <Container fluid className='bg-dark p-3'>
        <Row className='mt-4'>
            <Col sm={{span:4,offset:2}}>
              <p>Education</p>
              <hr/>
              <ul className='footer__list'>
                
                <li><a href='https://fullstackopen.com/en/' className='footer__link' target='_blank' rel="noopener noreferrer">How I learned Fullstack development</a></li>
                <li><a href={certificate} className='footer__link' target='_blank' rel="noopener noreferrer">University of Helsinki Certificate</a></li>
                <li><a href='https://admissions.ocadu.ca/program/digital-futures?gclid=CjwKCAiApvebBhAvEiwAe7mHSMc1nCgtjvlhKkA0vlwJzuYD8Dm6i1SP4ZLReMiR1wOJmbdg9hM5rxoClSsQAvD_BwE'
                className='footer__link'
                target='_blank'
                rel="noopener noreferrer"
                >OCAD U Bachelor's Degree</a></li>
              </ul>

            </Col>
            <Col sm={{span:2}}>
              <p>More Projects</p>
              <hr/>
              <ul className='footer__list'>
                <li><a href='https://udaco.itch.io/ufo' className='footer__link' target='_blank' rel="noopener noreferrer">2D Unity Game</a></li>
                <li><a href='https://stadcongroup.com/' className='footer__link' target='_blank' rel="noopener noreferrer">Freelance Site Created With React</a></li>
                <li><a href='http://twiggingtontreecare.com/' className='footer__link' target='_blank' rel="noopener noreferrer">Wordpress Freelance Site</a></li>

              </ul>
              </Col>
              <Col sm={{span:3,offset:-1}}>
              <p>React Projects</p>
              <hr/>
              <ul className='footer__list'>
                <li><a href='https://github.com/boilerplatemax/fullstack' className='footer__link' target='_blank' rel="noopener noreferrer">My Learning Progress</a></li>
                <li><a href='https://github.com/boilerplatemax/react-display-user' className='footer__link' target='_blank' rel="noopener noreferrer">Display a User</a></li>
                <li><a href='https://github.com/boilerplatemax/colorgame' className='footer__link' target='_blank' rel="noopener noreferrer">Guess the Color Game</a></li>

              </ul>
              </Col>
        </Row>
    </Container>
  )
}

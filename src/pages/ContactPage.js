import React,{useState} from 'react'
import Contact from '../components/Contact'
import {Container,Row,Col} from 'react-bootstrap'
import { FaGithub, FaLinkedin } from "react-icons/fa";



export default function ContactPage() {
    const [message,setMessage]=useState('')
  return (
    <Container fluid>
    <Row>
        <Col className={`d-flex justify-content-center ${message.includes('fill')?'bg-danger':'bg-success'}`}>
            {message}
        </Col>
        </Row>

    <Container className='mt-3'>
        <Row>
            <Col md={{span:5}} className='d-flex float-end h-100 flex-column h-100'>
                <h2>Let's get in touch!</h2>
                <hr/>
                <p>Email: maximsdev@gmail.com</p>

                <a href="https://github.com/boilerplatemax"
                target="_blank"
                rel="noopener noreferrer"
                className='fs-5 text-white text-decoration-none'>
                    <p className='display-inline'>Github <FaGithub /></p>  
                </a>
                <a href="https://github.com/boilerplatemax"
                target="_blank"
                className='fs-5 text-white text-decoration-none'
                rel="noopener noreferrer"
                >
                    <p className='display-inline'>LinkedIn <FaLinkedin /></p>  
                </a>

            </Col>
            <Col md={{span:7}}>
                <h2>Contact</h2>
                <Contact setMessage={setMessage}/>

            </Col>
        </Row>
    </Container>
    </Container>
  )
}

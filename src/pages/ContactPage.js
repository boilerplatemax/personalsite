import React,{useState} from 'react'
import Contact from '../components/Contact'
import {Container,Row,Col} from 'react-bootstrap'
import { FaGithub, FaLinkedin } from "react-icons/fa";

import contact from '../resources/images/contact.png'

export default function ContactPage() {
    const [message,setMessage]=useState('')
  return (
    <Container fluid>
    <Row>
        <Col className={`d-flex justify-content-center ${message.includes('fill')?'bg-danger':'bg-success'}`}>
            {message}
        </Col>
        </Row>

    <Container className='mt-5'>
        <Row>
            <Col md={{span:7}} className='d-flex float-end h-100 flex-column h-100 p-3'>
                <h2>Let's get in touch!</h2>
                <hr/>
                <div className='d-flex justify-content-between flex-row w-100'>

                <div>
                <p><a href="mailto:maxsdev@gmail.com" className='text-white'>maxsdev@gmail.com</a></p>

                <a href="https://github.com/boilerplatemax"
                target="_blank"
                rel="noopener noreferrer"
                className='text-white text-decoration-none'>
                    <p className='display-inline'>Github <FaGithub /></p>  
                </a>
                <a href="https://github.com/boilerplatemax"
                target="_blank"
                className='text-white text-decoration-none'
                rel="noopener noreferrer"
                >
                    <p className='display-inline'>LinkedIn <FaLinkedin /></p>  
                </a>
                </div>
                <div  className='w-50'>
                <img src={contact} alt='contact' className='w-100'/>
                </div>
                </div>
            </Col>
            <Col md={{span:5}} className='bg-dark rounded p-3 mb-3'>
                <h2>Contact</h2>
                <Contact setMessage={setMessage}/>

            </Col>
        </Row>
    </Container>
    </Container>
  )
}

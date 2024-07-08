import { faArrowLeft, faFontAwesome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import userpic from '../assets/key.png'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'

function Authenticate() {
  return (
    <>
    <Container fluid className='d-flex flex-column align-items-center justify-content-center' style={{height:'100vh'}}>
    <Link to="" style={{textDecoration:'none'}}>
    <p><FontAwesomeIcon icon={faArrowLeft} /> Back to Home</p>
    </Link>
   
      
      <Card  className='p-1 mt-3 rounded-3 w-75 bg-dark text-white'>
        <Row>
        <Col sm={12} md={6} className='p-5 d-flex justify-content-center align-items-center'>
          <img src={userpic} alt="" className='w-75'  />
        </Col>
        <Col sm={12} md={6} className='p-5 d-flex justify-content-center align-items-center flex-column'>
          <h3><FontAwesomeIcon icon={faStackOverflow} className=' fa-2x me-1'/> Project Fair</h3>
          <h5>Sign Up to Your Accrount</h5>
          <h5>Sign In to Your Account</h5>
          <form action="" className='mt-4 w-75'>
            <div className='mb-3'>
            <input type="text" placeholder='Username' className='form-control rounded-4' />
            </div>
            <div className='mb-3'>
            <input type="email" placeholder='Email' className='form-control rounded-4' />
            </div >
            <div >
            <input type="password" placeholder='Password' className='form-control rounded-4' />
            </div>
            <div className='mb-3'>
            <Button variant="warning" type="submit" className='w-75 my-2 rounded-5 mt-3'>Register</Button>
            <p>Already a User? Click here to  <Link to='/login' className='text-danger fs-4' style={{textDecoration:'none'}}>Login</Link></p>
            <Button variant="warning" type="submit" className='w-75 my-2 rounded-5'>Login</Button>
            <p>New User? Click here to <Link to='/register' className='text-danger fs-4' style={{textDecoration:'none'}}>Register</Link> </p>

            </div>
            
            
            
          </form>
        </Col>

        </Row>
       
    </Card>
    

    </Container>
    
    
    </>
  )
}

export default Authenticate
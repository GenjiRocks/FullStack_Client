import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap'

function PageNotFound() {
  return (
    <>
    <Row>
        <Col md={3}></Col>
        <Col md={6}>
        <div className='d-flex justify-content-center'>
    <img  src="/public/404-error.jpg" alt="" />
   </div></Col>
        <Col md={3}></Col>
    </Row>
    
   
    <div className='d-flex justify-content-center align-items-center'>
        <Link to={'/'}>
        <Button variant="outline-info rounded-4">Go to Home</Button>
        </Link>
    </div>
   
    
    </>
  )
}

export default PageNotFound
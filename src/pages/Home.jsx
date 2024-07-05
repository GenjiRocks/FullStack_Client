import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import titleimage from '../assets/idea.png'

function Home() {
  return (
    <>
    <Container fluid className='bg-primary' style={{height:'100vh'}}>
    <Row className='align-items-center p-3 p-md-5'>
        <Col xs={12} md={6} className='ps-5'>
        <p style={{fontSize:'70px',color:'white'}}>Project Fair</p>
        <p className='text-white mb-2' style={{fontSize:'30px'}}>One stop destination for all the software development Projects</p>
        <Button variant='info rounded-5 mt-3' className='me-4'>Get Started <FontAwesomeIcon icon={faArrowRight} /></Button>
        <Button variant='warning rounded-5 mt-3'>Manage Project <FontAwesomeIcon icon={faArrowRight} /></Button>
        
        </Col>
        <Col xs={12} md={6}>
            <img style={{color:'white',marginTop:'100px'}} src={titleimage} alt="" className='w-75' />
        </Col>
      </Row>
    </Container>
  
    
    </>
  )
}

export default Home
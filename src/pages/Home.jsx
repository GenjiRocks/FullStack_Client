import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import titleimage from '../assets/idea.png'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <Container fluid className='bg-primary' style={{height:'100vh'}}>
    <Row className='align-items-center p-3 p-md-5'>
        <Col xs={12} md={6} className='ps-5'>
        <p style={{fontSize:'70px',color:'white'}}>Project Fair</p>
        <p className='text-white mb-2' style={{fontSize:'30px'}}>One stop destination for all the software development Projects</p>
        <Link to="/login"><Button variant='info rounded-5 mt-3' className='me-4'>Get Started <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
        <Link to="/dashboard"><Button variant='warning rounded-5 mt-3'>Manage Project <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
        </Col>
        <Col xs={12} md={6}>
            <img style={{color:'white',marginTop:'100px'}} src={titleimage} alt="" className='w-75' />
        </Col>
      </Row>
    </Container>
  
    <Container fluid>
      <h1 className='mt-4 text-center'>Explore our Projects</h1>
      <Row>
        <Col md={4} className='p-4'>
          <ProjectCard/>
        </Col>
        <Col md={4} className='p-4'  >
          <ProjectCard/>
        </Col>
        <Col md={4} className='p-4'>
          <ProjectCard/>
        </Col>
      </Row>
      <Link to="/project" className='text-center' ><h5 className='text-danger fs-2'>See More Projects</h5></Link>
      
    </Container>
    
    </>
  )
}

export default Home
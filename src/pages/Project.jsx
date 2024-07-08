import React from 'react'
import Header from '../components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ProjectCard from '../components/ProjectCard';

function Project() {
  return (
    <>
    <Header/>
    <h1 className='text-center mt-5'>All Projects</h1>
    <Row>
      <Col md={4}></Col>
      <Col md={4}>
      <InputGroup className="mb-3 mt-3" >
        {/* <Button variant="outline-primary" id="button-addon1" className='rounded-5'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button> */}
        <InputGroup.Text style={{color:'white',backgroundColor:'black'}} className='rounded-start-5' id="basic-addon1"><FontAwesomeIcon icon={faMagnifyingGlass} /></InputGroup.Text>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="Technologies"
          className='rounded-end-5 ms-2'
          style={{fontSize:'20px',border:'solid black'}}
        />
      </InputGroup>
      </Col>
      <Col md={4}></Col>
    </Row>

    <Container fluid className='mt-4'>
      <Row>
        <Col md={4}>
          <ProjectCard/>
        </Col>
        <Col md={4}>
          
        </Col>
        <Col md={4}>
         
        </Col>
      </Row>
    
    </Container>
    

    <p className='text-center text-danger mt-5 fs-1' style={{fontWeight:'550'}}>No Project to Display</p>
    </>
  )
}

export default Project
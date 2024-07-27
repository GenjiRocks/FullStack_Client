import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { serverUrl } from '../services/serverUrl';







function ProjectCard({projects}) {

  // modal use states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(projects);



  return (
  

    <>

      <Card style={{ width: '100%' }} className='shadow rounded-4' onClick={handleShow}>
        <Card.Img variant="top"  className='rounded-4' src={`${serverUrl}/uploads/${projects.projImage}`} />
        <Card.Body>
          <Card.Title className='text-center'>{projects.title}</Card.Title>
        </Card.Body>
      </Card>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{projects.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <img src={`${serverUrl}/uploads/${projects.projImage}`}  alt=""  width={'100%'}/>
            </Col>
            <Col sm={12} md={6}>
              <p>{projects.overview}
              </p>
              <h4 className='mt-4'>Tehcnologies</h4>
              <p>{projects.language}
                </p>
            </Col>
          </Row>


        </Modal.Body>
        <Modal.Footer className=' justify-content-start'>
          <Link to={projects.github} target='_blank'><FontAwesomeIcon icon={faGithub} className='fa-2x' /></Link>
          <Link to={projects.website} target='_blank'><FontAwesomeIcon icon={faLink} className='fa-2x ms-4' /></Link>
        </Modal.Footer>
      </Modal>
     
   
    </>
  )
}

export default ProjectCard
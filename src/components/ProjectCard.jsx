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







function ProjectCard() {

  // modal use states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
  

    <>

      <Card style={{ width: '100%' }} className='shadow rounded-4' onClick={handleShow}>
        <Card.Img variant="top"  className='rounded-4' src="https://images.pexels.com/photos/15804651/pexels-photo-15804651/free-photo-of-people-together-on-motorcycle-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        <Card.Body>
          <Card.Title className='text-center'>Card Title</Card.Title>
        </Card.Body>
      </Card>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Media Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <img src="https://images.pexels.com/photos/15804651/pexels-photo-15804651/free-photo-of-people-together-on-motorcycle-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""  width={'100%'}/>
            </Col>
            <Col sm={12} md={6}>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio fugit nostrum amet ipsum quo iste, vero voluptas ea eum dolores nobis debitis odio magnam eligendi harum laudantium tenetur soluta cupiditate?
              </p>
              <h4 className='mt-4'>Tehcnologies</h4>
              <p>React, Redux, React Router, Node, Express, MongoDB, Mongoose
                </p>
            </Col>
          </Row>


        </Modal.Body>
        <Modal.Footer className=' justify-content-start'>
          <Link to=""><FontAwesomeIcon icon={faGithub} className='fa-2x' /></Link>
          <Link to=""><FontAwesomeIcon icon={faLink} className='fa-2x ms-4' /></Link>
        </Modal.Footer>
      </Modal>
     
   
    </>
  )
}

export default ProjectCard
import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AddProject() {

  // Modal use states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Button variant="success" onClick={handleShow}>Add Project</Button>

    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Add Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
            <label htmlFor="projImg">
              <input id='projImg' type="file" style={{display:'none'}} />
              <img  src="https://cdn-icons-png.freepik.com/512/338/338864.png" alt="" width={'100%'}/>
            </label>
            </Col>

            <Col sm={12} md={6}>
            <form className='p-3' action="">
              <div className='mb-3'>
                <input type="text" placeholder='Title' className='form-control' />
              </div>
              <div className='mb-3'>
              <input type="text" placeholder='Language' className='form-control' />
              </div>
              <div className='mb-3'>
              <input type="text" placeholder='Github' className='form-control' />
              </div>
              <div className='mb-3'>
              <input type="text" placeholder='Website' className='form-control' />
              </div>
              <div className='mb-3'>
                <textarea name="" id="" placeholder='Overview' className='form-control' rows={'4'}></textarea>
              </div>

            </form>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" className='rounded-5' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" className='rounded-5' onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProject
import React from 'react'
import Header from '../components/Header'
import MyProject from '../components/MyProject'
import {Col, Row} from 'react-bootstrap'
import Profile from '../components/Profile'

function Dashboard() {
  return (
    <>
    <Header dash={true}/>
    
    <h1>Welcome <span className='text-warning'> User</span></h1>
    <Row>
    <Col sm={12} md={8}>
      <MyProject/>
    </Col>

    <Col sm={12} md={4} className='px-5 mb-5'>
    <Profile/>
    </Col>
      
    </Row>

    
    </>
  )
}

export default Dashboard
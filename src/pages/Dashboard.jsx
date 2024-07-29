import React, { useEffect,useState } from 'react'
import Header from '../components/Header'
import MyProject from '../components/MyProject'
import {Col, Row} from 'react-bootstrap'
import Profile from '../components/Profile'

function Dashboard() {
  const [user, setUser] = useState();
  useEffect(() => {
    if(sessionStorage.getItem("existingUser")){
      setUser(JSON.parse(sessionStorage.getItem("existingUser")).username);
    }
  
    
  }, []);
  return (
    <>
    <Header dash={true}/>
    
    <h1>Welcome <span className='text-warning'> {user}</span></h1>
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
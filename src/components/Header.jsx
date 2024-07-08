import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-primary">
      <Container>
        <Link to='/' style={{textDecoration:'none'}}>
        <Navbar.Brand href="#home" className='text-light fs-4'> <FontAwesomeIcon icon={faStackOverflow} className=' fa-2x me-1'/> Projects</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header
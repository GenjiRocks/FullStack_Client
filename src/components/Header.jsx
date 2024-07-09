import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { faPowerOff} from '@fortawesome/free-solid-svg-icons';


function Header({dash}) { /* dash is to send arg to dashboard for logout rendering */
  return (
    <>
      <Navbar expand="lg" className="bg-primary">
      <Container>
        <Link to='/' style={{textDecoration:'none'}}>
        <Navbar.Brand href="#home" className='text-light fs-4'> <FontAwesomeIcon icon={faStackOverflow} className=' fa-2x me-1'/> Projects</Navbar.Brand>
        </Link>
        {/* Create a logout button to conditionally render */}
        {
          dash && <Button variant="warning" className='rounded-5 fs-5'><FontAwesomeIcon icon={faPowerOff} size='xl' className='me-2' />Logout</Button>
        }
        
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header
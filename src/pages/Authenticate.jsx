import { faArrowLeft, faFontAwesome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import userpic from '../assets/key.png'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { loginApi, registerApi } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Authenticate({register}) {
  // giving path after signing up
  const navigate = useNavigate()

  // usestate for getting the input content
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: '',
  });

  console.log(userDetails);

  // Register button api call
  const handleRegister= async()=>{
    const {username,email,password} = userDetails
    // Check if input boxes are filled
    if(!username || !email ||!password){
      toast.info('Please fill all the fields')
    }else{
      // Call the register api
      const response = await registerApi(userDetails)
      if(response.stats==200){
        toast.success('User registered successfully')
        navigate('/login')
      }
    }
  }

  // Login button api call
  const handleLogin= async()=>{
    const {email,password} = userDetails
    // Check if input boxes are filled
    if(!email || !password){
      toast.info('Please fill all the fields')
      }else{
        // Call the login api
        const response = await loginApi({email,password}) /* {email,passwor} */
        if(response.status == 200){
          toast.success('Login Successful')
          sessionStorage.setItem("existingUser",JSON.stringify(response.data.exsistingUser))
          sessionStorage.setItem("token",response.data.token)
          setTimeout(() => {
            navigate('/')
          }, 2000);
         
        }
        else{
          toast.error(response.response.data)
        }
        console.log(response);
      }
  }

  return (
    <>
    <Container fluid className='d-flex flex-column align-items-center justify-content-center' style={{height:'100vh'}}>
    <Link to="/" style={{textDecoration:'none'}}>
    <p className='fs-3'><FontAwesomeIcon icon={faArrowLeft} /> Back to Home</p>
    </Link>
   
      
      <Card  className='p-1 mt-3 rounded-3 w-75 bg-dark text-white'>
        <Row>
        <Col sm={12} md={6} className='p-5 d-flex justify-content-center align-items-center'>
          <img src={userpic} alt="" className='w-75'  />
        </Col>
        <Col sm={12} md={6} className='p-5 d-flex justify-content-center align-items-center flex-column'>
          <h3><FontAwesomeIcon icon={faStackOverflow} className=' fa-2x me-1'/> Project Fair</h3>
          {register?<h5>Sign Up to Your Accrount</h5> :
          <h5>Sign In to Your Account</h5>}
          <form action="" className='mt-4 w-75'>
            {register && <div className='mb-3'>
            <input type="text" placeholder='Username' className='form-control rounded-4' onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} />
            </div>}
            <div className='mb-3'>
            <input type="email" placeholder='Email' className='form-control rounded-4' onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})} />
            </div >
            <div >
            <input type="password" placeholder='Password' className='form-control rounded-4' onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} />
            </div>
            <div className='mb-3'>

          {register? <div>
              <Button variant="warning" type="button" className='w-75 my-2 rounded-5 mt-3' onClick={handleRegister}>Register</Button>
              <p>Already a User? Click here to  <Link to='/login' className='text-danger fs-4' style={{textDecoration:'none'}}>Login</Link></p>
           </div>
           :
            <div>
              <Button variant="warning" type="button" className='w-75 my-2 rounded-5' onClick={handleLogin}>Login</Button>
              <p>New User? Click here to <Link to='/register' className='text-danger fs-4' style={{textDecoration:'none'}}>Register</Link> </p>
            </div>}

            </div>
            
            
            
          </form>
        </Col>

        </Row>
       
    </Card>
    

    </Container>
    <ToastContainer theme='colored' position='top-center' autoClose = '2000' />
    
    </>
  )
}

export default Authenticate
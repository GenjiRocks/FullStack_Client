import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ProjectCard from '../components/ProjectCard';
import { getAllProjectApi } from '../services/allApi';
import { Link } from 'react-router-dom';

function Project() {
  // usestate for getting token from session storage
  const [istoken, setIsToken] = useState('')
  const [allProject, setAllProject] = useState([])
  const [searchKey, setSearchKey] = useState('')

  // calling api to get all projects
  const getallProject = async ()=>{
    if(sessionStorage.getItem("token")){
      const token =sessionStorage.getItem("token")

      const reqHeader = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      }
      const result = await getAllProjectApi(searchKey,reqHeader)
      if(result.status === 200){
        setAllProject(result.data)
        // console.log(result)
        }
      
    }
   
  }

  console.log(allProject);
  

  // useeffect for getting the sessionstorage token
  useEffect(() => {
    const storedToken = sessionStorage.getItem('token')
    if (storedToken) {
      setIsToken(storedToken)
    }
   
    }, [])

  useEffect(()=>{
    getallProject()
  },[searchKey])

  return (
    <>
    <Header/>
    <h1 className='text-center mt-5 mb-5'>Projects</h1>

  {istoken? <div>
   <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4 d-flex">
        <input type="text" placeholder='technologies' onChange={(e)=>{setSearchKey(e.target.value)}} className='form-control' style={{marginTop:'-15px',marginRight:'-30px'}} />
        <FontAwesomeIcon icon={faMagnifyingGlass} flip='horizontal' className='text-secondary'/>
        
        
      </div>
      <div className="col-md-4"></div>
    </div>

    {allProject?.length>0?<div className='container-fluid mt-5'>
      <div className="row">
        {allProject?.map((item)=>(<div className="col-md-4">
           <ProjectCard  projects={item}/> 
        </div>))}
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </div>
    </div>
:   
    <p className='text-center text-danger mt-5 fs-4'>No Project to display</p>}

   </div>
    
    :
     <div className="row w-100 d-flex justify-content-center align-items-center ">
      <div className="col-md-2">
        <div className="col-md-8 d-flex justify-content-center align-items-center flex-column">
          <img src="" alt="no image" width={'100%'} height={'400px'} />
          <h4>Login to explore more Projects</h4>
        </div>
      <div className="col-md-2"></div>
      </div>

     </div>
    }

    </>
  )
}

export default Project
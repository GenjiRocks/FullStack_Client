import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectApi } from '../services/allApi';
import { addResponseContext } from '../context/DataShare';


function AddProject() {

  // Modal use states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
          setShow(true);
          handleCancel()
  }
  // usestate for source of image
  const [preview, setpreview] = useState('');

  // usestate for storing token
  const [token, settoken] = useState('');

  // usestate for the key component in input
  const [key, setkey] = useState(0);

  // for accessing context api 29/07 || where data is updated call the function setAddResponse || Assign the result into setAddResponse
  const {setAddResponse} = useContext (addResponseContext)
 
  const [projectDetails, setprojectDetails] = useState({
    title:'',
    language:'',
    github:'',
    website:'',
    overview:'',
    projectImage:''
  });
  console.log(projectDetails);

  // Function to add image
  const handleFile = (e)=>{
    // console.log(e);
    // console.log(e.target.files[0]);
    setprojectDetails({...projectDetails,projectImage:e.target.files[0]})
  }

  // Function to cancel details
  const handleCancel = () => {
    setprojectDetails({
      title:'',
      language:'',
      github:'',
      website:'',
      overview:'',
      projectImage:''
      });
      setpreview('')
      if(key==0){
        setkey(1)
      }else{
        setkey(0)
      }
  }

   // Useeffect to convert image into URL
  useEffect(() => {
    if(projectDetails.projectImage){
      // createObject - method is used to convert files into URL
      //  console.log(URL.createObjectURL(projectDetails.projectImage));
      setpreview(URL.createObjectURL(projectDetails.projectImage));
    }
  }, [projectDetails.projectImage]);

// Useeffect to get token while on page load
useEffect(() => {
  
  if(sessionStorage.getItem('token')){
    settoken(sessionStorage.getItem('token'))
  }
}, []);
// console.log(token);


  // Add funtion and also alert if inputs fields are empty
  const handleAdd = async (e)=> {
    e.preventDefault();
    const {title,language,github,website,overview,projectImage} = projectDetails
    if(!title || !language || !github || !website || !overview || !projectImage){
      toast.info('Please fill all the fields')
    }
    else{
      // api call
      // Inorder to send uploaded content - use formData
      const reqBody = new FormData()
      reqBody.append('title',title)
      reqBody.append('language',language)
      reqBody.append('github',github)
      reqBody.append('website',website)
      reqBody.append('overview',overview)
      reqBody.append('projectImage',projectImage)
      
      if(token){
        const reqHeader = {
          "Content-Type" : "multipart/form-data",
          "Authorization" : `Bearer ${token}`
        }

        const result = await addProjectApi(reqBody,reqHeader)
        console.log(result);
        if(result.status == 200){
          toast.success('Project Added Successfully')
          handleClose()
          // here is where data is being changed so call context here
          setAddResponse(result.data)
        }
      }
      else{
        toast.error('Please login to add project details')
      }
      
    }

  } 
  
  
  return (
    <>
    <div className='ms-auto'>
    <Button variant="success" onClick={handleShow}>Add Project</Button>

<Modal show={show} onHide={handleClose} size='lg'>
    <Modal.Header closeButton>
      <Modal.Title className='text-warning'>Add Project Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Row>
        <Col sm={12} md={6}>
        <label htmlFor="projImg" >
          <input id='projImg' type="file" style={{display:'none'}} key={key}  onChange={(e)=>handleFile(e)} /> {/* key as the potential to call onchange event */}
          <img  src={preview?preview : "https://cdn-icons-png.freepik.com/512/338/338864.png"} alt="" width={'100%'}/>
        </label>
        </Col>

        <Col sm={12} md={6}>
        <form className='p-3' action="">
          <div className='mb-3'>
            <input type="text" value={projectDetails.title} placeholder='Title' className='form-control' onChange={(e)=>setprojectDetails({...projectDetails,title:e.target.value})} />
          </div>
          <div className='mb-3'>
          <input type="text" placeholder='Language' value={projectDetails.language} className='form-control' onChange={(e)=>setprojectDetails({...projectDetails,language:e.target.value})} />
          </div>
          <div className='mb-3'>
          <input type="text" placeholder='Github' value={projectDetails.github} className='form-control' onChange={(e)=>setprojectDetails({...projectDetails,github:e.target.value})} />
          </div>
          <div className='mb-3'>
          <input type="text" placeholder='Website' value={projectDetails.website} className='form-control' onChange={(e)=>setprojectDetails({...projectDetails,website:e.target.value})} />
          </div>
          <div className='mb-3'>
            <textarea name="" id="" placeholder='Overview' value={projectDetails.overview} className='form-control' rows={'4'} onChange={(e)=>setprojectDetails({...projectDetails,overview:e.target.value})}></textarea> 
          </div>

        </form>
        </Col>
      </Row>

    </Modal.Body>
    <Modal.Footer>
      <Button variant="warning" className='rounded-5' onClick={handleCancel}>
        Cancel
      </Button>
      <Button variant="success" className='rounded-5' onClick={handleAdd}>
        Add
      </Button>
    </Modal.Footer>
   
  </Modal>
  <ToastContainer theme='colored' position='top-center' autoClose = '2000' />
    </div>
   
      
     
    </>
  )
}

export default AddProject
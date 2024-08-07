import React, { useContext, useEffect, useState } from 'react'
import AddProject from '../components/AddProject'
import EditProject from '../components/EditProject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { deleteProjectApi, userProjectApi } from '../services/allApi'
import { addResponseContext } from '../context/DataShare'
import { Link } from 'react-router-dom'

function MyProject() {

  // call the variable addResponse here
  const {addResponse} = useContext(addResponseContext)
  // usestate for delete screen refresh
  const [deleteStatus, setDeleteStatus] = useState(false)

  const [userProjects, setuserProjects] = useState([])
  // get api call
  const getUserProject = async ()=>{
    // access the token also
    if(sessionStorage.getItem('token')){
      const token = sessionStorage.getItem('token')
      const reqHeader={
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await userProjectApi(reqHeader)
      setuserProjects(result.data)
    }
    
  }
  console.log(userProjects);

  // Deleting project
  const handleDelete = async(id)=>{
    const result = await deleteProjectApi(id)
    console.log(result);
    if(result.status === 200){
      setDeleteStatus(true)
    }
    
  }


  useEffect(() => {
    getUserProject()
    setDeleteStatus(false)
  }, [addResponse,deleteStatus]);

  
  return (
   <>
   <div className='shadow px-3 py-3 rounded'>
    <div className='d-flex justify-content-between'>
    <h4 className='text-success'>My Project</h4>
    <AddProject/>
    </div>
   {userProjects?.length>0?userProjects.map((item)=>(
      <div className='mt-4 bg-light p-3 rounded d-flex justify-content-between'>
      <h5>{item.title}</h5>

      <div className='d-flex align-items-center'>
        <EditProject project={item}/>
        <Link to={item.website} target='_blank'>
        <FontAwesomeIcon icon={faGlobe} className='text-warning ms-3'/>
        </Link>
        <Link to={item.github} target='_blank'>
        <FontAwesomeIcon icon={faGithub} className='text-primary ms-3'  />
        </Link>
        
        <FontAwesomeIcon icon={faTrash} onClick={()=>handleDelete(item?._id)}  className='text-danger ms-3 me-5' />
      </div>
    </div>
   )):
   <p>No Project to display</p>
  }
    


   </div>

  
   </>
  )
}

export default MyProject
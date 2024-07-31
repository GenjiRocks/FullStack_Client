import { faChevronDown,faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Collapse } from 'react-bootstrap';
import { serverUrl } from '../services/serverUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProfileApi } from '../services/allApi';

function Profile() {

  // Collapse state
  const [open, setOpen] = useState(false);
  // state for getting the data
  const [userDetails, setUserDetails] = useState({
    username:"",
    email:"",
    password:"",
    github:"",
    linkedin:"",
    profile:""
  });

  // profile will be stored as a seperate variable

  const [existingImage, setExistingImage] = useState("");
  const [preview, setpreview] = useState();

  const[editStatus,setEditStatus] = useState(false)

  const handleProfileFile = (e)=>{
    e.preventDefault();
    setUserDetails({...userDetails, profile:e.target.files[0]})
  }

  // get the data from exisitingUser from session storage in useeffect
  useEffect(() => {
    if(sessionStorage.getItem('existingUser')){
      const user = JSON.parse(sessionStorage.getItem('existingUser'));
      setUserDetails({...userDetails,
        username: user.username,
        email: user.email,
        password: user.password,
        github: user.github,
        linkedin: user.linkedin,
      })
      setExistingImage(user.profile);
    }
    setEditStatus(false)
  },[editStatus])

  // use effect to convert image into url
  useEffect(() => {
    if(userDetails.profile){
      setpreview(URL.createObjectURL(userDetails.profile))
    }else{
      setpreview("");
    }
  },[userDetails.profile])

  const handleProfileUpdate = async()=>{
    const{username, email,password, github ,linkedin, profile} = userDetails
    if(!username || !email || !password ||!github ||!linkedin){
      toast.info("Please fill the the input fields")
    }else{
      const reqBody = new FormData()
      reqBody.append("username",username)
      reqBody.append("email",email)
      reqBody.append("password",password)
      reqBody.append("github",github)
      reqBody.append("linkedin",linkedin)
      profile?reqBody.append("profile",profile):reqBody.append("profile",existingImage)
      
      // get the token from sessionstorage
      const token = sessionStorage.getItem("token");

      if (preview) {
        /* if there is new image is uploaded */
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        };
        const result = await editProfileApi(reqBody,reqHeader)
        console.log(result);
        if(result.status == 200){
          toast.success("Profile updated successfully")
          // storing new data to sessionstorage
          sessionStorage.setItem("existingUser",JSON.stringify(result.data))
          setEditStatus(true)
        }else{
          toast.error("Failed to update profile")
        }

    }else{
      /* if there is no new image is uploaded */
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        };
        const result = await editProfileApi(reqBody,reqHeader)
        console.log(result);
        if(result.status === 200){
          toast.success("Profile updated successfully")
          // storing new data to sessionstorage
          sessionStorage.setItem("existingUser",JSON.stringify(result.data))
          setEditStatus(true)
        }else{
          toast.error("Failed to update profile")
        }
    }

  }
}

  return (
    <>

      {/* OnMouseEnter for hover */}
    <div className="container container-fluid shadow rounded text-center" onMouseEnter={()=>setOpen(true)} /* onMouseLeave={()=>setOpen(false)} */>
     <div className="pDiv py-3 d-flex justify-content-between">
     <h3  className='text-warning ps-3 mt-2'>Profile</h3>
     <button  onClick={() => setOpen(!open)}
         className='btn btn-outline-info rounded-5'>
          {
            !open? <FontAwesomeIcon icon={faChevronDown}  />
            :
            <FontAwesomeIcon icon={faChevronUp}  />
          }
          
      </button>
     </div>

     
     <Collapse in={open}>
     <div>
        <div className='d-flex justify-content-center align-items-center flex-column'>
            <label htmlFor="profileImg">
               <input id='profileImg' type="file" style={{display:'none'}} onChange={(e)=>handleProfileFile(e)} />
               {existingImage==""?
               <img src={preview?preview:"https://img.freepik.com/premium-vector/user-profile-login-access-authentication-icon_690577-203.jpg"}  alt="no image" className='rounded-5 w-50 ' />

               :

               <img src={preview?preview:`${serverUrl}/uploads/${existingImage}`}  alt="no image" className='rounded-5 w-50 ' />

               }
               
            </label>
          </div>
          <div className='px-3'>
              <input type="text" placeholder='Github' className='form-control my-3 rounded-5' value={userDetails.github} onChange={(e)=>{setUserDetails({...userDetails,github:e.target.value})}} />
              <input type="text" placeholder='LinkedIn' className='form-control my-3 rounded-5' value={userDetails.linkedin} onChange={(e)=>{setUserDetails({...userDetails,linkedin:e.target.value})}} />
          </div>

          <div className="btnDiv">
             <button className="btn btn-outline-success w-75 rounded-5 mb-3" type='button' onClick={handleProfileUpdate}>Update</button>
          </div>
     </div>
   
     </Collapse>
      
     
    </div>
    <ToastContainer theme='colored' position='top-center' autoClose = '2000' />
    </>
  )
}

export default Profile
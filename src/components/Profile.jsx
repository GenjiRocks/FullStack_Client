import { faChevronDown,faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Collapse } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Profile() {

  // Collapse state
  const [open, setOpen] = useState(false);

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
               <input id='profileImg' type="file" style={{display:'none'}} />
               <img src="https://img.freepik.com/premium-vector/user-profile-login-access-authentication-icon_690577-203.jpg"  alt="no image" className='rounded-5 w-50 ' />
            </label>
          </div>
          <div className='px-3'>
              <input type="text" placeholder='Github' className='form-control my-3 rounded-5' />
              <input type="text" placeholder='LinkedIn' className='form-control my-3 rounded-5' />
          </div>

          <div className="btnDiv">
             <button className="btn btn-outline-success w-75 rounded-5 mb-3">Update</button>
          </div>
     </div>
   
     </Collapse>
      
     
    </div>
    </>
  )
}

export default Profile
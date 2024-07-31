import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"


// register Api call
export const registerApi = async (reqBody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqBody,"")
}

// login Api call
export const loginApi = async (reqBody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqBody,"")
}

// Api to add details with reqbody and reqheader as multiport
export const addProjectApi = async (reqBody,reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/addproject`,reqBody,reqHeader)
    }

// get api for home project
export const homeProjectApi = async()=>{
    return await commonApi('GET',`${serverUrl}/homeproject`,"","")
}

// api for getting all projects
export const getAllProjectApi = async (searchKey,reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/allprojects?search=${searchKey}`,"",reqHeader)
}

// api for user project
export const userProjectApi = async (reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/userproject`,"",reqHeader)
}

// api for deleting the project using project id
export const deleteProjectApi = async (id)=>{
    return await commonApi('DELETE',`${serverUrl}/delete/${id}`,{},"")
}

// api for editing the project
export const editProjectApi = async (projectid,reqBody,reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/edit-project/${projectid}`,reqBody,reqHeader)
    }

// editing profile
export const editProfileApi = async (reqBody,reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/edit-profile`,reqBody,reqHeader)
}
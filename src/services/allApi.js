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
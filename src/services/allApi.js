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